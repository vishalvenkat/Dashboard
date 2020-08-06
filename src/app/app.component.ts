import { Component } from "@angular/core";
import { BrandService } from "./Services/brand.service";
import { Router } from "@angular/router";
import { SocialMediaService } from "./Services/social-media.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(
    private brandService: BrandService,
    router: Router,
    socialMediaService: SocialMediaService
  ) {
    router.navigate([""]);
  }
}
