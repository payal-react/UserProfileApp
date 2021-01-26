import React, { useContext, useState, useEffect } from "react";
import "./../StudentForm.css";
import { schoolContext } from "./../store/Provider";
import Button from "react-bootstrap/Button";

function UserProfile(props) {
  const { selectedProfile } = useContext(schoolContext);

  const onChangeHandler = () => {};

  const onSubmitHandler = () => {
    console.log(selectedProfile);
  };

  return (
    <form className={"form-container"}>
      <div className="student-form-header">
        <h3>User Form</h3>
      </div>
      <div>
        First Name:
        <input
          type="text"
          name="first_name"
          value={selectedProfile.first_name}
          onChange={onChangeHandler}
          placeholder="First Name"
        />
      </div>
      <div>
        Last Name:
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={selectedProfile.last_name}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        Email:
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={selectedProfile.email}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        Avatar:
        <input
          type="text"
          placeholder="Avatar"
          name="avatar"
          value={selectedProfile.avatar}
          onChange={onChangeHandler}
        />
      </div>
      <Button
        variant="primary"
        size="lg"
        onClick={(e) => onSubmitHandler(e)}
        className={"submit-btn"}
      >
        Submit
      </Button>
    </form>
  );
}

export default UserProfile;
