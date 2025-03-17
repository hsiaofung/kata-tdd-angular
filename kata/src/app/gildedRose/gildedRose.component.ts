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
    let item: Item;

    for (let i = 0; i < this.items.length; i++) {
      item = this.items[i];
      if (!isAgedBrie(item) && !isBackStage(item)) {
        if (item.quality > 0) {
          if (!isSulfuras(item)) {
            item.quality--;
          }
        }
      } else {
        if (item.quality < GildedRoseComponent.MAXIMUM_QUALITY) {
          item.quality++;

          if (isBackStage(item)) {
            if (item.sellIn < GildedRoseComponent.BACKSTAGE_PASS_THRESHOLD_1) {
              if (item.quality < GildedRoseComponent.MAXIMUM_QUALITY) {
                item.quality++;
              }
            }

            if (item.sellIn < GildedRoseComponent.BACKSTAGE_PASS_THRESHOLD_2) {
              if (item.quality < GildedRoseComponent.MAXIMUM_QUALITY) {
                item.quality++;
              }
            }
          }
        }
      }

      if (!isSulfuras(item)) {
        item.sellIn = item.sellIn - 1;
      }

      if (item.sellIn < 0) {
        if (isAgedBrie(item)) {
          if (item.quality < GildedRoseComponent.MAXIMUM_QUALITY) {
            item.quality++;
          }
        } else {
          if (isBackStage(item)) {
            item.quality = 0;
          } else {
            if (item.quality > 0) {
              if (!isSulfuras(item)) {
                item.quality--;
              }
            }
          }
        }
      }
    }

    function isAgedBrie(item: Item) {
      return item.name === ItemName.AGED_BRIE;
    }
    function isBackStage(item: Item) {
      return item.name === ItemName.BACKSTAGE;
    }
    function isSulfuras(item: Item) {
      return item.name === ItemName.SULFURAS;
    }
  }
}
