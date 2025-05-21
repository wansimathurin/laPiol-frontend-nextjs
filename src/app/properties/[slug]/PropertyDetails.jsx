'use client';
import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem,CarouselPrevious,CarouselNext } from "@/components/ui/carousel";
import {Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import {
  ShieldCheck,
  Star,
  User,
  CookingPot,
  Tv2,
  Snowflake,
  Camera,
  Wifi,
  ParkingCircle,
  WashingMachine,
  Wind,
  LampDesk,
  Bell,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import MapView from "./MapView";
const PropertyDetails = ({ property }) => {
  const [mainImage, setMainImage] = useState(property?.xl_picture_url);
  const otherImages = [
     {
      id: 1,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-978600704606406460/original/92f71de9-1153-47bf-a4c3-7bc0377d5303.jpeg?im_w=1200",
    },
    {
      id: 2,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-978600704606406460/original/c982fb4c-ea12-4c39-93b9-51a28c690bd3.jpeg?im_w=720",
    },
    {
      id: 3,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-978600704606406460/original/4690658c-7bca-4cad-8bb8-eed8a3043315.jpeg?im_w=1200",
    },
    {
      id: 4,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-978600704606406460/original/029e0588-f70d-4a8d-a0ea-8142939e186e.jpeg?im_w=1200",
    },
    {
      id: 5,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-978600704606406460/original/c982fb4c-ea12-4c39-93b9-51a28c690bd3.jpeg?im_w=1200",
    },
    {
      id: 6,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-978600704606406460/original/c9c55bfc-05c8-4f02-a651-92fa7edda4cb.jpeg?im_w=720",
    },
    // Add more image URLs as needed
  ];
const [selected, setSelected] = useState(null);
const defaultClassNames = getDefaultClassNames();
  return (
    <div className="relative mt-[15rem] px-5">
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col gap-2 w-[80%] ">
          <div className="h-[600px] w-full flex-1/5a cursor-pointer rounded-md bg-primary flex items-center justify-center overflow-hidden">
            <img
              src={mainImage}
              className="h-full w-full object-cover"
              alt="Property"
            />
          </div>
          <Carousel
            opts={{
              align: "start",             
            }}
            className="w-full max-w-[100%] mx-auto"
          >
            <CarouselContent>
              {otherImages.map((image) => (
                <CarouselItem key={image.id} className="basis-1/3 lg:basis-1/4">
                  <div
                    className="rounded-md overflow-hidden cursor-pointer"
                    onClick={() => setMainImage(image.url)}
                  >
                    <img
                      src={image.url}
                      alt="Property"
                      className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          </Carousel>
          <h3 className="text-4xl font-bold text-primary capitalize mt-5">
            {property.name}
          </h3>
          <div className="flex gap-5 font-semibold items-center">
            <h3>3 guests</h3>.<h3>1 bedroom</h3>.<h3>1 bath</h3>
          </div>
          <div className="flex gap-5 mt-3 font-semibold w-[80%] md:max-w-[50%] h-[100px] ring ring-gray-300 p-5 rounded-lg items-center justify-center">
            <div className="flex flex-col items-center">
              <ShieldCheck size={70} color="gold" />
            </div>
            <h3 className="w-[50%]">
              One of the most loved homes on La Piol according to guests
            </h3>
            <div className="flex flex-col items-center">
              <h3>4.3</h3>
              <div className="flex">
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3>34</h3>
              <div className="flex">Reviews</div>
            </div>
          </div>
          <p className="text-lg my-5">{property?.description}</p>
                  <Separator />
        <div className="flex justify-between flex-wrap my-5">
          <div>
          <div className="flex gap-5 font-semibold w-fit mb-5 h-[100px] p-5 rounded-lg items-center justify-center bg-primary">
            <div className="rounded-full bg-gray-700 h-[70px] w-[70px] flex items-center justify-center">
              <User color="#fff" size={40} />
            </div>
            <div className="flex flex-col ">
              <h3>Hosted by Nina</h3>
              <div className="flex">Superhost 2 years hosting</div>
            </div>
          </div>
          <div className="flex-col">
            <h3 className="font-bold text-2xl">What this place offers</h3>
            <ul className="grid w-full md:w-[70%] grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 my-5">
              <li className="flex gap-2 items-center text-lg">
                <CookingPot /> Kitchen{" "}
              </li>
              <li className="flex gap-2 items-center text-lg">
                <LampDesk /> Dedicated workspace{" "}
              </li>
              <li className="flex gap-2 items-center text-lg">
                <Tv2 /> TV{" "}
              </li>
              <li className="flex gap-2 items-center text-lg">
                <Snowflake /> Air conditioning{" "}
              </li>
              <li className="flex gap-2 items-center text-lg">
                <Camera /> Exterior security cameras on property{" "}
              </li>
              <li className="flex gap-2 items-center text-lg">
                <Wifi /> Wifi{" "}
              </li>
              <li className="flex gap-2 items-center text-lg">
                <ParkingCircle /> Free parking on premises{" "}
              </li>
              <li className="flex gap-2 items-center text-lg">
                <WashingMachine /> Washer{" "}
              </li>
              <li className="flex gap-2 items-center text-lg">
                <Wind /> Hair dryer{" "}
              </li>
              <li className="flex gap-2 items-center text-lg">
                <Bell /> Alarm{" "}
              </li>
            </ul>
          </div>
          </div>
            <div className="flex flex-col p-5 ring ring-gray-300 w-fit  h-fit hover:shadow-lg cursor-pointer" >
     
             <DayPicker
      animate
      mode="single"
      selected={selected}
      onSelect={setSelected}
       classNames={{
        today: `border-primary`, // Add a border to today's date
        selected: `bg-primary border-amber-500 text-white`, // Highlight the selected day
        root: `${defaultClassNames.root}  p-5 w-fit`, // Add a shadow to the root element
        chevron: `${defaultClassNames.chevron} fill-amber-500` // Change the color of the chevron
      }}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
         <Button className="cursor-pointer text-xl">Book Visit</Button>
          </div>
        </div>
         
            <Separator />
             <div className="w-full h-[500px] overflow-hidden ring ring-gray-500 my-5">
             <MapView property={property}/>
             </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;