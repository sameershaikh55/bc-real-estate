import React, { useState } from "react";

// COMPONENTS
import Hero2 from "../components/Hero2";
import PropertyCard from "../components/PropertyCard";
import Pagination from "../components/Pagination";
import SelectBox from "../components/SelectBox";

const Properties = () => {
  const [sort, setSort] = useState("All");

  return (
    <>
      <Hero2
        title={
          <>
            Our <span className="color1">Amazing</span> Properties
          </>
        }
      />

      <div className="page_container pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 my-5 d-flex justify-content-end">
              <SelectBox
                state={sort}
                options={["All", "Sell", "Buy"]}
                onChange={(e) => setSort(e)}
              />
            </div>

            {[
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1,
            ].map((content, i) => {
              return (
                <div key={i} className="col-4">
                  <PropertyCard />
                </div>
              );
            })}

            <div className="col-12">
              <Pagination totalPages={10} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
