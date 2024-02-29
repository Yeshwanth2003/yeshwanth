import React from "react";

export default function Container({ message }) {
  return (
    <>
      <div className="alert-container">{message}</div>
    </>
  );
}
