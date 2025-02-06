import { Component } from '@angular/core';
import { InputsComponent } from '../inputs/inputs.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [InputsComponent, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
