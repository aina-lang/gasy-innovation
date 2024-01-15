import React, { useState } from "react";
import defaultAvatar from "../../../assets/images/avatar.jpg";
import { useRef } from "react";
function Edit() {
  const [urlImage, setUrlImage] = useState(null);
  const [imgPicked, setImgPicked] = useState(false);
  const inputRef = useRef(null);
  const onPickerHandleClick = () => {
    inputRef.current.click();
    console.log("je suis la");
  };

  const onPickerHandleChange = (e) => {
    console.log(e.target.files[0]);
    setUrlImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="min-w-[500px]  max-w-[500px]    max-h-screen min-h-[600px]">
      <div className="bg-white p-3 rounded-md shadow-md">
        <div className="h-[90px] w-[90px] bg-red-500 rounded-full overflow-hidden relative ">
          <input
            onChange={onPickerHandleChange}
            type="file"
            name="avatarPick"
            ref={inputRef}
            className="absolute -z-3 hidden"
          />

          <img
            src={urlImage ? urlImage : defaultAvatar}
            onClick={onPickerHandleClick}
            alt="avatar"
            className="w-full h-full rounded-full z-10 cursor-pointer"
            id="avatar"
          />

          <div
            onClick={onPickerHandleClick}
            id="buttonPicker"
            className="h-[90px] w-[90px] bg-blue-500 rounded-full overflow-hidden relative"
          ></div>
        </div>
      </div>
      <div className="bg-white mt-2  p-3 min-w-[450px] min-h-[600px] rounded-md shadow-md">
g
      </div>
    </div>
  );
}

export default Edit;
