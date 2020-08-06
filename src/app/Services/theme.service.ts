import { Injectable } from "@angular/core";
import { Theme } from "../Interface/theme";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private active: Theme;
  private availableThemes: Theme[] = [];
  private light: Theme;
  private dark: Theme;
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
    this.light = this.active;
    this.dark = data.find((theme) => theme.name === "dark");
    console.log(`${this.active === this.light}`);
  };
  toggleTheme = (): void => {
    console.log(this.active.name);
    this.active === this.light
      ? this.setActiveTheme(this.dark)
      : this.setActiveTheme(this.light);
  };

  setActiveTheme(theme: Theme): void {
    this.active = theme;
    console.log(`${this.active.name} after toggle`);
    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
