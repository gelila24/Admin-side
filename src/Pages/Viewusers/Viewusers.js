
import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Sidebar from "../../Sidebar/sidebar";
import Navbar from "../../Navbar/Navbar";
import "../style.css";

export const Viewusers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:4000/pharmacy/show`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="home1">
        <div className="side">
          {" "}
          <Sidebar />
        </div>
        <div className="home">
          <MaterialTable
            title={<h1>Pharmacy Users</h1>}
            data={data}
            columns={[
              {
                title: "Pharmacy Name",
                field: "pharmacyName",
                validate: (rowData) =>
                  rowData.pharmacyName === "" ? "Name cannot be empty" : "",
              },
              {
                title: "Pharmacie's Phone No.",
                field: "phoneNumber",
                type: "numeric",
                validate: (rowData) =>
                  rowData.pharmacy_phoneNumber < ""
                    ? "Phone number must be less than ten digits"
                    : "",
              },

              {
                title: "Pharmacy Type",
                field: "pharmacyType",
              },
              {
                title: "Tin Number",
                field: "TIN_number",
              },
              {
                title: "Email",
                field: "email",
              },
              {
                title: "Registered Date",
                field: "date",
              },
            ]}
            options={{
              headerStyle: {
                backgroundColor: "#fff",
                color: "#000",
              },
              searchFieldvarient: "",
              filtering: true,
              pageSizeoptions: [3, 5, 10],
              pageSize: 10,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Viewusers;
