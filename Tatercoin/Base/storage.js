class Storage extends Object {
  constructor() {
    super(2, "Storage");
    this.potatoes = 0;
    this.hasPotatoes = false;
    this.peeledPotatoes = 0;
    this.hasPeeledPotatoes = false;
    this.slicedPotatoes = 0;
    this.hasSlicedPotatoes = false;
    this.seasonedSlicedPotatoes = 0;
    this.hasSeasonedSlicedPotatoes = false;
    this.potatoChips = 0;
    this.hasPotatoChips = false;

    //Upgrades
    this.level1Upgrade = false;
    this.level2Upgrade = false;
    this.level3Upgrade = false;
  }
}
