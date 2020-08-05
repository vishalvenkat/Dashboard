import { brandType } from "../types/BrandType";

export class Brand {
  brandId: number;
  brandName: string;
  facebookId: number;
  instagramId: number;
  twitterId: number;
  youtubeId: number;
  constructor(brand: brandType) {
    this.brandId = brand.brandId;
    this.brandName = brand.brandName;
    this.facebookId = brand.facebookId;
    this.instagramId = brand.instagramId;
    this.twitterId = brand.twitterId;
    this.youtubeId = brand.youtubeId;
  }
}
