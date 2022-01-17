import React from "react";

const TypeOfHome = () => {
  return (
    <form>
      <h6>Type of home</h6>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="flat"
          value="flat"
          name="typeOfHome"
        />
        <label class="form-check-label" for="flat">
          Flat/Apartament
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="duplex"
          value="duplex"
          name="typeOfHome"
        />
        <label class="form-check-label" for="duplex">
          Duplex
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="house"
          value="house"
          name="typeOfHome"
        />
        <label class="form-check-label" for="house">
          House
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="penthouse"
          value="penthouse"
          name="typeOfHome"
        />
        <label class="form-check-label" for="penthouse">
          Penthouse
        </label>
      </div>
    </form>
  );
};

export default TypeOfHome;
