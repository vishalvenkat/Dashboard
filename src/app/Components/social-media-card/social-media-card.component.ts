import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-social-media-card",
  templateUrl: "./social-media-card.component.html",
  styleUrls: ["./social-media-card.component.css"],
})
export class SocialMediaCardComponent implements OnInit {
  @Input() imgSource: string;
  @Input() followersCount: number;
  @Input() userName: string;
  constructor() {}

  ngOnInit() {}
}
