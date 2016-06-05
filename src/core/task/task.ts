import { Gps } from './gps';

export interface ITask {
  $key?: string;
  completed: boolean;
  createdAt: number;
  
    picture: URL;
    name: string;
    description: string;
    category: string;
    price: number;
    contact: string;
    locations: Gps;
    user_id: string;
}

export class Task implements ITask {
  completed: boolean = false;
  createdAt: number = Firebase.ServerValue.TIMESTAMP;
  
    picture: URL;
    name: string;
    description: string;
    category: string;
    price: number;
    contact: string;
    locations: Gps;
    user_id: string;


    constructor(name: string,
			description: string, 
			category: string, 
			price: number, 
			contact: string, 
			xcoord: number, 
			ycoord: number,
              picture: URL,
              user_id: string
) {
    this.picture = picture
	this.name = name;
	this.description= description;
	this.category = category;
	this.price = price;
	this.locations = new Gps(xcoord, ycoord);
      this.user_id = user_id;
  }
}