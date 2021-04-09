export class User {
  firstName: string;

  lastName: string;

  role: Role;

  thumbnailURL: string;

  constructor(
    firstName: string,
    lastName: string,
    role: Role,
    thumbnail: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.thumbnailURL = thumbnail;
  }
}

export enum Role {
  dev = 'Developer',
  scm = 'Scrum Master',
  pm = 'Product Manager',
}
