import React from "react";
import { useSelector } from "react-redux";

const Model = ({ close, id }) => {
  console.log(id);

  const info = useSelector((state) => state.app.user);

  const user = info.filter((ele) => ele.id === id);
  console.log(user);

  return (
    <div className="main-div">
      <div className="user-data">
        <button onClick={() => close(false)}>Close</button><br></br>
        name: {user[0]?.name} <br></br>
        email:{user[0]?.email} <br></br>
        age:{user[0]?.age}
      </div>
    </div>
  );
};

export default Model;
