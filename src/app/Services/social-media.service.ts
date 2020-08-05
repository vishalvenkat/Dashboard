import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { SocialMedia } from "../Classes/social-media";

@Injectable({
  providedIn: "root",
})
export class SocialMediaService {
  socialMediaList: SocialMedia[] = [];
  constructor(http: HttpClient) {
    http.get("./assets/Json/socialMedia.json").subscribe(
      (data) => {
        this.generateBrandList(data);
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }
  generateBrandList = (data: Object): void => {
    for (const socialMedia in data) {
      this.socialMediaList.push(data[socialMedia]);
    }
  };

  getSocialMediaWithId = (id: number) => {
    return this.socialMediaList.find(
      (socialMedia) => socialMedia.socialMediaId === id
    );
  };
  getImageSource = (socialMediaType: string) => {
    console.log("called");
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
}
