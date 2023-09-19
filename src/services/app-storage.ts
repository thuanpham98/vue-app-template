export default class AppStorage {
  public name;
  constructor({ name }: { name: string }) {
    this.name = name;
  }
}

export const appStoreKey= Symbol("AppStorage");