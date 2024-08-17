import { useState, useRef } from "react";
import ReactDOM from "react-dom";
import imagePlaceholder from "../assets/add-photo.svg";
import Cropper from "react-easy-crop";

function CropDialog({
  dialogRef,
  selectedImage,
  crop,
  zoom,
  onCropChange,
  onZoomChange,
}) {
  return (
    <dialog className="crop-dialog" ref={dialogRef}>
      <div className="crop-container">
        <Cropper
          image={selectedImage}
          crop={crop}
          zoom={zoom}
          aspect={1}
          cropShape="round"
          showGrid={false}
          onCropChange={onCropChange}
          onZoomChange={onZoomChange}
        />
      </div>
      <button
        className="save-crop-btn"
        onClick={() => {
          dialogRef.current.close();
        }}
      >
        Save
      </button>
    </dialog>
  );
}

// -------------------------------------------------------------

export default function Image() {
  const [imageUrl, setImageUrl] = useState(imagePlaceholder);
  const [imageStyle, setImageStyle] = useState({});
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const dialogRef = useRef(null);

  const onCropChange = (crop) => {
    console.log("Crop :");
    console.log(crop);
    setCrop(crop);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

  function saveImage() {
    setImageStyle({
      transform: `translate(${crop.x}, ${crop.y})`,
    });
  }

  async function selectImage(e) {
    const file = e.target.files[0];
    if (validImageType(file)) {
      //   setImage(URL.createObjectURL(file));
      let imageDataUrl = await readFile(file);
      setImageUrl(imageDataUrl);
      dialogRef.current.showModal();
    } else {
      alert(
        "Please choose a photo with the following formats:\njpg - jpeg - png"
      );
    }
  }

  const fileTypes = ["image/jpg", "image/jpeg", "image/png"];

  function validImageType(file) {
    return fileTypes.includes(file.type);
  }

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          console.log(reader.result);
          resolve(reader.result);
        },
        false
      );
      reader.readAsDataURL(file);
    });
  }

  return (
    <>
      <CropDialog
        dialogRef={dialogRef}
        selectedImage={imageUrl}
        crop={crop}
        zoom={zoom}
        onCropChange={onCropChange}
        onZoomChange={onZoomChange}
      />
      <div className="image-container">
        <img
          className="image"
          src={imageUrl}
          alt="Add you image"
          style={imageStyle}
        />
        <label htmlFor="image_file">
          <input
            type="file"
            name=""
            id="image_file"
            style={{
              opacity: 0,
            }}
            accept={".jpg, .jpeg, .png"}
            onChange={selectImage}
          />
        </label>
      </div>
    </>
  );
}
