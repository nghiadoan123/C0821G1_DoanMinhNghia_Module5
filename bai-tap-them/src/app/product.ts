export class Product {
  id: number;
  name: string;
  gender: number;
  point: number;


  constructor(id: number, name: string, gender: number, point: number) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.point = point;
  }
}
