import { GildedRoseComponent } from './gildedRose.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('GildedRoseComponent', () => {
  let component: GildedRoseComponent;  
  let fixture: ComponentFixture<GildedRoseComponent>;


  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
      imports: [GildedRoseComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(GildedRoseComponent);
    component = fixture.componentInstance;
    component.items = [{ name: 'foo', sellIn: 0, quality: 0 }]; // 赋值 Input 数据
    fixture.detectChanges(); // 让 Angular 侦测数据变化
  })  

  it('testFrameworkWorks', ()=>{        
    expect(component).toBeTruthy();
    component.updateQuality()
    expect(component.items[0].name).toEqual("foo")
  })
 
});
