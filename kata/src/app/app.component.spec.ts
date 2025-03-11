import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent - without TestBed', () => {
  let component: AppComponent

  beforeEach(()=>{
    component = new AppComponent()
  })

  //Rename Variable
  it('convertsSingleDigitRoman', ()=>{
    convertsSingleDigitRoman()

    function convertsSingleDigitRoman(){
      const arabic = component.convert("I")
      expect(arabic).toEqual(1)
    }    
  })
  
});
