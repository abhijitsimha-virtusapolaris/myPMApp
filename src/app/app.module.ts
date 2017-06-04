import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavComponent } from './nav/nav.component';
import { ProductListFilterPipe } from './product-list/product-list-filter.pipe';
import { StarComponent } from './star/star.component';
import { ProductServiceService } from './product-list/product-service.service';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductGaurdService } from './product-list/product-gaurd.service';
import { ProductIDPipe } from './product-list/product-detail/product-id.pipe';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    NavComponent,
    ProductListFilterPipe,
    StarComponent,
    ProductDetailComponent,
    ProductIDPipe,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',canActivate: [ProductGaurdService] , component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'info', component: InfoComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', component: WelcomeComponent}
    ])
  ],
  providers: [
    ProductServiceService,
    ProductGaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
