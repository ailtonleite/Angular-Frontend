import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaCrudComponent } from './conta-crud.component';

describe('ContaCrudComponent', () => {
  let component: ContaCrudComponent;
  let fixture: ComponentFixture<ContaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
