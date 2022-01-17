import React from "react";

const Principal = () => {
  return (
    <>
      <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark principalHome">
        <div className="container-fluid">
          <div className="row  justify-content-center align-items-center d-flex text-center h-100">
            <div className="col-12 col-md-8  h-50 ">
              <h1 className="display-2  text-light mb-2 mt-5">
                <strong>Search your Home</strong>{" "}
              </h1>
              <p className="lead  text-light mb-5">
                Million of houses in a click
              </p>


              <form>
                <input className="form-control mb-1" type="text" name="city" placeholder="Enter City" />
                <button
                className="btn bg-danger"
              >
                Go Search
              </button>
              </form>

    
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Principal;
