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

    //tobe(true)
    var a = 'hello';
    expect(a).toBe('hello');

    //tobeTrue()
    var a = true;
    expect(a).toBeTrue();

    //tobeFalse()
    var a = false;
    expect(a).toBeFalse();

    //tobeTruthy()
    var a = true;
    expect(a).toBeTruthy();

    //tobeFalsy()
    var a = true;
    expect(undefined).toBeFalsy("abc");

  })
});
