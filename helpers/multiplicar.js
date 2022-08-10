const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
    
        let salida = '';
        let consola = '';

        for (let index = 1; index <= hasta; index++) {
            salida += (`${ base } x ${ index } = ${ base * index}\n`);
            consola += (`${ base } x ${ index } = ${ base * index}\n`.rainbow);
        }
    
        if ( listar ) {
            console.log('================'.bgWhite);
            console.log(`  Tabla del ${ base }   `.bgCyan);
            console.log('================'.bgWhite);
            console.log(consola);
        }
    
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
    
        return (`tabla-${ base }.txt creada`);

    } catch (error) {
        throw error;
    }
    
} 

module.exports = {
    crearArchivo
}
