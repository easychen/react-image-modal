import React, { useState, useEffect } from "react";
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
  const handleKeyDown = (event) => {
    // ESC or ENTER closes the modal
    if (event.keyCode === 27 || event.keyCode === 13) {
      setIsOpenModal(false);
    }
  };
  useEffect(() => {
    if (document) {
      document.addEventListener("keydown", handleKeyDown, false);
      return () => {
        document.removeEventListener("keydown", handleKeyDown, false);
      };
    }
  }, []);

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
