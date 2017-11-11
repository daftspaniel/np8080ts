export class NPStorage {
  np8080 = 'np8080';

  getNp8080Store(): string {
    const result = window.localStorage[this.np8080];
    console.log(result);
    return result == null ? '{}' : result;
  }

  getStorageAsMap(): Map<string, string> {
    const store = JSON.parse(this.getNp8080Store());
    console.log(store);
    return store;
  }

  deleteStoredValue(key: string) {
    const store = this.getStorageAsMap();
    store.delete(key);
    this.saveStore(store);
  }

  storeValue(key: string, value: string) {
    const store = this.getStorageAsMap();
    store[key] = value;
    this.saveStore(store);
  }

  saveStore(store: object) {
    window.localStorage[this.np8080] = JSON.stringify(store);
  }

  loadValue(key, defaultValue) {
    const store = this.getStorageAsMap();
    let value: string = store[key];
    if (value == null) {
      value = defaultValue;
    }
    return value;
  }
}
