import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NxWelcomeComponent, RouterTestingModule],
    }).compileComponents();
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain(
      "Welcome toh-nx-v2"
    );
  });

  it(`should have as title 'toh-nx-v2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("toh-nx-v2");
  });
});
