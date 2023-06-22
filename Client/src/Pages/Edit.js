import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = ({ id }) => {
  const params = useParams();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Education, setEducation] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");

  const fetchMerchant = async () => {
    try {
      const id = params.id;
      console.log(params);
      const response = await axios.get(`/api/merchant/${id}`);
      const merchant = response.data;
      console.log(response.data);
      setName(merchant.Name);
      setEmail(merchant.Email);
      setEducation(merchant.Education);
      setAge(merchant.Age);
      setGender(merchant.Gender);
      console.log(merchant.Gender);
    } catch (error) {
      console.error(error);
      toast.error("Something Went wrong");
    }
  };

  useEffect(() => {
    fetchMerchant();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const id = params.id;
      const response = await axios.put(`/api/merchants/${id}`, {
        Name,
        Email,
        Education,
        Age,
        Gender,
      });
      toast.success("Merchant Updated Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Something Went wrong");
    }
  };

  return (
    <>
      <div>
        <div className="px-5">
          <main>
            <div className="row g-5">
              <div className=" mb-5">
                <h3 className="mx-3 mt-3 main-heading">Merchant Crud App</h3>
                <h4 className="mb-3 mt-5 heading">Updating a Merchant</h4>
                <form className="needs-validation" onSubmit={handleUpdate}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="Name" className="form-label">
                        Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                      />
                    </div>

                    <div className="col-12"></div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">
                        Education
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={Education}
                        onChange={(e) => setEducation(e.target.value)}
                        placeholder="Education"
                      />
                    </div>

                    <div className="col-md-5">
                      <label htmlFor="country" className="form-label">
                        Age
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={Age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
                      />
                    </div>
                    <div className="col-md-4 mb-5">
                      <label htmlFor="state" className="form-label">
                        Gender
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={Gender}
                        onChange={(e) => setGender(e.target.value)}
                        placeholder="Gender"
                      />
                    </div>
                  </div>
                  <button className="w-100 btn btn-danger" type="submit">
                    Update Merchant
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Edit;
