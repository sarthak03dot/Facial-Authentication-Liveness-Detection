import { RadioGroup } from "@headlessui/react";

function User({ user, type }) {
  return (
    <RadioGroup.Option
      key={user.id}
      value={user}
      className={({ checked }) =>
        `user-option ${checked ? "user-option-checked" : "user-option-unchecked"}`
      }
    >
      {({ checked }) => (
        <div className="user-content">
          <div className="flex items-center">
            <div className="text-sm">
              <RadioGroup.Label
                as="div"
                className={`user-label ${
                  checked ? "user-label-checked" : "user-label-unchecked"
                }`}
              >
                <img
                  className="user-image"
                  src={
                    type === "CUSTOM"
                      ? user.picture
                      : `/temp-accounts/${user.picture}`
                  }
                  alt={user.fullName}
                />
                {user.fullName}
              </RadioGroup.Label>
            </div>
          </div>
          {checked && (
            <div className="user-check-icon">
              <CheckIcon className="user-check-icon" />
            </div>
          )}
        </div>
      )}
    </RadioGroup.Option>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default User;