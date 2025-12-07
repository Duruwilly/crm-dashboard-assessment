import type { IPagination } from "./pagination";

export interface Products {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: { width: number; height: number; depth: number };
  depth: number;
  height: number;
  width: number;
  discountPercentage: number;
  id: number;
  images: string[];
  meta: {
    barcode: string;
    createdAt: string;
    qrCode: string;
    updatedAt: string;
  };
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: {
    comment: string;
    date: string;
    rating: number;
    reviewerEmail: string;
    reviewerName: string;
  }[];

  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
}

export interface ProductdData extends IPagination {
  products: Products[];
}
