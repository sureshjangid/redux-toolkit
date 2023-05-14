import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./redux/postslice";

const Edit = () => {
  const [infoData, setInfoData] = useState("");
  const { id } = useParams();
  const { user } = useSelector((state) => state?.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const singleData = user.filter((ele) => ele.id === id);
  console.log(singleData);

  useEffect(() => {
    setInfoData(singleData[0]);
  }, []);

  const getData = (e) => {
    setInfoData({ ...infoData, [e.target.name]: e.target.value });
  };
  const updateData = () => {
    dispatch(updateUser(infoData));
    navigate("/read");
  };
  return (
    <div>
      <div class="container py-5">
        <h2>Update data</h2>
        <div class="form-group row">
          <label for="inputEmail" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="name"
              value={infoData?.name}
              onChange={getData}
              placeholder="Enter your name"
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              value={infoData?.email}
              onChange={getData}
              name="email"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            User name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              value={infoData?.username}
              id="inputPassword"
              placeholder="Enter your user name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Address
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              placeholder="Enter your address"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            age
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              name="age"
              value={infoData?.age}
              onChange={getData}
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-10 offset-sm-2">
            <button class="btn btn-primary" onClick={() => updateData()}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
