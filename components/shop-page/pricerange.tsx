"use client"; // ensure client component

import { useState } from "react";
import { Range } from "react-range";

const PRICE_MIN = 0;
const PRICE_MAX = 1000;
const STEP = 1;

export default function PriceRange() {
  const [values, setValues] = useState([200, 800]);

  return (
    <div className="w-full px-4 py-6">
      <Range
        step={STEP}
        min={PRICE_MIN}
        max={PRICE_MAX}
        values={values}
        onChange={(vals) => setValues(vals)}
        renderTrack={({ props, children }) => {
          const { key, ...rest } = props; // remove key from spread
          return (
            <div
              key={key} // pass key directly
              {...rest} // spread remaining props
              className="h-2 w-full bg-gray-300 rounded-full relative"
            >
              <div
                className="absolute h-2 bg-black rounded-full"
                style={{
                  left: `${((values[0] - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}%`,
                  width: `${((values[1] - values[0]) / (PRICE_MAX - PRICE_MIN)) * 100}%`,
                }}
              />
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => {
          const { key, ...rest } = props; // remove key from spread
          return (
            <div
              key={key} // pass key directly
              {...rest} // spread other props
              className="h-5 w-5 bg-black rounded-full cursor-pointer flex items-center justify-center"
            />
          );
        }}
      />
      <div className="mt-4 flex justify-between text-sm text-gray-700">
        <span>${values[0]}</span>
        <span>${values[1]}</span>
      </div>
    </div>
  );
}
