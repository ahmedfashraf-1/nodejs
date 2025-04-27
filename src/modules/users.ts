export class user{
    name:string;
    age:number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
export const users: user[] = [
    {name:'ahmed',age:19},
    {name:'mohamed', age:29},
    {name:'yousef', age:19},
];