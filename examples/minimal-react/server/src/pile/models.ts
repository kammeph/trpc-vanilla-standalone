// import { Feature } from 'ol';
// import { Geometry } from 'ol/geom';
// import {
//   ContractStatus,
//   ContractStatusEnum,
//   ListSortState,
//   ListStatePagination,
//   NumericRange,
//   PartnerType,
// } from './models';

export class PileBase {
  id?: string;
  pileNumber?: string;
  listId?: string;
  projectId?: string;
  contractId?: string;
  contractTitle?: string;
  contractNumber?: string;
  contractNumberReference?: string;
  createInventory?: boolean;
  autoInventoryComment?: string;
  forestOwnerId?: string;
  forestOwnerName?: string;
  forestOwnerContactId?: string;
  forestOwnerContactName?: string;
  woodBuyerId?: string;
  woodBuyerName?: string;
  forestId?: string;
  inventoryNumber?: string;
  logisticCompany?: string;
  logisticReadyStatus?: string;
  logisticStatus?: LogisticStatusEnum;
  logisticStatusDate?: number;
  logisticStatusUserId?: string;
  logisticStatusUserName?: string;
  roadCondition?: PileRoadCondition;
  measurementType?: string;
  measurementUnit?: string;
  registrationDate?: number;
  closeDate?: number;
  comment?: string;
  longitude?: number;
  latitude?: number;
  forestEntranceLongitude?: number;
  forestEntranceLatitude?: number;
  state?: string;
  district?: string;
  nearestCity?: string;
  parcel?: string;
  forestDepartment?: string;
  status?: string;
  statusDate?: number;
  statusUserId?: string;
  statusUserName?: string;
  woodIdList?: string[];
  certificates?: PileCertificate[];
  nonCertifiedWood?: boolean;
  fscPool?: boolean;
  amountRm?: number;
  remainingAmountRm?: number;
  buyingUnit?: WoodBuyingUnitEnum;
  avgLengthM?: number;
  avgDiameterCm?: number;
  lengthAdditionM?: number;
  minDiameterCm?: number;
  maxDiameterCm?: number;
  vibrateFactor?: number;
  totalCost?: number;
  totalCostPerRm?: number;
  totalProjectedCost?: number;
  totalProjectedCostPerRm?: number;
  conversionFactor?: number;
  frontWidthM?: number;
  frontSectionWidthM?: number;
  backWidthM?: number;
  backSectionWidthM?: number;
  cSectionAmountRm?: number;
  cSectionPartAmountRm?: number;
  cSectionPartCount?: number;
  inventoryAmountRm?: number;
  inventoryRemainingAmountRm?: number;
  pileSaleTypes?: string;
  forestOwnerSaleType?: string;
  forestOwnerPaymentDate?: number;
  forestOwnerCost?: number;
  forestOwnerCostWithDiscount?: number;
  forestOwnerProjectedCost?: number;
  forestOwnerProjectedPricePerUnit?: number;
  pileIntendedCustomerIds?: PileIntendedCustomer[];
  ageFrom?: number;
  ageTo?: number;
  forestOwnerPricePerUnit?: number;
  forestOwnerPricePerUnitWithDiscount?: number;
  transportOrderNumber?: string;
  excessivelyRemovedAmountRm?: number;
  actualCustomerName?: string;
  timberTradingPartnerId?: string;
  timberTradingPartnerName?: string;
  techSupportPartnerId?: string;
  techSupportPartnerName?: string;
  documentCategory?: PileDocumentCategoryEnum;
  pileDamage?: boolean;
  pileDamageType?: string;
  pileDamagePercentage?: number;
  pileDamageComment?: string;
  priceBookId?: string;
  createDate?: number;
  updateDate?: number;
  updateUserId?: string;
  updateUserName?: string;
  sharingPartnerIdList?: string[];
  ownershipTransferred?: boolean;
  forestOwnerPileStatus?: ForestOwnerPileStatusEnum;
  originalPileId?: string;
  offeredPileId?: string;
  offer?: boolean;
  createOriginalCopy?: boolean;
  invoicingNumber?: string;
  invoiceDate?: number;
  invoiceStatus?: string;
  transportOrderCost?: number;
  harvestDate?: number;
  lastRemovalDate?: number;
  useGrossAmount?: boolean;
  daysUntilDisposed?: number;
  daysUntilDone?: number;
  customerId?: string;
  timberTradingProjectedRevenues?: number;
  timberTradingRevenues?: number;
  timberTradingRevenuesWithDiscount?: number;
}

export class Pile extends PileBase {
  actualSpecies?: PileActualSpeciesEntry[];
  harvestYields?: PileHarvestYield[];
  woods?: Wood[];
  species?: PileSpecies[];
  speciesEntries?: PileSpeciesEntry[];
  sections?: PileSection[];
  pileComments?: PileComment[];
  pileTasks?: PileTask[];
  contractMeasurementType?: ContractMeasurementTypeEnum;
}

export class PileForManagement extends PileBase {
  actualSpecies?: PileActualSpeciesEntry[];
  woods?: Wood[];
  speciesEntries?: PileSpeciesEntry[];
  pileComments?: PileComment[];
  pileTasks?: PileTask[];
}

export interface PileFormData extends Pile {
  uploadFormData: PileUploadFormData;
  locationChangedByUser: boolean;
  isCustomerUnknown: boolean;
}

export interface PileUploadFormData {
  images: [];
  documents: [];
  pileDocumentCategory?: PileDocumentCategoryEnum;
}

export interface PileTask {
  id?: string;
  costNet?: number;
  costWithDiscount?: number;
  partnerId?: string;
  partnerName?: string;
  paymentDate?: number;
  pileTaskType?: PileTaskTypeEnum;
  technique?: string;
  certificateId?: string;
  pricePerUnit?: number;
  pricePerUnitWithDiscount?: number;
  projectedCost?: number;
  projectedPricePerUnit?: number;
  priceBookId?: string;
  contractId?: string;
  contractTitle?: string;
  contractNumber?: string;
  contractNumberReference?: string;
}

export interface PileComment {
  id?: string;
  createdDate: number;
  userId: string;
  userName?: string;
  comment: string;
}

export interface PileEntry {
  id: string;
  pileNumber: string;
}

export interface PileCertificate {
  id: string; // id of the certificate
  name?: string;
  type?: string;
  number?: string;
  expireDate?: number;
}

export interface PileTimberTradePartner {
  pileId: string;
  timberTradingPartnerId: string;
}

export interface BulkPileCertificates {
  pileId: string;
  certificateIds?: string[];
  nonCertifiedWood: boolean;
}

export interface BulkPileIntendentCustomers {
  pileId: string;
  customerIds?: string[];
}

export interface BulkPilesComment {
  pileIds: string[];
  comment?: string;
}

export interface ContractCertificate {
  id: string; // id of the certificate
  name?: string;
}

