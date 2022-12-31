import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [NavbarComponent, ProductListComponent],
  imports: [CommonModule, IonicModule],
  exports: [NavbarComponent, ProductListComponent],
})
export class ComponentsModule {}
