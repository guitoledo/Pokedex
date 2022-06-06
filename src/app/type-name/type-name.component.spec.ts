import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeNameComponent } from './type-name.component';

describe('TypeNameComponent', () => {
  let component: TypeNameComponent;
  let fixture: ComponentFixture<TypeNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
