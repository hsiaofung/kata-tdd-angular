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
    const item = createAndUpdate(15, 25, 'foo');
    expect(item.sellIn).toEqual(14);
    expect(item.quality).toEqual(24);
  });

  it('qualityDegradesTwiceAsFast', () => {
    const item = createAndUpdate(0, 17, 'foo');
    expect(item.quality).toEqual(15);
  });

  it('qualityIsNeverNegative', () => {
    const item = createAndUpdate(5, 0, 'foo');
    expect(item.quality).toEqual(0);
  });

  it('agedBrieIncreasesInQuality', () => {
    const item = createAndUpdate(15, 25, 'Aged Brie');
    expect(item.quality).toEqual(26);
  });

  it('testAgedBrieNeverExpires', () => {
    const item = createAndUpdate(0, 42, 'Aged Brie');
    expect(-1).toEqual(item.sellIn);
    expect(44).toEqual(item.quality);
  });

  it('backstagePassMaximumQuality', () => {
    const item = createAndUpdate(
      10,
      48,
      'Backstage passes to a TAFKAL80ETC concert'
    );
    expect(50).toEqual(item.quality);
  });

  it('backstagePassQualityDoesNotExceed50', () => {
    const item = createAndUpdate(
      10,
      49,
      'Backstage passes to a TAFKAL80ETC concert'
    );
    expect(50).toEqual(item.quality);
  });

  it('backstagePassSellInSmallerThan5DaysBy3', () => {
    const item = createAndUpdate(
      5,
      40,
      'Backstage passes to a TAFKAL80ETC concert'
    );
    expect(43).toEqual(item.quality);
  });

  it('testbackstagePassNeverExpires', () => {
    const item = createAndUpdate(0, 42, 'Backstage passes to a TAFKAL80ETC concert');    
    expect(0).toEqual(item.quality);
  });

  it('conjuredDegradeTwiceAsFast', () => {
    const item = createAndUpdate(15, 25, 'Conjured');    
    expect(23).toEqual(item.quality);
  });

  function createAndUpdate(sellIn: number, quality: number, name: string) {
    const item: Item[] = [{ name, sellIn, quality }];
    component.items = item; // 赋值 Input 数据
    fixture.detectChanges(); // 让 Angular 侦测数据变化
    component.updateQuality();
    return component.items[0];
  }
});
