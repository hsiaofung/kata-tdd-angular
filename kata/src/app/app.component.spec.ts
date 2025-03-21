import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent - without TestBed', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });
  
  it('convertsSingleDigitRoman', () => {    
    convertsSingleDigitRoman();

    function convertsSingleDigitRoman() {
      expect(component.convert('I')).toEqual(1);
      expect(component.convert('V')).toEqual(5);
      expect(component.convert('X')).toEqual(10);
      expect(component.convert('L')).toEqual(50);
      expect(component.convert('C')).toEqual(100);
      expect(component.convert('D')).toEqual(500)
    }
  });

  it('romanNumeralAddition', ()=>{
    expect(component.convert('II')).toEqual(2);
    expect(component.convert('III')).toEqual(3);
    expect(component.convert('VI')).toEqual(6);
  })   

});


