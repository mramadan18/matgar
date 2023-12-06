import React from "react";

function Previews() {
  return (
    <div className="flex items-center justify-center w-full mt-6">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <p className="mb-2 text-lg text-black">
            <span>اسحب الشعار هنا أو اختره من الجهاز</span>
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
}

export default Previews;
