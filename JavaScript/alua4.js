//laços de repetição
//for

for (let i = 10; i < 20; i++) {
    console.log(i);

}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

for (let i = 0; i <= 100; i += 10){
    console.log(i);
}

//while
//while (condição) {
//    bloco de código

let i = 8;
while (i < 10) {
    console.log(i);
    i++;
}

let j = 10;
while (j > 0) {
    console.log(j);
        j--;
}

//let i = 0
while (i <= 100) {
    console.log(i);
    i +- 10;
}

//do while
//do {
// bloco de código
//} while (condição)

let k= 9;
do {
    console.log(k);
    k++;
} while (k < 10);

let r = 15;
do while (k < 25) {
    console.log(k);
    k++;
} while (k < 15);

let l = 0;
do {
    console.log(l);
    l += 10; 
} while (l <= 100);

//break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

//continue
for (let i = 0; i < 10 ; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}