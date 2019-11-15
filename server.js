// server.js

/*function square(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.pow(x, 2));
    }, 2000);
  });
}

square(5).then(data => {
  console.log(data);
});*/

/*function square(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.pow(x, 2));
    }, 2000);
  });
}

async function layer(x)
{
  const value = await square(x);
  console.log(value);
}

layer(15);*/


function resolveAfter2Seconds() {
 
 return new Promise(resolve => {
   
 setTimeout(() => {
   
   resolve('resolved');
   
 }, 2000);
  
 });

}


async function asyncCall() {
  
console.log('calling');
  
var result = await resolveAfter2Seconds();
  
console.log(result);
  // expected output: 'resolved'

}



asyncCall();