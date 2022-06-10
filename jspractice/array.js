
const subjects = ['math','english','computer']; //this is an array
console.log (subjects[1]); //we can take array value from index

const nation = ['nepal','india','japan'];
const vn = ['kathmandu','mumbai','tokyo'];
console.log (nation[0]+"="+vn[0]);

const ob = {name:'nen',age:20,};
console.log (ob.name.length)
ob.name='ten'
console.log (ob.name);
ob.weight=54;
console.log (ob);

const txt = [
    {school:'kalika',level:+2,location:'butwal'},
    {name:'kage',sport:'football',position:'striker'}
];
console.log (txt[1].position);


// const datas =[
//   {name:'nischal',age:50,address:'butwal'},
//   {name:'aladin',age:50,address:'butwal'},
//   {name:'pawalwan',age:50,address:'butwal'},
//   {name:'somu',age:50,address:'butwal'},
//   {name:'rohit',age:50,address:'butwal'},
//   {name:'kisan',age:50,address:'butwal'},
// ]



// console.log (datas.name)
const gun = [
    {
     fruit:['apple','banana','guava'],place:['ktm','btl','pkr']
    }
];
console.log (gun[0].fruit[0]);
console.log (gun[0].place[2]);