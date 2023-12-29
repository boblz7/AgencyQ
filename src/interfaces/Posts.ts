import { IComment } from "./Comments";
import { IUser } from "./Users";

export interface IPosts extends IPostsItem {
  isAlone?: boolean;
  getUser?: IUser;
  getComments?: IComment[];
  componentMessage: string;
  componentName?: string;
}

export interface IPostsItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}
