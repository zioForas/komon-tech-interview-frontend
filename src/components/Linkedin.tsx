import React, { useState } from "react";
type LinkedinData = {
  username: string;
};

const LinkedinSection = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [LinkedinData, setLinkedinData] = useState<LinkedinData | null>(
    null
  );
  const [profileUrl, setProfileUrl] = useState<string>("");

  const handleDisconnect = () => {
    // Simulate a call to the backend to disconnect the user's Linkedin account
    // Set isConnected to false and clear the user's Linkedin data from the state
    setIsConnected(false);
    setLinkedinData(null);
  };

  const handleProfileUrlChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfileUrl(event.target.value);
  };

  const username = profileUrl ; // extract username from profile URL
  const formattedUsername =
    username.length > 18 ? `${username.slice(28, -1)}`  : username; //if the username is greater than 15 characters it slices the url, else it shows the whole name

  const handleConnectToProfile = () => {
    // Simulate a call to the backend to connect the user's Linkedin account using the profile URL
    // Set isConnected to true and store the user's Linkedin data in the state
     if (profileUrl === "" || profileUrl.length < 17) {
      return alert("Please enter a URL"); // do nothing if profileUrl is empty
    }
    setIsConnected(true);
    setLinkedinData({
      username: formattedUsername,
    });
  };

  return (
    <div className="">
      {isConnected ? (
        <div className="flex items-center flex-row  justify-start md:ml-8">
          <p className="font-bold mr-2 ">
            {" "}
            <span className="font-normal mr-1">Linkedin Profile linked:</span>{" "}
            {LinkedinData?.username}
          </p>
          <button
            className="w-fit border text-red-500 border-red-400 hover:border-red-600 hover:text-red-600 hover:font-semibold rounded-md px-1 py-1"
            onClick={handleDisconnect}
          >
            Disconnect account
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-row justify-start sm:justify-evenly">
            <label className="font-[600] text-sm sm:text-lg">
              Enter your Linkedin profile or URL:
              <input
                className="border border-gray-400 focus:outline-none focus:border-gray-700 rounded-3xl py-1 px-2 lg:w-72 md:w-36 w-24 mx-1 lg:ml-8 text-sm font-sans font-[400] text-gray-900"
                type="text"
                value={profileUrl}
                onChange={handleProfileUrlChange}
              />
            </label>
            <div
              className=" cursor-pointer lg:mr-12 Linkedin mt-[1px] flex justify-center w-7 h-7 tracking-wide font-semibold text-white text-center rounded-xl"
              onClick={handleConnectToProfile}
            >
              {" "}
              <svg className="fill-white h-6 mt-[2px] w-6 ">
                <path d="M12.11,15.39,8.23,19.27a2.52,2.52,0,0,1-3.5,0,2.47,2.47,0,0,1,0-3.5l3.88-3.88a1,1,0,1,0-1.42-1.42L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33l3.89-3.88a1,1,0,0,0-1.42-1.42ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L10.47,7.19a1,1,0,1,0,1.42,1.42l3.88-3.88a2.52,2.52,0,0,1,3.5,0,2.47,2.47,0,0,1,0,3.5l-3.88,3.88a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3.88-3.89A4.49,4.49,0,0,0,20.69,3.31ZM8.83,15.17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.92-4.92a1,1,0,1,0-1.42-1.42L8.83,13.75A1,1,0,0,0,8.83,15.17Z" />
              </svg>{" "}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LinkedinSection;
