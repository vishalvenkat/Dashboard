import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  isBlackTheme = new EventEmitter<boolean>();
  constructor() {}
}
