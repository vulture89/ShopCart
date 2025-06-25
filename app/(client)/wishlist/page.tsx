import NoAccess from "@/components/NoAccessToCart";
import WishListProducts from "@/components/WishListProducts";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const FavouritePage = async () => {
  const user = await currentUser();
  return (
    <>
      {user ? (
        <WishListProducts />
      ) : (
        <NoAccess details="Log in to view your wishlist items. Don’t miss out on your cart products to make the payment!" />
      )}
    </>
  );
};

export default FavouritePage;
