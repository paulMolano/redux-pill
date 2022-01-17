import React from "react";

const Equipment = () => {
  return (
    <form>
      <h6>Equipment</h6>
      <select name="equipment">
        <option value="free" selected>
          Free
        </option>
        <option value="onlyKitchen">Only Kitchen</option>
        <option value="furnished">Furnished</option>
      </select>
    </form>
  );
};

export default Equipment;
