export class Contact {
    #name;
    #city;
    #email;
    #id;
  
    constructor(name, city, email) {
      this.#name = name.trim();
      this.#city = city.trim();
      this.#email = email.trim();
    }
  
    get name() {
      return this.#name;
    }
  
    get city() {
      return this.#city;
    }
  
    get email() {
      return this.#email;
    }

    get ID() {
      return this.#id;
    }

    set ID(value) {
      this.#id = value;
    }
  }
  