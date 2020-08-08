import { Injectable } from "@angular/core";
import { Brand } from "../Interface/brand";
import brandJson from "src/assets/Json/brand.json";
@Injectable({
  providedIn: "root",
})
export class BrandService {
  private brandList: Brand[] = [];
  constructor() {
    brandJson.forEach((brand) => this.brandList.push(brand));
  }
  getBrandNameWithId = (brandId: number): string => {
    return this.brandList.find((brand) => brand.brandId === brandId).brandName;
  };
  getBrandWithId = (brandId: number): Brand => {
    return this.brandList.find((brand) => brand.brandId === brandId);
  };
  getBrandIdList = (): number[] => {
    return this.brandList.map((brand) => brand.brandId);
  };
}
