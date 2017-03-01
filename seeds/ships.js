
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ships').del()
    .then(function () {
      // Inserts seed entries
      return knex('ships').insert([
        {fleet_id: 1, name: 'Butrinti', date_commissioned: 'Jan-01-2014'},
        {fleet_id: 1, name: 'Oriku', date_commissioned: 'Jan-01-2011'},
        {fleet_id: 2, name: 'P-03 Hermitage', date_commissioned: 'Jan-01-1998'},
        {fleet_id: 2, name: 'P-01 Liberta', date_commissioned: 'Jan-01-1984'},
        {fleet_id: 3, name: 'HMAS Rankin', date_commissioned: 'Mar-29-2003'},
        {fleet_id: 3, name: 'HMAS Darwin', date_commissioned: 'Jul-21-1984'},
        {fleet_id: 6, name: 'Shijiazhuang', date_commissioned: 'Jan-01-2007'},
        {fleet_id: 6, name: 'Tiantai Shan', date_commissioned: 'Jan-01-2002'},
        {fleet_id: 6, name: 'Liaoning', date_commissioned: 'Sep-25-2012'},
        {fleet_id: 6, name: 'Jinggang Shan', date_commissioned: 'Jan-01-2011'},
        {fleet_id: 7, name: 'HMCS Iroquois', date_commissioned: 'Jul-29-1972'},
        {fleet_id: 7, name: 'HMCS Athabaskan', date_commissioned: 'Sep-30-1972'},
        {fleet_id: 7, name: 'HMCS Oriole', date_commissioned: 'Jun-19-1952'},
        {fleet_id: 13, name: 'USS Abraham Lincoln', date_commissioned: 'Nov-11-1989'},
        {fleet_id: 13, name: 'USS Alabama', date_commissioned: 'May-25-1985'},
        {fleet_id: 13, name: 'USS Annapolis', date_commissioned: 'Apr-11-1992'},
        {fleet_id: 13, name: 'USS Kentucky', date_commissioned: 'Jul-13-1991'},
        {fleet_id: 14, name: 'USCGC Bertholf', date_commissioned: 'Aug-4-2008'},
        {fleet_id: 14, name: 'USCGC Raymond Evans', date_commissioned: 'Sep-6-2014'},
        {fleet_id: 14, name: 'USCGC Healy', date_commissioned: 'Nov-10-1999'}
      ]);
    });
};

