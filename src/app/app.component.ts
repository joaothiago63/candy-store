import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { BaseComponent } from './shared/layout/base/base.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'candy-store';

  route = inject(Router)

  ngOnInit() {
    this.route.navigate(['menu'])
  }
}
