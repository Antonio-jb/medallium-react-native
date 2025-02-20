import {RoleInterface} from "./Role";

export interface UserInterface {
    id?: number;
    firstName: string;
    lastName: string;
    user: string;
    email: string;
    password: string;
}

export type UserLoginInterface = Pick<UserInterface, "email" | "password">;

export interface UserLogin extends UserInterface {
    token: string;
    roles: RoleInterface[];
}