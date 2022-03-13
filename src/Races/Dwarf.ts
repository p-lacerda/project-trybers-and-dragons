import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _raceCounter = 0;

  constructor(name: string, dexterity: number) { 
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._raceCounter += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._raceCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;