import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarTelaDeCadastroComponent } from './search-bar-tela-de-cadastro.component';

describe('SearchBarTelaDeCadastroComponent', () => {
  let component: SearchBarTelaDeCadastroComponent;
  let fixture: ComponentFixture<SearchBarTelaDeCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarTelaDeCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarTelaDeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
