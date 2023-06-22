import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Form = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Education, setEducation] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");

  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/add-merchants", {
        Name,
        Email,
        Education,
        Age,
        Gender,
      });
      console.log(response.data);

      if (!Name) {
        return toast.error("Name is required");
      }
      if (!Email) {
        return toast.error("Email is required");
      }
      if (!Education) {
        return toast.error("Education is required");
      }
      if (!Age) {
        return toast.error("Age is required");
      }
      if (!Gender) {
        return toast.error("Gender is required");
      }

      toast.success("Merchant Added Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Something Went wrong");
    }
  };

  return (
    <>
      <div>
        <div className="px-5 py-5">
          <main>
            <div className="row g-5">
              <div className=" mb-5">
                <h4 className="mb-3 heading">Add a Merchant</h4>
                <form className="needs-validation" onSubmit={handleCheckout}>
                  <div className="row g-3">
                    <div className="col-12">
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
                      <input
                        className="form-control"
                        type="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        className="form-control"
                        type="text"
                        value={Education}
                        onChange={(e) => setEducation(e.target.value)}
                        placeholder="Education"
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        value={Age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
                      />
                    </div>
                    <div className="col-md-12 mb-5">
                      <input
                        className="form-control"
                        type="text"
                        value={Gender}
                        onChange={(e) => setGender(e.target.value)}
                        placeholder="Gender"
                      />
                    </div>
                  </div>
                  <button className="w-100 btn  btn-danger " type="submit">
                    Add Merchant
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

export default Form;
