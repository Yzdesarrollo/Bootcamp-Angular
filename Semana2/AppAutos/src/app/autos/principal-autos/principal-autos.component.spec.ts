import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAutosComponent } from './principal-autos.component';

describe('PrincipalAutosComponent', () => {
  let component: PrincipalAutosComponent;
  let fixture: ComponentFixture<PrincipalAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
