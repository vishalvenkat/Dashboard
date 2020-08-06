import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SocialMedia } from "src/app/Interface/social-media";
import { SocialMediaService } from "src/app/Services/social-media.service";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"],
})
export class OverviewComponent implements OnInit {
  monthSelected: string = "All";
  monthList: string[] = [];
  imgSource: string;
  likeCount: number;
  pageViewCount: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SocialMedia,
    private socialMediaService: SocialMediaService
  ) {
    for (const like in data.likes) {
      this.monthList.push(like);
    }
    this.imgSource = socialMediaService.getImageSource(data.socialMediaType);
    let counts = socialMediaService.getTotalCounts(data.socialMediaId);
    this.likeCount = counts.totalLikesCount;
    this.pageViewCount = counts.totalPageViewCount;
  }

  ngOnInit() {}
  fetchValues = (month: string) => {
    if (month === "All") {
      let counts = this.socialMediaService.getTotalCounts(
        this.data.socialMediaId
      );
      this.likeCount = counts.totalLikesCount;
      this.pageViewCount = counts.totalPageViewCount;
      return;
    }
    let counts = this.socialMediaService.getCountForId(
      this.data.socialMediaId,
      month
    );
    this.likeCount = counts.likeCount;
    this.pageViewCount = counts.pageViewCount;
  };
}
