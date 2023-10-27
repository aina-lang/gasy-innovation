import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg_landing from "../assets/images/home-background-01.jpg";
import { Button } from "flowbite-react";
import { FiHeart, FiMessageSquare, FiEye, FiArrowRight } from "react-icons/fi";

function TutorielCarrousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  const carouselData = [
    {
      title: "Titre de la Publication 1",
      date: "01/01/2023",
      author: "John Doe",
      views: 1000,
      likes: 500,
      comments: 50,
      image: bg_landing,
    },
    {
      title: "Titre de la Publication 2",
      date: "02/01/2023",
      author: "Jane Smith",
      views: 800,
      likes: 400,
      comments: 60,
      image: bg_landing,
    },
    {
      title: "Titre de la Publication 3",
      date: "03/01/2023",
      author: "Alice Johnson",
      views: 1200,
      likes: 600,
      comments: 45,
      image: bg_landing,
    },
    {
      title: "Titre de la Publication 3",
      date: "03/01/2023",
      author: "Alice Johnson",
      views: 1200,
      likes: 600,
      comments: 45,
      image: bg_landing,
    },
    {
      title: "Titre de la Publication 3",
      date: "03/01/2023",
      author: "Alice Johnson",
      views: 1200,
      likes: 600,
      comments: 45,
      image: bg_landing,
    },
    {
      title: "Titre de la Publication 3",
      date: "03/01/2023",
      author: "Alice Johnson",
      views: 1200,
      likes: 600,
      comments: 45,
      image: bg_landing,
    },
    {
      title: "Titre de la Publication 3",
      date: "03/01/2023",
      author: "Alice Johnson",
      views: 1200,
      likes: 600,
      comments: 45,
      image: bg_landing,
    },
    {
      title: "Titre de la Publication 3",
      date: "03/01/2023",
      author: "Alice Johnson",
      views: 1200,
      likes: 600,
      comments: 45,
      image: bg_landing,
    },
  ];

  return (
    <div className="w-full  py-10  p-5 min-h-[450px] my-12">
      <div className="container mx-auto min-h-full">
        <h1 className="text-2xl font-semibold  text-white  my-12">
          Tutoriels Recentes
        </h1>
        <Slider {...settings} className="text-center px-2 my-10">
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer border-[#dedede] border-2 min-h-[300px] overflow-hidden p-4  rounded-lg max-w-[400px]"
            >
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-2"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="absolute  top-0 left-0 w-full h-full p-5 text-center z-50 text-[#9e9e9e]">
                <div className="absolute top-0 left-0 w-full h-full z-50 p-5  mt-10">
                  <h2 className="text-xl font-semibold mb-2 text[#161616]">{item.title}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste ex voluptatum necessitatibus reprehenderit accusamus
                    possimus.
                  </p>
                  <div className=" my-10  ">
                    <p className="text-sm  mb-2">
                      Publié le {item.date} par {item.author}
                    </p>
                    <div className="flex items-center space-x-4 text-gray-600  justify-center"></div>
                    <div className="flex justify-between items-center text-[#dedede]/86 mt-2 text-[12px]">
                      <div>
                        <span>{item.likes} </span>
                        <span className="text-red-400 ">
                          <FiHeart />
                        </span>
                      </div>
                      <div>
                        <span>{item.views}</span>{" "}
                        <span className="">
                          <FiEye />
                        </span>
                      </div>

                      <div>
                        <span>{item.comments}</span> <FiMessageSquare />{" "}
                      </div>
                      <Button className=" px-2 border-2  rounded-full  bg-teal-800 text-sm shadow-md  font-bold  transition duration-300 hover:bg-transparent text-[#dedede]">
                        Lire la suite <FiArrowRight />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black  to-[#161616]/60 -z-5 "></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TutorielCarrousel;
