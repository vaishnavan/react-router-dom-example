import React from "react";
import { useMatch, useNavigate } from "react-router-dom";

const UsersDetail = ({ userData }) => {
  const navigate = useNavigate();
  const match = useMatch("/blog/:id");
  const user = match
    ? userData.find((users) => users.id === Number(match.params.id))
    : null;
  console.log(user);

  const handlePrevious = () => {
    navigate("/blog");
  };

  return (
    <>
      <button onClick={handlePrevious}>Previous</button>
      <div className="userdetail">
        <h3>{user.username}</h3>
        <h3>{user.email}</h3>
        <h3>{user.company.catchPhrase}</h3>
      </div>
    </>
  );
};

export default UsersDetail;
