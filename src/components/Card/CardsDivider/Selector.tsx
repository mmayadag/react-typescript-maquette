import React, { FC } from 'react';
import Select from 'react-select';

const Options = [
    { label: "value0", value: 0 },
    { label: "value1", value: 1 },
    { label: "value2", value: 2 },
    { label: "value3", value: 3 },
    { label: "value4", value: 4 },
    { label: "value5", value: 5 },
];

const Selector : FC = () => (
  <Select options={Options} className="selector" />
)

export default Selector;