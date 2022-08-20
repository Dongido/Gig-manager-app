export interface UserRegister {
    email: string;
    name: string;
    password: string;
    password_confirmation: string;
}

export interface UserLogin {
    email?: any;
    password?: string;
    token?: any;
}