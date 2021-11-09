import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoucouPageComponent } from './coucou-page.component';

describe('CoucouPageComponent', () => {
  let component: CoucouPageComponent;
  let fixture: ComponentFixture<CoucouPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoucouPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoucouPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
