'use strict'
//requireds
const {crearArchivo,listarTabla}=require('./multiplicar/multiplicar.js')
const argv=require('./config/yargs.js').argv;
const color=require('colors');
let comando=argv._[0]
switch(comando){
	case 'listar':
		listarTabla(argv.base,argv.limite)
	break;

	case 'crear':
		crearArchivo(argv.base,argv.limite)
			.then(archivo=>console.log(`Archivo creado: ${ color.green(`${archivo}`) }`))
			.catch(err=>console.log(err));
	break;
	default:
		console.log('Comando no reconocido'.red);
}
//console.log(argv);
let argv2=process.argv;
//let parametro=argv[2];
//let base=parametro.split("=")[1];
//console.log(argv.base);




