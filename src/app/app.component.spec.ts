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

  it('Jasmine Matcher - toBeDefined', function () {
    var MyObj = {
      foo: "foo"
    };
    var Myfunction = (function () { })();
    var strUndefined;

    // Check if the string "The dotnet office" is defined
    expect("The dotnet office").toBeDefined();

    // Check if the object MyObj is defined
    expect(MyObj).toBeDefined();

    // Check if the property foo in MyObj is defined
    expect(MyObj.foo).toBeDefined();

    // Check if the function Myfunction is not defined
    expect(Myfunction).not.toBeDefined();

    // Check if the variable strUndefined is not defined
    expect(strUndefined).not.toBeDefined();
  });

  it('Jasmine Matcher - toBeUndefined', function () {
    var MyObj = {
      foo: "foo"
    };
    var Myfunction = (function () { })();
    var strUndefined;

    // Check if the object MyObj is not undefined
    expect(MyObj).not.toBeUndefined();

    // Check if the property foo in MyObj is not undefined
    expect(MyObj.foo).not.toBeUndefined();

    // Check if the function Myfunction is undefined
    expect(Myfunction).toBeUndefined();

    // Check if the variable strUndefined is undefined
    expect(strUndefined).toBeUndefined();
  });



});
