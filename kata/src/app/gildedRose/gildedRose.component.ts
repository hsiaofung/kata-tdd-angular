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
      handleIfNormalItem(item);
      handleIfAgedBrie(item);
      handleIfBackStage(item);
      handleIfSulfuras(item);
      handleIfConjured(item);
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
    function isNormalItem(item: Item) {
      return !(isAgedBrie(item) || isBackStage(item) || isSulfuras(item) || isConjured(item));
    }
    function isConjured(item: Item) {
      return item.name === ItemName.CONJURED;
    }
    function handleIfNormalItem(item: Item) {
      if (isNormalItem(item)) {
        item.sellIn--;
        if (item.sellIn <= 0) {
          item.quality = item.quality - 2;
        } else {
          item.quality--;
        }

        if (item.quality < 0) {
          item.quality = 0;
        }
      }
    }
    function handleIfSulfuras(ite: Item) {
      if (isSulfuras(item)) {
      }
    }
    function handleIfAgedBrie(ite: Item) {
      if (isAgedBrie(item)) {
        item.sellIn--;
        if (item.quality < GildedRoseComponent.MAXIMUM_QUALITY) {
          if (item.sellIn < 0) {
            item.quality = item.quality + 2;
          } else {
            item.quality++;
          }
        }
      }
    }
    function handleIfBackStage(ite: Item) {
      if (isBackStage(item)) {
        item.sellIn--;
        if (item.quality < GildedRoseComponent.MAXIMUM_QUALITY) {
          item.quality++;

          if (
            item.sellIn < GildedRoseComponent.BACKSTAGE_PASS_THRESHOLD_1 &&
            item.quality < GildedRoseComponent.MAXIMUM_QUALITY
          ) {
            item.quality++;
          }

          if (
            item.sellIn < GildedRoseComponent.BACKSTAGE_PASS_THRESHOLD_2 &&
            item.quality < GildedRoseComponent.MAXIMUM_QUALITY
          ) {
            item.quality++;
          }
        }

        if (item.sellIn < 0) {
          item.quality = 0;
        }
      }
    }
    function handleIfConjured(item: Item) {
      if (isConjured(item)) {
        item.sellIn--;
        item.quality = item.quality - 2;
      }
    }
  }
}
