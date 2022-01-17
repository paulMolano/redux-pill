import React from 'react'

const MoreFilters = () => {
    return (

        <form>
        <h6>More Filters</h6>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="Garden"
            value="Garden"
            name="moreFilters"
          />
          <label class="form-check-label" for="Garden">
            Garden
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="airConditioning"
            value="airConditioning"
            name="moreFilters"
          />
          <label class="form-check-label" for="airConditioning">
            Air Conditioning
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="terrace"
            value="terrace"
            name="moreFilters"
          />
          <label class="form-check-label" for="terrace">
            Terrace
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="pet"
            value="pet"
            name="moreFilters"
          />
          <label class="form-check-label" for="pet">
            Pets allowed
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="swimmingpool"
            value="swimmingpool"
            name="moreFilters"
          />
          <label class="form-check-label" for="swimmingpool">
            Swimming Pool
          </label>
        </div>
      </form>
    )
}

export default MoreFilters
