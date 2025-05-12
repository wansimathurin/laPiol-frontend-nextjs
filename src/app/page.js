import { Button } from "@/components/ui/button";
import CardComponent from "@/components/card/CardComponent";
import Image from "next/image";
import {Properties} from "@/data/properties"

export default function Home() {
  
  return (
    <div className="flex flex-wrap w-full gap-4 justify-center  h-fit bg-background   mt-[15rem] px-4">
     {Properties?.map((item,index) => <CardComponent key={item.id} property={item} />)}
    </div>
  );
}
