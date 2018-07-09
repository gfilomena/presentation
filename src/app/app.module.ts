import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountriesService } from 'src/app/service/countries.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatToolbarModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatCheckboxModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
