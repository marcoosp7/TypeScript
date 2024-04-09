(() => {
	class Avenger {
	/*
		private name: string;
		private team: string;
		public realName?: string;
	*/
		static avgAge: number = 35; // el estatico si se deja fuera del constructor
		
		constructor(	
					private name: string,
					private team: string, 
					public realName?: string 
					) 
		{/*
			this.name = name;
			this. team = team;
			this.realName = realName;
		 */
		}
	}
	// todo lo comentado es porque se puede hacer sin eso (forma nueva)
	const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
	console.log( antman )

}
