import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { CommonModule } from '@angular/common';
import { Jobs } from '../../Interface/job';


@Component({
  selector: 'app-jobspage',
  imports: [CommonModule],
  templateUrl: './jobspage.component.html',
  styleUrl: './jobspage.component.css'
})
export class JobspageComponent {
  jobs: Jobs[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getJobs().subscribe(data => {
      console.log(this.jobs = data.jobs);
    });
  }

}

