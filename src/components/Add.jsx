import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "./redux/postslice";

export const Add = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    age: "",
    username: "",
    address:""
  });

  const { name, email, age, username ,address} = info;
  const dispatch = useDispatch();
  const addData = () => {
    console.log(info);
    dispatch(createUser(info));
    setInfo({ name: "", email: "", age: "", username: "" ,address:""});
  };
  return (
    <div>
      <div class="container py-5">
        <h2>Bootstrap Forms - Horizontal Form Layout</h2>
          <div class="form-group row">
            <label for="inputEmail" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                value={name}
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                class="form-control"
                id="inputEmail"
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
                value={email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                class="form-control"
                id="inputPassword"
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
                value={username}
                onChange={(e) => setInfo({ ...info, username: e.target.value })}
                class="form-control"
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
                value={address}
                onChange={(e) => setInfo({ ...info, address: e.target.value })}
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
                value={age}
                onChange={(e) => setInfo({ ...info, age: e.target.value })}
                class="form-control"
                id="inputPassword"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-10 offset-sm-2">
              <button class="btn btn-primary" onClick={() => addData()}>
                Add data
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};
