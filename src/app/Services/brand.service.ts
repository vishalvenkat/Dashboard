import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Brand } from "../Interface/brand";
@Injectable({
  providedIn: "root",
})
export class BrandService {
  brandList: Brand[] = [];
  constructor(http: HttpClient) {
    http.get("./assets/Json/brand.json").subscribe(
      (data: Brand[]) => {
        this.generateBrandList(data);
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }
  generateBrandList = (data: Brand[]): void => {
    data.forEach((brand) => {
      this.brandList.push(brand);
    });
  };
}
