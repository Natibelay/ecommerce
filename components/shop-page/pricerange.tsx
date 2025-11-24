"use client";

import React from "react";
import { Range, getTrackBackground } from "react-range";

interface PriceSectionProps {
  values: number[];
  onChange: (values: number[]) => void;
  min?: number;
  max?: number;
}

const PriceSection: React.FC<PriceSectionProps> = ({
  values,
  onChange,
  min = 0,
  max = 250,
}) => {
  return (
    <div className="mb-5">
      <h3 className="text-black font-bold text-xl mb-3">Price</h3>

      <Range
        values={values}
        step={1}
        min={min}
        max={max}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 w-full rounded-full"
            style={{
              ...props.style,
              background: getTrackBackground({
                values,
                colors: ["#ddd", "#000", "#ddd"],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-5 w-5 bg-black rounded-full cursor-pointer"
          />
        )}
      />

      <div className="flex justify-between mt-2 text-gray-600 text-sm">
        <span>${values[0]}</span>
        <span>${values[1]}</span>
      </div>
    </div>
  );
};

export default PriceSection;
