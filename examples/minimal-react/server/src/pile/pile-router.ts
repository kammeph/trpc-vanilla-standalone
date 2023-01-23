import { PrismaClient as MongoClient } from '../generated/mongo';
import { PrismaClient as MysqlClient } from '../generated/mysql';
import { getSqlString } from '../utils/sql';
import { publicProcedure, router } from '../utils/trpc';
import { getAllPileFilter } from './pile-filters';
import { pileQueryParams } from './pile-query-params';

const mysql = new MysqlClient();
const mongo = new MongoClient();

export const pileRouter = router({
  pileList: publicProcedure.input(pileQueryParams).query(async ({ input }) => {
    const SqlParams = getAllPileFilter(input);
    const sql = getSqlString(SqlParams);
    console.log(sql);
    const pileIds = (
      await mysql.$queryRawUnsafe<{ id: string }[]>(`${sql}`)
    )?.map(({ id }) => id);
    console.log(pileIds.length);
    const piles = await mysql.pile.findMany({
      where: {
        id: {
          in: pileIds,
        },
      },
      include: {
        invoicing_position: true,
        contract: true,
        partner: true,
        pile_list: true,
        project: true,
        pile_certificate: true,
        pile_comment: true,
        pile_harvest_yield: true,
        pile_harvest_yield_department: true,
        pile_harvest_yield_parcel: true,
        pile_intended_customer: true,
        pile_logistic_status_history: true,
        pile_offer_pile_offer_pile_idTopile: true,
        pile_offer_pile_offer_original_pile_idTopile: true,
        pile_removal: true,
        pile_section: true,
        pile_sharing: true,
        pile_species: true,
        pile_species_actual_entry: true,
        pile_species_entry: true,
        pile_task: true,
        pile_uploaded_document: true,
        sale_entry: true,
        transport_order_entry: true,
        wood: true,
      },
      skip:
        input?.pageSize && input.pageNumber
          ? input?.pageSize * (input?.pageNumber - 1)
          : 0,
      take: input?.pageSize || 200,
    });
    return {
      count: piles?.length,
      piles: piles
        .sort((a, b) => pileIds.indexOf(a.id) - pileIds.indexOf(b.id))
        .map((pile) => pile.id),
    };
  }),
  partnerList: publicProcedure.query(async () => {
    const partners = await mongo.pile_partner.findMany({
      select: { id: true },
      take: 100,
    });
    console.log(partners);
    return partners;
  }),
  contactPersonList: publicProcedure.query(async () => {
    const contactPersons = await mongo.pile_contactperson.findMany();
    return contactPersons;
  }),
});

export type PileRouter = typeof pileRouter;
