import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
const materialModule = [
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatSlideToggleModule,
];
@NgModule({
  exports: [materialModule],
  imports: [materialModule],
})
export class MaterialModule {}
