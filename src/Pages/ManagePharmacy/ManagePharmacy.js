import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "./style.css";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/sidebar";
import axios from "axios";

export const ManagePharmacy = () => {
  const [columns] = useState([

    {
      title: "Pharmacy Name",
      field: "pharmacyName",
      validate: (rowData) =>
        rowData.pharmacyName === "" ? "Name cannot be empty" : "",
    },
    {
      title: "Pharmacy Phone No.",
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
      title: "Pharmacy's Tin No.",
      field: "TIN_number",
    },
    {
      title: "Pharmacy's Email",
      field: "email",
    },
    {
      title: "Registered Date",
      field: "date",
    },
  ]);

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
    <div className="ManageTable">
      <Navbar />
      <div className="home1">
        <div className="side">
          {" "}
          <Sidebar />
        </div>
        <div className="home">
          <MaterialTable
            style={{ display: "flex!important", flexDirection: "column" }}
            title={<h1 style={{ alignContent: 'center' }}>Pharmacy User's Table</h1>}
            columns={columns}
            data={data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  newData.pharmacy = localStorage.getItem("token");
                  axios
                    .post("http://localhost:4000/meds/add", newData)
                    .then((res) => console.log(res));
                  setTimeout(() => {
                    setData([...data, newData]);

                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  const id = oldData._id;
                  axios.put(`http://localhost:4000/meds/update/${id}`, newData);
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    console.log(index);
                    dataUpdate[index] = newData;

                    setData([...dataUpdate]);

                    resolve();
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  const id = oldData._id;
                  axios.delete(`http://localhost:4000/meds/delete/${id}`);
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);
                    resolve();
                  }, 1000);
                }),
            }}
            options={{
              headerStyle: {
                backgroundColor: "#fff",
                color: "#000",
              },
              sorting: true,
              filtering: true,
              paging: true,
              pageSizeoptions: [3, 5, 10],
              pageSize: 5,
              paginationType: "stopped",
              showfirstLastPageButtons: false,
              exportButton: true,
              exportFileName: "Medicine Store",
              exportAllData: true,
              addRowPosition: "first",
              actionColumnIndex: "end",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagePharmacy;
