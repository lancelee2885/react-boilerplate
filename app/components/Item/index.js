import React from 'react';
import PropTypes from 'prop-types';
import { ItemsCard, ItemsIcon, ItemsH2, ItemsP } from './ItemsElements';

/** Item: Item card
 *
 * An item card displaying information about a specific item.
 *
 * Props:
 *  - name
 *  - description
 *  - imgURL
 */
function Item({ name, description, imgURL }) {
  return (
    <ItemsCard>
      <ItemsIcon src={imgURL} />
      <ItemsH2>{name}</ItemsH2>
      <ItemsP>{description}</ItemsP>
    </ItemsCard>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imgURL: PropTypes.string,
};

export default Item;
