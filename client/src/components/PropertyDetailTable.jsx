import React from "react";

const PropertyDetailTable = ({ title, body }) => {
  return (
    <div class="table-responsive">
      <table className="table-container">
        <thead>
          <tr>
            <th colSpan={2} className="table-header">
              {title}
            </th>
          </tr>
        </thead>
        <tbody>
          {body.map((content, i) => {
            return (
              <tr key={i}>
                <td className="table-data">{content.key}</td>
                <td className="table-data">{content.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyDetailTable;
