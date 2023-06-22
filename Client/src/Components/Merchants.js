import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Merchants = () => {
  const [merchants, setMerchants] = useState([]);

  // Get all Merchants
  const getAllMerchants = async () => {
    try {
      const response = await axios.get("/api/get-merchants");
      setMerchants(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getAllMerchants();
  }, []);

  //delete a product
  const handleDelete = async (Id) => {
    try {
      const { data } = await axios.delete(`/api/delete-merchants/${Id}`);
      toast.success("Merchant Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className=" mt-5">
      <h4 className="mx-3  heading">All Merchants</h4>
      <div className="">
        {merchants.map((merchant, id) => (
          <div
            key={merchant._id}
            className="box-border p-3 m-3 "
            style={{
              width: "50rem",
              backgroundColor:
                merchant.Gender === "Male" ? "lightblue" : "plum",
            }}
          >
            <div className="row">
              <p className="col-md-3">
                <b>Name: </b>
                {merchant.Name}
              </p>
              <p className="col-md-4">
                <b>Email: </b>
                {merchant.Email}
              </p>
              <p className="col-md-3">
                <b>Education: </b> {merchant.Education}
              </p>
              <p className="col-md-2">
                <b>Age: </b>
                {merchant.Age}
              </p>
            </div>
            {/* <p>
              <b>Gender: </b>
              {merchant.Gender}
            </p> */}

            <div className="row">
              <div className="col-md-10 mt-2 ">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(merchant._id)}
                >
                  DELETE
                </button>
              </div>
              <div className="col-md-1 ">
                <NavLink to={`/edit/${merchant._id}`}>
                  <button className="btn btn-danger mt-2 mx-5 ">Edit</button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merchants;
