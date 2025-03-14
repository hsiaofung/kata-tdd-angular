import { GildedRoseComponent } from './gildedRose.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Item } from './type';

describe('GildedRoseComponent', () => {
  let component: GildedRoseComponent;
  let fixture: ComponentFixture<GildedRoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GildedRoseComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(GildedRoseComponent);
    component = fixture.componentInstance;
    component.items = [{ name: 'foo', sellIn: 0, quality: 0 }]; // 赋值 Input 数据
    fixture.detectChanges(); // 让 Angular 侦测数据变化
  });

  it('testFrameworkWorks', () => {
    expect(component).toBeTruthy();
    component.updateQuality();
    expect(component.items[0].name).toEqual('foo');
  });

  it('systemLowerValues', () => {
    const item = createAndUpdate(15, 25);
    expect(item.sellIn).toEqual(14);
    expect(item.quality).toEqual(24);
  });

  it('qualityDegradesTwiceAsFast', () => {
    const item = createAndUpdate(0, 17);
    expect(item.quality).toEqual(15);
  });

  it('qualityIsNeverNegative', () => {
    const item = createAndUpdate(5, 0);
    expect(item.quality).toEqual(0);
  });

  function createAndUpdate(sellIn: number, quality: number) {
    const item: Item[] = [{ name: 'Item', sellIn, quality }];
    component.items = item; // 赋值 Input 数据
    fixture.detectChanges(); // 让 Angular 侦测数据变化
    component.updateQuality();
    return component.items[0];
  }
});
