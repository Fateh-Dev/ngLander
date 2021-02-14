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
import { MatPaginatorIntl } from '@angular/material/paginator';
import { WidgetComponent } from './SharedComponents/widget/widget.component';
import { PricingComponent } from './SharedComponents/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    PricingComponent,
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
