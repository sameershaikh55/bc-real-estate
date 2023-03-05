import React, { useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { deleteNewsletter, clearErrors } from "../redux/action/newsletter";
import { DELETE_NEWSLETTER_RESET } from "../redux/type/newsletter";

const NewsletterTable = ({ filteredContacts }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, newsletterDeleted } = useSelector((state) => state.newsletter);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (newsletterDeleted) {
      alert.success("Newsletter deleted!");
      dispatch({ type: DELETE_NEWSLETTER_RESET });
    }
  }, [dispatch, alert, newsletterDeleted, error]);

  return (
    <div className="bg-white rounded-3">
      <div className="user_table">
        <table className="table">
          <thead>
            <tr>
              <th className="color2 px-3 fw500">Email</th>
              <th className="color2 px-3 fw500">Promo Code</th>
              <th className="color2 px-3 fw500">Area</th>
              <th className="color2 px-3 fw500">Address</th>
              <th className="color2 px-3 fw500">Requested At</th>
              <th className="color2 text-end pe-4 fw500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(filteredContacts.length &&
              filteredContacts.map(
                (
                  { _id, email, promoCode, area, address, createdAt },
                  index
                ) => {
                  return (
                    <tr key={index}>
                      <td className="color3 pe-3 ps-4 fw400">{email}</td>
                      <td className="color3 px-3 fw400">
                        {(promoCode && promoCode) || "-"}
                      </td>
                      <td className="color3 px-3 fw400">{area}</td>
                      <td className="color3 px-3 fw400">
                        {(address && address) || "-"}
                      </td>
                      <td className="color3 px-3 fw400">
                        {new Date(createdAt).toDateString()}
                      </td>
                      <td className="color3 text-end pe-4 fw400">
                        <RiDeleteBinFill
                          onClick={() => dispatch(deleteNewsletter(_id))}
                          className="ms-2 pointer"
                          fontSize="1.2rem"
                          color="#8961de"
                        />
                      </td>
                    </tr>
                  );
                }
              )) || (
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

export default NewsletterTable;
