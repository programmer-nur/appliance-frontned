export interface IMeta {
    limit: number;
    page: number;
    total: number;
  }
  
  export interface ResponseSuccessData {
    data: any;
    meta?: IMeta;
  }
  
  export interface IGenericErrorResponse {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
  }
  
  export interface IGenericErrorMessage {
    path: string | number;
    message: string;
  }


  type SubTitle = string[];

type Category = {
  id: string;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

type DescriptionItem = {
  id: string;
  title: string;
  subTitle: SubTitle;
  serviceId: string;
};

export type IService = {
  id: string;
  name: string;
  subTitle: SubTitle;
  price: number;
  image: string;
  rating: number;
  categoryId: string;
  trending: null | any; // Replace 'any' with the appropriate type if needed
  createdAt: string;
  updatedAt: string;
  category: Category;
  description: DescriptionItem[];
  bookings: any[]; // Replace 'any' with the appropriate type if needed
  reviewAndRatings: any[]; // Replace 'any' with the appropriate type if needed
};
