import Races from './Race';

export default class Dwarf extends Races {
  private _maxLife: number;
  static _createdInstances = 0;

  constructor(
    name:string,
    dexterity:number,
  ) {
    super(name, dexterity);
    this._maxLife = 80;
    Dwarf._createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdInstances;
  }
}