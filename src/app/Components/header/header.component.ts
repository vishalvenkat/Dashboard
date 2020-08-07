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
  themeList: Theme[] = [];
  activeTab: string = "Home";
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeList = this.themeService.getAvailableThemes();
  }
  changeTheme = (theme: Theme) => {
    this.themeService.setActiveTheme(theme);
  };
  setActiveTab = (tabClicked: string) => {
    this.activeTab = tabClicked;
  };
}