export interface PileRoadCondition {
  surface?: string;
  drivingPossibility?: string;
  loadingPossibility?: string;
  comment?: string;
}

export interface PileIntendedCustomer {
  customerId?: string;
  customerName?: string;
}

export interface Contract extends ContractBase {
  id?: string;
  buyerId: string;
  buyerName: string;
  buyerContactPersonId: string;
  buyerContactName: string;
  sellerName: string;
  sellerContactPersonId: string;
  sellerContactName: string;
  contractNumber?: string;
  contractNumberReference: string;
  contractTitle: string;
  startTime: string;
  endTime: string;
  signingDate: string;
  createdByContactPersonName?: string;
  createdAt?: string;
  updatedByContactPersonName?: string;
  updatedAt?: string;
  contractComments: ContractComment[];
  contractDetailsTimberTrade: ContractDetails;
  priceBooks: PriceBook[];
  forestryPriceBooks: ForestryPriceBook[];
  advancePayments: AdvancePayment[];
  simulation?: boolean;
  status: ContractStatusEnum;
  demoPartner?: string;
  demoContactPerson?: string;
}

export interface ContractBase {
  sellerId: string;
  contractType: ContractTypeEnum;
}

export interface ContractDetails {
  id: string;
  salesType: string;
  certificates?: ContractCertificate[];
  nonCertifiedWood?: boolean;
  billing: string;
  contractAmount: number;
  contractAmountUnit?: WoodBuyingUnitEnum;
  conversionFactor: number;
  currency: string;
  deviationContractAmount: number;
  discount: number;
  factoryMeasurement: boolean;
  forestMeasurement: boolean;
  harvestLocation: string;
  harvesterType: HarvesterType[];
  paymentTarget: number;
  pileDamageRule: string;
  vibrationFactor: number;
  remarks?: string;
  paymentDueDays: number;
  contracts?: LinkedFspContract[];
}

export interface LinkedFspContract {
  id?: string;
  linkedContractId: string;
  taskType: PileTaskTypeEnum;
  technique: string;
}

export enum HarvesterTypeEnum {
  Harvester = 'HARVESTER',
  MotorManualHarvester = 'MOTOR_MANUAL_HARVESTER',
  MotorManual = 'MOTOR_MANUAL',
  Other = 'OTHER',
}

export interface ContractListFilter {
  maxOptionsCount?: number;
  searchText?: string;
  woodBuyerId?: string;
  sellerPartnerId?: string;
  targetDateMillis?: number;
  buyerPartnerIds?: string[];
  onlySimulated?: boolean;
  contractTypes?: ContractTypeEnum[];
  showSimulated?: boolean;
  anyBuyerMatch?: boolean;
}

export interface ContractType {
  type: ContractTypeEnum;
  name: string;
}

export enum ContractTypeEnum {
  TimberTrade = 'TIMBER_TRADE',
  ForestryService = 'FORESTRY_SERVICE',
  CustomerSale = 'CUSTOMER_SALE',
}

export interface ContractComment {
  id: string;
  createdDate: number;
  comment: string;
  userId: string;
  userName?: string;
}

export interface UploadedDocument {
  id?: string;
  name: string;
  remove?: boolean;
  offline?: boolean;
  pending?: boolean;
}

export interface FilesToDuplicate {
  duplicateFrom?: string;
  documents?: UploadedDocument[];
}

export interface PriceBookBase {
  id: string;
  order?: number;
  price: number;
  buyingUnit: string;
  readOnly?: boolean;
}

export interface PriceBook extends PriceBookBase {
  partnerId?: string;
  woodBuyerId?: string;
  lengthM: number;
  diameterCm: number;
  kind: string;
  woodTypeId: number;
  strengthClass?: string;
  strengthClassPlus?: boolean;
  quality: string;
  currency?: Currency;
  lengthAdditionM?: number;
  maximumDiameter?: number;
  maximumTreeTop?: number;
  minimumDiameter?: number;
  minimumTreeTop?: number;
  trunkBase?: number;
  contractMeasurementType?: ContractMeasurementTypeEnum;
}

export interface ForestryPriceBook extends PriceBookBase {
  taskType: PileTaskTypeEnum;
  technique: string;
}

export interface AdvancePayment {
  id?: string;
  taskType: PileTaskTypeEnum;
  addendum?: string;
  creationDate: number;
  amount: number;
  reason?: string;
  settled: boolean;
  alreadyInvoiced?: boolean;
}

export interface PileInventory {
  pileId: string;
  pileInventoryQualityChanges?: InventoryActualSpecies[];
  status?: string;
  statusUserId?: string;
  statusUserName?: string;
  statusDate?: number;
  inventoryAmountRm?: number;
  buyingUnit?: string;
  comment?: string;
  imageFiles?: UploadedDocument[];
  correction?: boolean;
  faultyInventory?: boolean;
}

export interface PileInventoryFile {
  pileId?: string;
  uploadedDocumentId?: string;
  fileName?: string;
  statusDate?: number | string;
  imageUrl?: string;
}

export interface MarkInventoryFaulty {
  pileId: string;
  statusDate: number;
  faulty: boolean;
}

export interface InventoryActualSpecies {
  speciesEntryId?: string;
  woodType?: number;
  actualWoodKind?: string;
  actualWoodQuality?: string;
  actualPercentage?: number;
}

export interface PileRemoval {
  id?: string;
  pileId?: string;
  date?: number;
  amountRm?: number;
  buyingUnit?: string;
  woodType?: number;
  woodIds?: string[];
  pileRemovalOrigin?: string;
  transportOrderId?: string;
  saleEntryId?: string;
  customerId?: string;
  customerName?: string;
  deliveryBillNumber?: string;
  factoryDeliveryNumber?: string;
  disposedAmountRm?: number;
}

export interface AddPileRemoval extends PileRemoval {
  changePileCloseDate: boolean;
  changePileLogisticStatus: boolean;
  createCustomerRemovalInventory: boolean;
}

export interface CreatePileRemoval {
  transportOrderId: string;
  deliveryBillNumber: string;
  factoryDeliveryNumber: string;
  date: number;
}

export enum Currency {
  EUR = 'EUR',
}

export interface Sale {
  id?: string;
  systemNumber?: string;
  userDefinedNumber?: string;
  saleStatus?: SaleStatusEnum;
  businessYear?: number;
  saleEntryNumber?: string;
  lotCodePurchaseDocumentMac?: string;
  customerId?: string;
  customerName?: string;
  sellerId?: string;
  sellerName?: string;
  deliveryDate?: number;
  referenceNumber?: string;
  creatorPartnerId?: string;
  creatorPartnerName?: string;
  createdBy?: string;
  createdByName?: string;
  createdAt?: number;
  updaterPartnerId?: string;
  updaterPartnerName?: string;
  updatedBy?: string;
  updatedAt?: number;
  totalSoldAmountRm?: number;
  totalSaleValue?: number;
  saleEntries?: SaleEntry[];
  referenceNumbers?: SaleReferenceNumber[];
}

