import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthorsComponent } from "./authors/authors.component";
import { AuthorsService } from "./authors/authors.service";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AuthorsComponent
      ],
      providers: [AuthorsService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
