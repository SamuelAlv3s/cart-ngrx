import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/interfaces/cart.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { Clear, Remove } from 'src/app/store/cart.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  public cart$!: Observable<Cart>;

  constructor(
    private store: Store<{ cart: Cart }>,
    private alertCtrl: AlertController
  ) {}

  remove(item: Product) {
    this.store.dispatch(Remove(item));
  }

  reset() {
    this.store.dispatch(Clear());
  }

  ngOnInit() {
    this.cart$ = this.store.pipe(select('cart'));
  }

  async presentRemoveConfirm(item: Product) {
    const alert = await this.alertCtrl.create({
      header: 'Remover item',
      message: `Deseja remover o item ${item.title}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Remover',
          handler: () => {
            this.remove(item);
          },
        },
      ],
    });

    await alert.present();
  }
}
