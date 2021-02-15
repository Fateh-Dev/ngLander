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
import { NotFound404Component } from './not-found404/not-found404.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './SharedComponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    ServiceComponent,
    ContactComponent,
    WorkComponent,
    HomeComponent,
    NotFound404Component,
    LockComponent,
    LoginComponent,
    FooterComponent,
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
