import { LightningElement, api } from 'lwc';

export default class App extends LightningElement {
  _bar = '';
  @api get foo() {
    return ''
  }
  set foo(val) {
    this._bar = val;
    this.updateClasses();
  }

  updateClasses() {
    debugger;
    this.classList?.add(this._bar);
  }
}