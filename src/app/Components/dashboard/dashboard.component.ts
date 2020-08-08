import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { BrandService } from "src/app/Services/brand.service";
import { SocialMediaService } from "src/app/Services/social-media.service";
import { SocialMedia } from "src/app/Interface/social-media";
import { MatDialog } from "@angular/material/dialog";
import { OverviewComponent } from "../overview/overview.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  brandList: {
    id: number;
    name: string;
  }[] = [];
  brandSelected: string = "-1";
  dashBoardList: SocialMedia[] = [];

  constructor(
    private brandService: BrandService,
    private socialMediaService: SocialMediaService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.initializeList();
  }
  initializeList = (): void => {
    let brandIdList = this.brandService.getBrandIdList();
    brandIdList.forEach((brandId) => {
      let brands = {
        id: brandId,
        name: this.brandService.getBrandNameWithId(brandId),
      };
      this.brandList.push(brands);
    });
    this.setSocialMediaList(this.brandService.getBrandIdList());
  };
  getSelectedBrandDetails = (brandId: number | string): void => {
    if (brandId === -1) {
      this.setSocialMediaList(this.brandService.getBrandIdList());
    } else {
      let tempBrandList: number[] = [];
      tempBrandList.push(Number(brandId));
      this.setSocialMediaList(tempBrandList);
    }
  };
  setSocialMediaList = (brandList: number[]): void => {
    let tempDashboardList: SocialMedia[] = [];
    brandList.forEach((brand1) => {
      let brand = this.brandService.getBrandWithId(brand1);
      tempDashboardList.push(
        this.socialMediaService.getSocialMediaWithId(brand.facebookId)
      );
      tempDashboardList.push(
        this.socialMediaService.getSocialMediaWithId(brand.instagramId)
      );
      tempDashboardList.push(
        this.socialMediaService.getSocialMediaWithId(brand.twitterId)
      );
      tempDashboardList.push(
        this.socialMediaService.getSocialMediaWithId(brand.youtubeId)
      );
    });
    this.dashBoardList = tempDashboardList;
  };
  overViewHandler = (socialMediaid: number): void => {
    let socialMedia = this.socialMediaService.getSocialMediaWithId(
      socialMediaid
    );
    let imageSource = this.socialMediaService.getImageSource(
      socialMedia.socialMediaType
    );
    this.dialog.open(OverviewComponent, {
      height: "400px",
      width: "600px",
      data: {
        socialMediaId: socialMedia.socialMediaId,
        imageSource: imageSource,
      },
      panelClass: "custom-modalbox",
    });
  };
  getImageSource = (socialMediaType: string): string => {
    return this.socialMediaService.getImageSource(socialMediaType);
  };
}
