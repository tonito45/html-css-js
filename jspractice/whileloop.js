//while loop
let text='';
let i = 0;
while(i<10){
    text+="The number is"+i;
    text+='\n'
    i++;
}
console.log (text);


let het=['a','b','c','d']
let string ='';
i=0;
while(i<het.length){
    string+=het[i];
    string+="\n";
    i++;
}
console.log (string);


//do while loops
let fruit = '';
i=0;
do{
    fruit+="The number of fruit is"+" "+i;
    i++;
    fruit+='\n';
}
while(i<10);
console.log (fruit);

let veg = '';
i= 1;


//nested while loops
// ******
// ******
// ******
// ******
// ******
// ******

let nar='';
m=0;
while(m <= 5) {
    n=0;
    while(n<=5){
        nar+="*";
        n++
    }
    nar+="\n";
    m++;
}
console.log (nar);

// *****
// ****
// ***
// **
// *
let bar = "";
i=5;
while(i>=1){
    j=1;
    while(j<=i){
        bar+="*";
        j++;
    }
    bar+="\n";
    i--;
}
console.log (bar);

// *
// **
// ***
// ****
// *****
let trian = "";
i=1;
while(i<=5){
    j=1;
    while(j<=i){
        trian+="*";
        j++;
    }
    trian+="\n";
    i++;
}
console.log (trian);

// 12345
// 1234
// 123
// 12
// 1
let num = '';
i=5;
while(i>=1){
    j=1;
    while(j<=i){
        num+=j;
        j++
    }
    num+="\n";
    i--;
}
console.log (num);

// 1
// 12
// 123
// 1234
// 12345

let digit ='';
i=i;
while(i<=5){
    j=1;
    while(j<=i){
        digit+=j;
        j++;
    }
    digit+="\n";
    i++;
}
console.log (digit);

// 1
// 2 3
// 4 5 6
// 7 8 9 10
let strings="";
i=1;
count=1;
while(i<=4){
    j=1;
    while(j<=i){
        strings+=count;
        count++;
        j++;
    }
    strings+='\n';
    i++;
}
console.log (strings)

//       *
//     * * *
//   * * * * *
// * * * * * * *
let pyramid='';
i = 1;
while(i<=4){
    j=1;
    while(j<=4-i){
        pyramid+=" ";
        j++;
    }
    k=1;
    while(k<=2*i-1){
        pyramid+="*";
        k++;
    }
    pyramid+="\n";
    i++;
}
console.log (pyramid);
