import React from "react";

function Connections() {
  return (
    <>
      <p className="text-lg pb-2">You Have 0 Connections!</p>
      <p>Here are similar creators...</p>
        <div className="flex justify-center pt-12">
      <ul className="w-full items-center md:w-3/4 m-2 lg:w-[500px] flex justify-between mb-8 space-x-3 overflow-x-scroll stories bg-white p-4 rounded drop-shadow-xl">
        <li className="flex flex-none flex-col items-center space-y-1">
          <div>
            <a href="#" className="block bg-white p-1 rounded-full relative">
              <img
                src="https://picsum.photos/101/"
                alt="Omid Armin"
                className="w-18 h-18 rounded-full object-cover"
              />
              <p className="text-center">didi.1919</p>
            </a>
          </div>
        </li>
        <li className="flex flex-none flex-col items-center space-y-1">
          <div>
            <a href="#" className="block bg-white p-1 rounded-full relative">
              <img
                src="https://picsum.photos/102/"
                alt="Omid Armin"
                className="w-18 h-18 rounded-full object-cover"
              />
              <p className="text-center">BrightBWith</p>
            </a>
          </div>
        </li>
        <li className="flex flex-none flex-col items-center space-y-1">
          <div>
            <a href="#" className="block bg-white p-1 rounded-full relative">
              <img
                src="https://picsum.photos/107/"
                alt="Omid Armin"
                className="w-18 h-18 rounded-full object-cover"
              />
              <p className="text-center">2freeCool</p>
            </a>
          </div>
        </li>
        <li className="flex flex-none flex-col items-center space-y-1">
          <div>
            <a href="#" className="block bg-white p-1 rounded-full relative">
              <img
                src="https://picsum.photos/105/"
                alt="Omid Armin"
                className="w-18 h-18 rounded-full object-cover"
              />
              <p className="text-center">piecanelyre</p>
            </a>
          </div>
        </li>
        <li className="flex flex-none flex-col items-center space-y-1">
          <div>
            <a href="#" className="block bg-white p-1 rounded-full relative">
              <img
                src="https://picsum.photos/104/"
                alt="Omid Armin"
                className="w-18 h-18 rounded-full object-cover"
              />
              <p className="text-center">beachkyanite</p>
            </a>
          </div>
        </li>
        <li className="flex flex-none flex-col items-center space-y-1">
          <div>
            <a href="#" className="block bg-white p-1 rounded-full relative">
              <img
                src="https://picsum.photos/103/"
                alt="Omid Armin"
                className="w-18 h-18 rounded-full object-cover"
              />
              <p className="text-center">antbeforesunset</p>
            </a>
          </div>
        </li>
        <li className="flex flex-none flex-col items-center space-y-1">
          <div>
            <a href="#" className="block bg-white p-1 rounded-full relative">
              <img
                src="https://picsum.photos/102/"
                alt="Omid Armin"
                className="w-18 h-18 rounded-full object-cover"
              />
              <p className="text-center">barleybeelime</p>
            </a>
          </div>
        </li>
      </ul>
      </div>
    </>
  );
}

export default Connections;
