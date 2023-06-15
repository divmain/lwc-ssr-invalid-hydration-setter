import { LightningElement, api } from 'lwc';

const env = typeof window === 'undefined' ? 'server' : 'client';

export default class App extends LightningElement {
  _bar = '';
  @api get foo() {
    return ''
  }
  set foo(val) {
    console.log(`${env}: <x-child>'s "foo" setter is invoked`);
    this._bar = val;
    this.updateClasses();
  }

  updateClasses() {
    console.log(`${env}: setting class "${this._bar}" on <x-child>'s host element`);
    this.classList?.add(this._bar);
  }
}