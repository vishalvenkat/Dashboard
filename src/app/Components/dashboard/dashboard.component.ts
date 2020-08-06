import { Component, OnInit } from "@angular/core";
import { BrandService } from "src/app/Services/brand.service";
import { Brand } from "src/app/Classes/brand";
import { SocialMediaService } from "src/app/Services/social-media.service";
import { SocialMedia } from "src/app/Classes/social-media";
import { MonthCount } from "src/app/types/monthAndCount";
import { MatDialog } from "@angular/material/dialog";
import { OverviewComponent } from "../overview/overview.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  selectedBrandList: Brand[] = [];
  brandSelected: String = "All";
  dashBoardList: SocialMedia[] = [];

  constructor(
    private brandService: BrandService,
    private socialMediaService: SocialMediaService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.selectedBrandList = this.brandService.brandList;
    this.getSocialMediaList(this.brandService.brandList);
  }
  getSelectedBrandDetails = (brand1: Brand) => {
    if (brand1.brandId === undefined) {
      this.getSocialMediaList(this.brandService.brandList);
    } else {
      let brand = this.brandService.brandList.find(
        (brand) => brand.brandId === brand1.brandId
      );
      let tempBrandList: Brand[] = [];
      tempBrandList.push(brand);
      this.getSocialMediaList(tempBrandList);
    }
  };
  getSocialMediaList = (brandList: Brand[]) => {
    let tempDashboardList: SocialMedia[] = [];
    brandList.forEach((brand) => {
      let facebook = this.socialMediaService.getSocialMediaWithId(
        brand.facebookId
      );
      let instagram = this.socialMediaService.getSocialMediaWithId(
        brand.instagramId
      );
      let twitter = this.socialMediaService.getSocialMediaWithId(
        brand.twitterId
      );
      let youtube = this.socialMediaService.getSocialMediaWithId(
        brand.youtubeId
      );
      tempDashboardList.push(facebook);
      tempDashboardList.push(instagram);
      tempDashboardList.push(twitter);
      tempDashboardList.push(youtube);
    });
    this.dashBoardList = tempDashboardList;
  };
  popupSocialMedia = (socialMedia: SocialMedia) => {
    let likes: MonthCount[] = socialMedia.likes;
    /*
    for (const like in likes) {
      console.log(like);
    }*/
    this.dialog.open(OverviewComponent, { data: socialMedia });
  };
}
