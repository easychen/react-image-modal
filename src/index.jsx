import React, { useState } from "react";
import ImageModal from "./ImageModal.jsx";
import "./styles.css";

function App({
  className,
  src,
  srcSet,
  alt,
  showRotation = true,
  showDownload = false,
  showZoom = true,
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <div>
      <img
        className={className}
        style={{
          cursor: "pointer",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
        src={src}
        srcSet={srcSet}
        alt={alt}
        onClick={() => setIsOpenModal(!isOpenModal)}
      />
      {isOpenModal && (
        <ImageModal
          onCloseModal={onCloseModal}
          src={src}
          srcSet={srcSet}
          alt={alt}
          showRotation={showRotation}
          showDownload={showDownload}
          showZoom={showZoom}
        />
      )}
    </div>
  );
}
export default App;
