import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { SecondtabComponent } from './secondtab/secondtab.component';
import { ThirdtabComponent } from './thirdtab/thirdtab.component';
import { FirsttabComponent } from './firsttab/firsttab.component';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondtabComponent,
    ThirdtabComponent,
    FirsttabComponent
    ],
  imports: [
    BrowserModule,
     BrowserAnimationsModule,
     MatToolbarModule, MatSliderModule, MatBadgeModule,  MatIconModule, MatCardModule, MatTabsModule, MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
