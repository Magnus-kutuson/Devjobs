import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputsComponent } from '../inputs/inputs.component';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, InputsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