export interface SaleEntry {
  id?: string;
  systemNumber?: string;
  userDefinedNumber?: string;
  woodType?: number;
  woodKind?: string;
  woodQuality?: string;
  pileLengthM?: number;
  buyingUnit?: string;
  amountRm?: number;
  nbPieces?: number;
  pricePerUnit?: number;
  totalPrice?: number;
  referenceField?: SaleReferenceFieldEnum;
  referenceNumber?: string;
  pileRemovalId?: string;
  pileId?: string;
  pileNumber?: string;
  saleWoodEntries?: SaleWoodEntry[];
}

export interface SaleEntryExtended extends SaleEntry {
  deliveryDate?: number;
  lotCodePurchaseDocumentMac?: string;
  saleId?: string;
}

export interface SaleReferenceNumber {
  id?: string;
  referenceField?: SaleReferenceFieldEnum;
  referenceNumber?: string;
}

export interface SaleWoodEntry {
  id: string;
  woodId: string;
}

export interface SaleSystemNumber {
  id: string;
  systemNumber: string;
  userDefinedNumber: string;
  saleStatus: SaleStatusEnum;
}

export type SaleFilter = Partial<{
  customerIds: string[];
  dateFrom: number | string;
  dateTo: number | string;
  pileIds: string[];
}>;

export type ProjectFilter = Partial<{
  projectNumber: string;
  dateFrom: number | string;
  dateTo: number | string;
  woodBuyerIdList: string[];
  forestOwnerIdList: string[];
}>;

export interface FreightZone {
  id?: string;
  name: string;
  validFrom: number;
  validUntil: number;
  logisticPartnerId: string;
  logisticPartnerName: string;
  paymentTerm: string;
  priceUnit: PriceUnitEnum;
  freightZoneEntries: FreightZoneEntry[];
  referenceNumber?: string;
  freightZoneIntendedCustomers: FreightZoneIntendedCustomer[];
  customerPartnerNames: string;
  creatorPartnerId: string;
  creatorPartnerName?: string;
}

export interface FreightZoneFilterConfig {
  partnerId?: string;
}

export interface FreightZoneEntryName {
  id?: string;
  name: string;
}

export interface FreightZoneEntry {
  id?: string;
  rangeMinKm: number;
  rangeMaxKm: number;
  price: number;
}

export interface FreightZoneIntendedCustomer {
  customerId: string;
  customerName?: string;
}

export interface TransportOrder {
  cost?: number;
  contactData?: TransportOrderContactData[];
  createdAt?: any;
  createdBy?: string;
  createdByUserName?: string;
  creatorPartnerId?: string;
  customerId: string;
  customerName?: string;
  dateOfOrderCreated?: number;
  dateOfPickupDeadline?: number;
  dateOfWoodAvailability?: number;
  deliveryDate?: number;
  deliveryNoteFile?: string;
  deliveryNoteNumberBiocen?: string;
  deliveryNoteNumberCustomer?: string;
  deliveryNotesUnknown?: boolean;
  freightZoneId?: string;
  id?: string;
  logisticAmountRm?: number;
  logisticAmountUnit?: string;
  logisticsCompanyId?: string;
  logisticsCompanyName?: string;
  removalsCreated?: boolean;
  routeKm?: number;
  status: string;
  storageDestination?: boolean;
  storageId?: string;
  transportOrderComments?: TransportOrderComment[];
  transportOrderEntries?: TransportOrderEntry[];
  transportOrderNumber?: string;
  updatedAt?: any;
  updatedBy?: string;
  updatedByUserName?: string;
}

export class TransportOrderContactData {
  id?: string;
  addressLine?: string;
  city?: string;
  companyName?: string;
  countryCode?: string;
  district?: string;
  email?: string;
  faxNumber?: string;
  homepage?: string;
  nameAddition?: string;
  landlineNumber?: string;
  latitude?: number;
  licenceNumber?: string;
  licenceRemark?: string;
  licenceValidEternally?: boolean;
  licenceValidFrom?: string;
  licenceValidUntil?: string;
  longitude?: number;
  management?: string;
  managementLocalCourt?: string;
  managementRegistrationNumber?: string;
  parcelId?: string;
  partnerNumber?: string;
  party?: string;
  postcode?: string;
  state?: string;
  vatNote?: string;
  vatRate?: string;
}

export enum TransportOrderPartyEnum {
  TRANSPORTER = 'TRANSPORTER',
  DESTINATION = 'DESTINATION',
  ORGANIZER = 'ORGANIZER',
}

export interface IntermediateStorage {
  id: string;
  city: string;
  designation: string;
  district: string;
  latitude: number;
  longitude: number;
  parcel: string;
  partnerId: string;
  state: string;
}

export interface MapIntermediateStorage {
  id: string;
  designation: string;
  latitude: number;
  longitude: number;
}

export interface TransportOrderEntry {
  id: string;
  woodTypes: number[];
  kind?: string[];
  quality?: string[];
  distanceToCustomerKm?: number;
  freightZoneEntryIndex?: string;
  amountRm: number;
  additionalAmount: number;
  disposeAmountRm: number;
  buyingUnit?: string;
  pileId: string;
  pileName?: string;
  transportWoodEntries?: TransportWoodEntry[];
}

export interface TransportWoodEntry {
  id: string;
  woodId: string;
}

export interface TransportOrderComment {
  date: number;
  userId: string;
  userName?: string;
  comment: string;
}

export type TransportOrderFilter = Partial<{
  searchText: string;
  dateOfOrderCreated: Range<string>;
  dateOfWoodAvailability: Range<string>;
  dateOfPickupDeadline: Range<string>;
  deliveryDate: Range<string>;
  transportDestinationIds?: string[];
  logisticCompanyIdList: string[];
  woodTypeList: number[];
  transportStatusList: string[];
  pileIds: string[];
}>;

export interface TransportOrderNumber {
  id: string;
  transportOrderNumber: string;
}

export interface Range<T> {
  min?: T;
  max?: T;
}

export interface Wood {
  id: string;
  pileId: string;
  woodTypeId: number;
  woodNumber?: string;
  quality: string;
  kind: string;
  lengthM: number;
  lengthAdditionM?: number;
  amountRm: number;
  diameterCm: number;
  removeBark?: boolean;
  diameterWithoutBark?: number;
  buyingUnit: string;
  pileRemovalId?: string;
  fscPool?: boolean;
  manualWoodNumber?: string;
  bracket?: boolean;
  priceBookId?: string;
  transportOrderEntryId?: string;
  saleEntryId?: string;
}

