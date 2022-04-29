// export class User {
//   constructor(
// 	public id: number, 
// 	public name: string,
// 	public age: number = 0) {}
// }

export interface User {
	id: number,
	name: string,
	age?: number;
}
