import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesEdicaoComponent } from './especialidades-edicao.component';

describe('EspecialidadesEdicaoComponent', () => {
  let component: EspecialidadesEdicaoComponent;
  let fixture: ComponentFixture<EspecialidadesEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadesEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadesEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
