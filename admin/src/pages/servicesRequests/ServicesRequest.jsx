import "./coursesList.css";
import {DataGrid} from "@material-ui/data-grid";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as api from "../../api/index";

export default function ServicesRequests() {
  const [data, setDataServicesRequests] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const responseServicesRequests = await api.fetchServicesRequests();
        setDataServicesRequests(responseServicesRequests.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);
  const handleDelete = async id => {
    const res = await api.deleteServiceRequestById(id);
    setDataServicesRequests(data.filter(item => item._id !== res.data._id));
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800">Loading</h1>;

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 150,
      renderCell: params => {
        return (
          <div className="productListItem text-white">{params.row._id}</div>
        );
      },
    },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem text-white">
            {params.row.fullName}
          </div>
        );
      },
    },

    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem text-white">{params.row.email}</div>
        );
      },
    },

    {
      field: "phone",
      headerName: "Phone",
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem text-white">{params.row.phone}</div>
        );
      },
    },
    {
      field: "adjective",
      headerName: "Adjective",
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem text-white">
            {params.row.adjective}
          </div>
        );
      },
    },
    {
      field: "landLocation",
      headerName: "Land Location",
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem text-white">
            {params.row.landLocation}
          </div>
        );
      },
    },
    {
      field: "theAim",
      headerName: "The Aim",
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem text-white">{params.row.theAim}</div>
        );
      },
    },
    {
      field: "landSpace",
      headerName: "Land Space",
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem text-white">
            {params.row.landSpace}
          </div>
        );
      },
    },
    {
      field: "approximateLandPrice",
      headerName: "Approximate Land Price",
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem text-white">
            {params.row.approximateLandPrice}
          </div>
        );
      },
    },
    {
      field: "additionalInformation",
      headerName: "Additional Information",
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem text-white">
            {params.row.additionalInformation}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: params => {
        return (
          <div className="containerActionsBtns text-white">
            <Link to={"/admin/services/" + params.row._id}>
              <button className="productListEdit">Show Details</button>
            </Link>
            <button
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div id="servicesRequests" className="productList h-[500px] text-white">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  );
}
