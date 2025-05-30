import React from "react";
import { Carousel } from "react-bootstrap";
import main from "../../assets/images/team1.jpg";
import CarouselButton from "../Button/CarouselButton";

export default function Carousels() {
  const products = [
    "We know how large objects will act, but things on a small scale just do not act that way.",
    " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos vero debitis illum non fuga architecto iste odio laborum expedita!",
    "Lorem ipsum dolor sit amet. Aliquid impedit possimus ad dolore mollitia, accusamus ratione dolores magni at.",
  ];
  return (
    <div className="h-[640px] 2xl:h-[815px] overflow-hidden">
      <Carousel indicators={true} controls={true} className="h-full">
        {products.map((item, index) => (
          <Carousel.Item  key={index}>
            <img
              src={main}
              alt="First slide"
              className="h-[640px] relative 2xl:h-full sm:w-full object-cover brightness-50"
            />

            <div className="absolute top-36 sm:top-96 sm:left-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2 z-16 flex justify-between gap-10 items-center flex-col text-white">
              <h1 className="font-bold">GROCERIES DELIVERY</h1>
              <h4 className="w-[89%] text-center font-normal">{item}</h4>
              <CarouselButton buttonName={"Start Now"} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
