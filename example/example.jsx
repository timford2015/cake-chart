import CakeChart from '../src/components/CakeChart';
import ReactDOM from 'react-dom';
import React from 'react';

const foo = () => {};

const TREE = {
  value: 100,
  label: 'SUM = 100',
  children: [{
    label: '50',
    value: 50,
    children: [{
      label: '10',
      value: 10,
      children: []
    },
    {
      label: '20',
      value: 20,
      children: []
    }]
  }, {
    label: '30',
    value: 30,
    children: []
  }, {
    label: '19',
    value: 19,
    children: []
  }, {
    label: '1',
    value: 1,
    children: []
  }]
};

ReactDOM.render(<CakeChart data={TREE} coreRadius={200} ringWidth={100}/>, document.getElementById('chart'));
