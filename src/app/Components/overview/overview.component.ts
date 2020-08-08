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
  likeCount: number;
  pageViewCount: number;
  userName: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private socialMediaService: SocialMediaService
  ) {
    this.monthList = this.socialMediaService.getMonthList(data.socialMediaId);
    let counts = socialMediaService.getTotalCounts(data.socialMediaId);
    this.likeCount = counts.totalLikesCount;
    this.pageViewCount = counts.totalPageViewCount;
    this.userName = socialMediaService.getAccountNameWithId(data.socialMediaId);
  }

  ngOnInit() {}
  fetchValues = (month: string): void => {
    let counts = this.socialMediaService.initialiseCounts(
      this.data.socialMediaId,
      month
    );
    this.likeCount = counts.totalLikesCount;
    this.pageViewCount = counts.totalPageViewCount;
  };
}
