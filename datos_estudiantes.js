
var nom='Karen';
var ape = 'Ordaz';
var estu =`${nom} ${ape}`;
var estudianteMayus = estu.toUpperCase();
var estudianteMinus=  estu.toLocaleLowerCase();
var cant_le = estu.length;
var c = estu.charAt(0);
var e = estu.slice(10);
var d = estu.replace(/ /g, '');
var nom_ed= estu.indexOf(`${nom}`)>-1;
console.log('estudiante :>> ', estu);
console.log('estudiante Mayuscula :>> ', estudianteMayus);
console.log('estudiante Minuscula :>> ', estudianteMinus);
console.log('Cantidad de Caracateres en nombre :>> ', cant_le);
console.log('Primera letra del nombre :>> ', c);
console.log('Ultima letra del apellido :>> ', e);
console.log('Sin espacios :>> ', d);
console.log('El Nombre pertenece a la variable estudiante :>> ', nom_ed);
