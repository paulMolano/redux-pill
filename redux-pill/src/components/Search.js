import React from "react";
import Bathrooms from "./Search/Bathrooms";
import Bedrooms from "./Search/Bedrooms";
import Condition from "./Search/Condition";
import Equipment from "./Search/Equipment";
import MoreFilters from "./Search/MoreFilters";
import PriceRange from "./Search/PriceRange";
import PublicationDate from "./Search/PublicationDate";
import TypeOfHome from "./Search/TypeOfHome";

const Search = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-3">
            <TypeOfHome />
          </div>
          <div className="col-3">
            <Condition />
          </div>

          <div className="col-3">
            <Bedrooms />
          </div>

          <div className="col-3">
            <Bathrooms />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3">
            <PriceRange />
          </div>
          <div className="col-3">
            <PublicationDate />
          </div>
          <div className="col-3">
            <Equipment />
          </div>
          <div className="col-3">
            <MoreFilters />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
