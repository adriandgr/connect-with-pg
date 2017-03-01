const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: settings
});

const entry = process.argv.slice(2).join(' ').toLowerCase().split(',');
const sane = []
entry.forEach((a, b) =>{
  sane.push(entry[b].trim().charAt(0).toUpperCase());
});
console.log(sane);
if(!search){
  console.log('Please enter a comma separated list containing the NAME, FLEET, and COMMISSION DATE.');
  knex.destroy();
} else {
  // knex('ships').where(knex.raw('LOWER("name")'), 'like', `%${search}%`).then((res)=>{
  //   if(!res[0]){
  //     console.log('There are no ships on record with that name');
  //     return knex.destroy();
  //   }
  //   res.forEach((a, b) =>{
  //     console.log(`${res[b].id} >> ${res[b].name}`);
  //   })
  //   knex.destroy();
  // });
}