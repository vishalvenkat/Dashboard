import { Injectable } from "@angular/core";
import { SocialMedia } from "../Interface/social-media";
import socialMediaJson from "src/assets/Json/socialMedia.json";
import iconJson from "src/assets/Json/iconSource.json";
import { IconSource } from "src/app/Interface/iconSource";

@Injectable({
  providedIn: "root",
})
export class SocialMediaService {
  private socialMediaList: SocialMedia[] = [];
  private imgSourceList: IconSource[] = [];
  constructor() {
    socialMediaJson.forEach((socialMedia) =>
      this.socialMediaList.push(socialMedia)
    );
  }
  getSocialMediaWithId = (id: number): SocialMedia => {
    return this.socialMediaList.find(
      (socialMedia) => socialMedia.socialMediaId === id
    );
  };

  getAccountNameWithId = (id: number): string => {
    return this.getSocialMediaWithId(id).socialMediaUserName;
  };
  // Fetching month list from likes array. It can also be fetched from pageViews as they both are similar
  getMonthList = (id: number): string[] => {
    let socialMedia = this.getSocialMediaWithId(id);
    return socialMedia.likes.map((like) => like.month);
  };
  getImageSource = (socialMediaType: string): string => {
    if (this.imgSourceList.length === 0) {
      iconJson.forEach((location) => this.imgSourceList.push(location));
    }
    return this.imgSourceList.find((img) => img.name === socialMediaType)
      .location;
  };
  private getLikeCount = (month: string, socialMedia: SocialMedia): number => {
    return socialMedia.likes.find((likes) => likes.month === month).count;
  };

  private getPageViewCount = (
    month: string,
    socialMedia: SocialMedia
  ): number => {
    return socialMedia.pageViews.find((pageView) => pageView.month === month)
      .count;
  };

  private arraySum = (array: any[]): number => {
    return array.reduce((a, b) => a + b, 0);
  };
  getTotalCounts = (id: number) => {
    let socialMedia = this.getSocialMediaWithId(id);
    return {
      totalLikesCount: this.arraySum(
        socialMedia.likes.map((like) => like.count)
      ),
      totalPageViewCount: this.arraySum(
        socialMedia.pageViews.map((pageView) => pageView.count)
      ),
    };
  };
  initialiseCounts = (id: number, month: string) => {
    if (month === "All") {
      return this.getTotalCounts(id);
    }
    let socialMedia = this.getSocialMediaWithId(id);
    return {
      totalLikesCount: this.getLikeCount(month, socialMedia),
      totalPageViewCount: this.getPageViewCount(month, socialMedia),
    };
  };
}
