import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _raceCounter = 0;

  constructor(name: string, dexterity: number) { 
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._raceCounter += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._raceCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;