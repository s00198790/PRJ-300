export interface User {
    uid: string;
    roles: Roles;
    
}

export interface Roles {
    admin?: boolean;
    seller?: boolean;
    guest?: boolean;
}
