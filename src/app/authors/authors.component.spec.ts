import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsComponent } from './authors.component';
import { AuthorsService } from "./authors.service";

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsComponent],
      providers: [AuthorsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should fetch and render Authors', async(() => {
    const authors = TestBed.createComponent(AuthorsComponent);
    authors.detectChanges();
    const compiled = authors.debugElement.nativeElement;
    authors.detectChanges();
    expect(compiled.querySelector('ul')==null).toBeFalsy;
  }));
});
