import { useState } from "react";
import "./css/Form.css";
import { validate } from "./validate";

export default function Form({ login }) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  function handleSubmit (e) {
    e.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        <input
          name="username"
          onChange={handleInputChange}
          value={userData.username}
          placeholder="Username"
          type="text"
          autoComplete="off"
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </label>
      <br />
      <label>
        <input
          name="password"
          onChange={handleInputChange}
          value={userData.password}
          placeholder="Password"
          type="password"
          autoComplete="off"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </label>
      <br />
      <button>LOGIN</button>
    </form>
  );
}
