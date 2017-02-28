const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: settings
});

const search = process.argv.slice(2).join(' ').toLowerCase();

if(!search){
  console.log('Please enter a search query');
  knex.destroy();
} else {
  knex('ships').where(knex.raw('LOWER("name")'), 'like', `%${search}%`).then((res)=>{
    if(!res[0]){
      console.log('There are no ships on record with that name');
      return knex.destroy();
    }
    res.forEach((a, b) =>{
      console.log(`${res[b].id} >> ${res[b].name}`);
    })
    knex.destroy();
  });
}