export interface WoodTypeAndAmount {
  woodTypeId: number;
  amountRM: number;
  woods?: Wood[];
  quality?: string;
  kind?: string;
}

export interface PileSpecies {
  id?: string;
  woodTypeId: number;
  amountRm?: number;
  amountPercentage?: number;
  remainingAmountRm?: number;
  numberOfPieces?: number;
}

export interface PileSpeciesEntry {
  id?: string;
  woodTypeId: number;
  woodKind: string;
  woodQuality: string;
  amountRm?: number;
  amountPercentage?: number;
  numberOfPieces?: number;
  priceBookId?: string;
  productTypeFSC?: string;
  woodStrengthClass?: string;
}

export interface PileActualSpeciesEntry {
  id?: string;
  woodTypeId: number;
  woodKind: string;
  woodQuality: string;
  amountPercentage?: number;
}

export interface PileSection {
  id?: string;
  type?: string; // AF/BF/AB/BB
  index?: number;
  heightM?: number;
}

export interface PileList {
  id?: string;
  name?: string;
  woodBuyerId?: string;
  forestOwnerId?: string;
  forestOwnerName?: string;
  projectId?: string;
  status?: string;
  creationDate?: number;
  comment?: string;
}

export interface Project {
  id?: string;
  name?: string;
  projectNumber?: string;
  projectStatus?: ProjectStatusEnum;
  woodBuyerId?: string;
  woodBuyerName?: string;
  timberTradePartnerId?: string;
  timberTradePartnerName?: string;
  forestOwnerId?: string;
  forestOwnerName?: string;
  startDate?: number;
  totalCosts?: number;
  totalAmountRm?: number;
  allPileWithStatusDone?: boolean;
  closeDate?: number;
}

export interface ProjectEntry {
  id: string;
  name: string;
  projectNumber: string;
}

export interface PileEnumerations {
  pileStatus?: PileStatus[];
  logisticStatus?: LogisticStatus[];
  pileListStatus?: ListStatus[];
  projectStatus?: ProjectStatus[];
  pileMeasurementType?: PileMeasurementType[];
  pileMeasurementUnit?: PileMeasurementUnit[];
  woodBuyingUnit?: WoodBuyingUnit[];
  woodKind?: WoodKind[];
  productTypeFSC?: ProductTypeFSC[];
  woodQuality?: WoodQuality[];
  woodType?: WoodType[];
  pileRemovalOrigins?: PileRemovalOrigin[];
  roadSurfaceCondition?: RoadSurfaceCondition[];
  roadDrivingPossibility?: RoadDrivingPossibility[];
  roadLoadingPossibility?: RoadLoadingPossibility[];
  transportStatus?: TransportStatus[];
  logisticReadyStatus?: LogisticReadyStatus[];
  pileSaleTypes?: PileSaleTypes[];
  pileTaskTypes?: PileTaskType[];
  stakingTypes?: StakingType[];
  harvesterTypes?: HarvesterType[];
  backingTypes?: BackingType[];
  processingTypes?: ProcessingType[];
  accountingTypes?: AccountingType[];
  reportFormats?: ReportFormatType[];
  pileDocumentCategories?: PileDocumentCategory[];
  pileColoringStrategy?: PileColoringStrategyType[];
  pileDamageType?: PileDamageType[];
  contractTypes?: ContractType[];
  priceUnits?: PriceUnit[];
  forestryPriceUnits?: ForestryPriceUnit[];
  woodStrengthClasses?: WoodStrengthClass[];
  woodTypeClassifier?: WoodTypeClassifier[];
  forestOwnerPileStatuses?: ForestOwnerPileStatus[];
  invoicingTypes?: InvoicingType[];
  invoicingPositionTypes?: InvoicingPositionType[];
  invoicingStatus?: InvoicingStatus[];
  pileOfferStatus?: PileOfferStatus[];
  widgetTypes?: WidgetType[];
  contractStatus?: ContractStatus[];
  pileOfferTypes?: PileOfferType[];
  contractMeasurementTypes: ContractMeasurementType[];
  saleReferenceFields?: SaleReferenceField[];
  saleStatus?: SaleStatus[];
}

export interface AccountingType {
  id: number;
  type: string;
  name: string;
}

export enum AccountingTypeEnum {
  PARTIAL_PAYMENT = 'PARTIAL_PAYMENT',
  FINAL_ACCOUNTING = 'FINAL_ACCOUNTING',
}

export interface BackingType {
  id: number;
  type: string;
  name: string;
}

export interface HarvesterType {
  id: number;
  type: HarvesterTypeEnum;
  name: string;
}

export interface StakingType {
  id: number;
  type: string;
  name: string;
}

export interface ProcessingType {
  id: number;
  type: string;
  name: string;
}

export interface PileTaskType {
  id: number;
  type: string;
  name: string;
}

export enum PileTaskTypeEnum {
  STAKING = 'STAKING',
  BACKING = 'BACKING',
  HARVESTER = 'HARVESTER',
  PROCESSING = 'PROCESSING',
}

export interface WoodType {
  code: number;
  eldatCode: string;
  type: string;
  name: string;
  nameLatin: string;
  group: string;
}

export interface WoodTypeClassifier {
  id: number;
  type: string;
  name: string;
}

export interface WoodQuality {
  id: number;
  type: string;
  name: string;
}

export enum WoodKindEnum {
  XY = 'XY',
  IL = 'IL',
  IS = 'IS',
  LAS = 'LAS',
  PAL = 'PAL',
  ST = 'ST',
  PARK = 'PARK',
  PFH = 'PFH',
  WHS = 'WHS',
  PAL_L = 'PAL_L',
  PAL_S = 'PAL_S',
}

export interface PriceUnit {
  id: number;
  type: string;
  name: string;
}

export enum PriceUnitEnum {
  CM = 'RM',
  SCM = 'FM',
  LCM = 'SRM',
  Tl = 'Tl',
  Tour = 'Tour',
  Km = 'Km',
}

export interface ProductTypeFSC {
  id: number;
  type: ProductTypeFSCEnum;
  name: string;
}

export enum ProductTypeFSCEnum {
  W1_1 = 'W1_1',
  W3_1 = 'W3_1',
  UNKNOWN = 'UNKNOWN',
}

export interface WoodKind {
  id: number;
  type: string;
  name: string;
}

export enum WoodBuyingUnitEnum {
  RM = 'RM',
  FM = 'FM',
  SRM = 'SRM',
}
export interface WoodBuyingUnit {
  id: number;
  type: string;
  name: string;
  description?: string;
}

export interface PileRemovalOrigin {
  id: number;
  type: string;
  name: string;
}

export enum PileRemovalOriginEnum {
  ForestMeasure = 'FOREST_MEASURE',
  TransportMeasure = 'TRANSPORT_MEASURE',
  FactoryInputMeasure = 'FACTORY_INPUT_MEASURE',
  FactoryDimensionsMeasure = 'FACTORY_DIMENSIONS_MEASURE',
}

