/* This file is a copy from classes.ts with the only difference that it uses generics */

interface Database2<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

type RecordKey = string | number | symbol;

class InMemoryDatabase2<T, K extends RecordKey> implements Database2<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

interface Restorable2 {
  getJSONBackup(): string;
  restoreFromJSONBackup(restorableJSON: string): void;
}

class RestorableDB2<T, K extends RecordKey>
  extends InMemoryDatabase2<T, K>
  implements Restorable2
{
  getJSONBackup(): string {
    return JSON.stringify(this.db);
  }
  restoreFromJSONBackup(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB3 = new RestorableDB2<number, string>();

myDB3.set("name", 12);
console.log("name in myDB3", myDB3.get("name"));

console.log("generating a backup from db3...");

const savedJSON3 = myDB3.getJSONBackup();

myDB3.set("name", 55);
console.log("name in myDB3", myDB3.get("name"));

const myDB4 = new RestorableDB2();

console.log("restoring db3 backup into the db4...");

myDB4.restoreFromJSONBackup(savedJSON3);

console.log("name in myDB3", myDB3.get("name"));
console.log("name in myDB4", myDB4.get("name"));
