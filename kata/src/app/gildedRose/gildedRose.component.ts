import { Component, Input, OnInit } from '@angular/core';
import { Item, ItemName } from './type';

@Component({
  selector: 'app-gildedRose',
  templateUrl: './gildedRose.component.html',
  styleUrls: ['./gildedRose.component.css'],
})
export class GildedRoseComponent implements OnInit {
  @Input() items: Item[] = [];
  name = '';
  sellIn = 0;
  quality = 0; 
  static readonly MAXIMUM_QUALITY = 50; 
  static readonly BACKSTAGE_PASS_THRESHOLD_1 = 11; 
  static readonly BACKSTAGE_PASS_THRESHOLD_2 = 6; 

  constructor() {}

  ngOnInit() {}

  updateQuality() {    
    let item: Item

    for (let i = 0; i < this.items.length; i++) {
      item = this.items[i]      
      if (
        !(item.name === ItemName.AGED_BRIE) &&
        !(item.name === ItemName.BACKSTAGE)
      ) {
        if (item.quality > 0) {
          if (!(item.name === ItemName.SULFURAS)) {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < GildedRoseComponent.MAXIMUM_QUALITY) {
          item.quality = item.quality + 1;

          if (
            item.name === ItemName.BACKSTAGE
          ) {
            if (item.sellIn < GildedRoseComponent.BACKSTAGE_PASS_THRESHOLD_1) {
              if (item.quality < GildedRoseComponent.MAXIMUM_QUALITY) {
                item.quality = item.quality + 1;
              }
            }

            if (item.sellIn < GildedRoseComponent.BACKSTAGE_PASS_THRESHOLD_2) {
              if (item.quality < GildedRoseComponent.MAXIMUM_QUALITY) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }

      if (!(item.name === ItemName.SULFURAS)) {
        item.sellIn = item.sellIn - 1;
      }

      if (item.sellIn < 0) {
        if (!(item.name === ItemName.AGED_BRIE)) {
          if (
            !(
              item.name === ItemName.BACKSTAGE
            )
          ) {
            if (item.quality > 0) {
              if (!(item.name === ItemName.SULFURAS)) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality =
              item.quality - item.quality;
          }
        } else {
          if (item.quality < GildedRoseComponent.MAXIMUM_QUALITY) {
            item.quality = item.quality + 1;
          }
        }
      }
    }
  }
}
