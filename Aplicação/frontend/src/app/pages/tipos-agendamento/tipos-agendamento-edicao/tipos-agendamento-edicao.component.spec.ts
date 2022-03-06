import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposAgendamentoEdicaoComponent } from './tipos-agendamento-edicao.component';

describe('TiposAgendamentoEdicaoComponent', () => {
  let component: TiposAgendamentoEdicaoComponent;
  let fixture: ComponentFixture<TiposAgendamentoEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposAgendamentoEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposAgendamentoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
