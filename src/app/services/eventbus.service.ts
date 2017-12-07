import {Injectable} from '@angular/core';

@Injectable()
export class EventbusService {

  subscriptions: Map<string, Array<Function>>;

  constructor() {
    this.subscriptions = new Map<string, Array<Function>>();
  }

  subscribe(event: string, target: Function) {
    let subscribers: Array<Function>;
    if (this.subscriptions.has(event)) {
      subscribers = this.subscriptions.get(event);
    } else {
      subscribers = new Array<Function>();
      this.subscriptions.set(event, subscribers);
    }
    subscribers.push(target);
  }

  post(event: string) {
    if (this.subscriptions.has(event)) {
      const subscribers: Array<object> = this.subscriptions.get(event);
      subscribers.forEach((target: Function) => {
        target();
      });
    }
  }
}
