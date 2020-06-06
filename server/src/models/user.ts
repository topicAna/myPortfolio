export class User {
    id!: number;
    firstname!: string;
    lastname!: string;
    email!: string;
    address!: string;
    zip! : string;
    city! : string;
    phone! : string;
    knownBy! : string;

  
    constructor(input: User) {
      Object.assign(this, input);
  }
  }

  
  