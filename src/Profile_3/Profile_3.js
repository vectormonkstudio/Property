import React from "react";

const Profile_3 = ({ onScroll }) => {

  return (
    <div className="pt-24">


      <div className="h-screen bg-color5 bg-opacity-30">
        <div className=" w-1/2 mx-auto pt-10">
          <div className="flex justify-between bg-color5 pl-14 pr-8 py-3 rounded-t-lg">
            <span className="text-white font-medium text-lg">Update profile picture</span>
            <img className="hover:opacity-30 cursor-pointer" src="profile/Group 9679.svg" />
          </div>

          <div className="bg-white py-20 flex justify-center">
              <label for="dropzone-file" className="flex flex-col items-center justify-center rounded cursor-pointer">
                <div className="flex flex-col items-center justify-center px-20 py-10 rounded-lg shadow-lg space-y-12 border">
                  <img src="profile/Group 9672.svg"/>
                  <h2 className="text-color5 text-opacity-30 hover:text-opacity-100">Update picture</h2>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Profile_3;
