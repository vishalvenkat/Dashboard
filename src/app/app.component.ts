import { Component } from "@angular/core";
import { BrandService } from "./Services/brand.service";
import { Router } from "@angular/router";
import { SocialMediaService } from "./Services/social-media.service";
import { ThemeService } from "./Services/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isBlackTheme: boolean = false;
  bgDark = "bgDark";
  bgLight = "bgLight";
  constructor(
    private brandService: BrandService,
    router: Router,
    socialMediaService: SocialMediaService,
    themeService: ThemeService
  ) {
    router.navigate([""]);
    themeService.isBlackTheme.subscribe(
      (isBlack) => (this.isBlackTheme = isBlack)
    );
  }
  changeTheme = () => {
    this.isBlackTheme = !this.isBlackTheme;
  };
}
