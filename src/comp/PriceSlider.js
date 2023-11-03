import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './PriceSlider.css';

const PriceSlider = ({ minPrice, maxPrice, onChange }) => {
  const [value, setValue] = useState([minPrice, maxPrice]);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="price-slider">
      <Slider range min={minPrice} max={maxPrice} value={value} onChange={handleSliderChange} />
      <span>Price Range: ${value[0]} - ${value[1]}</span>
    </div>
  );
};

export default PriceSlider;