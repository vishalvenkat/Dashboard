import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
const materialModule = [
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatDialogModule,
  MatMenuModule,
];
@NgModule({
  exports: [materialModule],
  imports: [materialModule],
})
export class MaterialModule {}
