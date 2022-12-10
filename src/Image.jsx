import React, { useState } from "react";
import { SpinnerIcon } from "./Icons.jsx";

const Image = ({ id, src, style, className, handleDoubleClick }) => {
  const [loading, setLoading] = useState(true);
  const handleOnLoad = () => {
    setLoading(false);
  };
  return (
    <p>
      {loading && <SpinnerIcon />}
      <img
        id={id}
        className={className}
        src={src}
        style={style}
        onLoad={handleOnLoad}
        onDoubleClick={handleDoubleClick}
      />
    </p>
  );
};

export default Image;
