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
import { DataSummaryComponent } from './SharedComponents/data-summary/data-summary.component';
import { DataSummaryHeaderComponent } from './SharedComponents/data-summary-header/data-summary-header.component';
import { DataListeHeaderComponent } from './SharedComponents/data-liste-header/data-liste-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DataSummaryComponent,
    DataSummaryHeaderComponent,
    DataListeHeaderComponent,
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
