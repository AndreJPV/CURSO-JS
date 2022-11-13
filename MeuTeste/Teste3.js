let a = []
let b = [2, 3]
console.log(a)
console.log(a.indexOf(9))
console.log(a.indexOf(5))
a.sort()
console.log(a)


a.push(`${b[0]}`)


console.log(a)
console.log(a.length)
console.log(a[0])
let pos = a.indexOf(5) 
if (pos == -1) {
    console.log(`O valor não foi encontrado.`)
}
else {
    console.log(`O valor está na posição ${pos}`)
}
 for(let pos in a) {
    console.log(`A posição ${pos} tem o valor ${a[pos]}`)
 }
 const array = []
 const size = 100
 for(let i=1; i<=size; i++){
    array.push(i)
 }
 console.log(array)
 /*Tentar criar o array de 0 a 100 da forma pensada acima.  Após isso, pensar de qual forma
 poderia ser feito para criar os códigos que irão fazer o serviço como demonstrado no vídeo do exercício.*/