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

  it('Jasmine Matcher - toBeNull', function () {
    var nullValue = null;
    var valueUndefined;
    var notNull = 'notNull';
    expect(null).toBeNull();
    expect(nullValue).toBeNull();
    expect(valueUndefined).not.toBeNull();
    expect(notNull).not.toBeNull();
  })

  it('Jasmine Matcher - toContain', function () {
    var MyArray = ['jasmine', 'karma', 'Dotnetoffice'];
    expect([1, 2, 3]).toContain[2];
    expect([1, 2, 3]).toContain(2, 3);
    expect(MyArray).toContain("jasmine");
    expect([1, 2, 3]).not.toContain(4);
    expect(MyArray).not.toContain("dot");
  })

  it('Jasmine Matcher - toBeNaN', function () {
    expect(0 / 0).toBeNaN();
    expect(0 / 5).not.toBeNaN();
  })

  it('Jasmine Matcher - toBePositiveInfinity', function () {
    expect(1 / 0).toBePositiveInfinity();

  })

  it('Jasmine Matcher - toBeNegativeInfinity', function () {
    expect(-1 / 0).toBeNegativeInfinity();

  })
});
