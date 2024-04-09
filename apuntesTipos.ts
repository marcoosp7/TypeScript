(() => {

	type Hero = {
		name: string;
		age?: number;
		powers: string[];
		getName?: () => string;
	
	let flash: Hero 
	/*{ name: string, age?: number, powers: string[], getName?: () => string } esto me lo estaria ahorrando*/
	{
		name: 'Barry Allen';
		age: 24;
		powers: ['Super velocidad', 'Viajar en el tiempo'];
	}
	
	let superman: Hero = {
		name: 'Clark Kent',
		age: 30,
		powers: ['Super velocidad'],
		getName(){
			return this.name; 
		}
	}
	
	let myCustomVariable: (string | number | Hero) = 'Fernando';
	myCustomVariable = {
		name: 'Bruce',
		age: 20,
		powers: [1]
	}
}