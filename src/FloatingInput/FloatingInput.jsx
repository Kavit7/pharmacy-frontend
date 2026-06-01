import React from 'react'

const FloatingInput = ({
  icon: Icon,
  name,
  type ,
  value,
  label,
  onChange,
}) => {
    const hasValue = value && value.length > 0;
  return (
    <>
      <div className="relative flex items-center border rounded-lg border-gray-300 px-3 gap-3 h-16 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 transition-all">
        <Icon className="text-green-800 shrink-0" />

        <div className="relative flex-1 h-full flex items-center">
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={""}
            className="w-full h-full outline-none bg-transparent pt-5 text-base"
          />

          {/* GOOGLE STYLE LABEL */}
          <label
            className={`
            absolute left-0 transition-all duration-200 pointer-events-none
            ${hasValue ? "top-1 text-xs text-green-700" : "top-2 text-base text-gray-500"}
          `}
          >
            {label}
          </label>
        </div>
      </div>
    </>
  );
};

export default FloatingInput