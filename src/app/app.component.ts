import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // SET TIMEOUT
  a = 5;
  constructor() {
    setTimeout(() => {
      this.a = 10;
    }, 3000);
  }

  // INPUT AND BUTTONS
  getData(a: string) {
    console.log(a);
  }
  get(event: any) {
    console.log(event);
  }

  display = '';
  getValue(val: string) {
    console.log(val);
    this.display = val;
  }

  // COUNTER BUTTONS
  count = 0;
  counter(type: string) {
    type === '+' ? this.count++ : this.count--;
  }

  // PROPERTY BINDING AND INTERPOLATION
  name = 'vijay';
  dis = false;

  // MULTIPLE IF AND IF
  show = true;
  color = 'red';

  // SWITCH CASE
  color1 = 'red';

  // ngFor LOOP
  users = ['aa', 'bb', 'cc'];
  userDetails = [
    {
      name: 'vijay',
      rollNo: 57,
    },
    {
      name: 'ajay',
      rollNo: 58,
    },
  ];

  // DYNAMIC STYLE
  color2 = 'red';
  updateC() {
    this.color2 = 'blue';
  }

  // Header

  // BASIC FORM
  userdata: any = {};
  getData1(data: any) {
    console.log(data);
    this.userdata = data;
  }

  // TOGGLE ELEMENT
  display1 = true;
  toggle() {
    this.display1 = !this.display1;
  }

  // TODO LIST
  list: any = [];
  taskAdd(item: string) {
    console.log(item);
    this.list.push({ id: this.list.length, name: item });
    console.log(this.list);
  }
  removetask(id: number) {
    this.list = this.list.filter((item) => item.id != id);
  }

  // SEND DATA FROM PARENT TO CHLD
  data4 = 0;
}
