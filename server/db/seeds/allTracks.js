/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('allTracks').del()
  await knex('allTracks').insert([
    {
      assetId: "b213ff1c-a694-46c6-9727-789520c97359",  
      region: "Northland",
      name: "Akeake Historic Reserve Track"
    },
    {
      assetId: "67464a49-e741-4a75-bf67-a9315282789c",
      region: "Northland",
      name: "Cape Reinga/Te Rerenga Wairua Lighthouse Walk"
    },
    {
      assetId: "240a2b08-5fbb-4305-865c-452c5894836b",
      region: "Northland",
      name: "Flagstaff Hill Track"
    },
    {
      assetId: "c9f7bd48-9684-453f-9b38-1febda35c028",
      region: "Northland",
      name: "Hauturu Highpoint Track"
    }
  ]);
};
