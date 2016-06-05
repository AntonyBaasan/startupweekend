import { Gps } from './gps';

export interface ITask {
  $key?: string;
  completed: boolean;
  createdAt: number;
  
    picture: Blob ;
    name: string;
    description: string;
    category: string;
    price: number;
    contact: string;
    locations: Gps;
}

export class Task implements ITask {
  completed: boolean = false;
  createdAt: number = Firebase.ServerValue.TIMESTAMP;
  
    picture: Blob;
    name: string;
    description: string;
    category: string;
    price: number;
    contact: string;
    locations: Gps;

  constructor(name: string, 
			description: string, 
			category: string, 
			price: number, 
			contact: string, 
			xcoord: number, 
			ycoord: number) {
    //this.picture = picture
	this.name = name;
	this.description= description;
	this.category = category;
	this.price = price;
	this.locations = new Gps(xcoord, ycoord);
  }
}