import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './core/pages/layout/layout.component';
import { JobspageComponent } from './core/pages/jobspage/jobspage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent,JobspageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Devjobs';
}
