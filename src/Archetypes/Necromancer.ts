import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private readonly energy: EnergyType; 
  private static _archetypeCounter = 0;

  constructor(_name: string) {
    super(_name);
    this.energy = 'mana';

    // Soma instância criada do Archetype
    Necromancer._archetypeCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return this._archetypeCounter;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Necromancer;