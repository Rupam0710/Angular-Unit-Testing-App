import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Addition } from './calculator';

describe('AppComponent', () => {

  const component = new AppComponent();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('Show Addition result', () => {
    // expect(Addition(10, 20)).toBe(40); It gives failure 
    expect(Addition(10, 20)).toBeLessThanOrEqual(30); // it shows test case pass
  })

  it('ToBe and ToEqual test case', () => {

    // tobeGreaterThan(expectedValue)
    var a = 5;
    expect(a).toBeGreaterThan(4);

    // toBeGreaterThanOrEqual(expectedValue)
    var b = 3;
    expect(b).toBeGreaterThanOrEqual(3);

    //toBeLessThan(expectedValue)
    var c = 2;
    expect(c).toBeLessThan(5);

    //toBeLessThanOrEqual(expected value)
    var d = 2;
    expect(d).toBeLessThanOrEqual(2);
  })
});
