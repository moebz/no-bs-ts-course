/* We can declare an interface that describes a class. This class will act as an "in memory database". */
interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

class InMemoryDatabase implements Database {
  /* Protected means that it can be accessed in this class and in his descendants. Private would have allowed access only in this class. */
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

/*
This interface describes a class that can get a JSON backup and then restore from it.
*/
interface Restorable {
  getJSONBackup(): string;
  restoreFromJSONBackup(restorableJSON: string): void;
}

/* We can extend a class and implement an interface */

class RestorableDB extends InMemoryDatabase implements Restorable {
  getJSONBackup(): string {
    return JSON.stringify(this.db);
  }
  restoreFromJSONBackup(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB = new RestorableDB();

myDB.set("name", "John");
console.log("name in myDB", myDB.get("name"));

// Typescript won't allow me to write directly to the db property as it is protected.
// myDB.db["foo"] = "baz";

console.log("generating a backup from db1...");

const savedJSON = myDB.getJSONBackup();

myDB.set("name", "King Arthur");
console.log("name in myDB", myDB.get("name"));

const myDB2 = new RestorableDB();

console.log("restoring db1 backup into the db2...");

myDB2.restoreFromJSONBackup(savedJSON);

console.log("name in myDB", myDB.get("name"));
console.log("name in myDB2", myDB2.get("name"));
