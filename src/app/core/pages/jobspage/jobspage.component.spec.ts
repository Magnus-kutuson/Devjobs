import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobspageComponent } from './jobspage.component';

describe('JobspageComponent', () => {
  let component: JobspageComponent;
  let fixture: ComponentFixture<JobspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
