export class User {
    username: string;
    password: string;
    email: string;
    static count: number = 0;
    constructor(username: string=" ", password: string=" ", email: string=" ") {
        this.username = username;
        this.password = password;
        this.email = email;
        User.count++;
    }
}