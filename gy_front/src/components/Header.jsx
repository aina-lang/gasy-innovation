import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { auth_token } = useAuth();
  return (
    <div className="fixed top-0 left-0 w-full z-40   shadow-md">
      <Navbar fluid className="bg-[#161616] p-2 py-4">
        <Navbar.Brand href="https://flowbite-react.com">
          {/* <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-[#dedede]">
            <span className="text-teal-800 font-bold ">GASY</span>
            <span className="text-[#dedede]"> | IT</span>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2  p-2" id="auth_container">
          <div className="xl:flex lg:flex md:flex flex-row space-y-4 hidden md:space-y-0 md:space-x-4 mr-3 ">
            <Link
              to="/login"
              className="bg-teal-700 cache rounded-full shadow-md hover:bg-teal-800 text-[#dedede] font-bold py-2 px-4  text-sm"
            >
              Se connecter
            </Link>
            <Link
              to="/register"
              className="bg-[#dedede] cache hover:border-0  shadow-md border-gray-400 hover:bg-teal-800 hover:text-[#dedede] text-teal-800 font-bold py-2 px-4 rounded-full text-sm"
            >
              S'inscrire
            </Link>

            <Link
              to="/login"
              className="bg-teal-700 show hidden h-[30px] w-[30px] hover:bg-teal-700 text-[#dedede] font-bold p-2 rounded-md text-sm"
            ></Link>
            <Link
              to="/register"
              className="bg-green-700 show hidden h-[30px] w-[30px] hover:bg-green-700 text-[#dedede] font-bold py-2 px-4 rounded-md text-sm"
            ></Link>
          </div>

          {auth_token && (
            <Dropdown
              className="mx-3"
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          )}
          <Navbar.Toggle className="ml-3 " />
        </div>
        {/* <div className=" bg-gray-900 w-full h-screen"> */}
        <Navbar.Collapse className="  ">
          <span className="flex space-x-2 justify-between md:hidden xl:hidden lg:hidden my-2">
            <Link
              to="/login"
              className="bg-red-700 hover:bg-red-700 text-[#dedede] font-bold py-2 px-4 rounded text-sm"
            >
              Se connecter
            </Link>
            <Link
              to="/register"
              className="bg-green-700 hover:bg-green-700 text-[#dedede] font-bold py-2 px-4 rounded text-sm"
            >
              S'inscrire
            </Link>
          </span>
          <Link
            to="/"
            className="text-center text-[#dedede] p-3 hover:bg-teal-700 hover:text-[#dedede] transition duration-300 rounded-full active:bg-teal-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-center text-[#dedede] p-3 hover:bg-teal-700 hover:text-[#dedede] transition duration-300 rounded-full"
          >
            About
          </Link>
          <Link
            to="#"
            className="text-center text-[#dedede] p-3 hover:bg-teal-700 hover:text-[#dedede] transition duration-300 rounded-full"
          >
            Services
          </Link>
          <Link
            to="#"
            className="text-center text-[#dedede] p-3 hover:bg-teal-700 hover:text-[#dedede] transition duration-300 rounded-full"
          >
            Pricing
          </Link>
          <Link
            to="#"
            className="text-center text-[#dedede]  p-3 hover:bg-teal-700 hover:text-[#dedede] transition duration-300 rounded-full"
          >
            Contact
          </Link>
        </Navbar.Collapse>
        {/* </div> */}
      </Navbar>
    </div>
  );
}

export default Header;
