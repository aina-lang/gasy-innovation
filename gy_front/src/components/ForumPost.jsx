import { Button, Card } from "flowbite-react";
import React, { useState } from "react";
import bg_landing from "../assets/images/home-background-01.jpg";
import { FiArrowRight, FiEye, FiHeart, FiMessageSquare } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
function ForumPost() {

    const [likePressed, setLikePressed] = useState(false);

    return (
        <div className=" flex flex-col justify-center p-20 mx-auto">
            <div className="grid grid-cols-2 mb-20  items-center justify-center shadow-md  overflow-hidden bg-white mx-auto rounded-md" >
                <div className="overflow-hidden relative">

                    <img src={bg_landing}
                        alt=""
                        className="img" />
                    <div className=" absolute bottom-0 left-0 w-full  h-full flex hover-effect items-end p-5 bg-gradient-to-t from-black to-white/20 ">
                        <div className="target  flex items-center justify-center flex-col ">
                            <span className="text-red-400 text-[40px] mb-10 cursor-pointer " onClick={() => { setLikePressed(!likePressed) }}>
                                {likePressed === false ? <FiHeart className="hover:scale-105" /> : <FaHeart className="hover:scale-105" />}
                            </span>
                            <Button className="hover:text-white  cursor-pointer text-[1rem] rounded-full  bg-white text-teal-600   shadow-md  font-bold  transition duration-300 hover:bg-transparent  ">
                                Lire la suite <FiArrowRight />
                            </Button>
                        </div>
                        <div className="flex justify-start space-x-10 pl-3 items-center  w-full text-white  mt-2 text-[12px] ">
                            <div className="flex space-x-2 items-center text-xl">
                                <span>30 </span>
                                <span className="text-red-400 ">
                                    <FiHeart />
                                </span>
                            </div>
                            <div className="flex space-x-1 items-center text-xl">
                                <span>120</span>{" "}
                                <span className="">
                                    <FiEye />
                                </span>
                            </div>

                            <div className="flex space-x-1 items-center text-xl">
                                <span>45</span> <FiMessageSquare />{" "}
                            </div>
                            {/* <Button className="hover:text-white border-2  rounded-full  bg-white text-teal-600 border-teal-600 text-sm shadow-md  font-bold  transition duration-300 hover:bg-transparent ">
                                Lire la suite <FiArrowRight />
                            </Button> */}
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-row gap-4  h-full ">
                    <div className="p-5">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>Noteworthy technology acquisitions 2021</p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                Here are the biggest enterprise technology acquisitions of 2021 so
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate sit impedit corrupti officia quam, eaque repellat dolorum enim! Eos recusandae blanditiis odit iste saepe aspernatur in repudiandae sunt illum!                                                    far, in reverse chronological order.
                            </p>
                        </p>
                    </div>
                    <div className="p-5 py-0 h-full flex items-end">
                        <form className="w-full">
                            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                    <label for="comment" class="sr-only">Your comment</label>
                                    <textarea id="comment" rows="2" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                                </div>
                                <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">

                                    <div class="flex pl-0 space-x-1 sm:pl-2">
                                        <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                            </svg>
                                            <span class="sr-only">Attach file</span>
                                        </button>
                                        <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                            </svg>
                                            <span class="sr-only">Set location</span>
                                        </button>
                                        <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                            </svg>
                                            <span class="sr-only">Upload image</span>
                                        </button>
                                    </div>
                                    <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-teal-700 rounded-lg focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800">
                                        Commenter
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <div className="grid grid-cols-2 my-20 gap-5 ">
                <Card imgSrc={bg_landing}>
                    <div className="p-5">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>Noteworthy technology acquisitions 2021</p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                Here are the biggest enterprise technology acquisitions of 2021 so
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate sit impedit corrupti officia quam, eaque repellat dolorum enim! Eos recusandae blanditiis odit iste saepe aspernatur in repudiandae sunt illum!                                                    far, in reverse chronological order.
                            </p>
                        </p>
                    </div>
                </Card>
                <Card imgSrc={bg_landing}>
                    <div className="p-5">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>Noteworthy technology acquisitions 2021</p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                Here are the biggest enterprise technology acquisitions of 2021 so
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate sit impedit corrupti officia quam, eaque repellat dolorum enim! Eos recusandae blanditiis odit iste saepe aspernatur in repudiandae sunt illum!                                                    far, in reverse chronological order.
                            </p>
                        </p>
                    </div>
                </Card>
                <Card imgSrc={bg_landing}>
                    <div className="p-5">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>Noteworthy technology acquisitions 2021</p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                Here are the biggest enterprise technology acquisitions of 2021 so
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate sit impedit corrupti officia quam, eaque repellat dolorum enim! Eos recusandae blanditiis odit iste saepe aspernatur in repudiandae sunt illum!                                                    far, in reverse chronological order.
                            </p>
                        </p>
                    </div>
                </Card>
                <Card imgSrc={bg_landing}>
                    <div className="p-5">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>Noteworthy technology acquisitions 2021</p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                Here are the biggest enterprise technology acquisitions of 2021 so
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate sit impedit corrupti officia quam, eaque repellat dolorum enim! Eos recusandae blanditiis odit iste saepe aspernatur in repudiandae sunt illum!                                                    far, in reverse chronological order.
                            </p>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default ForumPost;
