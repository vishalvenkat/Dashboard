import { MonthCount } from "./monthAndCount";

export interface SocialMedia {
  socialMediaType: string;
  socialMediaId: number;
  socialMediaUserName: string;
  followers: number;
  likes: MonthCount[];
  pageViews: MonthCount[];
}
