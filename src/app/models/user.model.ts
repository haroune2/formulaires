// user.model.ts
//Ce formulaire aura les champs suivants : email, firstname, lastname, password

export class User {
    constructor(
      public firstname: string,
      public lastname: string,
      public email: string,
      public password: string
    ) {}
  }
  