import React from "react";
import { Link } from "react-router-dom";
import thali from "../Images/thali.jpg";
import { linkedin_URL } from "./Config";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center border h-[630px]">
        <div className="w-[800px]">
          <h1 className="font-bold text-4xl text-gray-600 border mr-5 w-[600px] p-5 bg-green-100 rounded-md">
            'Food is a flavorful journey and a cultural celebration. Let's appreciate
            every bite and value every ingredient, reducing waste along the way'
          </h1>
          <div className="flex  flex-col w-72 justify-between ml-80 mt-5">
            <div className="flex">
              <h2 className="font-semibold">Created By ▶️</h2>
              <Link to={linkedin_URL} className=" ml-2 font-bold text-blue-900">
                Abhilash Tengli
              </Link>
            </div>
            <h1 className="ml-[82px] mt-2">
              ▶️
              <Link className=" ml-2 text-blue-900 font-bold" to="/profile">
                My profile
              </Link>
            </h1>
          </div>
        </div>
        <div>
          <img className="rounded-md" src={thali} />
        </div>
      </div>
    </>
  );
};

export default About;

{
  /* <Profile />
<Link to="/instamart">Go to instamart page</Link> */
}
