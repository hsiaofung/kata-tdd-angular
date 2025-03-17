export interface Item {
  name: string;
  sellIn: number;
  quality: number;
}

export enum ItemName {
  AGED_BRIE = 'Aged Brie',  
  BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert' ,
  SULFURAS = 'Sulfuras, Hand of Ragnaros',
  CONJURED = 'Conjured'
}