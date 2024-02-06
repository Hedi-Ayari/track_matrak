import React from "react";

const sizeClasses = {
  txtOswaldBold49Deeporange500: "font-bold font-oswald",
  txtOswaldRegular16: "font-normal font-oswald",
  txtOswaldSemiBold18: "font-oswald font-semibold",
  txtOswaldRegular18: "font-normal font-oswald",
  txtOswaldBold18WhiteA700: "font-bold font-oswald",
  txtOswaldBold18: "font-bold font-oswald",
  txtOswaldBold49: "font-bold font-oswald",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
