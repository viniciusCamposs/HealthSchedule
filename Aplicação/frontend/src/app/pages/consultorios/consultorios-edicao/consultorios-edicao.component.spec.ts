import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriosEdicaoComponent } from './consultorios-edicao.component';

describe('ConsultoriosEdicaoComponent', () => {
  let component: ConsultoriosEdicaoComponent;
  let fixture: ComponentFixture<ConsultoriosEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultoriosEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultoriosEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
