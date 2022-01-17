import React from 'react'

const Bathrooms = () => {
    return (
        <form>
        <h6>Bathrooms</h6>
        
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="b1"
            value="1"
            name="bathrooms"
          />
          <label class="form-check-label" for="1">
            1
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="b2"
            value="2"
            name="bathrooms"
          />
          <label class="form-check-label" for="2">
            2
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="b3"
            value="3"
            name="bathrooms"
          />
          <label class="form-check-label" for="3">
            3/+
          </label>
        </div>
      </form>
    )
}

export default Bathrooms
