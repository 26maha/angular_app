export class SignInData {
    private name!: string;
    private password!: string;

    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }

    getName(): string {
        return this.name;
    }

    getPassword(): string {
        return this.password;
    }


}