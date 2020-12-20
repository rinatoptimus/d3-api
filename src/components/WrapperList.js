import React from "react";

export default function WrapperList(Component) {
  return function Load({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Wait</p>;
  };
}
