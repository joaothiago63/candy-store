import { Component, signal, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { MatExpansionModule } from '@angular/material/expansion';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { entityCard } from '../../domain/cardDomain';



@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [AccordionModule, MatExpansionModule, AvatarModule, AvatarGroupModule, BadgeModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {

  card = input.required<entityCard>()
    
}
