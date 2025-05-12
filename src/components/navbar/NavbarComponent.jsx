"use client";

import React, { useEffect, useState } from "react";
import {
  Globe,
  Menu,
  Search,
  User,
  Home,
  TrendingUp,
  Gamepad2,
  Building2,
  Waves,
  Trees,
  Mountain,
  Droplets,
  Building,
  Landmark,
  Hotel,
  Umbrella,
  Briefcase,
  Sun,
  Moon,
  History,
  Users,
  Dog,
  Star,
  DollarSign,
  Tent,
  HeartPulse,
  Footprints,
  Heart,
} from "lucide-react";
import { useTheme } from "next-themes"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/navbar/ModeToggle"

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "Tiny homes", icon: <Home /> },
    { name: "Trending", icon: <TrendingUp /> },
    { name: "Play", icon: <Gamepad2 /> },
    { name: "City life", icon: <Building2 /> },
    { name: "Beaches", icon: <Waves /> },
    { name: "Countryside", icon: <Trees /> },
    { name: "Mountains", icon: <Mountain /> },
    { name: "Lakes", icon: <Droplets /> },
    { name: "Entire homes", icon: <Building /> },
    { name: "Unique stays", icon: <Landmark /> },
    { name: "Hotels", icon: <Hotel /> },
    { name: "Villas", icon: <Umbrella /> },
    { name: "Experiences", icon: <Briefcase /> },
    { name: "Deserts", icon: <Sun /> },
    { name: "Historical places", icon: <History /> },
    { name: "Family friendly", icon: <Users /> },
    { name: "Pet friendly", icon: <Dog /> },
    { name: "Luxury", icon: <Star /> },
    { name: "Budget stays", icon: <DollarSign /> },
    { name: "Camping", icon: <Tent /> },
    { name: "Wellness", icon: <HeartPulse /> },
    { name: "Adventure", icon: <Footprints /> },
    { name: "Romantic", icon: <Heart /> },
  ];
  function SamplePrevArrow (props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color:"red" }}
        onClick={onClick}
      />
    );
  }
  

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 2,
    arrows:true,
    nextArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex-col justify-between fixed top-0 z-50 bg-background items-center w-full shadow-md">
      {/* top nav */}
      <div className="flex justify-between items-center px-4 py-5 border-b border-gray-300">
              <div className="font-bold text-2xl">
                  <img src="/logo.png" width="140px"/>
        </div>

        <div className="flex flex-col gap-3 items-center flex-1">
          {!isScrolled && (
            <ul className="hidden md:flex gap-5 text-sm font-medium cursor-pointer">
              <li className="text-primary">Homes</li>
              <li>Experiences</li>
            </ul>
          )}
          {/* searchbar */}
          <div
            className={`transition-all duration-300 ${
              isScrolled ? "w-fit p-0" : "w-fit"
            } h-[70px]   hidden md:flex ring ring-gray-300 shadow-lg rounded-full gap-5 px-2  items-center justify-center `}
          >
            {!isScrolled ? (
              <div className="w-[30%] px-4 border-r border-gray-300">
                <h3 className="text-xs">Where</h3>
                <input
                  type="text"
                  placeholder="Search destinations"
                  className="w-full outline-none text-sm"
                />
              </div>
            ) : (
              <div className="w-[25%] border-r border-gray-300">
                <h3 className="text-sm">Anywhere</h3>
              </div>
            )}

            {!isScrolled ? (
              <>
                <div className="w-[20%] border-r border-gray-300">
                  <h3 className="text-xs">Check in</h3>
                  <input type="date" className="w-full text-sm outline-none" />
                </div>
                <div className="w-[20%] border-r border-gray-300">
                  <h3 className="text-xs">Check out</h3>
                  <input type="date" className="w-full text-sm outline-none" />
                </div>
              </>
            ) : (
              <div className="w-[25%] border-r border-gray-300">
                <h3 className="text-sm">Any week</h3>
              </div>
            )}

            <div className="w-[20%]">
              {!isScrolled && <h3 className="text-xs">Guests</h3>}
              <input
                type="text"
                placeholder="Add guests"
                className="w-full text-sm outline-none"
              />
            </div>

            <div
              className={`${
                !isScrolled ? "w-fit px-4" : "w-[50px] ml-3"
              } h-[50px] bg-primary flex items-center justify-center gap-2 rounded-full cursor-pointer`}
            >
              <Search color="#fff" />
              {!isScrolled && (
                <h1 className="text-white font-bold text-sm">Search</h1>
              )}
            </div>
          </div>
          {/* end searchbar */}
           {/* mobile searchbar */}
           <div
            className={`transition-all duration-300 w-fit p-0 h-fit   flex md:hidden ring ring-gray-300 shadow-lg rounded-full gap-5 p-2  items-center justify-center bg-background mr-4 ml-3 `}
          >
            <div className="flex-1 ">
                <h3 className="text-sm">Anywhere</h3>
              </div>
            <div
              className={`w-fit ml-3 h-fit p-1 bg-primary flex items-center justify-center gap-2 rounded-full cursor-pointer`}
            >
              <Search color="#fff" />
             
            </div>
          </div>
          {/* end mobile searchbar */}
        </div>
        <div className="flex gap-5 items-center">
          <h2 className="text-sm hidden md:flex">Airbnb your home</h2>
          
          <ModeToggle   />
          {/* user menu */}
          
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <div className="flex items-center gap-3 rounded-2xl w-fit h-fit shadow-md p-2 cursor-pointer">
            <Menu />
            <div className="rounded-full bg-gray-700 h-[35px] w-[35px] flex items-center justify-center">
              <User color="#fff" size={18} />
            </div>
          </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
          {/* end user menu */}
        </div>
      </div>

      {/* bottom category carousel */}
      <div className="w-full px-4 pt-5 ">
      <Slider {...settings}>
  {categories.map((category) => (
    <div
      key={category.name}
      
      className="flex flex-col items-center justify-center px-4 cursor-pointer hover:text-primary transition-all "
    >
      <div className="text-primary mb-1">{category.icon}</div>
      <h3 className="text-xs w-fit ">{category.name}</h3>
    </div>
  ))}
</Slider>
      </div>
    </div>
  );
};

export default NavbarComponent;