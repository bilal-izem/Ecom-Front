import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HommeComponent } from './homme.component';

describe('HommeComponent', () => {
  let component: HommeComponent;
  let fixture: ComponentFixture<HommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HommeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