export interface ForestryPriceUnit {
  id: number;
  type: string;
  name: string;
}

export enum ForestryPriceUnitEnum {
  RM = 'RM',
  FM = 'FM',
  SRM = 'SRM',
  HOUR = 'HOUR',
}

export enum WoodStrengthClassEnum {
  D0 = 'D0',
  D1 = 'D1',
  D1A = 'D1a',
  D1B = 'D1b',
  D2 = 'D2',
  D2A = 'D2a',
  D2B = 'D2b',
  D3 = 'D3',
  D3A = 'D3a',
  D3B = 'D3b',
  D4 = 'D4',
  D4A = 'D4a',
  D4B = 'D4b',
  D5 = 'D5',
  D5A = 'D5a',
  D5B = 'D5b',
  D6 = 'D6',
  D6A = 'D6a',
  D6B = 'D6b',
  D7 = 'D7',
  D8 = 'D8',
}

export interface WoodStrengthClass {
  id: number;
  type: string;
  name: string;
  minDiameter: number;
  maxDiameter: number;
}

export interface LogisticStatus {
  id: number;
  type: string;
  name: string;
  color?: string;
}

export interface LogisticReadyStatus {
  id: number;
  type: string;
  name: string;
}

export interface PileSaleTypes {
  id: number;
  type: string;
  name: string;
}

export interface TransportStatus {
  id: number;
  type: TransportStatusEnum;
  name: string;
}

export interface ReportFormatType {
  id: number;
  type: ReportFormat;
  name: string;
}

export enum ReportSortType {
  PILE_NUMBER = 'pileNumber',
  REMAINING_AMOUNT = 'remainingAmount',
  REGISTRATION_DATE = 'registrationDate',
}

export interface PileDocumentCategory {
  id: number;
  type: PileDocumentCategoryEnum;
  name: string;
}

export interface PileDamageType {
  id: number;
  type: PileDamageTypeEnum;
  name: string;
}

export interface PileColoringStrategyType {
  id: number;
  type: PileColoringStrategyEnum;
  name: string;
}

export enum PileColoringStrategyEnum {
  Logistic = 'LOGISTIC',
  Inventory = 'INVENTORY',
  ForestOwner = 'FOREST_OWNER',
}

