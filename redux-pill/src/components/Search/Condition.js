import React from "react";

const Condition = () => {
  return (
    <form>
      <h6>Condition</h6>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="newhome"
          value="newhome"
          name="condition"
        />
        <label class="form-check-label" for="newhome">
          New homes
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="goodCondition"
          value="goodCondition"
          name="condition"
        />
        <label class="form-check-label" for="goodCondition">
          Good Condition
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="needsRenovation"
          value="needsRenovation"
          name="condition"
        />
        <label class="form-check-label" for="needsRenovation">
          Needs Renovation
        </label>
      </div>
    </form>
  );
};

export default Condition;
