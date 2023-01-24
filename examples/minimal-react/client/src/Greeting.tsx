import {
  ForestOwnerPileStatusEnum,
  PileTaskTypeEnum,
} from '../../server/src/pile/models';
import { trpc } from './utils/trpc';

export function Greeting() {
  // const greeting = trpc.greeting.useQuery({ name: 'tRPC user' });

  const projectIdList = [
    'b1591db0-23e0-4256-8975-fa9302b1021f',
    '62c49a2b-a09b-4e2b-b612-84e4541a4282',
  ];
  const pileListIdList = ['f78f9578-1c0b-4397-b02f-f5e9be31ae2b'];
  const woodBuyerIdList = ['ab6638ac-6f0c-462c-a150-2f6a2daeff9c'];
  const forestOwnerIdList = ['472c8862-9292-4bce-9623-676a56381c63'];
  const logisticStatusList = [12];
  const logisticReadyStatusList = ['IMMEDIATELY'];
  const excludedLogisticStatusList = [12];
  const pileStatusList = [1];
  const pileSaleTypeList = ['COMMISSION'];
  const projectStatusList = [1];
  const pileDamageTypeList = ['WET'];
  const woodTypeIdList = [1];
  const woodKindList = ['XY'];
  const woodQualityList = [4];
  const diameterCmFrom = 100;
  const diameterCmTo = 200;
  const amountRmFrom = 10000;
  const amountRmTo = 20000;
  const salesAmountRmFrom = 4000;
  const salesAmountRmTo = 8000;
  const lengthMFrom = 100;
  const lengthMTo = 150;
  const actualWoodKind = 1;
  const actualWoodQuality = 4;
  const registrationDateFrom = new Date('2022-11-25').getTime();
  const registrationDateTo = new Date('2022-12-25').getTime();
  const registrationUserIds = ['4fd1df8a-bbab-4038-8cd8-571eac7ef493'];
  const closingDateNull = true;
  const closingDateFrom = new Date('2020-03-25').getTime();
  const closingDateTo = new Date('2020-05-25').getTime();
  const statusDateFrom = new Date('2021-02-25').getTime();
  const statusDateTo = new Date('2021-05-25').getTime();
  const stateList = ['GERMANY_BADEN_WURTTEMBERG'];
  const districtList = ['NORDWESTMECKLENBURG'];
  const nearestCity = 'Berlin, Ventsc';
  const searchText = 'ZEN1003-68053, POO/22-101029, FINDME, T384-010';
  const matchPileNumber = true;
  const intendedCustomerIdList = ['2f6a8f75-c4ca-44ce-a220-4f7431fa4451'];
  const fscPool = true;
  const inventoryPerson = '8595b4b8-81b3-4a8a-9a9d-49e29892a90e';
  const actualCustomerIdList = ['36a7e822-ed2c-4cf7-8735-e9e267fa8d0f'];
  const transportOrderIdList = ['fc4c6959-b877-45d8-a6ef-115bc4529d2b'];
  const pileDamagePercentageFrom = 50;
  const pileDamagePercentageTo = 70;
  const woodBuyingUnit = 2;
  const remainingAmountRmIsNull = true;
  const remainingAmountRmFrom = 10000;
  const remainingAmountRmTo = 20000;
  const overUnderSizeFrom = 20;
  const overUnderSizeTo = 80;
  const contractIds = ['fb96df99-c628-4e89-84c7-cfbf6e3c0edf'];
  const certificateIds = ['494aad79-aca8-4302-94f8-3df865092efd'];
  const forestOwnerPileStatus = [
    ForestOwnerPileStatusEnum.Offered,
    ForestOwnerPileStatusEnum.Invoice,
  ];
  const commentContent = 'liegt in der Sonne, 1 faules Stück im Polter';
  const commentCreatorIds = ['22ecf131-6404-4ffb-9c37-08b13a8dd2a8'];
  const commentCreatedDateFrom = new Date('2021-07-25').getTime();
  const commentCreatedDateTo = new Date('2022-07-25').getTime();
  const forestOwnerId = '472c8862-9292-4bce-9623-676a56381c63';
  const timberTradingPartnerId = '45933d40-6d21-4fc5-a5b0-f76a0a4cd9ac';
  const timberTradingPartnerIdIsNotNull = true;
  const intendedCustomerUnknown = true;
  const measurementTypes = [2];
  const logisticCompanyIds = ['0e23ca19-6eda-4959-b948-8ed5a211d0aa'];
  const withoutInvoice = true;
  const logisticStatusDateFrom = new Date('2022-07-25').getTime();
  const logisticStatusDateTo = new Date('2022-09-25').getTime();
  const logisticStatusUserIds = ['f9830e30-e178-4221-8565-9546b95cd464'];
  const parcel = 'wald  ';
  const forestDepartment = '  putbus  ';
  const recipientPartnerId = '0095c290-e9dc-4f1e-bef6-2df67fd7dca3';
  const forestServiceContracts = ['53f2d582-7996-4b42-8a98-075ac0d51467'];
  const taskCertificateIds = ['9fac4fa2-23b9-4b5a-a83e-6bf66bdbe002'];
  const taskType = PileTaskTypeEnum.PROCESSING;
  const technique = 'HARVESTER';
  const forestServiceProviderIds = ['990b22e5-6052-463e-88e9-a3512d495429'];
  const noDamage = true;
  const transportOrderDestinationIds = [
    '07e7c709-92dc-4f08-b4dc-49ae1d9ff175',
    'ff1c2879-54ee-428e-ba62-821f2207fed9',
  ];
  const nonCertifiedWood = true;
  const timberTradeAndForestServiceContractIds = [
    'e4a8bc6c-4503-40a9-803b-da2b42e6de91',
    'fa608d43-8082-4e9a-8e74-d55fccfdc6d0',
  ];
  const contractMeasurementTypes = ['FACTORY'];
  const forestMeasurementTypes = [''];
  const noPileNumber = true;
  const noWoodBuyer = true;

  const serviceCostFrom = 60000;
  const serviceCostTo = 200000;

  const pageNumber = 1;
  const pageSize = 500;

  const piles = trpc.pileList.useQuery({
    noWoodBuyer,
    pageNumber,
    pageSize,
  });

  return <div>{JSON.stringify(piles?.data)}</div>;
}
