import { Injectable } from "@angular/core";
import { Theme } from "../Interface/theme";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private active: Theme;
  private availableThemes: Theme[] = [];
  constructor(http: HttpClient) {
    http.get("./assets/Json/theme.json").subscribe(
      (data: Theme[]) => {
        this.generateThemeList(data);
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }
  generateThemeList = (data: Theme[]): void => {
    data.forEach((theme) => {
      this.availableThemes.push(theme);
    });
    this.active = data.find((theme) => theme.name === "light");
  };
  getAvailableThemes = () => {
    return this.availableThemes;
  };
  setActiveTheme(theme: Theme): void {
    this.active = theme;
    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
