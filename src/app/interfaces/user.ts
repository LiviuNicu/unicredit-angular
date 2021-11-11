export interface User {
  firstName:string;
  lastName:string;
  email:string;
  dateAdded:Date;
  hashed_password?:string;
  _id?:string;
  __v?:number;
}
