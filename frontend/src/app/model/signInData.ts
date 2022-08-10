export interface UserRegister {
    email: string;
    name: string;
    password: string;
    c_password: string;
}

export interface UserLogin {
    email?: any;
    password?: string;
    token?: any;
}