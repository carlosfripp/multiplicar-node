'use strict'
const fs=require('fs');
const color=require('colors');
let listarTabla=(base,limite)=>{
	return new Promise((resolve,reject)=>{
		if(!Number(base) || !Number(limite)){
			reject(`La base ${base} o el limite ${limite} no es un numero `);
			return;
		}
		console.log('================'.green);
		console.log(`Tabla de ${base}`.green);
		console.log('================'.green)
		for (let i = 1; i <= limite; i++) {
			console.log(`${i} * ${base} : ${i*base}\n`);
		}
	});
}
let crearArchivo=(base,limite=10)=>{
	return new Promise((resolve,reject)=>{
		if(!Number(base)){
			reject(`El numero ${base} no es un numero`);
			return;
		}
		let data='';
		for (let i = 1; i <= limite; i++) {
			data+=`${base}*${i} = ${i*base}\n`;
		}

		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`,data,(err)=>{
			if(err){
				reject(err)
			}
			else{
				resolve(`tabla-${base}.txt`)
			}
		});
	});
}

module.exports={
	crearArchivo,
	listarTabla
}