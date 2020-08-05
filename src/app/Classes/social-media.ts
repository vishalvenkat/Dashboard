import { MonthCount } from "../types/monthAndCount";

export class SocialMedia {
  socialMediaType: string;
  socialMediaId: number;
  followers: number;
  likes: MonthCount[];
  pageViews: MonthCount[];
}
