import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";
import React from "react";

const AddToWishlistButton = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <div className={cn("absolute top-2 right-2 z-10")}>
      <button className="p-2.5 rounded-full hover:bg-shop_dark_green hover:text-white bg-deal-bg hoverEffect">
        <Heart size={15} />
      </button>
    </div>
  );
};

export default AddToWishlistButton;
