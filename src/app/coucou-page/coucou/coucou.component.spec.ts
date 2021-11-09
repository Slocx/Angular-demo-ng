import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoucouComponent } from './coucou.component';

describe('CoucouComponent', () => {
  let component: CoucouComponent;
  let fixture: ComponentFixture<CoucouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoucouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoucouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
