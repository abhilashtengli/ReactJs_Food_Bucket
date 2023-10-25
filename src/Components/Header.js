import { Link } from "react-router-dom";
import ImgLogo from "../Images/ImgLogo.png";
import useOnline from "./CustomHooks/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <div className="flex justify-between  items-center shadow-md pr-5">
        <a href="/">
          <img id="logo" className="w-24  ml-6 rounded-md" src={ImgLogo} />
        </a>
        <h1 className=" flex font-bold h-20 items-center px-2 text-4xl ml-72 text-green-800">
          Food Bucket
        </h1>
        <ul className=" flex text-lg  h-20 items-center text-gray-700 font-semibold">
          <li className="flex px-8">
            <Link to="/">Home</Link>
          </li>
          <li className="flex px-8">
            <Link to="/about">About</Link>
          </li>
          {/* <li className="px-8">
            <Link to="/contact">Contact</Link>
          </li> */}
          <li className="px-8 flex">
            <Link className="text-2xl " to="/cart">
              🛒
            </Link>
            <h1 className="text-sm font-semibold bg-green-600 flex items-center justify-center h-5 w-5 p-1 -m-2 rounded-full  text-white">
              {cartItems.length}
            </h1>
          </li>
          {/* <h4>{isOnline ? "🟢 online " : "🔴 offline "}</h4> */}
        </ul>
      </div>
    </>
  );
};

export default Header;
