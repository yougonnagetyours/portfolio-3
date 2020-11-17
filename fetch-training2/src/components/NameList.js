import React from "react";

const NameList = props => {
  const users = props.users.map(user => (
    <li key={user.id}>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </li>
  ));
  return <ul>{users}</ul>;
};

export default NameList;
