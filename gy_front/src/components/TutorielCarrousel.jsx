import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg_landing from "../assets/images/home-background-01.jpg";
import { Button } from "flowbite-react";

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
        <h1 className="text-3xl font-semibold text-center  my-12">
          Tutoriels Recentes
        </h1>
        <Slider {...settings} className="text-center px-2">
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer bg-white min-h-[300px] overflow-hidden p-4 shadow-lg rounded-lg max-w-[400px]"
            >
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-2"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="absolute  top-0 left-0 w-full h-full p-5 text-center z-50 text-white/80">
                <div className="absolute top-0 left-0 w-full h-full z-50 p-5  mt-10">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
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
                    <div className="flex justify-between items-center text-white/86 mt-2 text-[12px]">
                      <div>
                        <span>{item.likes} </span>
                        <span className="text-red-400">J'aime</span>
                      </div>
                      <div>
                        <span>{item.views}</span> <span className="">Vues</span>
                      </div>

                      <div>
                        <span>{item.comments}</span> Commentaires
                      </div>
                      <Button className="border-teal-800 py-0 rounded-full border-2 bg-gradient-to-tr from-teal-800 bg-transparent shadow-md  text-whie hover:text-white">
                        <p>Read more</p>
                        {/* <SeeSourceCodeForSVG /> */}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-teal-400/10  -z-5 "></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TutorielCarrousel;
