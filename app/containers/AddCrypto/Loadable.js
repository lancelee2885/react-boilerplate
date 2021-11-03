/**
 *
 * Asynchronously loads the component for AddCrypto
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
