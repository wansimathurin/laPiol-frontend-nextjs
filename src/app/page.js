'use client'
import React, { useState,useEffect } from 'react';
import { Button } from "@/components/ui/button";
import CardComponent from "@/components/card/CardComponent";
import {Properties} from "@/data/properties"
import SkeletonCardComponent from "@/components/skeletonCard/SkeletonCardComponent";

export default function Home() {
  const [isCardPresent, setIsCardPresent] = useState(false)
  
  useEffect(()=>{
    setTimeout(()=>setIsCardPresent(true),100)
  },[])
  
  return (
    <div className="flex flex-wrap w-full gap-4 justify-center  h-fit bg-background   mt-[15rem] px-4">
      {Properties?.map((item, index) => isCardPresent ? <CardComponent key={item.id} property={item} /> :  <SkeletonCardComponent key={index} />)}
    </div>
  );
}
