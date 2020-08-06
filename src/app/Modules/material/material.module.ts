import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDialogModule } from "@angular/material/dialog";
const materialModule = [
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatDialogModule,
];
@NgModule({
  exports: [materialModule],
  imports: [materialModule],
})
export class MaterialModule {}
