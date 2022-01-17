import React from "react";

const PriceRange = () => {
  return (
    <form>
      <h6>Price Range</h6>

      <div class="form-check form-check-inline">
        <input
          type="range"
          id="price"
          name="price"
          min="0"
          max="1000000"
          step="10000"
        />
      </div>
    </form>
  );
};

export default PriceRange;
