import React from 'react';
import { List, ListItem } from 'material-ui/List';

const Applications = ({ items }) => (
  <List>
   { items.map(({ title }) => (
     <ListItem primaryText={title} />
    )) }
  </List>
);

export {
  Applications
};
