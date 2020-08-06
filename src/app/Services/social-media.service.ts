import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { SocialMedia } from "../Interface/social-media";

@Injectable({
  providedIn: "root",
})
export class SocialMediaService {
  socialMediaList: SocialMedia[] = [];
  constructor(http: HttpClient) {
    http.get("./assets/Json/socialMedia.json").subscribe(
      (data: SocialMedia[]) => {
        this.generateBrandList(data);
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }
  generateBrandList = (data: SocialMedia[]): void => {
    data.forEach((socialMedia) => {
      this.socialMediaList.push(socialMedia);
    });
  };
  getSocialMediaWithId = (id: number) => {
    let socialMedia: SocialMedia = this.socialMediaList.find(
      (socialMedia) => socialMedia.socialMediaId === id
    );
    return socialMedia;
  };
  getMonthList = (id: number) => {
    let socialMedia = this.socialMediaList.find(
      (socialMedia) => socialMedia.socialMediaId === id
    );
    let monthList: string[] = [];
    socialMedia.likes.forEach((likes) => {
      monthList.push(likes.month);
    });
    return monthList;
  };
  getImageSource = (socialMediaType: string) => {
    switch (socialMediaType) {
      case "facebook":
        return "../../../assets/Images/Icons/facebook.png";
      case "instagram":
        return "../../../assets/Images/Icons/instagram.png";
      case "twitter":
        return "../../../assets/Images/Icons/twitter.png";
      case "youtube":
        return "../../../assets/Images/Icons/youtube.png";
    }
  };
  getLikeCount = (id: number, month: string) => {
    let socialMedia = this.getSocialMediaWithId(id);
    let like = socialMedia.likes.find((likes) => likes.month === month);
    console.log(`${month} and ${like}`);
    return like === undefined ? 0 : like.count;
  };
  getPageViewCount = (id: number, month: string) => {
    let socialMedia = this.getSocialMediaWithId(id);
    let pageView = socialMedia.pageViews.find(
      (pageView) => pageView.month === month
    );
    return pageView === undefined ? 0 : pageView.count;
  };
  getTotalCounts = (id: number) => {
    let socialMedia = this.getSocialMediaWithId(id);
    let totalLikesCount = 0;
    let totalPageViewCount = 0;
    socialMedia.likes.forEach((likes) => {
      totalLikesCount += this.getLikeCount(id, likes.month);
      totalPageViewCount += this.getPageViewCount(id, likes.month);
    });
    return {
      totalLikesCount: totalLikesCount,
      totalPageViewCount: totalPageViewCount,
    };
  };
  initialiseCounts = (id: number, month: string) => {
    if (month === "All") {
      return this.getTotalCounts(id);
    }
    return {
      totalLikesCount: this.getLikeCount(id, month),
      totalPageViewCount: this.getPageViewCount(id, month),
    };
  };
}
