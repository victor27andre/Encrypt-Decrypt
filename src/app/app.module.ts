import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AesComponent } from './aes/aes.component';
import { DesComponent } from './des/des.component';
import { CcComponent } from './cc/cc.component';
import { XorComponent } from './xor/xor.component';
import { SdesComponent } from './sdes/sdes.component';

import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AesComponent,
    DesComponent,
    CcComponent,
    XorComponent,
    SdesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
