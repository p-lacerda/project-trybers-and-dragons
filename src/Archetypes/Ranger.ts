import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private readonly energy: EnergyType; 
  private static _archetypeCounter = 0;

  constructor(_name: string) {
    super(_name);
    this.energy = 'stamina';

    // Soma instância criada do Archetype
    Ranger._archetypeCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return this._archetypeCounter;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Ranger;