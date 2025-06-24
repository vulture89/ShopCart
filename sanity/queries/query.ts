import { defineQuery } from "next-sanity";

export const BRANDS_QUERY = defineQuery(`*[_type=='brand'] | order(name asc) `);

export const LATEST_BLOG_QUERY = defineQuery(
  ` *[_type == 'blog' && isLatest == true]|order(name asc){
      ...,
      blogcategories[]->{
      title
    }
    }`
);

export const DEAL_PRODUCTS = defineQuery(
  `*[_type == 'product' && status == 'hot'] | order(name asc){
    ...,"categories": categories[]->title
  }`
);

export const PRODUCT_BY_SLUG_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug] | order(name asc) [0]`
);

export const BRAND_QUERY =
  defineQuery(`*[_type == "product" && slug.current == $slug]{
  "brandName": brand->title
  }`);
