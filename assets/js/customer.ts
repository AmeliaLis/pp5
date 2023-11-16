class Customer {
    name: string = "";
    nip: string = "";
    city: string = "";
    street: string = "";
    houseNumber: string = "";
    zipCode: string = "";
    comments: string = "";
    industry: string = "";
    active: boolean = true;

    constructor() {}

    getAddress(): string {
        return `${this.city} ${this.zipCode} ${this.street} ${this.houseNumber}`;
    }

    getCustomerInfo(): string {
        return `${this.name} (${this.nip})`;
    }
}

class Supplier extends Customer {
    accountNumber: string;
    invoices: Invoice[];

    constructor(accountNumber: string) {
        super();
        this.accountNumber = accountNumber;
        this.invoices = [];
    }
}
