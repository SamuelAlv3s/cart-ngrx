import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Cart } from 'src/app/interfaces/cart.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';
import { Add } from 'src/app/store/cart.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private store: Store<Cart>,
    private toastCtrl: ToastController,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  async add(product: Product) {
    this.store.dispatch(Add(product));

    const toast = await this.toastCtrl.create({
      message: `Product ${product.title} added to cart`,
      duration: 2000,
      buttons: [
        {
          text: 'OK',
        },
      ],
    });
    await toast.present();
  }
}
