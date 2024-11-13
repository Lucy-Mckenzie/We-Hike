/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {
      assetId: "b213ff1c-a694-46c6-9727-789520c97359",
      hikeName: "Akeake Historic Reserve Track",
      rating: 5,
      comment: "Spectacular views along the coast, perfect for an easy day out!",
      author: "Sarah"
    },
    {
      assetId: "b213ff1c-a694-46c6-9727-789520c97359",
      hikeName: "Akeake Historic Reserve Track",
      rating: 4,
      comment: "Well-maintained track, but a bit crowded on weekends.",
      author: "Tom"
    },
    {
      assetId: "67464a49-e741-4a75-bf67-a9315282789c",
      hikeName: "Cape Reinga/Te Rerenga Wairua Lighthouse Walk",
      rating: 5,
      comment: "A magical experience seeing the lighthouse at Cape Reinga. Highly recommended!",
      author: "Anna"
    },
    {
      assetId: "67464a49-e741-4a75-bf67-a9315282789c",
      hikeName: "Cape Reinga/Te Rerenga Wairua Lighthouse Walk",
      rating: 3,
      comment: "The walk was nice, but parking was challenging to find.",
      author: "Mark"
    },
    {
      assetId: "240a2b08-5fbb-4305-865c-452c5894836b",
      hikeName: "Flagstaff Hill Track",
      rating: 4,
      comment: "Great view from Flagstaff Hill. The incline was tough but worth it!",
      author: "Lucy"
    },
    {
      assetId: "240a2b08-5fbb-4305-865c-452c5894836b",
      hikeName: "Flagstaff Hill Track",
      rating: 3,
      comment: "Good workout, though some parts of the track were overgrown.",
      author: "John"
    },
    {
      assetId: "c9f7bd48-9684-453f-9b38-1febda35c028",
      hikeName: "Hauturu Highpoint Track",
      rating: 5,
      comment: "Absolutely loved the challenge of Hauturu Highpoint! Stunning views at the top.",
      author: "Nina"
    },
    {
      assetId: "c9f7bd48-9684-453f-9b38-1febda35c028",
      hikeName: "Hauturu Highpoint Track",
      rating: 4,
      comment: "Challenging but rewarding! Be prepared for some steep sections.",
      author: "Paul"
    }
  ]
  );
};
