import { user,users } from './users';
import { car,cars } from './cars'; // import two classess 
export class Interest 
{
user: user;
car: car;
constructor(user: user, car: car) 
{
    this.user = user;
    this.car = car;
}
}
    export const Interests: Interest[] = []
        // new Interest(users[0], cars[0]),
        // new Interest(users[1], cars[1]),
        // new Interest(users[2], cars[2]),];
        for(let i=0;i<users.length&&i<cars.length;i++){
            Interests.push(new Interest(users[i],cars[i]));
        }