import { MonthCount } from "./monthAndCount";

export type SocialMediaType = {
  name: string;
  pageViews: MonthCount[];
  likes: MonthCount[];
  followers: number;
};
