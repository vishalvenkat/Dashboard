import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
const materialModule = [MatIconModule, MatButtonModule, MatSelectModule];
@NgModule({
  exports: [materialModule],
  imports: [materialModule],
})
export class MaterialModule {}
