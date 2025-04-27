export class car{
    brand: string;
    model: string;
    Class :number;
    constructor(brand: string, model: string, Class: number) {
        this.brand = brand;
        this.model = model;
        this.Class = Class; 
    }
}
export const cars: car[] = [
    new car('BMW', 'G5', 1),
    new car('Audi', 'A4', 2),
    new car('Toyota', 'Corolla', 3),
];