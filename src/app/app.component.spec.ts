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

  it('Jasmine Matcher - Math function', () => {
    // Test input strings
    var input = "The dotnetoffice tutorial";
    var strPhone = "001-789-56-67";

    // Test if 'input' contains the substring "dotnetoffice" (case-sensitive)
    expect(input).toMatch(/dotnetoffice/);

    // Test if 'input' contains the substring "dotnetoffice" (case-insensitive)
    expect(input).toMatch(/dotnetoffice/i);

    // Test if 'input' does not contain the substring "dot1"
    expect(input).not.toMatch(/dot1/);

    // Test if 'strPhone' matches the pattern of "###-###-##-##" where # represents a digit
    expect(strPhone).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/);
  })

  it('Jasmine Matcher - toBeCloseTo', () => {
    var pi = 3.1415926, e = 2.78;

    // Check if pi is not close to e
    expect(pi).not.toBeCloseTo(e);

    // Check if pi is close to e with 0 precision (exact match)
    expect(pi).toBeCloseTo(e, 0);

    // Check if 4.334 is close to 4.334 with default precision
    expect(4.334).toBeCloseTo(4.334);

    // Check if 4.334 is close to 4.3345 with 1 decimal point precision
    expect(4.334).toBeCloseTo(4.3345, 1);

    // Check if 4.334 is close to 4.3345 with 2 decimal points precision
    expect(4.334).toBeCloseTo(4.3345, 2);

    //  4.334 is not close to 4.3 with 2 decimal points precision
    expect(4.334).not.toBeCloseTo(4.3, 2);

    // 4.223 is not close to 4.22 with 3 decimal points precision
    expect(4.223).not.toBeCloseTo(4.22, 3);

    // 4.223 is not close to 4.22 with 4 decimal points precision
    expect(4.223).not.toBeCloseTo(4.22, 4);
  });

});
