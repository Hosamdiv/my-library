import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegUserCircle,
  FaRegWindowClose,
  FaTwitter,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="sticky top-0 z-20 ">
        {/* Contact me */}
        <div className="border-b bg-white text-black ">
          <div className="flex items-center justify-between w-[90%] m-auto py-3">
            <h1 className="flex items-center font-semibold">
              <span className="mr-1">
                <BsTelephone />
              </span>
              +01024717352
            </h1>
            <div className="flex space-x-2 text-2xl">
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>
        {/* NavBar */}
        <div className="hidden md:block sticky top-0 bg-white text-black">
          <nav className="flex items-center justify-between w-[90%] m-auto py-3 font-semibold">
            <h1 className="text-3xl font-bold">Logo</h1>
            <ul className="flex space-x-7">
              {navbar.map((e) => (
                <li>
                  <NavLink to="">{e.name}</NavLink>
                </li>
              ))}
            </ul>
            <div className="flex">
              <div></div>
              <Link to={""}>
                <button className="cursor-pointer">
                  <FaRegUserCircle className="text-3xl" />
                </button>
              </Link>
            </div>
          </nav>
        </div>
        {/* Responsive NavBar */}
        <div className="py-2 border-black">
          <button
            onClick={() => setShowModal(true)}
            className="ml-6 text-3xl text-black border-2 rounded md:hidden"
          >
            <IoMenu />
          </button>
          {showModal && (
            <div className="fixed inset-0  bg-[#282830e8] z-20">
              <ul
                className="w-[85%] mx-auto mt-[2rem]
        rounded-2xl bg-[#18181b] px-[2rem] py-[1rem]"
              >
                <li className="text-right mb-7 flex justify-between">
                  <h1 className="text-3xl font-bold">Logo</h1>
                  <button
                    className=" text-3xl"
                    onClick={() => setShowModal(false)}
                  >
                    <FaRegWindowClose />
                  </button>
                </li>
                {navbar.map((e) => (
                  <li
                    className={`border-b-none pb-4 pt-2 
                    hover:text-cyan-500 hover:text-xl transition-all duration-300 ease-in-out
                  `}
                  >
                    <Link to="">{e.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
const navbar = [
  { name: "Home", link: "" },
  { name: "Magazines", link: "" },
  { name: "Books", link: "" },
  { name: "TextBooks", link: "" },
  { name: "Product", link: "" },
];
