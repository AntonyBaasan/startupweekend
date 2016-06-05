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
    userId: string;
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
    userId: string;


    constructor(name: string,
			description: string, 
			category: string, 
			price: number, 
			contact: string, 
			xcoord: number, 
			ycoord: number,
              picture: URL,
                userId: string
) {
    this.picture = picture
	this.name = name;
	this.description= description;
	this.category = category;
	this.price = price;
	this.locations = new Gps(xcoord, ycoord);
      this.userId = userId;
  }
}