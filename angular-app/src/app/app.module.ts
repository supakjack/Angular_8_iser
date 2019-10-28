import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { CustomerComponent } from './component/customer/customer.component';
import { FormsModule } from "@angular/forms";


import { RouterModule , Routes } from '@angular/router';
const appRoutes: Routes =[
  { path: 'customer', component: CustomerComponent} ,
  {path: 'product', component: ProductComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
