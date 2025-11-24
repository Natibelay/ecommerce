// A mobile sidebar (or mobile filters sidebar) is a slide-out panel or overlay that appears only on small screens (like phones) to let users filter products.
import React from "react"; // Import React library to use JSX and define a component

// Define and export the MobileFilters component
export default function MobileFilters() {
  return (

    <div className="md:hidden text-gray-500 text-sm">
      
      <button className="px-4 py-2 border border-gray-300 rounded-md">
        {/* Button text */}
        Filters
      </button>
      
    </div> // End of container div
  );
}
