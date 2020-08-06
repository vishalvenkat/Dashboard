import { MonthCount } from "../types/monthAndCount";

export class SocialMedia {
  socialMediaType: string;
  socialMediaId: number;
  socialMediaUserName: string;
  followers: number;
  likes: MonthCount[];
  pageViews: MonthCount[];
}
