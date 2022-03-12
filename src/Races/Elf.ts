import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _raceCounter = 0;

  constructor(name: string, dexterity: number) { 
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._raceCounter += 1;
  }

  static createdRacesInstances(): number {
    return Elf._raceCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;