"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiLockClosed,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import Dashboard from "./Dashboard/Dashboard";
import { BsArrowLeft, BsArrowRight, BsLine } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../components/CustomLink";
import { FiEdit, FiLogOut } from "react-icons/fi";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const onHandleClickArrows = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="flex flex-row mt-[5.5rem] ">
      <Sidebar
        className=" h-screen min-h-full  transition-all bg-red-500 !important shadow-md"
        collapsed={collapsed}
        color="white"
        style={{ background: "white" }}
      >
        <div className="flex space-x-2 w-full justify-end my-2 font-bold text-3xl">
          {collapsed && (
            <BsArrowRight
              className=" cursor-pointer"
              onClick={onHandleClickArrows}
            />
          )}
          {collapsed === false && (
            <BsArrowLeft
              className=" cursor-pointer"
              onClick={onHandleClickArrows}
            />
          )}
        </div>
        <Sidebar.Items className="">
          <Sidebar.ItemGroup className="flex flex-col">
            <CustomLink
              icon={<HiChartPie className="text-gray-600 inline text-[20px] " />}
              Title={"Dashboard"}
              url={"../backoffice/dashboard"}
              titleHidden={collapsed}
            />
            <CustomLink
              icon={<HiUser className="text-gray-600 inline text-[20px] " />}
              Title={"Profil"}
              url={"../backoffice/profil"}
              titleHidden={collapsed}
            />
            <CustomLink
              icon={<HiInbox className="text-gray-600 inline text-[20px] " />}
              Title={"Messages"}
              url={"../backoffice/inbox"}
              titleHidden={collapsed}
            />
            <CustomLink
              icon={<FiEdit className="text-gray-600 inline text-[20px] " />}
              Title={"Mes Publications"}
              url={"../backoffice/post"}
              titleHidden={collapsed}
            />

            <CustomLink
              icon={<FiLogOut className="text-gray-600 inline text-[20px] " />}
              Title={"Se deconnecter"}
              url={"../backoffice/logout"}
              titleHidden={collapsed}
            />
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <main className="min-h-screen  p-5 flex-grow bg-gray-100">{children}</main>
    </div>
  );
}
