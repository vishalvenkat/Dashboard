import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { SocialMedia } from "../Interface/social-media";
import { MonthCount } from "../Interface/monthAndCount";

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
    return this.socialMediaList.find(
      (socialMedia) => socialMedia.socialMediaId === id
    );
  };
  getImageSource = (socialMediaType: string) => {
    switch (socialMediaType) {
      case "facebook":
        return "../../../assets/Images/Icons/facebook.png";
        break;
      case "instagram":
        return "../../../assets/Images/Icons/instagram.png";
        break;
      case "twitter":
        return "../../../assets/Images/Icons/twitter.png";
        break;
      case "youtube":
        return "../../../assets/Images/Icons/youtube.png";
    }
  };
  getCountForId = (id: number, month: string) => {
    let likeCount = 0;
    let pageViewCount = 0;
    let socialMedia = this.getSocialMediaWithId(id);
    for (const like in socialMedia.likes) {
      if (like === month) {
        likeCount = Number(socialMedia.likes[like]);
        break;
      }
    }
    for (const pageView in socialMedia.pageViews) {
      if (pageView === month) {
        pageViewCount = Number(socialMedia.pageViews[pageView]);
        break;
      }
    }
    return {
      likeCount: likeCount,
      pageViewCount: pageViewCount,
    };
  };
  getTotalCounts = (id: number) => {
    let socialMedia = this.getSocialMediaWithId(id);
    let totalLikesCount = 0;
    let totalPageViewCount = 0;
    for (const month in socialMedia.likes) {
      let counts = this.getCountForId(id, month);
      totalLikesCount += counts.likeCount;
      totalPageViewCount += counts.pageViewCount;
    }
    return {
      totalLikesCount: totalLikesCount,
      totalPageViewCount: totalPageViewCount,
    };
  };
}
