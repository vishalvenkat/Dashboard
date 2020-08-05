import { Component, OnInit } from "@angular/core";
import { BrandService } from "src/app/Services/brand.service";
import { Brand } from "src/app/Classes/brand";
import { SocialMediaService } from "src/app/Services/social-media.service";
import { SocialMediaType } from "src/app/types/SocialMediaType";
import { SocialMedia } from "src/app/Classes/social-media";

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
    private socialMediaService: SocialMediaService
  ) {}

  ngOnInit() {
    this.selectedBrandList = this.brandService.brandList;
    this.getSocialMediaList(this.brandService.brandList);
  }
  getSelectedBrandDetails = (event: any) => {
    let brandId = event.value.brandId;
    if (brandId === undefined) {
      this.getSocialMediaList(this.brandService.brandList);
    } else {
      let brand = this.brandService.brandList.find(
        (brand) => brand.brandId === brandId
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
}
