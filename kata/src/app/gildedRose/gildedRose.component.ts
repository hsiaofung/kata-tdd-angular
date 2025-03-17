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
    for (let i = 0; i < this.items.length; i++) {
      if (
        !(this.items[i].name === ItemName.AGED_BRIE) &&
        !(this.items[i].name === ItemName.BACKSTAGE)
      ) {
        if (this.items[i].quality > 0) {
          if (!(this.items[i].name === ItemName.SULFURAS)) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < GildedRoseComponent.MAXIMUM_QUALITY) {
          this.items[i].quality = this.items[i].quality + 1;

          if (
            this.items[i].name === ItemName.BACKSTAGE
          ) {
            if (this.items[i].sellIn < GildedRoseComponent.BACKSTAGE_PASS_THRESHOLD_1) {
              if (this.items[i].quality < GildedRoseComponent.MAXIMUM_QUALITY) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }

            if (this.items[i].sellIn < GildedRoseComponent.BACKSTAGE_PASS_THRESHOLD_2) {
              if (this.items[i].quality < GildedRoseComponent.MAXIMUM_QUALITY) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }

      if (!(this.items[i].name === ItemName.SULFURAS)) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      if (this.items[i].sellIn < 0) {
        if (!(this.items[i].name === ItemName.AGED_BRIE)) {
          if (
            !(
              this.items[i].name === ItemName.BACKSTAGE
            )
          ) {
            if (this.items[i].quality > 0) {
              if (!(this.items[i].name === ItemName.SULFURAS)) {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < GildedRoseComponent.MAXIMUM_QUALITY) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
  }
}
