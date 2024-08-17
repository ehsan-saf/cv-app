import { useState, useRef } from "react";
import ReactDOM from "react-dom";
import imagePlaceholder from "../assets/add-photo.svg";
import Cropper from "react-easy-crop";

function CropDialog({ dialogRef, selectedImage }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropChange = (crop) => {
    console.log("Crop :");
    console.log(crop);
    setCrop(crop);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedAreaPixels.width / croppedAreaPixels.height);
  };

  const onZoomChange = (zoom) => {
    console.log("Zoom");
    console.log(zoom);
    setZoom(zoom);
  };

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
          onCropComplete={onCropComplete}
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

export default function Image() {
  const [image, setImage] = useState(imagePlaceholder);
  const [imageUrl, setImageUrl] = useState(null);
  const dialogRef = useRef(null);

  async function updateImage(e) {
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
      <CropDialog dialogRef={dialogRef} selectedImage={imageUrl} />
      <div className="image-container">
        <label htmlFor="image_file">
          <img className="image" src={image} alt="Add you image" />
        </label>
        <input
          type="file"
          name=""
          id="image_file"
          style={{
            opacity: 0,
          }}
          accept={".jpg, .jpeg, .png"}
          onChange={updateImage}
        />
      </div>
    </>
  );
}
