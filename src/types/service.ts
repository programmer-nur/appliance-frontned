export type ILogin = {
    email: string;
    password: string;
  };
  
  export type IUser = {
    id: string;
    email: string;
    password: string;
    fullName: string;
    role: string;
    profileImage: null | string;
    contactNo: string;
    gender: string | null;
    dob: null | string;
    isPasswordReset: boolean;
    createdAt: string;
    updatedAt: string;
    bookings: IBooking[];
    reviewAndRatings: IReviewAndRating[];
  };
  
  export type IBooking = {
    id: string;
    userId: string;
    serviceId: string;
    slotId: string;
    date: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type IReviewAndRating = {
    id: string;
    review: string;
    rating: number;
    userId: string;
    user: IUser[];
    serviceId: string;
    service: IService[];
    createdAt: string;
    updatedAt: string;
  };
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
  
  export type ServiceDescription = {
    id: string;
    title: string;
    subTitle: string[];
    serviceId: string;
  };
  export type ISlot = {
    id: string;
    slotTime: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type ICategory = {
    id: string;
    title: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    services: IService[];
  };