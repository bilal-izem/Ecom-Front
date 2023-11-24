import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverComponent } from './univer.component';

describe('UniverComponent', () => {
  let component: UniverComponent;
  let fixture: ComponentFixture<UniverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