export enum TransportStatusEnum {
  WAITING = 'WAITING',
  IN_TRANSPORTATION = 'IN_TRANSPORTATION',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export enum ContractMeasurementTypeEnum {
  UNDEFINED = 'UNDEFINED',
  FOREST = 'FOREST',
  FACTORY = 'FACTORY',
}

export interface ContractMeasurementType {
  id: number;
  type: ContractMeasurementTypeEnum;
  name: string;
}

export enum PileMeasurementTypeEnum {
  PILE = 'PILE',
  WOOD = 'WOOD',
  SECTION = 'SECTION',
}
export interface PileMeasurementType {
  id: number;
  type: PileMeasurementTypeEnum;
  name: string;
}
export enum PileMeasurementUnitEnum {
  PERCENTAGE = 'PERCENTAGE',
  ABSOLUTE = 'ABSOLUTE',
}
export interface PileMeasurementUnit {
  id: number;
  type: PileMeasurementUnitEnum;
  name: string;
}

export enum LogisticStatusEnum {
  Undefined = 'UNDEFINED',
  Open = 'OPEN',
  Disposed = 'DISPOSED',
  InClarification = 'IN_CLARIFICATION',
  Stolen = 'STOLEN',
  Done = 'DONE',
  Delivered = 'DELIVERED',
  Platform = 'PLATFORM',
  RailLoading = 'RAIL_LOADING',
  Reserved = 'RESERVED',
  RemovalByCustomerTotal = 'REMOVAL_BY_CUSTOMER_TOTAL',
  RemovalByCustomerPartialAmount = 'REMOVAL_BY_CUSTOMER_PARTIAL_AMOUNT',
  PartiallyDisposed = 'PARTIALLY_DISPOSED',
}

export enum LogisticReadyStatusEnum {
  Unknown = 'UNKNOWN',
  No = 'NO',
  Immediately = 'IMMEADIATELY',
  AfterPayment = 'AFTER_PAYMENT',
}

export enum ProjectStatusEnum {
  Open = 'OPEN',
  Closed = 'CLOSED',
  ToBeClosed = 'TO_BE_CLOSED',
}

export const onlyValidLogisticStatus = (statusList: string[]) => {
  if (statusList) {
    return statusList.filter((s) =>
      Object.values(LogisticStatusEnum).includes(s as LogisticStatusEnum),
    );
  }
  return statusList;
};

export interface ColorType {
  type: string;
  color: string;
}

export const LogisticStatusColorList: ColorType[] = [
  //TODO: move to server side / provide with translated strings
  { type: 'UNDEFINED', color: '#ffffff' }, //white
  { type: 'OPEN', color: '#3458eb' }, //blue
  { type: 'DISPOSED', color: '#34eb52' }, //green
  { type: 'IN_CLARIFICATION', color: '#eba534' }, //orange
  { type: 'STOLEN', color: '#eb4034' }, //red
  { type: 'DONE', color: '#9e9e9d' }, //grey
  { type: 'DELIVERED', color: '#ebe834' }, //yellow
  { type: 'PLATFORM', color: '#34b7eb' }, //baby blue
  { type: 'RAIL_LOADING', color: '#000000' }, //black
  { type: 'RESERVED', color: '#00ffd5' }, //neon green
  { type: 'REMOVAL_BY_CUSTOMER_TOTAL', color: '#800000' }, //dark maroon
  { type: 'REMOVAL_BY_CUSTOMER_PARTIAL_AMOUNT', color: '#ce35d4' }, //purple
  { type: 'PARTIALLY_DISPOSED', color: '#fb48c4' }, //pink
];

export const InventoryStatusColorList: ColorType[] = [
  { type: 'OPEN', color: '#3458eb' }, //blue
  { type: 'TOTAL', color: '#34eb52' }, //green
  { type: 'REST', color: '#00ffd5' }, //neon green
  { type: 'REMOVED', color: '#800000' }, //dark maroon
  { type: 'REMOVAL_BY_CUSTOMER', color: '#ce35d4' }, //purple
  { type: 'VERIFY', color: '#eba534' }, //orange
  { type: 'STOLEN', color: '#eb4034' }, //red
];

export const ForestOwnerPileStatusColorList: ColorType[] = [
  { type: 'IN_PREPARATION', color: '#ebe834' }, //yellow
  { type: 'READY', color: '#34eb52' }, //green
  { type: 'OFFERED', color: '#3458eb' }, //blue
  { type: 'ASSIGNED', color: '#00ffd5' }, //neon green
  { type: 'INVOICE', color: '#eba534' }, //orange
  { type: 'PAID', color: '#ce35d4' }, //purple
];

export const VibrateFactorList = [
  { name: '0%', value: 0 },
  { name: '2%', value: 0.02 },
  { name: '4%', value: 0.04 },
  { name: '6%', value: 0.06 },
  { name: '8%', value: 0.08 },
  { name: '10%', value: 0.1 },
];

export interface PileStatus {
  id: number;
  type: string;
  name: string;
  color?: string;
}
export interface ProjectStatus {
  id: number;
  type: string;
  name: string;
}
export interface ListStatus {
  id: number;
  type: string;
  name: string;
}
export interface PileOfferStatus {
  id: number;
  type: string;
  name: string;
}
export interface RoadSurfaceCondition {
  id: number;
  type: string;
  name: string;
}
export interface RoadDrivingPossibility {
  id: number;
  type: string;
  name: string;
}
export interface RoadLoadingPossibility {
  id: number;
  type: string;
  name: string;
}
export interface ForestOwnerPileStatus {
  id: number;
  type: string;
  name: string;
  color?: string;
}
export interface WidgetType {
  id: number;
  type: string;
  name: string;
}

export enum ForestOwnerPileStatusEnum {
  InPreparation = 'IN_PREPARATION',
  Ready = 'READY',
  Offered = 'OFFERED',
  Assigned = 'ASSIGNED',
  Invoice = 'INVOICE',
  Paid = 'PAID',
}

export enum PileSectionTypeEnum {
  A_FRONT = 'AF',
  B_FRONT = 'BF',
  A_BACK = 'AB',
  B_BACK = 'BB',
}

export enum PileDocumentCategoryEnum {
  ExternalTimberList = 'EXTERNAL_TIMBER_LIST',
  HarvesterLog = 'HARVESTER_LOG',
  StrengthClassesProtocol = 'STRENGTH_CLASSES_PROTOCOL',
  PileSnapshot = 'PILE_SNAPSHOT',
  Others = 'OTHERS',
}

export enum PileDamageTypeEnum {
  Storm = 'STORM',
  BarkInfestation = 'BARK_INFESTATION',
  TrunkInfestation = 'TRUNK_INFESTATION',
  BlueStain = 'BLUE_STAIN',
  Fungal = 'FUNGAL',
  Fire = 'FIRE',
  Splintered = 'SPLINTERED',
  Wet = 'WET',
  Other = 'Other',
}

export interface MapPile {
  id: string;
  pn: string; // PileNumber
  fo: string; // ForestOwnerName
  fpn: string; // ForestOwner Pile Number
  wb: string; // WoodBuyerName
  s: LogisticStatusEnum; // LogisticStatus
  ps: string; // inventory status (PileStatus)
  fps: ForestOwnerPileStatusEnum; // ForestOwner Pile Status
  d: number; // Registration date in millis
  lon: number; // Longitude
  lat: number; // Latitude
  flon: number; // Forest Entrance Longitude
  flat: number; // Forest Entrance Latitude
  wt: string; // Wood Type
  wk: string; // Wood kind
  wq: string; // Wood quality
  a: number; // Amount in RM
  r: number; // Remaining amount in RM
  aa: number; // Actual Amount
  bu: WoodBuyingUnitEnum; // Buying Unit
  hr: number; // Has Removal
  i: number; // Inventory Amount RM
  is: number; // Status Date (Inventory date stamp)
  lr: string; // Last Removal Amount RM
  lrs: number; // Last Removal Date
  l: number; // Avg. Length (m)
  ts: string[]; // Tree Species
}

export class PileFilter {
  filterConfigName = '';
  statusList: string[] = [];
  projectId: string[] = [];
  pileListId?: string[];
  forestOwnerIdList: string[] = [];
  woodBuyerIdList: string[] = [];
  inventoryStatusList?: string[] = [];
  inventoryPerson?: string;
  intendedCustomerUnknown?: boolean;
  projectStatusList?: string[] = [];
  woodKindList?: string[];
  woodQualityList?: string[];
  actualWoodKindList?: string[];
  actualWoodQualityList?: string[];
  woodTypeClassifier?: string;
  woodTypeList?: number[];
  logisticReadyStatus?: string[];
  logisticCompanyIds?: string[];
  logisticStatusUserIds?: string[];
  logisticStatusDateFrom?: number;
  logisticStatusDateTo?: number;
  fscPool?: boolean;
  intendedCustomerId?: string[];
  actualCustomerId?: string[];
  registrationDateFrom?: number;
  registrationDateTo?: number;
  amount?: NumericRange = undefined;
  remainingAmount?: NumericRange;
  woodBuyingUnit?: string;
  avgLength?: NumericRange;
  avgDiameter?: NumericRange;
  searchText?: string;
  matchPileNumber?: boolean;
  closingDateNull: boolean = false;
  closingDateFrom: number = 0;
  closingDateTo: number = 0;
  statusDateFrom: number = 0;
  statusDateTo: number = 0;
  stateList: string[] = [];
  districtList: string[] = [];
  nearestCity: string = '';
  transportOrderId: string[] = [];
  pileDamageTypeList?: string[];
  pileDamagePercentage?: NumericRange;
  overUnderSize?: NumericRange;
  certificateType?: string[] = [];
  nonCertifiedWood?: boolean;
  contractId?: string[] = [];
  forestOwnerPileStatus?: string[];
  invoicingNumber?: string;
  invoiceDateFrom?: number;
  invoiceDateTo?: number;
  withoutInvoice?: boolean;
  invoiceIds?: string[] = [];
  pileSaleTypeList?: string[] = [];
  commentCreatorIds?: string[] = [];
  commentContent?: string;
  commentCreationDateFrom?: number;
  commentCreationDateTo?: number;
  totalProjectedCost?: NumericRange;
  totalForestOwnerCost?: NumericRange;
  totalServiceCost?: NumericRange;
  totalCost?: NumericRange;
  totalProjectedCostPerRm?: NumericRange;
  totalCostPerRm?: NumericRange;
  measurementTypeList?: string[];
  forestryDepartment?: string;
  parcel?: string;
  forestServiceContract?: string[];
  taskCertificateType?: string[];
  technique?: string[];
  taskType?: string[];
  forestServiceProvider?: string[];
  noDamage?: boolean;
  transportDestinationIds?: string[];
}

export interface PileFilterConfig extends PileFilter {
  id?: string;
  contactPersonId: string;
}

export interface GetPileParameters {
  filter?: PileFilterConfig;
  pagination?: ListStatePagination;
  sort?: ListSortState;
}

export interface GetProjectsParameters {
  pagination?: ListStatePagination;
  sort?: ListSortState;
  filters?: ProjectFilter;
}

export interface GetTransportOrderParameters {
  filter?: TransportOrderFilter;
  pagination?: ListStatePagination;
  sort?: ListSortState;
}

export interface Page<T> {
  total: number;
  items: T[];
}

export interface WoodBuyerPileNumbers {
  rangeIndex: number;
  pileNumbers: PileNumbers[];
  pileNumberPrefix?: string;
  woodBuyerId?: string;
}
export interface PileNumbers {
  forestOwnerId: string;
  maxNumber: number;
}

export interface WoodBuyerPileNumberRange {
  id: string;
  name: string;
  rangeIndex: number;
  rangeStart: number;
  rangeEnd: number;
}

export interface PileNumberConfig {
  id: string;
  enabled: boolean;
  partnerId: string;
  prefix: string;
  yearFormat: number;
  separator1: string;
  separator2: string;
  digits: number;
  maxNumber: number;
}

export interface MapConfig {
  id?: string;
  contactPersonId?: string;
  homePosition?: MapPosition;
  layers?: MapConfigLayer[];
  mapStartAtHomePosition?: boolean;
  pileColoringStrategy?: string;
  forestAreaTransparency?: number;
}

export interface MapConfigLayer {
  name: string;
  options: MapConfigLayerOption[];
}

export interface MapConfigLayerOption {
  id: string;
  value: boolean;
}

export interface MapPosition {
  latitude: number;
  longitude: number;
  zoom?: number;
  accuracy?: number;
  timestamp?: number;
}

export interface PreferencedColumn {
  id?: string;
  name?: string;
  width?: number;
}

export interface PileTablePreference {
  id?: string;
  contactPersonId?: string;
  preferenceName?: string;
  columns?: PreferencedColumn[];
}

export enum PileTablePreferenceNameEnum {
  GENERAL_STANDARD = 'GENERAL_STANDARD',
  WOOD_BUY_STANDARD = 'WOOD_BUY_STANDARD',
  LOGISTICS_STANDARD = 'LOGISTICS_STANDARD',
  INVENTORY_STANDARD = 'INVENTORY_STANDARD',
  ACCOUNTING_STANDARD = 'ACCOUNTING_STANDARD',
}

export interface PileForInvoicing {
  pile: Pile;
  contract: Contract;
}

export interface InvoicingNumber {
  id: string;
  number: string;
}

export interface Invoicing {
  id?: string;
  invoicingNumber?: string;
  creationDate?: number;
  invoiceDate?: number;
  paidDate?: number;
  serviceDate?: string;
  woodRecordingDate?: number;
  creatorPartnerId: string;
  creatorPartnerNumber?: string;
  creatorPartnerName?: string;
  creatorPartnerType?: PartnerType;
  creatorContactPersonId: string;
  creatorContactPersonName?: string;
  recipientPartnerId: string;
  recipientPartnerNumber?: string;
  recipientPartnerName?: string;
  recipientPartnerType?: PartnerType;
  recipientContactPersonName?: string;
  referToRecipientContactPerson: boolean;
  creatorTaxNumber?: string;
  recipientTaxNumber?: string;
  discount?: number;
  paymentTarget?: number;
  creatorPartnerVAT?: string;
  recipientPartnerVAT?: string;
  subject?: string;
  contractId?: string;
  offerNumbers?: string[];
  projectIds?: string[];
  projects?: ProjectEntry[];
  status?: string;
  type?: string;
  externalPartnerNumber?: string;
  creatorContactData?: InvoicingContactData;
  recipientContactData?: InvoicingContactData;
  creatorBankAccount?: InvoicingBankAccount;
  recipientBankAccount?: InvoicingBankAccount;
  positions?: InvoicingPosition[];
  vatRate?: string;
  vatNote?: string;
  paymentDueDays?: number;
  advancePaymentsTotal?: number;
}

export interface InvoicingContactData {
  id?: string;
  companyName: string;
  partnerNumber?: string;
  contactPersonName: string;
  nameAddition: string;
  countryCode: string;
  postcode: string;
  city: string;
  addressLine: string;
  email: string;
  landlineNumber: string;
  faxNumber: string;
  homepage: string;
  management: string;
  managementLocalCourt: string;
  managementRegistrationNumber: string;
}

export interface InvoicingBankAccount {
  id?: string;
  bankName: string;
  iban: string;
  bic: string;
  remark: string;
  certification: string;
}

export interface InvoicingPosition {
  id?: string;
  pileId: string;
  positionTitle: string;
  positionNumber: number;
  amountRm: number;
  priceUnit: string;
  positionType: InvoicingPositionTypeEnum;
  pileMeasurementType: string;
  lumpSumPercentage?: number;
  lumpSumPricePerUnit?: number;
  lumpSumVat?: number;
  lumpSumWoodQuality?: string;
  positionEntries: InvoicingPositionEntry[];
  advancePaymentId?: string;
}

export interface InvoicingPositionEntry {
  id?: string;
  woodTypeId: number;
  woodKind: string;
  woodQuality: string;
  priceUnit: string;
  woodStrengthClass?: string;
  amountRm: number;
  amountChanged: boolean;
  originalAmountRm: number;
  amountHour?: number;
  taskType?: PileTaskTypeEnum;
  projectedPricePerUnit: number;
  billedPricePerUnit: number;
  strengthClassPlus?: boolean;
  vat?: number;
  pileTaskId?: string;
  addendum?: string;
  reason?: string;
  month?: number;
  price?: number;
}

export interface InvoicingPricing {
  netSum: number;
  vat: number;
  grossSum: number;
  discount: number;
  total: number;
}

export interface GetInvoicingParameters {
  sort?: ListSortState;
  pagination?: ListStatePagination;
  filters?: InvoicingFilter;
}

export interface InvoicingType {
  id: number;
  type: string;
  name: string;
}

export enum InvoicingTypeEnum {
  Invoice = 'INVOICE',
  CreditNote = 'CREDIT_NOTE',
}

export interface InvoicingPositionType {
  id: number;
  type: string;
  name: string;
}

export enum InvoicingPositionTypeEnum {
  Pile = 'PILE',
  UnboundAmounts = 'UNBOUND_AMOUNTS',
  PileService = 'PILE_SERVICE',
  AdvancePayment = 'ADVANCE_PAYMENT',
}

export interface InvoicingStatus {
  id: number;
  type: string;
  name: string;
}

export enum InvoicingStatusEnum {
  Created = 'CREATED',
  Executed = 'EXECUTED',
  Paid = 'PAID',
  Archived = 'ARCHIVED',
  Canceled = 'CANCELED',
}

export interface ChangeInvoicingStatus {
  id: string;
  status: InvoicingStatusEnum;
  date: number;
}

export interface InvoicingFilter {
  invoicingStatus: InvoicingStatusEnum[];
}

export interface PileOffer {
  id: string;
  sellerPartnerId: string;
  sellerPartnerName: string;
  sellerContactPersonId: string;
  sellerContactPersonName: string;
  buyerPartnerId: string;
  buyerPartnerName: string;
  buyerContactPersonId: string;
  buyerContactPersonName: string;
  creationDate: number;
  status: string;
  pileId: string;
  originalPileId: string;
  nearestCity?: string;
  longitude: number;
  latitude: number;
  amountRm: number;
  woodTypes: number[];
  woodKinds: string[];
  woodQualities: string[];
  offerType: PileOfferTypeEnum;
}

export enum PileOfferStatusEnum {
  OPEN = 'OPEN',
  PRE_ACCEPTED = 'PRE_ACCEPTED',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export interface PileOfferType {
  id: number;
  type: string;
  name: string;
}

export enum PileOfferTypeEnum {
  TimberTrade = 'TIMBER_TRADE',
  Customer = 'CUSTOMER',
}

export interface CreatePileOffer {
  originalPileId: string;
  email?: string;
  contactPersonId?: string;
  pile: Pile;
  offerType: PileOfferTypeEnum;
  createRemoval: boolean;
}

export interface CreatePileOfferResult {
  originalPile: Pile;
  offerPile: PileOffer;
  invitationNeeded: boolean;
  invitationEmail: string;
}

export interface RemovePileOfferResult {
  originalPile: Pile;
}

export interface AcceptPileOfferRequest {
  offerId: string;
  pile: Pile;
}

export interface SharePileLocationResult {
  offer: PileOffer;
  originalPile: Pile;
  offeredPile: Pile;
}

export interface AcceptPileOfferResult {
  offer: PileOffer;
  originalPile: Pile;
  offeredPile: Pile;
}

export interface RejectPileOfferResult {
  offer: PileOffer;
  originalPile: Pile;
}

export interface FileUpload {
  upload: File[];
  delete: UploadedDocument[];
  duplicate: FilesToDuplicate;
}

export interface PileHarvestYield {
  id: string;
  pileId: string;
  parcelId: string;
  cadastralDistrict: string;
  parcel: string;
  plot: string;
  percentage: number;
  forestryDistrictId?: string;
  departmentName?: string;
  subdepartmentName?: string;
  subareaName?: string;
}

export enum ReportFormat {
  PDF = 'PDF',
  DOCX = 'DOCX',
  XLSX = 'XLSX',
  CSV = 'CSV',
}

export interface ForestHarvestYield {
  forestryDepartments: string[];
  departmentName: string;
  subdepartmentName: string;
  subareaName: string;
  parcel: string;
  plot: string;
  harvestDate: number;
  species: PileSpecies[];
  speciesEntries: PileSpeciesEntry[];
  woodKind: WoodKind;
  woodQuality: WoodQuality;
  parcelId: string;
  cadastralDistrict: string;
  forestryDistrictId: string;
  amount: number;
  costPerUnit: number;
}

export interface CreateMultiPileReportData {
  creatorPartnerId: string;
  creatorPartnerName: string;
  creatorContactPersonId: string;
  creatorContactPersonName: string;
  recipientPartnerNames: string[];
  recipientContactPersonNames: string[];
  showCreator: boolean;
  showRecipient: boolean;
  kindOverview: boolean;
  priceOverview: boolean;
  pileOverview: boolean;
  pileDetails: boolean;
  trunkWoodList: boolean;
  reportType: 'singleReport' | 'multiReport';
  format: ReportFormat;
  comment: string;
  pileIds: string[];
  pileListId: string;
  anonymous: boolean;
}

export interface Dashboard {
  id?: string;
  contactPersonId: string;
  widgets: Widget[];
}

export interface Widget {
  id?: string;
  x: number;
  y: number;
  rows: number;
  cols: number;
  type: string;
  lastXDays?: number;
  title?: string;
  from?: number;
  to?: number;
  forestOwnerIds?: string[];
  contactPersonIds?: string[];
}

export interface WidgetChartData {
  chartType: string;
  labels: string[];
  series: WidgetChartSeries[];
}

export interface WidgetChartSeries {
  label: string;
  values: number[];
  unit?: string;
  customText?: string;
}

export interface PileSelectionData {
  pileRegistrationDate?: number;
  woodBuyerId?: string;
  forestOwner?: string;
  forestryServiceProviderId?: string;
  positionType?: InvoicingPositionTypeEnum;
  numberOfPositions: number;
  contract?: Contract;
}

export interface SaleReferenceField {
  id: number;
  type: string;
  name: string;
}

export enum SaleReferenceFieldEnum {
  CUSTOMER_RECEIPT_NUMBER = 'CUSTOMER_RECEIPT_NUMBER',
  TRANSPORT_ORDER_DELIVERY_NUMBER = 'TRANSPORT_ORDER_DELIVERY_NUMBER',
  INVOICING_NUMBER = 'INVOICING_NUMBER',
  STOCK_PROTOCOL_NO = 'STOCK_PROTOCOL_NO',
  ELDAT_PROTOCOL_NO = 'ELDAT_PROTOCOL_NO',
}

export interface SaleStatus {
  id: number;
  type: string;
  name: string;
}

export enum SaleStatusEnum {
  IN_PLANNING = 'IN_PLANNING',
  EXECUTED = 'EXECUTED',
}

export interface ContractStatus {
  type: ContractStatusEnum;
  name: string;
}

export enum ContractStatusEnum {
  Created = 'CREATED',
  Active = 'ACTIVE',
  InSettlement = 'IN_SETTLEMENT',
  Completed = 'COMPLETED',
  Archived = 'ARCHIVED',
}

export enum SortOrder {
  NONE,
  ASC = '0',
  DESC = '1',
}

export interface ListSortState {
  sortAttribute: string;
  sortOrder: SortOrder;
}
export const NO_SORTING: ListSortState = {
  sortAttribute: '',
  sortOrder: SortOrder.NONE,
};

export class ListStatePagination {
  /**
   * Initial pagination state (first page, 10 items, no total count, page size option is [5, 10, 25, 50, 100])
   *
   * @static
   * @memberof ListStatePagination
   */
  public static reset = new ListStatePagination();

  constructor(
    public readonly currentPage: number = 0,
    public readonly pageSize: number = 10,
    public readonly totalCount?: number,
    public readonly pageSizeOptions: number[] = [5, 10, 25, 50, 100],
  ) {}
}

export class NumericRange {
  constructor(readonly min?: number, readonly max?: number) {}
}

export enum PartnerType {
  Standard = 'STANDARD',
  ForestCompanyAssociation = 'FOREST_COMPANY_ASSOCIATION',
  TimberTrading = 'TIMBER_TRADING',
  TechSupport = 'TECH_SUPPORT',
  ForestOwner = 'FOREST_OWNER',
  Logistic = 'LOGISTIC',
  ForesterForestConsulting = 'FORESTER',
  ForestCompany = 'FOREST_COMPANY',
  Customer = 'CUSTOMER',
}
