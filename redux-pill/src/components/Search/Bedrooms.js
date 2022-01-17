import React from "react";

const Bedrooms = () => {
  return (
    <form>
      <h6>Bedrooms</h6>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="0"
          value="0"
          name="bedrooms"
        />
        <label class="form-check-label" for="0">
          0
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="1"
          value="1"
          name="bedrooms"
        />
        <label class="form-check-label" for="1">
          1
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="2"
          value="2"
          name="bedrooms"
        />
        <label class="form-check-label" for="2">
          2
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="3"
          value="3"
          name="bedrooms"
        />
        <label class="form-check-label" for="3">
          3
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="4"
          value="4"
          name="bedrooms"
        />
        <label class="form-check-label" for="4">
          4/+
        </label>
      </div>
    </form>
  );
};

export default Bedrooms;
