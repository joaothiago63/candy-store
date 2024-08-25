import { Component } from '@angular/core';
import { CardProductComponent } from '../../layout/card-product/card-product.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CardProductComponent, CarouselModule, ButtonModule, TagModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  card: entityCard[] = []

  responsiveOptions: any[] | undefined; //APAGAR

  products: Product[] = getProductsData()// APAGAR

  ngOnInit() {
    for (var item = 0; item < 1; item++) {
      this.card.push({
        title: 'S',
        description: 'teste',
        image: 'teste'
      })

      // this.products = getProductsData()    //APAGAR

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
      ]; // APAGAR
    }

  }

  getSeverity(status: string) : string | any {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }

}

function getProductsData(): Product[] {
  return [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 29,
      category: 'Clothing',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1004',
      code: 'h456wer53',
      name: 'Bracelet',
      description: 'Product Description',
      image: 'bracelet.jpg',
      price: 15,
      category: 'Accessories',
      quantity: 73,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1005',
      code: 'av2231fwg',
      name: 'Brown Purse',
      description: 'Product Description',
      image: 'brown-purse.jpg',
      price: 120,
      category: 'Accessories',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
    },
    {
      id: '1006',
      code: 'bib36pfvm',
      name: 'Chakra Bracelet',
      description: 'Product Description',
      image: 'chakra-bracelet.jpg',
      price: 32,
      category: 'Accessories',
      quantity: 5,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },
    {
      id: '1007',
      code: 'mbvjkgip5',
      name: 'Galaxy Earrings',
      description: 'Product Description',
      image: 'galaxy-earrings.jpg',
      price: 34,
      category: 'Accessories',
      quantity: 23,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1008',
      code: 'vbb124btr',
      name: 'Game Controller',
      description: 'Product Description',
      image: 'game-controller.jpg',
      price: 99,
      category: 'Electronics',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 4
    },
    {
      id: '1009',
      code: 'cm230f032',
      name: 'Gaming Set',
      description: 'Product Description',
      image: 'gaming-set.jpg',
      price: 299,
      category: 'Electronics',
      quantity: 63,
      inventoryStatus: 'INSTOCK',
      rating: 3
    },
    {
      id: '1010',
      code: 'plb34234v',
      name: 'Gold Phone Case',
      description: 'Product Description',
      image: 'gold-phone-case.jpg',
      price: 24,
      category: 'Accessories',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
    },
    {
      id: '1011',
      code: '4920nnc2d',
      name: 'Green Earbuds',
      description: 'Product Description',
      image: 'green-earbuds.jpg',
      price: 89,
      category: 'Electronics',
      quantity: 23,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1012',
      code: '250vm23cc',
      name: 'Green T-Shirt',
      description: 'Product Description',
      image: 'green-t-shirt.jpg',
      price: 49,
      category: 'Clothing',
      quantity: 74,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1013',
      code: 'fldsmn31b',
      name: 'Grey T-Shirt',
      description: 'Product Description',
      image: 'grey-t-shirt.jpg',
      price: 48,
      category: 'Clothing',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 3
    },
    {
      id: '1014',
      code: 'waas1x2as',
      name: 'Headphones',
      description: 'Product Description',
      image: 'headphones.jpg',
      price: 175,
      category: 'Electronics',
      quantity: 8,
      inventoryStatus: 'LOWSTOCK',
      rating: 5
    },
    {
      id: '1015',
      code: 'vb34btbg5',
      name: 'Light Green T-Shirt',
      description: 'Product Description',
      image: 'light-green-t-shirt.jpg',
      price: 49,
      category: 'Clothing',
      quantity: 34,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1016',
      code: 'k8l6j58jl',
      name: 'Lime Band',
      description: 'Product Description',
      image: 'lime-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 12,
      inventoryStatus: 'INSTOCK',
      rating: 3
    }
  ]
}

interface entityCard {
  title: string
  image: string,
  description: string
}


interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
