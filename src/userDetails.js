import React, { Component, useEffect, useState } from "react";
import MainLayout from "./Super/Superadmin/MainLayout";
import Mainadmin from "./Admin/Admin/MainLayout";
import Mainuser from "./User/User/MainLayout";
export default function UserDetails() {
    const [userData, setUserData] = useState("");
    const [admin, setAdmin] = useState(false);
    const [superAdmin, setSuperAdmin] = useState(false);
  
    useEffect(() => {
      fetch("http://localhost:5000/userData", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userData");
          if (data.data.userType === "SuperAdmin") {
            setSuperAdmin(true);
            } else if (data.data.userType === "Admin") {
              setAdmin(true);
            }
            setUserData(data.data);
          if (data.data == "token expired") {
            alert("Token expired, login again");
            window.localStorage.clear();
            window.location.href = "./";
          } 
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }, []);
  
    // Render the appropriate home page based on user type
    return superAdmin ? <MainLayout /> : admin ? < Mainadmin/> : <Mainuser userData={userData}/>;
  };

