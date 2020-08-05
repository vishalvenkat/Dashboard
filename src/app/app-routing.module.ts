import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./Components/homepage/homepage.component";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "Dashboard", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
