import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Protected() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("faceAuth")) {
      navigate("/login");
    }

    const { account } = JSON.parse(localStorage.getItem("faceAuth"));
    setAccount(account);
  }, []);

  if (!account) {
    return null;
  }

  return (
    <div className="protected-container">
      <div className="protected-content">
        <h2 className="protected-title">You have successfully logged in!</h2>
        <div className="mb-24">
          <img
            className="protected-image"
            src={
              account?.type === "CUSTOM"
                ? account.picture
                : `/temp-accounts/${account.picture}`
            }
            alt={account.fullName}
          />
          <h1 className="protected-title">{account?.fullName}</h1>
          <div
            onClick={() => {
              localStorage.removeItem("faceAuth");
              navigate("/");
            }}
            className="protected-logout-button"
          >
            <span>Log Out</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Protected;