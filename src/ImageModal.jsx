import React, { useRef, useState } from "react";
import Header from "./Header.jsx";
import Image from "./Image.jsx";

const ImageModal = ({
  onCloseModal,
  src,
  showRotation,
  showDownload,
  showZoom,
}) => {
  const [rotationDeg, setRotationDeg] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [move, setMove] = useState({ x: 0, y: 0 });
  const [moveStart, setMoveStart] = useState(undefined);
  const imageRef = useRef(null);

  const toggleRotate = (event) => {
    event.preventDefault();
    if (rotationDeg === 360) {
      setRotationDeg(90);
      return;
    }
    setRotationDeg(rotationDeg + 90);
  };

  const toggleZoom = (e) => {
    e.preventDefault();
    setZoom(!zoom);
    setMove({ x: 0, y: 0 });
  };

  const getCoordinatesIfOverImg = (event) => {
    const point = event.changedTouches ? event.changedTouches[0] : event;
    if (point.target.id !== "react-modal-image-img") {
      // the img was not a target of the coordinates
      return;
    }
    const dim = imageRef.current.getBoundingClientRect();
    const x = point.clientX - dim.left;
    const y = point.clientY - dim.top;
    return { x, y };
  };

  const handleMouseDownOrTouchStart = (event) => {
    event.preventDefault();
    if (event.touches && event.touches.length > 1) {
      // more than one finger, ignored
      return;
    }
    const coords = getCoordinatesIfOverImg(event);
    if (!coords) {
      // click outside the img => close modal
      onCloseModal();
    }
    if (!zoom) {
      // do not allow drag'n'drop if zoom has not been applied
      return;
    }
    setMoveStart({
      x: coords.x - move.x,
      y: coords.y - move.y,
    });
  };

  const handleMouseUpOrTouchEnd = (event) => {
    setMoveStart(undefined);
  };

  const handleMouseMoveOrTouchMove = (event) => {
    event.preventDefault();

    if (!zoom || !moveStart) {
      // do not allow drag'n'drop if zoom has not been applied
      // or if there has not been a click
      return;
    }

    if (event.touches && event.touches.length > 1) {
      // more than one finger, ignored
      return;
    }

    const coords = getCoordinatesIfOverImg(event);

    if (!coords) {
      return;
    }

    setMove({
      x: coords.x - moveStart.x,
      y: coords.y - moveStart.y,
    });
  };

  return (
    <div>
      <Header
        onCloseModal={onCloseModal}
        toggleRotate={toggleRotate}
        toggleZoom={toggleZoom}
        src={src}
        zoom={zoom}
        showRotation={showRotation}
        showDownload={showDownload}
        showZoom={showZoom}
      />
      <div className="__react_image_modal">
        <div
          className="__react_image_content__"
          ref={imageRef}
          onMouseDown={handleMouseDownOrTouchStart}
          onTouchStart={handleMouseDownOrTouchStart}
          onMouseUp={handleMouseUpOrTouchEnd}
          onTouchEnd={handleMouseUpOrTouchEnd}
          onMouseMove={handleMouseMoveOrTouchMove}
          onTouchMove={handleMouseMoveOrTouchMove}
        >
          {!zoom && (
            <Image
              id="react-modal-image-img"
              className="__react_image_medium"
              style={{
                transform: `translate3d(-50%, -50%, 0) rotate(${rotationDeg}deg)`,
                WebkitTransform: `translate3d(-50%, -50%, 0) rotate(${rotationDeg}deg)`,
                MsTransform: `translate3d(-50%, -50%, 0) rotate(${rotationDeg}deg)`,
              }}
              src={src}
              handleDoubleClick={toggleZoom}
            />
          )}
          {zoom && (
            <Image
              id="react-modal-image-img"
              className="__react_image_large"
              style={{
                transform: `translate3d(-50%, -50%, 0) translate3d(${move.x}px, ${move.y}px, 0) rotate(${rotationDeg}deg)`,
                WebkitTransform: `translate3d(-50%, -50%, 0) translate3d(${move.x}px, ${move.y}px, 0) rotate(${rotationDeg}deg)`,
                MsTransform: `translate3d(-50%, -50%, 0) translate3d(${move.x}px, ${move.y}px, 0) rotate(${rotationDeg}deg)`,
              }}
              src={src}
              handleDoubleClick={toggleZoom}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
