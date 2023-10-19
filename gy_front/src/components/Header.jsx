import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-40 p-2">
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          {/* <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2  p-2">
          <div className="xl:flex lg:flex md:flex flex-row space-y-4 hidden md:space-y-0 md:space-x-4 mr-3 ">
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
            >
              Se connecter
            </Link>
            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm"
            >
              S'inscrire
            </Link>
          </div>

          {/* <Dropdown
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
          </Dropdown> */}
          <Navbar.Toggle className="ml-3 " />
        </div>
        {/* <div className=" bg-gray-900 w-full h-screen"> */}
        <Navbar.Collapse  className=" bg-white pt-5" >
          <span className="flex space-x-2 justify-between md:hidden xl:hidden lg:hidden my-2">
            <Link
              to="/login"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm"
            >
              Se connecter
            </Link>
            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm"
            >
              S'inscrire
            </Link>
          </span>
          <Link
            to="/"
            className="text-center p-3 hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-center p-3 hover:bg-blue-500 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            to="#"
            className="text-center p-3 hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Services
          </Link>
          <Link
            to="#"
            className="text-center p-3 hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Pricing
          </Link>
          <Link
            to="#"
            className="text-center p-3 hover:bg-blue-500 hover:text-white transition duration-300"
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
