export interface User {
    uid:string;
    accountType: Roles;

}

export interface Roles{
    admin?: boolean;
    seller?: boolean;
    guest?:boolean;
}

const role: {[Roles:string]:any} = {};