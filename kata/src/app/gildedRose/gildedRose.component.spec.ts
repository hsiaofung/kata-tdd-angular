import { GildedRoseComponent } from './gildedRose.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Item } from './type';

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

  it('systemLowerValues', ()=>{
    const item:Item[] = [{name:'foo', sellIn:15, quality:25}]
    component.items = item; // 赋值 Input 数据
    fixture.detectChanges(); // 让 Angular 侦测数据变化
    component.updateQuality()
    expect(component.items[0].sellIn).toEqual(14)
    expect(component.items[0].quality).toEqual(24)
  })

  it('qualityDegradesTwiceAsFast', ()=>{
    const item:Item[] = [{name:'Expire Item', sellIn:0, quality:17}]
    component.items = item; // 赋值 Input 数据
    fixture.detectChanges(); // 让 Angular 侦测数据变化
    component.updateQuality()
    expect(component.items[0].quality).toEqual(15)
  })

  it('qualityIsNeverNegative', ()=>{
    const item:Item[] = [{name:'Non-Negative Item', sellIn:5, quality:0}]
    component.items = item; // 赋值 Input 数据
    fixture.detectChanges(); // 让 Angular 侦测数据变化
    component.updateQuality()
    expect(component.items[0].quality).toEqual(0)
  })
 
});
