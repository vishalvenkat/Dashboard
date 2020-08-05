import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Brand } from "../Classes/brand";
import { brandType } from "../types/BrandType";
@Injectable({
  providedIn: "root",
})
export class BrandService {
  brandList: Brand[] = [];
  constructor(http: HttpClient) {
    http.get("./assets/Json/brand.json").subscribe(
      (data) => {
        this.generateBrandList(data);
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }
  generateBrandList = (data: Object): void => {
    for (const brand in data) {
      this.brandList.push(data[brand]);
    }
  };
}
