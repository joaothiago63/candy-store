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
    for (var item = 0; item < 20; item++) {
      this.cards.push({
        title: 'Elefante',
        description: 'Lorem Ipsum',
        image: 'https://www.petz.com.br/blog/wp-content/uploads/2022/08/quanto-tempo-vive-um-elefante-final-1280x720.jpg'
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