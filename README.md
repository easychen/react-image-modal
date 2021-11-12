# react-image-modal

[![npm package][npm-badge]][npm]

A _lightweight_ React component providing modal image Lightbox.

## Features

- Only _3 kB_ when gzipped.
- Zero dependencies.
- For React 16.x and 17.x.
- Esc, Enter & click outside the image close the lightbox
- User can zoom & move the image or download the highest quality one
- Download and Zoom -buttons can be hidden.
- Image alt shown as title of lightbox

## Simple API

```js
import ModalImage from "react-image-modal";

<ModalImage
  showDownload={true}
  showRotation={false}
  showZoom={false}
  src="image"
  alt="cat image!"
  className="string"
/>;
```

[npm-badge]: https://img.shields.io/npm/v/react-modal-image.svg
[npm]: https://www.npmjs.com/package/react-image-modal
