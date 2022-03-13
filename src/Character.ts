import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _lifePoints: number;
  private maxLifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private readonly _energy: Energy;

  constructor(private name: string) {
    this._race = new Elf(this.name, 1);
    this._archetype = new Mage(this.name);
    this.maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = { 
      type_: this._archetype.energyType, amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this.archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._defense;
    let lifeRemains = 0;

    if (damage > 0) {
      lifeRemains = this._lifePoints - damage;

      if (lifeRemains <= 0) lifeRemains = -1;

      this._lifePoints = lifeRemains;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(this._strength);
  }

  levelUp() {
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    // Vida não pode ser maior que a da raça
    // Randomiza o acréscimo de maxLifePoints
    this.maxLifePoints += getRandomInt(1, 10);

    // Corrige os valores se ultrapassar do máximo da Raça
    if (this.maxLifePoints > this._race.maxLifePoints) {
      const lifeAbove = this.maxLifePoints - this._race.maxLifePoints;
      this.maxLifePoints -= lifeAbove;
    }

    // Seta os _lifePoints para o máximo
    this._lifePoints = this.maxLifePoints;
  }

  special(enemy: Fighter) {
    enemy.receiveDamage(this.maxLifePoints);
  }
}

export default Character;