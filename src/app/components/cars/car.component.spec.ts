import { TestBed, async } from '@angular/core/testing';
import { CarComponent } from './car.component';
describe('CarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'agencia-carros'`, async(() => {
    const fixture = TestBed.createComponent(CarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('agencia-carros');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to agencia-carros!');
  }));
});
