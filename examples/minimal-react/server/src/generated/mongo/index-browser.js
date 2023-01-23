
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.Forest_management_contactpersonScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  firstName: 'firstName',
  id_: 'id_',
  lastName: 'lastName',
  locale: 'locale',
  mandatePartnerIds: 'mandatePartnerIds',
  partnerId: 'partnerId',
  roles: 'roles'
});

exports.Prisma.Forest_management_partnerScalarFieldEnum = makeEnum({
  id: 'id',
  associatedPartnerIdList: 'associatedPartnerIdList',
  company: 'company',
  contactName: 'contactName',
  deactivated: 'deactivated',
  forestCompanyAssociations: 'forestCompanyAssociations',
  id_: 'id_',
  latitude: 'latitude',
  longitude: 'longitude',
  mandatePersonIds: 'mandatePersonIds',
  partnerNumber: 'partnerNumber'
});

exports.Prisma.Map_configScalarFieldEnum = makeEnum({
  id: 'id',
  contactPersonId: 'contactPersonId',
  mapStartAtHomePosition: 'mapStartAtHomePosition',
  pileColoringStrategy: 'pileColoringStrategy'
});

exports.Prisma.Pile_certificatesScalarFieldEnum = makeEnum({
  id: 'id',
  expiryDate: 'expiryDate',
  id_: 'id_',
  licenseNumber: 'licenseNumber',
  number: 'number',
  partnerId: 'partnerId',
  type: 'type'
});

exports.Prisma.Pile_contactpersonScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  firstName: 'firstName',
  id_: 'id_',
  landlineNumber: 'landlineNumber',
  lastName: 'lastName',
  locale: 'locale',
  mandatePartnerIds: 'mandatePartnerIds',
  partnerId: 'partnerId',
  pileNumberRangeIndex: 'pileNumberRangeIndex',
  roles: 'roles',
  salutation: 'salutation'
});

exports.Prisma.Pile_intermediatestoragesScalarFieldEnum = makeEnum({
  id: 'id',
  city: 'city',
  designation: 'designation',
  district: 'district',
  id_: 'id_',
  latitude: 'latitude',
  longitude: 'longitude',
  parcel: 'parcel',
  partnerId: 'partnerId',
  state: 'state'
});

exports.Prisma.Pile_inventoryScalarFieldEnum = makeEnum({
  id: 'id',
  buyingUnit: 'buyingUnit',
  comment: 'comment',
  correction: 'correction',
  createdDate: 'createdDate',
  createdUserId: 'createdUserId',
  faultyInventory: 'faultyInventory',
  inventoryAmountRm: 'inventoryAmountRm',
  pileId: 'pileId',
  status: 'status',
  statusDate: 'statusDate',
  statusUserId: 'statusUserId'
});

exports.Prisma.Pile_mapScalarFieldEnum = makeEnum({
  id: 'id',
  actualAmount: 'actualAmount',
  amountRm: 'amountRm',
  avgLengthM: 'avgLengthM',
  buyingUnit: 'buyingUnit',
  forestOwnerId: 'forestOwnerId',
  forestOwnerPileNumber: 'forestOwnerPileNumber',
  forestOwnerPileStatus: 'forestOwnerPileStatus',
  hasRemoval: 'hasRemoval',
  id_: 'id_',
  inventoryAmountRm: 'inventoryAmountRm',
  latitude: 'latitude',
  logisticStatus: 'logisticStatus',
  longitude: 'longitude',
  pileNumber: 'pileNumber',
  registrationDate: 'registrationDate',
  remainingAmountRm: 'remainingAmountRm',
  status: 'status',
  statusDate: 'statusDate',
  woodBuyerId: 'woodBuyerId'
});

exports.Prisma.Pile_partnerScalarFieldEnum = makeEnum({
  id: 'id',
  accountingContactPersonId: 'accountingContactPersonId',
  address: 'address',
  associatedPartnerIdList: 'associatedPartnerIdList',
  city: 'city',
  company: 'company',
  contactName: 'contactName',
  country: 'country',
  deactivated: 'deactivated',
  forestCompanyAssociations: 'forestCompanyAssociations',
  id_: 'id_',
  latitude: 'latitude',
  longitude: 'longitude',
  mandatePersonIds: 'mandatePersonIds',
  partnerNumber: 'partnerNumber',
  partnerType: 'partnerType',
  pileNumberPrefix: 'pileNumberPrefix',
  postcode: 'postcode'
});

exports.Prisma.Pile_table_preferencesScalarFieldEnum = makeEnum({
  id: 'id',
  contactPersonId: 'contactPersonId',
  id_: 'id_',
  preferenceName: 'preferenceName'
});

exports.Prisma.Pile_user_configScalarFieldEnum = makeEnum({
  id: 'id',
  contactPersonId: 'contactPersonId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.Report_generatedScalarFieldEnum = makeEnum({
  id: 'id',
  generatedAt: 'generatedAt',
  locale: 'locale',
  reportData: 'reportData',
  reportDescription: 'reportDescription',
  reportFormat: 'reportFormat',
  reportId: 'reportId',
  reportName: 'reportName',
  reportTitle: 'reportTitle',
  success: 'success',
  userId: 'userId',
  username: 'username'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  forest_management_contactperson: 'forest_management_contactperson',
  forest_management_partner: 'forest_management_partner',
  map_config: 'map_config',
  pile_certificates: 'pile_certificates',
  pile_contactperson: 'pile_contactperson',
  pile_intermediatestorages: 'pile_intermediatestorages',
  pile_inventory: 'pile_inventory',
  pile_map: 'pile_map',
  pile_partner: 'pile_partner',
  pile_table_preferences: 'pile_table_preferences',
  pile_user_config: 'pile_user_config',
  report_generated: 'report_generated'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
