import abhipc from "../Images/abhipc.jpg";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import { Link } from "react-router-dom";
import { linkedin_URL } from "./Config";
import { github_URL } from "./Config";
import { Food_Bucket_GitHub_Url } from "./Config";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center border mt-6 bg-slate-200 py-10">
        <div className=" bg-white rounded-md shadow-blackxl flex items-center justify-center flex-col p-5 ">
          <img className="w-72 h-72 rounded-full bg-green-200" src={abhipc} />
          <h1 className="text-2xl text-gray-700 font-bold">
            Hello I'm Abhilash Tengli
          </h1>
          <h1 className="font-semibold text-lg my-1 text-gray-700">
            Full Stack Developer
          </h1>
          <div className="flex p-2 font-semibold text-gray-900 my-1">
            <h2 className="px-2 border mx-1 bg-blue-200 rounded-md py-1">
              Java
            </h2>
            <h2 className="px-2 border mx-1 bg-blue-200 rounded-md py-1">
              Spring Boot
            </h2>
            <h2 className="px-2 border mx-1 bg-blue-200 rounded-md py-1">
              HTML
            </h2>
            <h2 className="px-2 border mx-1 bg-blue-200 rounded-md py-1">
              CSS
            </h2>
            <h2 className="px-2 border mx-1 bg-blue-200 rounded-md py-1">
              JavaScript
            </h2>
            <h2 className="px-2 border mx-1 bg-blue-200 rounded-md py-1">
              React.js
            </h2>
          </div>
          <div className="flex items-center">
            <Link to={linkedin_URL}>
              <img className="w-10 h-10 m-3" src={linkedin} />
            </Link>
            <Link to={github_URL}>
              <img className="w-10 h-10 m-3" src={github} />
            </Link>

            <h1 className="border m-3 text-green-900 font-bold p-1 bg-green-200 rounded-md">
              <Link to={Food_Bucket_GitHub_Url}>Food Bucket GitHub Repo</Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
