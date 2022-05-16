import { Observer } from "./Observer";

interface Subject {
  //Methods

  addObserver(Observer: Observer): void;

  removeObserver(Observer: Observer): void;

  notifyObservers(context: string): void;
}
export { Subject };
