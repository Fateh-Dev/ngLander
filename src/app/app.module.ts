import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { I18nModule } from './i18n/i18n.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CookieService } from 'ngx-cookie-service';
import { PricingComponent } from './SharedComponents/pricing/pricing.component';
import { ServiceComponent } from './SharedComponents/service/service.component';
import { ContactComponent } from './SharedComponents/contact/contact.component';
import { WorkComponent } from './SharedComponents/work/work.component';
import { HomeComponent } from './SharedComponents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    ServiceComponent,
    ContactComponent,
    WorkComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    I18nModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
