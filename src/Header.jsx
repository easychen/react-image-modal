import React from "react";
import {
  ZoomInIcon,
  ZoomOutIcon,
  DownloadIcon,
  CloseIcon,
  RotateIcon,
} from "./Icons.jsx";

const Header = ({
  src,
  zoom,
  onCloseModal,
  toggleRotate,
  toggleZoom,
  showRotation,
  showDownload,
  showZoom,
}) => {
  return (
    <div className="__react_image_header__">
      <div className="__react_header_flex">
        {showDownload && (
          <span>
            <a href={src} download target="_blank">
              <DownloadIcon />
            </a>
          </span>
        )}
        {showZoom && (
          <span onClick={toggleZoom}>
            {zoom ? <ZoomOutIcon /> : <ZoomInIcon />}
          </span>
        )}
        {showRotation && (
          <span onClick={toggleRotate}>
            <RotateIcon />
          </span>
        )}
        <span onClick={onCloseModal}>
          <CloseIcon />
        </span>
      </div>
    </div>
  );
};

export default Header;
