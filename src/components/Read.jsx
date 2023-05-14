import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteUser } from "./redux/postslice";
import Modal from "./Model";
import { NavLink } from "react-router-dom";

const Read = () => {
  const [open, setOpne] = useState(false);
  const [id, setId] = useState("");
  const readAllData = useSelector((state) => state?.app?.user);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(showUser());
  }, []);
  return (
    <div>
      {open ? <Modal id={id} close={setOpne} /> : ""}

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <table class="table">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  {readAllData.map((item) => {
                    return (
                      <tr>
                        <td scope="col">{item?.name}</td>
                        <td scope="col">{item?.email}</td>
                        <td scope="col">{item?.age}</td>
                        <td scope="col">
                          <NavLink to={`/edit/${item?.id}`}>Edit</NavLink>
                        </td>
                        <td scope="col">
                          <button
                            onClick={() => dispatch(deleteUser(item?.id))}
                          >
                            Delete
                          </button>
                        </td>
                        <td scope="col">
                          <button
                            onClick={() => [setOpne(true), setId(item?.id)]}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
