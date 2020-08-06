import { Component, OnInit, Output, EventEmitter } from "@angular/core";

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
  constructor() {}

  ngOnInit() {}
  changeTheme = () => {
    this.theme.emit(this.isBlack);
  };
}
