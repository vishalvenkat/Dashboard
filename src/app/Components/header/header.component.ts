import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ThemeService } from "src/app/Services/theme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {}
  changeTheme = () => {
    this.themeService.toggleTheme();
  };
}
