import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from "../redux/action/property";
import Loader from "../components/Loader";

// COMPONENTS
import Hero2 from "../components/Hero2";
import PropertyCard from "../components/PropertyCard";
import Pagination from "../components/Pagination";
import Contact from "../components/Contact";

const Properties = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search.replace("?", "");

  const dispatch = useDispatch();
  const { properties, loading } = useSelector((state) => state.property);

  useEffect(() => {
    dispatch(getProperties());
  }, []);

  if (loading) {
    return <Loader />;
  }

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
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-12 my-5 d-flex justify-content-center">
                  <div className="buy_sell_container">
                    <button
                      onClick={() => navigate("/properties?sell")}
                      className={`${search === "sell" && "active"}`}
                    >
                      Sell
                    </button>
                    <button
                      onClick={() => navigate("/properties?buy")}
                      className={`${search === "buy" && "active"}`}
                    >
                      Buy
                    </button>
                  </div>
                </div>

                {search === "sell" && (
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quasi alias praesentium officia consequatur
                        dolorum et, pariatur ea aliquid enim error incidunt
                        maiores fugit dolores, aut doloribus ducimus nesciunt
                        vitae repellat, est ipsum neque possimus. Minus
                        obcaecati ut mollitia, vitae nesciunt labore natus autem
                        earum illo optio tempora consequatur magnam dolorem!
                        Impedit velit deserunt dignissimos ratione iusto sunt
                        cum! Odit quasi facilis facere amet sapiente sed ipsa
                        perferendis dignissimos sit ad earum ab, reiciendis rem
                        repellat. Nihil nesciunt reprehenderit minima veritatis
                        tempora eos temporibus sit error numquam explicabo,
                        nobis, corporis dolorem ut at maxime eligendi delectus!
                        Magni quas ex voluptate possimus ab, dicta expedita sed
                        ea laborum eos aspernatur ratione ut suscipit.
                        Voluptatibus nobis aliquid reiciendis perspiciatis
                        voluptas temporibus beatae in possimus quia cupiditate
                        aperiam deserunt molestiae ex velit, quod, amet veniam!
                        Cupiditate laboriosam in enim laudantium labore optio
                        libero pariatur non consequuntur nihil amet, hic at a
                        nulla magnam commodi iste ab facilis neque quisquam.
                        Libero, ullam. Tenetur velit aliquam animi consequatur
                        provident, commodi sit recusandae voluptate quod culpa
                        totam, quisquam ducimus dolorem eum cupiditate dolor,
                        fugiat soluta quidem sunt blanditiis molestiae molestias
                        natus hic atque. Ipsam officia perferendis dolorum iusto
                        tempore natus maiores ut id odit deleniti! Tempora
                        blanditiis maiores atque corrupti, aliquam ab accusamus
                        nulla quaerat culpa eveniet qui rerum nisi deserunt
                        reiciendis inventore, voluptas, itaque et. Repellat,
                        aperiam quasi temporibus quia id earum perspiciatis
                        quibusdam quas voluptatibus consequatur fugiat. Alias
                        aperiam perspiciatis sint incidunt pariatur eligendi,
                        non, nisi quos voluptatem velit, voluptatibus ad
                        praesentium nulla explicabo mollitia! Similique, qui
                        veniam! Nulla natus laborum in eum, odit quasi et
                        officia perferendis recusandae suscipit expedita,
                        inventore dolorem! Iusto ipsum cum debitis dicta earum,
                        quidem vero laboriosam quo, tenetur corporis at. Saepe
                        esse suscipit officiis perferendis nobis corporis enim,
                        dolore magni officia sunt cumque fugiat aliquid quam
                        aperiam. Expedita, odio?
                      </div>
                    </div>
                  </div>
                )}

                {search === "buy" && (
                  <div className="col-12">
                    <div className="row">
                      {properties.map((content, i) => {
                        return (
                          <div key={i} className="col-12 col-md-6 col-lg-4">
                            <PropertyCard {...content} />
                          </div>
                        );
                      })}
                      <div className="col-12">
                        <Pagination totalPages={10} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {search === "sell" && <Contact page inquiry />}
    </>
  );
};

export default Properties;
