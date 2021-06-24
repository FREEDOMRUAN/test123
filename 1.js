// const stus = ['a','b','c','d'];


// for (const stu in stus) {
//     console.log(stu);
// }



// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = nums.filter((num) => { console.log(num) });

// //console.log(res);

// //1111111111
// 哈哈
// const { rejects } = require('assert/strict');
// const fs = require('fs');
// const { resolve } = require('path/posix');
// // fs.readFile("./resource/1.txt",(err,data) => {
// //     if(err) throw err;
// //     console.log(data.toString());

// // })

// // const p = new Promise(function(resolve,reject){

// //     fs.readFile("./resource/1a.txt",(err,data) => {

// //         if(err) reject(err);

// //         resolve(data);
// //     })
// // })

// // p.then(function(value) {
// //     console.log(value.toString());
// // },function(reason) {
// //     console.log(reason);
// // })

// const p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         //resolve('user information');
//         reject("failure")
        
//     }, 2000);

// });

// p.then( value => {
//     console.log(value);

// },reason => {
//     console.log(reason);
// });


// fs.readFile('./resource/1.txt',(err,data) => {
//     fs.readFile('./resource/1.txt',(err,data1) =>{
//         fs.readFile('./resource/1.txt',(err,data2) =>{
//             console.log(data + data1);

//         })
//     })
// })

// const p = new Promise((resolve,reject) => {

//     setTimeout(() => {
//         reject('11111e');
        
//     }, 2000);
// })

// // p.then(value => {},reason => {

// //     console.log(reason);
// // })
// p.catch(reason => {
//     console.log(reason);
// })

//let a = new Set(['aa','bb','ccc','ddd']);


// console.log(a.size); 
// a.add('gggg');
// //console.log(a,typeof a);
// a.delete('aa');
// ////console.log(a,typeof a);

// //console.log(a.has('bb'));

// //a.clear();
// for (let b of a){
//     console.log(b);

// }
// let arr = [1,2,3,4,5,1,2];
// let result = [...new Set(arr)];

// console.log(result);

// let arr2 = [4,5,9,8];

// let c = [...new Set(arr)].filter(item => {
//     let d = new Set(arr2);

//     if(d.has(item)){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(c);


// let f = [...new Set(arr)].filter(item => new Set(arr2).has(item));
// console.log(f);

// let j = [...new Set([...arr,...arr2])]
// console.log(j);

// let diff = [...new Set(arr2)].filter(item => !(new Set(arr).has(item)));
// console.log(diff);


// let m = new Map();
// m.set('name',"qqqq");
// console.log(m.get('name'));

// class Phone{
//     constructor(b,p){
//         this.b =b;
//         this.p=p;
//     }
//     call(){
//         console.log('11111');
//     }
// }
// let oo = new Phone('huawei',999);
// console.log(oo);

// class Com{
//     static name = 'qqqq';
//     static change(){
//         console.log('33');

//     }
// }

// let y = new Com();
// console.log(y.name);
// console.log(Com.name);

// class Phone{
//     constructor(b,p){
//         this.b=b;
//         this.p=p;
//     }
//     call(){
//         console.log('123345678');
//     }
// }
// class smp extends Phone{
//     constructor(b,p,s){
//         super(b,p);
//         this.s=s;
//     }
//     play(){
//         console.log('playing');
//     }
//     call(){
//         console.log('3333');
//     }

// }
// let h = new smp('q','1','w');
// console.log(h);
// h.call();

// console.log(Math.trunc(3.5));


// const i =['aa','bb']
// console.log(i.includes('aa'));


// async function test() {
//     return new Promise((resolve,reject) => {
//         resolve("qqqqqqqqqqqqqqqq");

//     })
// }

// // let t = test();
// // t.then(value => {
// //     console.log(value);
// // })

// const p =new Promise((resolve,reject) => {
//     //resolve("1111");
//     reject("shibaile")
// })
// async function test(){
//     try {
//         let r = await p;
//         console.log(r);
//     } catch (error) {
//         console.log(error);
//     }
    


// }
// test();


// const r ={
//     name:'qq',
//     age:22
// }
// console.log(Object.keys(r));
// console.log(Object.values(r));
// console.log(Object.entries(r));
// const v=new Map(Object.entries(r))
// console.log(v);


// const p = {
//     e:'11'
// }
// const q = {
//     y:'22'
// }

// let u = {...p,...q};
// console.log(u);

let  a = Symbol("11111");
console.log(a.description);

function main(config){
    //const a = config && config.db && config.db.host;
    const a = config?.db?.host;
    console.log(a);

};
main({
    db:{
        host:'1.1.1.1',
        name:'user'
    }
});