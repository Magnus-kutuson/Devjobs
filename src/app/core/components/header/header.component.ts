import { Component } from '@angular/core';
import { InputsComponent } from '../inputs/inputs.component';

@Component({
  selector: 'app-header',
  imports: [InputsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isDarkMode: boolean = false; 

  toggleMode() {
    this.isDarkMode = !this.isDarkMode; 
    this.updateBodyClass();
  }

  updateBodyClass() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  ngOnInit() {
    this.updateBodyClass();
  }
}
