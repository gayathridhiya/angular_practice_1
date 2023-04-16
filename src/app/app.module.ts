import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SideNavigationComponentComponent } from './side-navigation-component/side-navigation-component.component';
import { MainBodyComponentComponent } from './main-body-component/main-body-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SideNavigationComponentComponent,
    MainBodyComponentComponent,
    FooterComponentComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
