import React from "react";

const PublicationDate = () => {
  return (
    <form>
      <h6>Publication date</h6>
      <select name="publicationDate">
        <option value="24h">Last Day</option>
        <option value="1week" selected>
          Last Week
        </option>
        <option value="ever">Since Ever</option>
      </select>
    </form>
  );
};

export default PublicationDate;
