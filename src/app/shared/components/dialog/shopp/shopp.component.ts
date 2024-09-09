import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { Product } from '../../../domain/productDomain';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-shopp',
  standalone: true,
  imports: [ButtonModule, InputNumberModule, FormsModule],
  templateUrl: './shopp.component.html',
  styleUrl: './shopp.component.scss'
})
export class ShoppComponent {

  products: Product[] = [];

  value: number = 1;

  ngOnInit() {
    for (var item = 0; item < 4; item++) {
      this.products.push({
        image: "https://cdn.awsli.com.br/800x800/680/680434/produto/71232678/leite-ninho-fases-1-800g-58b322ca.jpg",
        name: "Leite Ninho",
        quantity: 2
      })
    }
  }

  increase(value: Product) {
    value.quantity = value.quantity + 1;    
  }

  toDecrease(value: Product) {
    if (value.quantity > 0)
      value.quantity = value.quantity - 1;    
  }

}
