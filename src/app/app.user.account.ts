export class UserAccount {
  id: number;
  includeAdult: boolean;
  language: string;
  name: string;
  username: string;

  constructor(id: number, includeAdult: boolean, language: string, name: string, username: string) {
    this.id = id;
    this.includeAdult = includeAdult;
    this.language = language;
    this.name = name;
    this.username = username;
  }
}
