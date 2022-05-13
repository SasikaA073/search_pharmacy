class Car {
  name:string;
  year:string;
  constructor(name:string, year:string) {
    this.name = name;
    this.year = year;
  }
}

export class Pharmacy {
  id:number;
  name:string;
  phone : any;
  address: string;
  district: string;
  constructor(id:number,name:string,phone:any,address:string,district:string){
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.district = district;

  }
}

// public pharmacies[] = [new Pharmacy(1,'Orryngo Pharmacy',672277036,"Main Street, Addalaichenai",'Ampara'),new Pharmacy(2,'Rajya Osusala',672057625,"74, TD/02, Akkaraipattu",'Ampara')];
