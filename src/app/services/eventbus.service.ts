import {Injectable} from '@angular/core';

@Injectable()
export class EventbusService {

  subscriptions: Map<string, Array<Object>>;

  constructor() {
    this.subscriptions = new Map<string, Array<Object>>();
    console.log('EVENT BUS!');
  }

  subscribe(event: string, target: Function) {
    let subscribers: Array<Function>;
    if (this.subscriptions.has(event)) {
      subscribers = this.subscriptions[event];
    } else {
      subscribers = new Array<Function>();
      // this.subscriptions[event] = subscribers;
      this.subscriptions.set(event, subscribers);
      console.log('SETUP', event, target);
      console.log('c', this.subscriptions.size);
    }
    subscribers.push(target);
    console.log('EVENT BUS:');
  }

  post(event: string) {
    console.log('GI', event);
    console.log('c', this.subscriptions.size);
    if (this.subscriptions.has(event)) {
      console.log('asdf');
      const subscribers: Array<object> = this.subscriptions.get(event);
      // console.log('asdf', subscribers.length);
      subscribers.forEach((target: Function) => {
        console.log('calling');
        target();
        console.log('called');
      });
    }
  }
}
