import React from "react";
import { Link } from "react-router-dom";

const UserDataDisplay = ({ myData }) => {
  // console.log(myData);
  return (
    <>
      {myData?.map((d) => {
        return (
          <div key={d.id}>
            <Link
              style={{
                textDecoration: "underline",
                color: "black",
                fontSize: "1.5rem"
              }}
              to={`/blog/${d.id}`}
            >
              {d.username}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default UserDataDisplay;
