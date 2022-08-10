export interface UserRegister {
    email: string;
    name: string;
    password: string;
}

export interface UserLogin {
    email?: any;
    password?: string;
    token?: any;
}


/* export class SignInData {
    private email: string;
    private password: string;

    constructor(email: string, password: string){
        this.email = email;
        this.password = password;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword():string {
        return this.password;
    }
} */