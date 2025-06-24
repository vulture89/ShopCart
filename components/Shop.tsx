"use client";
import { BRANDS_QUERYResult, Category } from "@/sanity.types";
import React from "react";

interface Props {
  categories: Category[];
  brands: BRANDS_QUERYResult;
}

const Shop = ({ categories, brands }: Props) => {
  console.log(categories, brands);
  return <div>Shop</div>;
};

export default Shop;
