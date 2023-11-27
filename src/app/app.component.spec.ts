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

    // var a = 'hello';
    // var b = 'hello';
    // expect(a).toBe(b); //returns true for string , boolean and number ( for primitive)

    var c = ['1'];
    var d = ['1'];
    // expect(c).toBe(d); //returns false for non primitive type
    expect(c).toEqual(d); //returns true for non primitive
  })
});
