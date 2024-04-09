// defino tipos para usarlo en los objetos
type Carro = {
	carroceria: string;
	modelo: string;
	antibalas: boolean;
	pasajeros: number;
	disparar?: ()=> void;
}

type Villano = {
	nombre: string;
	edad: number;
	mutante: boolean;
}

type Charles = {
	poder: string;
	estatura: number;
}

type Apocalipsis = {
	lider: boolean;
	miembros: string[];
}

// objetos
const batmovil:Carro = {
	carroceria: "Negra",
	modelo: "6x6,
	antibalas: true,
	pasajeros:1,
}

const bumblebee:Carro = {
	carroceria: "Amarillo y negro",
	modelo: "4x6,
	antibalas: true,
	pasajeros:4,
	disparar(){ console.log("disparando");}
}

const villanos: Villano[] = [
	{
	nombre: "Lex Luthor",
	edad: 50,
	mutante: false
	},
	{
	nombre:"James Logan",
	edad: undefined,
	mutante: true
	}
];

const charles: Charles = {
	poder:"psiquico",
	estatura: 1.78
};

const apocalipsis:Apocalipsis = {
	lider: true,
	miembros: ["Magneto","Tormenta","Angel"]
}

//  Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipsis;

mystique = charles;
console.log(mystique);

mystique = apocalipsis;
console.log(mystique);