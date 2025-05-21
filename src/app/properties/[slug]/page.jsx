import React from "react";
import PropertyDetails from "./PropertyDetails";
import { Properties } from "@/data/properties";

const Page = async ({ params }) => {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const property = Properties.find(
    (item) => item.name.toLowerCase().split(" ").join("-") === decodedSlug
  );

  return <PropertyDetails property={property} />;
};

export default Page;