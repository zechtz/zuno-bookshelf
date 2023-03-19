import { media } from "@/data/media";
import { mediaTypes } from "@/data/media-type";
import { checkoutData } from "@/data//checkout";

export interface Book {
  BibNum: number;
  Title: string;
  Author: string;
  ISBN: string;
  PublicationYear: number;
  Publisher: string;
  Subjects: string;
  ItemType: string;
  ItemCount: number;
}

export interface BookType {
  Code: string;
  Description: string;
  CodeType: string;
  FormatGroup: string;
  FormatSubgroup: string;
  CategoryGroup: string;
  CategorySubgroup: string;
}

export interface CheckoutData {
  BibNumber: number;
  ItemBarcode: number;
  ItemType: string;
  CallNumber: string;
  CheckoutDateTime: string;
}
const getMedia = (): Array<Book> => {
  return media;
};

const getMediaTypes = (): Array<BookType> => {
  return mediaTypes;
};

const getCheckoutData = (): Array<CheckoutData> => {
  return checkoutData;
};

export { getCheckoutData, getMedia, getMediaTypes };
