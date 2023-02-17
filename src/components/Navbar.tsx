import React from "react";

function Navbar() {
  return (
    <>
      <div className="py-4 bg-white border-b">
        <div className="mx-12 xl:mx-[450px]">
          <ul className="flex justify-between">
            <li className="py-[4px]">
              <img
                src="https://storage.googleapis.com/komon-website/logo-komon-dark.svg"
                className="w-[118px]"
                alt=""
              />
            </li>
            <li></li>
            <li>
              <img
                src="https://storage.googleapis.com/komon-client-production/0wugan9yf60gmg1cv9h8qet9v40m"
                className="w-10 h-10 rounded-full brightness-[65%] hover:brightness-100 cursor-pointer"
                alt="proflepic"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
