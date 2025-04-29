export interface IReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductFormValues {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  rating: number;
  tags: string[];
  weight: number;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  minimumOrderQuantity: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  returnPolicy?: string;
  reviews: IReview[];
}
