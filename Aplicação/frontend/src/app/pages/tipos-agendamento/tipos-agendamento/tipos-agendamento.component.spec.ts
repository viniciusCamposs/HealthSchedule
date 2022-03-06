import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposAgendamentoComponent } from './tipos-agendamento.component';

describe('TiposAgendamentoComponent', () => {
  let component: TiposAgendamentoComponent;
  let fixture: ComponentFixture<TiposAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposAgendamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
