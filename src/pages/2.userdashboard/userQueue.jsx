<ListItem>
  <ListItemText primary={item.content} />
  <ListItemSecondaryAction>
    {/* Action buttons (in this case, up and down arrows) */}
    <IconButton edge="end" aria-label="move up" disabled={index === 0} onClick={() => moveUp(index)}>
      <ArrowUpward />
    </IconButton>
    <IconButton edge="end" aria-label="move down" disabled={index === items.length - 1} onClick={() => moveDown(index)}>
      <ArrowDownward />
    </IconButton>
  </ListItemSecondaryAction>
</ListItem>


import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';

function ListComponent({ items }) {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const moveUp = (index) => {
    // Logic to move the item up
  };

  const moveDown = (index) => {
    // Logic to move the item down
  };

  return (
    <List>
      {items.map((item, index) => (
        <ListItem
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnd={handleDragEnd}
          style={{ border: draggedIndex === index ? '2px dashed #000' : 'none' }}
        >
          <ListItemText primary={item.content} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="move up" disabled={index === 0} onClick={() => moveUp(index)}>
              <ArrowUpward />
            </IconButton>
            <IconButton edge="end" aria-label="move down" disabled={index === items.length - 1} onClick={() => moveDown(index)}>
              <ArrowDownward />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default ListComponent;