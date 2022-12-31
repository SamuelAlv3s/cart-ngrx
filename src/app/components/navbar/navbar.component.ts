import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/interfaces/cart.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public cart$!: Observable<Cart>;

  constructor(private store: Store<{ cart: Cart }>) {}

  ngOnInit() {
    this.cart$ = this.store.pipe(select('cart'));
  }
}
