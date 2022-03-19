export interface Roles{
    propertyOwner?: boolean;
    guest: boolean;
    admin?: boolean;

}

export class User {
    accountType: string;
    displayName: string;
    email: string;
    roles: Roles;

    constructor(authData: any) {
        this.accountType = authData.accountType
        this.displayName = authData.displayName
        this.email = authData.email
        this.roles = {guest: true}
    }
}