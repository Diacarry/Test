import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePrincipalComponent } from './image-principal.component';

describe('ImagePrincipalComponent', () => {
  let component: ImagePrincipalComponent;
  let fixture: ComponentFixture<ImagePrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
