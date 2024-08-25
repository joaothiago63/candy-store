import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { Router , NavigationEnd, RouterLink} from '@angular/router';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [ButtonModule, SidebarModule,RouterLink],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {
  sidebarVisible: boolean = false;

  route = inject(Router)

  firstRoute : string | undefined

  ngAfterViewInit() {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.firstRoute = event.url.substring(1);                        
      }
    });
  }

  contentSidebar: sidebarModel[] = [
    {
      label: 'Cardápio',
      logo: 'menu_book',
      url: 'menu'
    },
    {
      label: 'Sorvetes',
      logo: 'icecream',
      url: 'icecream'
    },
    {
      label: 'Personalizar',
      logo: 'cake',
      url: 'personalize'
    }
  ]
}

interface sidebarModel {
  label: string,
  logo: string,
  url: string
}
