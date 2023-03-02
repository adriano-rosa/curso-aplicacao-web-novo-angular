class Spacecraft {

    constructor (public propulsor: string){}

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
         } // sempre que acessar um atributo da classe, utilizar o this
    }


// adicionando uma interface
interface Containership {
    cargoContainer: number
}

export {Spacecraft, Containership}