export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    address: string;
    registrationNumber: string;

    constructor(name: string, username: string, email: string, password: string,address : string,registrationNumber: string, role: string[]) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.address=address;
        this.registrationNumber=registrationNumber;
    }
}
