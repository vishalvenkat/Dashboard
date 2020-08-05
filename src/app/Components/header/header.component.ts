import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ThemeService } from "src/app/Services/theme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output() theme = new EventEmitter<boolean>();
  isBlack: boolean = false;
  bgDark = "bgDark";
  bgLight = "bgLight";
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isBlackTheme.emit(this.isBlack);
  }
  changeTheme = () => {
    this.themeService.isBlackTheme.emit(this.isBlack);
  };
}
