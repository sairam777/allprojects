import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {starComponent} from './shared/star.component';
import {ProductService} from './products/product.service';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import {HttpModule} from '@angular/http';




@NgModule({
imports: [ BrowserModule,FormsModule,HttpModule],
  declarations: [ AppComponent,ProductListComponent,ProductFilterPipe,starComponent],
  bootstrap: [ AppComponent],
 providers:[ProductService]
})


export class AppModule { }
