import { Injectable } from "@angular/core";
import { Theme } from "../Interface/theme";
import * as themeJson from "src/assets/Json/theme.json";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private active: Theme;
  private availableThemes: Theme[] = [];
  constructor() {
    Object.values(themeJson)[0].forEach((theme: Theme) =>
      this.availableThemes.push(theme)
    );
    this.setTheme("light");
  }
  private findThemeByName = (themeName: string): Theme => {
    return this.availableThemes.find((theme) => theme.name === themeName);
  };
  private setTheme = (themeName: string): void => {
    this.active = this.findThemeByName(themeName);
  };
  getAvailableThemeNames = (): string[] => {
    return this.availableThemes.map((theme) => theme.name);
  };
  setActiveTheme(themeName: string): void {
    this.setTheme(themeName);
    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
