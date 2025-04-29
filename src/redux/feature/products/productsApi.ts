import { ProductFormValues } from "../../../interfaces/product.interface";
import baseApi from "../api/baseApi";

// type
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface Category {
  slug: string;
  name: string;
  url: string;
}

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Products, { limit: number; skip: number }>({
      query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
    }),
    getSingleProduct: builder.query<ProductFormValues, number>({
      query: (id) => `/products/${id}`,
    }),
    getCategory: builder.query<Category[], void>({
      query: () => "/products/categories",
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...values }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: values,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetCategoryQuery,
  useUpdateProductMutation,
} = productsApi;
