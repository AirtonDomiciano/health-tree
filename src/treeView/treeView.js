// src/TreeView.js
import React from 'react';
import { Treebeard } from 'react-treebeard';

const TreeView = ({ data }) => {
  return (
    <Treebeard
      data={data}
      onToggle={node => console.log(node)}
    />
  );
};

export default TreeView;