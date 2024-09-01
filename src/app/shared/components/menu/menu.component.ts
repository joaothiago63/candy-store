import { Component } from '@angular/core';
import { CardProductComponent } from '../../layout/card-product/card-product.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';
import { entityCard } from '../../domain/cardDomain';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CardProductComponent, CarouselModule, ButtonModule, TagModule, AccordionModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  cards: entityCard[] = []

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    for (var item = 0; item < 5; item++) {
      this.cards.push({
        title: 'Leite ninho',
        description: 'Sorvete Leite Ninho Sorvete Leite Ninho Sorvete Leite Ninho Sorvete Leite Ninho',
        image: 'https://cdn.awsli.com.br/800x800/680/680434/produto/71232678/leite-ninho-fases-1-800g-58b322ca.jpg'
      })

      this.responsiveOptions = [
        {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
        },
        {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
        }
      ];
    }
  }
}