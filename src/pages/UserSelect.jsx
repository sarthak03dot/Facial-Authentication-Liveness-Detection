import React, { useState } from "react";
import User from "../components/User";
import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";

const accounts = [
  {
    id: "374ed1e4-481b-4074-a26e-6137657c6e35",
    fullName: "Ariya Patel",
    picture: "374ed1e4-481b-4074-a26e-6137657c6e35/1.jpg",
  },
  {
    id: "43332f46-89a4-435c-880e-4d72bb51149a",
    fullName: "Arya Patel",
    picture: "43332f46-89a4-435c-880e-4d72bb51149a/1.png",
  },
  {
    id: "0c2f5599-9296-4f94-97d5-e773043188ae",
    fullName: "Sarthak Singh",
    picture: "/0c2f5599-9296-4f94-97d5-e773043188ae/1.jpg",
  },
];

function UserSelect() {
  const [selected, setSelected] = useState(accounts[0]);
  const [customUser, setCustomUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="user-select-container">
      <h1 className="user-select-title">Select a Dummy User to Log In</h1>
      <div className="user-select-content">
        <div className="user-select-radio-group">
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="user-option">
              {accounts.map((account) => (
                <User key={account.id} user={account} />
              ))}
              {customUser && (
                <div className="user-select-custom-user">
                  <User key={customUser.id} user={customUser} type="CUSTOM" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="user-select-remove-icon"
                    onClick={() => {
                      setCustomUser(null);
                      selected?.type === "CUSTOM" && setSelected(accounts[0]);
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              )}
            </div>
          </RadioGroup>
          {!customUser && (
            <div className="user-select-upload-container">
              <label htmlFor="dropzone-file" className="user-select-upload-label">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="user-select-upload-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  <p className="user-select-upload-text">
                    Click to upload referral image
                  </p>
                  <p className="user-select-upload-subtext">PNG, JPG or JPEG</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  className="hidden"
                  onChange={async (e) => {
                    const files = e.target.files;
                    if (files == null || files.length == 0) {
                      setErrorMessage("No files wait for import.");
                      return;
                    }
                    let file = files[0];
                    let name = file.name;
                    let suffixArr = name.split("."),
                      suffix = suffixArr[suffixArr.length - 1];
                    if (
                      suffix != "png" &&
                      suffix != "jpg" &&
                      suffix != "jpeg"
                    ) {
                      setErrorMessage("Only support png jpg or jpeg files.");
                      return;
                    }

                    const base64 = await convertBase64(file);

                    const user = {
                      id: "custom",
                      fullName: name,
                      type: "CUSTOM",
                      picture: base64,
                    };

                    setCustomUser(user);
                    setSelected(user);
                  }}
                />
              </label>
              {errorMessage && (
                <p className="user-select-error">{errorMessage}</p>
              )}
            </div>
          )}
          <Link
            to="/login"
            state={{ account: selected }}
            className="user-select-continue-button"
          >
            Continue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserSelect;