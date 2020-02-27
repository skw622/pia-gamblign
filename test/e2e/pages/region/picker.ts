import { PageObject } from '../../core';
import { Button, Container } from '../../elements';
import { createSelector } from '../../core/entities/selector';

class RegionPicker extends PageObject {
  public melbourneRegion: Button;
  public melbourneFlagList: Button;
  public melbourneFlagGrid: Button;
  public melbourneLatency: Button;
  public grid: Button;
  public list: Button;
  public loader: Container;

  constructor(parent: PageObject) {
    super(
      {
        selector: createSelector({
          value: '#regions',
        }),
        name: 'selector',
      },
      parent,
    );
    this.melbourneRegion = new Button(
      {
        selector: createSelector({
          value: '*[data-region-id=aus_melbourne]',
        }),
        name: 'melbourneRegion',
      },
      this,
    );
    this.melbourneFlagList = new Button(
      {
        selector: createSelector({
          value: '*[data-region-id=aus_melbourne] .flag',
        }),
        name: 'melbourneFlagList',
      },
      this,
    );
    this.melbourneFlagGrid = new Button(
      {
        selector: createSelector({
          value: '*[data-region-id=aus_melbourne] .flag > img',
        }),
        name: 'melbourneFlagGrid',
      },
      this,
    );
    this.melbourneLatency = new Button(
      {
        selector: createSelector({
          value: '*[data-region-id=aus_melbourne] .list-item-latency',
        }),
        name: 'melbourneLatency',
      },
      this,
    );
    this.grid = new Button(
      {
        selector: createSelector({
          value: '#region-grid',
        }),
        name: 'grid',
      },
      this,
    );
    this.list = new Button(
      {
        selector: createSelector({
          value: '#region-list',
        }),
        name: 'list',
      },
      this,
    );
    this.loader = new Container(
      {
        selector: createSelector({
          value: '.loader',
        }),
        name: 'loader',
      },
      this,
    );
  }
}

export { RegionPicker };
