
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fleets').del()
    .then(function () {
      // Inserts seed entries
      return knex('fleets').insert([
        {name: 'Royal Antigua and Barbuda Coast Guard', country: 'Antigua and Barbuda'},
        {name: 'Royal Australian Navy', country: 'Australia'},
        {name: 'Belgian Marine Component', country: 'Beligium'},
        {name: 'Bolivian Naval Force', country: 'Bolivia'},
        {name: 'People\'s Liberation Army Navy', country: 'China'},
        {name: 'Royal Canadian Navy', country: 'Canada'},
        {name: 'Icelandic Coast Guard', country: 'Iceland'},
        {name: 'Islamic Republic of Iran Navy', country: 'Iran'},
        {name: 'Marina Militare', country: 'Italy'},
        {name: 'Japan Maritime Self-Defense Force', country: 'Japan'},
        {name: 'Maritime Squadron of the Armed Forces of Malta', country: 'Malta'},
        {name: 'United States Navy', country: 'United States'},
        {name: 'United States Coast Guard', country: 'United States'}
      ]);
    });
};
