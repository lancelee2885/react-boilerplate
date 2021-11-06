/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();
const cryptocurrency = require('./crypto');

const jsonschema = require('jsonschema');
const newCryptoSchema = require('./schemas/newCrypto.json');
const { BadRequestError, NotFoundError } = require('./helpers/ExpressErrors');

const storedCryptocurrencyList = [...cryptocurrency];
// JSON Body Parser
app.use(express.json());

// If you need a backend, e.g. an API, add your custom backend-specific middleware here

app.get('/api', (req, res) =>
  res.json({ cryptocurrency: storedCryptocurrencyList }),
);

app.post('/api', (req, res, next) => {
  try {
    const validator = jsonschema.validate(req.body, newCryptoSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => {
        const violation = e.name;
        const errMessage = e.schema.message[violation];
        return errMessage;
      });
      throw new BadRequestError(errs);
    }
    storedCryptocurrencyList.push(req.body);
    return res.status(201).send(`added`);
  } catch (err) {
    return next(err);
  }
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});

/** Handle 404 errors -- this matches everything */
app.use((req, res, next) => next(new NotFoundError()));

/** Generic error handler; anything unhandled goes here. */
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  const status = err.status || 500;
  const { message } = err;

  return res.status(status).json({
    error: { message, status },
  });
});
