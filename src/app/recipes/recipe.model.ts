import {Ingrediant} from "../shared/ingrediant.model";
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingrediants: Ingrediant[];

  constructor(name: string, desc: string, imgPath: string, ingrediants: Ingrediant[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
    this.ingrediants = ingrediants;
  }
}
