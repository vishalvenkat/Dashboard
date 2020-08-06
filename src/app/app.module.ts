import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Components/header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./Modules/material/material.module";
import { HomepageComponent } from "./Components/homepage/homepage.component";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";
import { SocialMediaCardComponent } from "./Components/social-media-card/social-media-card.component";
import { OverviewCardComponent } from "./Components/overview-card/overview-card.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { OverviewComponent } from "./Components/overview/overview.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    DashboardComponent,
    SocialMediaCardComponent,
    OverviewCardComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OverviewComponent],
})
export class AppModule {}
