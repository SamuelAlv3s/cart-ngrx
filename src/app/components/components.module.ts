import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [NavbarComponent, ProductListComponent, ShoppingCartComponent],
  imports: [CommonModule, IonicModule],
  exports: [NavbarComponent, ProductListComponent, ShoppingCartComponent],
})
export class ComponentsModule {}
