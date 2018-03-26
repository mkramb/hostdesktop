import React from 'react';
import { List, ListItem } from 'material-ui/List';

function convertToSlug(content) {
    return content
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'');
}

const Applications = ({ items }) => (
  <List>
  { items.map(({ title }) => (
    <ListItem
      key={convertToSlug(title)}
      primaryText={title}
    />
  )) }
  </List>
);

export {
  Applications
};
