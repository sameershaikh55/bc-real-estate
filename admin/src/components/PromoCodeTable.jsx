import React, { useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { deletePromo, clearErrors } from "../redux/action/promo";
import { DELETE_PROMO_RESET } from "../redux/type/promo";
import { HiPencil } from "react-icons/hi";

const PromoCodeTable = ({ setEditData, filteredContacts }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, promoDeleted } = useSelector((state) => state.promos);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (promoDeleted) {
      alert.success("Promo deleted!");
      dispatch({ type: DELETE_PROMO_RESET });
    }
  }, [dispatch, alert, promoDeleted, error]);

  return (
    <div className="bg-white rounded-3">
      <div className="user_table">
        <table className="table">
          <thead>
            <tr>
              <th className="color2 pe-3 ps-4 fw500">Promo Code</th>
              <th className="color2 px-3 fw500">Created At</th>
              <th className="color2 text-end pe-4 fw500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(filteredContacts.length &&
              filteredContacts.map(({ _id, promoCode, createdAt }, index) => {
                return (
                  <tr key={index}>
                    <td className="color3 pe-3 ps-4 fw400">{promoCode}</td>
                    <td className="color3 px-3 fw400">
                      {new Date(createdAt).toDateString()}
                    </td>
                    <td className="color3 text-end pe-4 fw400">
                      <HiPencil
                        fontSize="1.2rem"
                        color="#8961de"
                        className="pointer"
                        onClick={() =>
                          setEditData({
                            _id,
                            promoCode,
                          })
                        }
                      />
                      <RiDeleteBinFill
                        onClick={() => dispatch(deletePromo(_id))}
                        className="ms-2 pointer"
                        fontSize="1.2rem"
                        color="#8961de"
                      />
                    </td>
                  </tr>
                );
              })) || (
              <tr>
                <td className="text-center" colSpan={6}>
                  no data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromoCodeTable;
