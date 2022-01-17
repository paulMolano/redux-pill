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
      <TypeOfHome />
      <Condition />
      <Bedrooms />
      <Bathrooms />
      <PriceRange />
      <PublicationDate />
      <Equipment />
      <MoreFilters />
    </>
  );
};

export default Search;
