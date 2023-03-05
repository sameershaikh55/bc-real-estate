import React, { useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { DELETE_CONTACT_RESET } from "../redux/type/contact";
import { deleteContacts, clearErrors } from "../redux/action/contact";

const ContactTable = ({ filteredContacts }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, contactDeleted } = useSelector((state) => state.contact);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (contactDeleted) {
      alert.success("Request deleted!");
      dispatch({ type: DELETE_CONTACT_RESET });
    }
  }, [dispatch, alert, contactDeleted, error]);

  return (
    <div className="bg-white rounded-3">
      <div className="user_table">
        <table className="table">
          <thead>
            <tr>
              <th className="color2 pe-3 ps-4 fw500">Name</th>
              <th className="color2 px-3 fw500">Email</th>
              <th className="color2 px-3 fw500">Phone</th>
              <th className="color2 px-3 fw500">Message</th>
              <th className="color2 px-3 fw500">Requested At</th>
              <th className="color2 text-end pe-4 fw500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(filteredContacts.length &&
              filteredContacts.map(
                (
                  {
                    _id,
                    name,
                    email,
                    subject,
                    requestType,
                    message,
                    phone,
                    createdAt,
                  },
                  index
                ) => {
                  return (
                    <tr key={index}>
                      <td className="color3 pe-3 ps-4 fw400">{name}</td>
                      <td className="color3 px-3 fw400">{email}</td>
                      <td className="color3 px-3 fw400">{phone}</td>
                      <td className="color3 px-3 fw400">
                        Subject: {subject} <br />
                        Request Type: {requestType} <br />
                        Message: {message}
                      </td>
                      <td className="color3 px-3 fw400">
                        {new Date(createdAt).toDateString()}
                      </td>
                      <td className="color3 text-end pe-4 fw400">
                        <RiDeleteBinFill
                          onClick={() => dispatch(deleteContacts(_id))}
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

export default ContactTable;
