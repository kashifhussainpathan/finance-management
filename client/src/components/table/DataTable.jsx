import "./table.css";

import React from "react";

export const DataTable = ({ list }) => {
  const convertToDate = (dateString) => {
    const dateObject = new Date(dateString);

    const day = dateObject.getDate();
    const month = dateObject.toLocaleString("default", { month: "short" });
    const year = dateObject.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  };

  return (
    <table className="table">
      <thead className="heading-row" key={"table"}>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item?._id}>
            <td>{convertToDate(item?.createdAt)}</td>
            <td>{item?.category}</td>
            <td>{item?.description}</td>
            <td>{item?.amount}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td className="total">Total</td>
          <td>
            {" "}
            <b>{list?.reduce((acc, { amount }) => acc + amount, 0)}</b>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
