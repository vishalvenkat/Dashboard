import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ThemeService } from "src/app/Services/theme.service";
import { Theme } from "src/app/Interface/theme";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  themeList: string[] = [];
  activeTab: string = "Home";
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeList = this.themeService.getAvailableThemeNames();
  }
  changeTheme = (themeName: string): void => {
    this.themeService.setActiveTheme(themeName);
  };
  setActiveTab = (tabClicked: string): void => {
    this.activeTab = tabClicked;
  };
}
