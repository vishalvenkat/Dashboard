import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { MatFormFieldModule, MatInputModule } from "@angular/material";

const materialModule = [
  MatIconModule,
  MatDialogModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
];
@NgModule({
  exports: [materialModule],
  imports: [materialModule],
})
export class MaterialModule {}
