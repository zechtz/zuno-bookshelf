import * as media from "../media.json";
import * as mediaTypes from "../media-type.json";
import * as checkoutData from "../checkout.json";


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

export interface BookCheckout {
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
const getMedia = () => {
  return media;
};

const getMediaTypes = () => {
  return mediaTypes;
};

const getCheckoutData = () => {
  return checkoutData;
};

export { getCheckoutData, getMedia, getMediaTypes };
