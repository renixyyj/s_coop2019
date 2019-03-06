
export class User {

    token: string;
    userName: string;

    firstName: string;
    lastName: string;

    emailAddress: string;

    constructor(_userName: string) {
        this.userName = _userName;
    }

    get fullName():string {
        return this.firstName + ' ' + this.lastName;
    }
}
