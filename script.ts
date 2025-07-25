let estudieJavaScript : boolean = true;

if (estudieJavaScript) {
    console.log('¡Felicidades! Estudiaste JavaScript primeramente')
} else {
    console.log('Mmmm... Deberías estudiar JavaScript primeramente')
}

let interMiami : number = 11;
let fcDallas : number = 11;
let messi: number = 1;
let juegaMessi : boolean = true;

function jugar(equipoUno: number, equipoDos: number, juegaMessi: boolean): void {

    let motivo: string = ' ';

    if (juegaMessi) {
        equipoUno += messi;
        motivo = 'porque juega Messi';
    }

    if (equipoUno > equipoDos) {
        console.log(`Gana el Inter de Miami ${motivo}`);
    } else if (equipoUno === equipoDos) {
        console.log('El Inter de Miami y el FC Dallas empatan');
    } else {
        console.log('Gana el FC Dallas');
    }

}

jugar(interMiami, fcDallas, juegaMessi);

// TODO: Cambiar any por el tipado correspondiente
let disney : any;

disney = 2000;
disney = 'Esto es Disney';
disney = false;

let arrayNumeros : number[] = [1, 2, 3, 4, 5];
let arrayTexto : string[] = ['HTML', 'CSS', 'JS'];

// TYPES
type Programador = {

    nombre: string,
    tecnologias: string[],
    tomaMate: boolean | null

}

let programador: Programador = {

    nombre: 'Mauricio Pucheta',
    tecnologias: ['HTML', 'CSS', 'JS', 'TS', 'JSX/TSX', 'VUE'],
    tomaMate: false

}

let programadorDos : Programador = {

    nombre: 'Juan Perez',
    tecnologias: ['C#', 'Python'],
    tomaMate: null

}

/* Sobreescribimos el objeto programador
programador = {

    nombre: 'Nahuel Cardozo',
    tecnologias: ['JAVA', 'C', 'HASKELL'],
    tomaMate: true

}
*/

console.log('Programador 1: ', programador);
console.log('Programador 2: ', programadorDos);

// INTERFACES
interface Nadador {

    nombre: string,
    campeonatos: string[],
    actualCampeon?: boolean

}

let nadador : Nadador = {

    nombre: 'Matias Conci',
    campeonatos: ['Argentina', 'Uruguay', 'Chile'],
    actualCampeon: true

}

let nadadorDos : Nadador = {

    nombre: 'Ernesto Videla',
    campeonatos: ['Brasil', 'Bolivia', 'Paraguay'],
    actualCampeon: false

}

console.log('Nadador 1: ', nadador);
console.log('Nadador 2: ', nadadorDos);

function enviarCV (nadador: Nadador) {

    console.log(`Este CV es de ${nadador.nombre}`);

}

enviarCV(nadadorDos);

// POO
class Pelicula {

    // Atributos
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    // Métodos
    proyectarEnCine() {
        console.log(`La película ${this.nombre} está siendo proyectada`);
    }

    // Constructor
    constructor(nombre: string, protagonistas: string[], actores: string[]) {
        this.nombre = nombre,
        this.protagonistas = protagonistas,
        this.actores = actores
    }

}

const pelicula = new Pelicula('Rapido y Furioso', ['Dominic Toretto', 'Brian Oconner'], ['Vin Diesel', 'Paul Walker']);
const peliculaDos = new Pelicula('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr']);

console.log('Pelicula: ', pelicula);
console.log('Pelicula Dos: ', peliculaDos);

// ENCAPSULAMIENTO Y GENÉRICOS
class Sorteo <T> {

    private ticket?: T;

    constructor(
        private nombre: string
    ) { }

    setTicket(ticket: T) {
        this.ticket = ticket;
    }

    getTicket() {
        return this.ticket;
    }

    public sortear() : string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }

}

let sorteo = new Sorteo<number>('Mauricio Pucheta');
sorteo.setTicket(7);
console.log(sorteo.sortear());