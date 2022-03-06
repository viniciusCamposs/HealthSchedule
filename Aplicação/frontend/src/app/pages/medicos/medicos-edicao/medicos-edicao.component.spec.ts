import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosEdicaoComponent } from './medicos-edicao.component';

describe('MedicosEdicaoComponent', () => {
  let component: MedicosEdicaoComponent;
  let fixture: ComponentFixture<MedicosEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
