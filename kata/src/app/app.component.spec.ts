import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { convertToParamMap } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });  

  //Rename Variable
  it('convertsSingleDigitRoman', ()=>{
    convertsSingleDigitRoman()

    function convertsSingleDigitRoman(){
      const arabic = convert("I")
      expect(arabic).toEqual(1)
    }

    function convert(romanNumeral:string){
     return 1 
    }
  })
  
});
