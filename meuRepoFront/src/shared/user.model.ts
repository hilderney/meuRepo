export class User implements IUser {
  id!: number;
  name!: string;
  email!: string;

  constructor(jsonData?: IUser) {
    if (!jsonData) { return }
    Object.assign(this, jsonData);
  }
}

export interface IUser {
  id: number,
  name: string,
  email: string,
}
