import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniosEdicaoComponent } from './convenios-edicao.component';

describe('ConveniosEdicaoComponent', () => {
  let component: ConveniosEdicaoComponent;
  let fixture: ComponentFixture<ConveniosEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConveniosEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveniosEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
