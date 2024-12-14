import axios from "axios"; // Import axios for API calls
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom"; // Import navigate hook for routing

const Register = () => {
  const navigate = useNavigate(); // Use navigate to route to different pages
  const [role, setRole] = useState("user");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    bloodGroup: "",
    driver: "",
  });

  const { name, email, password, phoneNumber, bloodGroup, driver } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/register", user);
      navigate("/");
    } catch (err) {
      console.error("Error registering user", err);
    }
  };

  //   const handleFileChange = (e) => {
  //     const { name, files } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: files[0],
  //     });
  //   };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    // Set driver based on the selected role
    setUser({
      ...user,
      driver: selectedRole === "ambulance-driver" ? "ambulance-driver" : "user",
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>
        <form onSubmit={onSubmit}>
          {/* Form fields (Name, Email, Phone, etc.) */}
          <div style={styles.inputField}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onInputChange}
              placeholder="Enter your name"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputField}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="Enter your email"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputField}>
            <label style={styles.label}>Phone Number</label>
            <PhoneInput
              country={"us"}
              value={phoneNumber}
              onChange={(value) => setUser({ ...user, phoneNumber: value })} // directly update phoneNumber
              inputStyle={styles.phoneInput}
              buttonStyle={styles.phoneButton}
              required
            />
          </div>

          <div style={styles.inputField}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="Enter your password"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.radioContainer}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                value="user"
                checked={role === "user"}
                onChange={handleRoleChange}
                style={styles.radioInput}
              />
              User
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                value="ambulance-driver"
                checked={role === "ambulance-driver"}
                onChange={handleRoleChange}
                style={styles.radioInput}
              />
              Ambulance Driver
            </label>
          </div>

          {/* Conditional fields for "User" */}
          {role === "user" && (
            <>
              <div style={styles.inputField}>
                <label style={styles.label}>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.inputField}>
                <label style={styles.label}>Blood Group</label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={bloodGroup}
                  onChange={onInputChange}
                  placeholder="Enter your blood group"
                  required
                  style={styles.input}
                />
              </div>
            </>
          )}

          {/* Conditional fields for "Ambulance Driver" */}
          {role === "ambulance-driver" && (
            <>
              <div style={styles.inputField}>
                <label style={styles.label}>Proof</label>
                <input
                  type="file"
                  name="proof"
                  required
                  style={styles.fileInput}
                />
              </div>

              <div style={styles.inputField}>
                <label style={styles.label}>ID Card</label>
                <input
                  type="file"
                  name="idCard"
                  required
                  style={styles.fileInput}
                />
              </div>

              <div style={styles.inputField}>
                <label style={styles.label}>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  required
                  style={styles.input}
                />
              </div>
            </>
          )}

          <button type="submit" style={styles.registerButton}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "400px",
  },
  title: {
    color: "maroon",
    marginBottom: "20px",
  },
  inputField: {
    marginBottom: "20px",
    position: "relative",
  },
  label: {
    display: "block",
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "maroon",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  fileInput: {
    padding: "10px",
    border: "none",
  },
  phoneInput: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  radioContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  radioLabel: {
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    color: "maroon",
  },
  radioInput: {
    marginRight: "10px",
  },
  registerButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "maroon",
    color: "#fff",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Register;
