import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPrincipalComponent } from './description-principal.component';

describe('DescriptionPrincipalComponent', () => {
  let component: DescriptionPrincipalComponent;
  let fixture: ComponentFixture<DescriptionPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
