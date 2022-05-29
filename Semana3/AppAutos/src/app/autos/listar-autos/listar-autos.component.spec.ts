import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAutosComponent } from './listar-autos.component';

describe('ListarAutosComponent', () => {
  let component: ListarAutosComponent;
  let fixture: ComponentFixture<ListarAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
