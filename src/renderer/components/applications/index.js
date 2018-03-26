import React from 'react';
import { List, ListItem } from 'material-ui/List';
import AppIcon from 'material-ui/svg-icons/action/launch';

function convertToKey(content) {
  return content
      .toLowerCase()
      .replace(/ /g,'-')
      .replace(/[^\w-]+/g,'');
}

const Applications = ({ items }) => (
  <List>
  { items.map(({ title }) => (
    <ListItem
      key={convertToKey(title)}
      primaryText={title}
      leftIcon={<AppIcon />}
    />
  )) }
  </List>
);

export {
  Applications
};
