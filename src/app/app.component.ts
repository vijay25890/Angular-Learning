import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { ServiceService } from './services/service.service';
import { UsersDataService } from './services/users-data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // SET TIMEOUT
  // a = 5;
  // constructor() {
  //   setTimeout(() => {
  //     this.a = 10;
  //   }, 3000);
  // }

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

  // REUSABLE COMPONENT
  userD = [
    {
      name: 'vijay',
      email: '@123',
    },
    {
      name: 'ajay',
      email: '@1234',
    },
    {
      name: 'akash',
      email: '@1235',
    },
  ];

  // SEND DATA FROM CHILD TO PARENT
  data5 = ' ';
  updateData2(item: string) {
    console.log(item);
    this.data5 = item;
  }

  // TWO WAY BINDING (updating and dispaling property at same time)
  name4: any;

  // TEMPLATE REFERNCE VARIABLE
  getVal(item4: any) {
    console.log(item4);
  }

  // PIPES
  date = Date();

  // FORMS
  // TEMPLATE DRIVEN FORM
  userLogin(item: any) {
    console.log(item);
  }

  // REACTIVE FORMS
  loginF = new FormGroup({
    name1: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.email,
      Validators.pattern('[A-Z]+$'),
    ]),
    password1: new FormControl(''),
  });
  loginUser1() {
    console.log(this.loginF.value);
  }
  get userx() {
    return this.loginF.get('name1');
  }

  // SERVICES
  memberData = [
    { name: 'Vijay', email: 'vm@123' },
    { name: 'Vijay1', email: 'vm@1234' },
    { name: 'Vijay2', email: 'vm@12345' },
    { name: 'Vijay3', email: 'vm@123456' },
  ];

  // constructor(private data0: ServiceService) {
  //   console.log('data4', data0);
  // }

  // API CALLING
  // users2: any;
  // constructor(private userData: UsersDataService) {
  //   userData.users().subscribe((e) => {
  //     this.users2 = e;
  //     console.log(e);
  //   });
  // }

  // POST API
  // getUserFormdata(data: any) {
  //   console.log(data);
  //   this.userData.saveUsers(data).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
