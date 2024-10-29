import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-list-products-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './list-products-page.component.html',
  styleUrl: './list-products-page.component.css'
})
export class ListProductsPageComponent {

}
