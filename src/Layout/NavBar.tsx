import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegUserCircle,
  FaRegWindowClose,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { RiTwitterXFill } from "react-icons/ri";

const NavBar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="sticky top-0 z-20 ">
        {/* Contact me */}
        <div className="border-b bg-white text-black">
          <div className="flex items-center justify-between w-[90%] m-auto py-3">
            <h1 className="flex items-center font-semibold">
              <span className="mr-1 text-2xl text-green-700">
                <BsTelephone />
              </span>
              +01024717352
            </h1>
            <div className="flex space-x-2 text-2xl">
              <span className="text-[#0866ff]">
                <FaFacebook />
              </span>
              <span className="text-red-700">
                <FaInstagram />
              </span>
              <span>
                <RiTwitterXFill />
              </span>
              <span className="text-[#0A66C2]">
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>
        {/* NavBar */}
        <div
          className="hidden md:block sticky top-0 bg-white
        text-black"
        >
          <nav
            className="flex items-center justify-between w-[90%] 
          m-auto py-2 font-semibold"
          >
            <h1 className="text-3xl font-bold">Logo</h1>
            <ul className="flex space-x-3 text-[1.1rem] ">
              {navbar.map((e, i) => (
                <li
                  key={i}
                  className="hover:text-blue-700 hover:-translate-y-1 transition delay-150
                p-2 hover:bg-gray-300 rounded-2xl duration-300 ease-in-out"
                >
                  <NavLink to={e.link}>{e.name}</NavLink>
                </li>
              ))}
            </ul>
            <div className="flex">
              <Link to={"/login"}>
                <button
                  className="cursor-pointer text-3xl
                hover:text-green-700 hover:-translate-y-1 duration-300 ease-in-out"
                >
                  <FaRegUserCircle />
                </button>
              </Link>
            </div>
          </nav>
        </div>
        {/* Media NavBar */}
        <div className="py-2 border-black bg-white">
          <div
            className="flex items-center justify-between w-[90%] m-auto
          md:hidden
          "
          >
            <button
              onClick={() => setShowModal(!showModal)}
              className=" text-3xl text-black border-2 rounded 
            hover:text-red-700 transition delay-150 duration-300 ease-in-out
            hover:-translate-y-1 hover:scale-110"
            >
              <IoMenu />
            </button>
            <Link to={"/login"}>
              <button
                className="cursor-pointer text-3xl
                hover:text-green-700 hover:-translate-y-1 duration-300 ease-in-out"
              >
                <FaRegUserCircle />
              </button>
            </Link>
          </div>

          <div
            className={`fixed inset-0 bg-[#282830e8] z-20 flex justify-center items-center 
        transition-all duration-500 ease-in-out
        ${
          showModal
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
          >
            <ul className="w-[85%] mx-auto mt-[2rem] rounded-2xl bg-[#18181b] px-[2rem] py-[1rem] transition-all duration-500 ease-in-out">
              <li className="text-right mb-7 flex justify-between">
                <h1 className="text-3xl text-white font-bold">Logo</h1>
                <button
                  className="text-3xl text-white hover:text-red-700
                  transition duration-300 ease-in-out
              hover:-translate-y-1 hover:scale-110"
                  onClick={() => setShowModal(!showModal)}
                >
                  <FaRegWindowClose />
                </button>
              </li>

              {navbar.map((e, idx) => (
                <li
                  key={idx}
                  className={`pb-4 pt-2 text-white font-semibold transition-all duration-300 ease-in-out
              ${idx === navbar.length - 1 ? "" : "border-b border-gray-600"}
              hover:text-blue-700 hover:-translate-y-1`}
                >
                  <NavLink to={e.link}
                  onClick={() =>setShowModal(!showModal)}
                  >{e.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
const navbar = [
  { name: "Home", link: "/" },
  { name: "Magazines", link: "/magazines" },
  { name: "Books", link: "/books" },
  { name: "Text Books", link: "/textbooks" },
  { name: "Product", link: "/product" },
];
