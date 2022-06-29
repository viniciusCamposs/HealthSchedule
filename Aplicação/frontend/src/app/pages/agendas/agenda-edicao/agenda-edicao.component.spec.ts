import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaEdicaoComponent } from './agenda-edicao.component';

describe('AgendaEdicaoComponent', () => {
  let component: AgendaEdicaoComponent;
  let fixture: ComponentFixture<AgendaEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
