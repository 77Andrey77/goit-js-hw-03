const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
// console.log(user);

user.hobby = 'skydiving';
// console.log(user);

user.premium = false;
// console.log(user);


// for (const key in user) {
//   console.log(`${key}  : ${user[key]}`);
// };

for (const key of Object.keys(user)){
  console.log(`${key}  : ${user[key]}`);
}


// const keys = Object.keys(user);
// console.log(keys);

// keys.forEach(key => {
//   console.log(`${key}  : ${user[key]}`);
// });
