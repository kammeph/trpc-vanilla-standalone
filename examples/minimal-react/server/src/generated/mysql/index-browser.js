
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

exports.Prisma.Access_rightsScalarFieldEnum = makeEnum({
  id: 'id',
  contact_person_id: 'contact_person_id',
  partner_id: 'partner_id'
});

exports.Prisma.Access_rights_invitationScalarFieldEnum = makeEnum({
  id: 'id',
  partner_id: 'partner_id',
  contact_person_id: 'contact_person_id',
  request_date: 'request_date',
  requester_contact_person_id: 'requester_contact_person_id',
  message: 'message'
});

exports.Prisma.Advance_paymentScalarFieldEnum = makeEnum({
  id: 'id',
  contract_id: 'contract_id',
  task_type: 'task_type',
  addendum: 'addendum',
  creation_date: 'creation_date',
  amount: 'amount',
  reason: 'reason',
  settled: 'settled'
});

exports.Prisma.Bank_accountScalarFieldEnum = makeEnum({
  id: 'id',
  bank_name: 'bank_name',
  iban: 'iban',
  bic: 'bic',
  partner_id: 'partner_id',
  iban_format: 'iban_format',
  main_bank_account: 'main_bank_account'
});

exports.Prisma.CertificateScalarFieldEnum = makeEnum({
  id: 'id',
  certificate_type: 'certificate_type',
  certificate_number: 'certificate_number',
  expire_date: 'expire_date',
  partner_id: 'partner_id',
  license_number: 'license_number',
  created_by: 'created_by',
  created_partner_by: 'created_partner_by'
});

exports.Prisma.Contact_dataScalarFieldEnum = makeEnum({
  id: 'id',
  country_id: 'country_id',
  postcode: 'postcode',
  city: 'city',
  address_line: 'address_line',
  email: 'email',
  mobile_number: 'mobile_number',
  landline_number: 'landline_number',
  fax_number: 'fax_number',
  contact_person_id: 'contact_person_id',
  partner_id: 'partner_id',
  state: 'state',
  district: 'district',
  homepage: 'homepage',
  management: 'management',
  local_court: 'local_court',
  commercial_registration_number: 'commercial_registration_number',
  location_name: 'location_name',
  main_contact_person: 'main_contact_person',
  longitude: 'longitude',
  latitude: 'latitude'
});

exports.Prisma.Contact_personScalarFieldEnum = makeEnum({
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  title: 'title',
  partner_id: 'partner_id',
  can_login: 'can_login',
  locale: 'locale',
  is_social_login: 'is_social_login',
  salutation: 'salutation',
  comment: 'comment',
  auto_gps: 'auto_gps',
  visible_for_others: 'visible_for_others',
  last_login: 'last_login',
  created_by: 'created_by',
  created_at: 'created_at',
  updated_by: 'updated_by',
  updated_at: 'updated_at',
  image_upload_compression: 'image_upload_compression',
  start_position: 'start_position'
});

exports.Prisma.ContractScalarFieldEnum = makeEnum({
  id: 'id',
  buyer_id: 'buyer_id',
  buyer_contact_person_id: 'buyer_contact_person_id',
  seller_id: 'seller_id',
  seller_contact_person_id: 'seller_contact_person_id',
  contract_number: 'contract_number',
  contract_title: 'contract_title',
  start_time: 'start_time',
  end_time: 'end_time',
  contract_number_reference: 'contract_number_reference',
  signing_date: 'signing_date',
  contract_details_timber_trade_id: 'contract_details_timber_trade_id',
  contract_type: 'contract_type',
  demo_partner: 'demo_partner',
  demo_contact_person: 'demo_contact_person',
  created_by: 'created_by',
  created_at: 'created_at',
  updated_by: 'updated_by',
  updated_at: 'updated_at',
  simulation: 'simulation',
  original_contract_id: 'original_contract_id',
  temporary: 'temporary',
  status: 'status'
});

exports.Prisma.Contract_commentScalarFieldEnum = makeEnum({
  id: 'id',
  contract_id: 'contract_id',
  created_date: 'created_date',
  comment: 'comment',
  user_id: 'user_id'
});

exports.Prisma.Contract_details_timber_tradeScalarFieldEnum = makeEnum({
  id: 'id',
  contract_id: 'contract_id',
  vibration_factor: 'vibration_factor',
  conversion_factor: 'conversion_factor',
  payment_target: 'payment_target',
  discount: 'discount',
  currency: 'currency',
  pile_damage_rule: 'pile_damage_rule',
  forest_measurement: 'forest_measurement',
  factory_measurement: 'factory_measurement',
  contract_amount: 'contract_amount',
  deviation_contract_amount: 'deviation_contract_amount',
  harvester_type: 'harvester_type',
  harvester_location: 'harvester_location',
  billing: 'billing',
  sales_type: 'sales_type',
  contract_amount_unit: 'contract_amount_unit',
  remarks: 'remarks',
  non_certified_wood: 'non_certified_wood',
  payment_due_days: 'payment_due_days',
  forest_measurement_type: 'forest_measurement_type'
});

exports.Prisma.Contract_details_timber_trade_certificateScalarFieldEnum = makeEnum({
  id: 'id',
  contract_details_timber_trade_id: 'contract_details_timber_trade_id',
  certificate_id: 'certificate_id'
});

exports.Prisma.Contract_details_timber_trade_fsp_contractScalarFieldEnum = makeEnum({
  id: 'id',
  contract_details_id: 'contract_details_id',
  linked_contract_id: 'linked_contract_id',
  task_type: 'task_type',
  technique: 'technique'
});

exports.Prisma.Contract_uploaded_documentScalarFieldEnum = makeEnum({
  id: 'id',
  contract_id: 'contract_id',
  name: 'name',
  path: 'path'
});

exports.Prisma.CountryScalarFieldEnum = makeEnum({
  id: 'id',
  country_code: 'country_code'
});

exports.Prisma.Flyway_schema_historyScalarFieldEnum = makeEnum({
  installed_rank: 'installed_rank',
  version: 'version',
  description: 'description',
  type: 'type',
  script: 'script',
  checksum: 'checksum',
  installed_by: 'installed_by',
  installed_on: 'installed_on',
  execution_time: 'execution_time',
  success: 'success'
});

exports.Prisma.Forest_areaScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  partner_id: 'partner_id',
  hectare: 'hectare',
  wood_market: 'wood_market',
  cost_level: 'cost_level',
  lead_url: 'lead_url',
  record_date: 'record_date',
  states: 'states',
  districts: 'districts',
  forest_type: 'forest_type',
  created_by: 'created_by',
  created_at: 'created_at',
  updated_by: 'updated_by',
  updated_at: 'updated_at',
  country_code: 'country_code',
  forest_ranger_id: 'forest_ranger_id'
});

exports.Prisma.Forest_area_import_historyScalarFieldEnum = makeEnum({
  id: 'id',
  forest_area_id: 'forest_area_id',
  import_type: 'import_type',
  document_name: 'document_name',
  type: 'type',
  date: 'date',
  user_name: 'user_name',
  errors: 'errors'
});

exports.Prisma.Forest_area_import_history_errorScalarFieldEnum = makeEnum({
  id: 'id',
  forest_area_import_id: 'forest_area_import_id',
  district_id: 'district_id',
  error_code: 'error_code'
});

exports.Prisma.Forest_area_parcelScalarFieldEnum = makeEnum({
  id: 'id',
  forest_id: 'forest_id',
  polygon: 'polygon',
  partner_id: 'partner_id',
  contact_person_id: 'contact_person_id',
  nearest_city: 'nearest_city',
  cadastral_district: 'cadastral_district',
  parcel: 'parcel',
  plot: 'plot',
  plot_id: 'plot_id',
  hectare: 'hectare',
  extended_designation: 'extended_designation',
  parcel_id: 'parcel_id',
  share_part: 'share_part',
  share_total: 'share_total'
});

exports.Prisma.Forest_area_parcel_shareScalarFieldEnum = makeEnum({
  id: 'id',
  partner_id: 'partner_id',
  contact_person_id: 'contact_person_id',
  parcel_id: 'parcel_id',
  share_part: 'share_part',
  share_total: 'share_total'
});

exports.Prisma.Forest_area_sharingScalarFieldEnum = makeEnum({
  id: 'id',
  forest_area_id: 'forest_area_id',
  partner_id: 'partner_id'
});

exports.Prisma.Forest_departmentScalarFieldEnum = makeEnum({
  id: 'id',
  forest_area_id: 'forest_area_id',
  name: 'name',
  polygon: 'polygon',
  data_id: 'data_id',
  climatic_data_id: 'climatic_data_id',
  hectare: 'hectare',
  forester_id: 'forester_id',
  district_id: 'district_id'
});

exports.Prisma.Forest_leadScalarFieldEnum = makeEnum({
  id: 'id',
  ha: 'ha',
  stock: 'stock',
  wood_market: 'wood_market',
  cost_level: 'cost_level',
  location_id: 'location_id',
  partner_id: 'partner_id',
  lead_url: 'lead_url',
  create_date: 'create_date'
});

exports.Prisma.Forest_lead_locationScalarFieldEnum = makeEnum({
  id: 'id',
  very_good: 'very_good',
  medium: 'medium',
  moderate: 'moderate',
  weak: 'weak'
});

exports.Prisma.Forest_lead_tree_typeScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  percentage: 'percentage',
  nature_rejuvenation_percentage: 'nature_rejuvenation_percentage',
  nature_rejuvenation_amount: 'nature_rejuvenation_amount',
  young_percentage: 'young_percentage',
  young_amount: 'young_amount',
  young_stock: 'young_stock',
  medium_percentage: 'medium_percentage',
  medium_amount: 'medium_amount',
  medium_stock: 'medium_stock',
  old_percentage: 'old_percentage',
  old_amount: 'old_amount',
  old_stock: 'old_stock',
  forest_lead_id: 'forest_lead_id'
});

exports.Prisma.Forest_standScalarFieldEnum = makeEnum({
  id: 'id',
  forestry_data_id: 'forestry_data_id',
  stand_type: 'stand_type',
  avg_height_m: 'avg_height_m',
  avg_diameter_cm: 'avg_diameter_cm',
  tree_age_class: 'tree_age_class',
  percentage: 'percentage',
  under_story_percentage: 'under_story_percentage',
  old_growth_stage_percentage: 'old_growth_stage_percentage',
  stocking_rate: 'stocking_rate'
});

exports.Prisma.Forest_stand_speciesScalarFieldEnum = makeEnum({
  id: 'id',
  stand_id: 'stand_id',
  wood_type: 'wood_type',
  percentage: 'percentage'
});

exports.Prisma.Forest_subareaScalarFieldEnum = makeEnum({
  id: 'id',
  forest_subdepartment_id: 'forest_subdepartment_id',
  name: 'name',
  polygon: 'polygon',
  data_id: 'data_id',
  hectare: 'hectare',
  district_id: 'district_id'
});

exports.Prisma.Forest_subdepartmentScalarFieldEnum = makeEnum({
  id: 'id',
  forest_department_id: 'forest_department_id',
  name: 'name',
  polygon: 'polygon',
  data_id: 'data_id',
  hectare: 'hectare',
  district_id: 'district_id'
});

exports.Prisma.Forestry_climatic_dataScalarFieldEnum = makeEnum({
  id: 'id',
  forestry_district_id: 'forestry_district_id',
  growth_region: 'growth_region',
  growth_district: 'growth_district',
  climate_stage: 'climate_stage'
});

exports.Prisma.Forestry_district_dataScalarFieldEnum = makeEnum({
  id: 'id',
  color: 'color',
  striped: 'striped',
  statutory: 'statutory',
  function_type: 'function_type',
  stand_spacing: 'stand_spacing',
  clearing: 'clearing',
  clearing_percentage: 'clearing_percentage',
  lane: 'lane',
  location_id: 'location_id',
  location_name: 'location_name',
  secondary_color: 'secondary_color'
});

exports.Prisma.Forestry_district_parcelScalarFieldEnum = makeEnum({
  district_id: 'district_id',
  parcel_id: 'parcel_id'
});

exports.Prisma.Forestry_price_bookScalarFieldEnum = makeEnum({
  id: 'id',
  contract_id: 'contract_id',
  order_number: 'order_number',
  task_type: 'task_type',
  technique: 'technique',
  price: 'price',
  buying_unit: 'buying_unit',
  read_only: 'read_only'
});

exports.Prisma.Freight_zoneScalarFieldEnum = makeEnum({
  id: 'id',
  valid_from: 'valid_from',
  valid_until: 'valid_until',
  logistic_partner_id: 'logistic_partner_id',
  payment_term: 'payment_term',
  name: 'name',
  price_unit: 'price_unit',
  reference_number: 'reference_number',
  creator_partner_id: 'creator_partner_id'
});

exports.Prisma.Freight_zone_entryScalarFieldEnum = makeEnum({
  id: 'id',
  freight_zone_id: 'freight_zone_id',
  range_min_km: 'range_min_km',
  range_max_km: 'range_max_km',
  price: 'price'
});

exports.Prisma.Freight_zone_intended_customerScalarFieldEnum = makeEnum({
  id: 'id',
  freight_zone_id: 'freight_zone_id',
  customer_id: 'customer_id'
});

exports.Prisma.Harvest_yieldScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  amount_rm: 'amount_rm',
  forest_area_id: 'forest_area_id',
  total_revenue: 'total_revenue'
});

exports.Prisma.Harvest_yield_departmentScalarFieldEnum = makeEnum({
  id: 'id',
  forestry_district_id: 'forestry_district_id',
  district_id: 'district_id',
  amount_rm: 'amount_rm',
  percentage: 'percentage',
  harvest_yield_id: 'harvest_yield_id'
});

exports.Prisma.Harvest_yield_kindScalarFieldEnum = makeEnum({
  id: 'id',
  harvest_yield_id: 'harvest_yield_id',
  kind: 'kind'
});

exports.Prisma.Harvest_yield_parcelScalarFieldEnum = makeEnum({
  id: 'id',
  parcel_id: 'parcel_id',
  cadastral_district: 'cadastral_district',
  parcel: 'parcel',
  plot: 'plot',
  amount_rm: 'amount_rm',
  percentage: 'percentage',
  harvest_yield_id: 'harvest_yield_id'
});

exports.Prisma.Harvest_yield_qualityScalarFieldEnum = makeEnum({
  id: 'id',
  harvest_yield_id: 'harvest_yield_id',
  quality: 'quality'
});

exports.Prisma.Harvest_yield_wood_typeScalarFieldEnum = makeEnum({
  id: 'id',
  harvest_yield_id: 'harvest_yield_id',
  wood_type: 'wood_type'
});

exports.Prisma.Intermediate_storageScalarFieldEnum = makeEnum({
  id: 'id',
  partner_id: 'partner_id',
  designation: 'designation',
  parcel: 'parcel',
  state: 'state',
  district: 'district',
  city: 'city',
  longitude: 'longitude',
  latitude: 'latitude'
});

exports.Prisma.InvoicingScalarFieldEnum = makeEnum({
  id: 'id',
  invoicing_number: 'invoicing_number',
  creation_date: 'creation_date',
  invoice_date: 'invoice_date',
  service_date: 'service_date',
  wood_recording_date: 'wood_recording_date',
  creator_partner_id: 'creator_partner_id',
  creator_contact_person_id: 'creator_contact_person_id',
  recipient_partner_id: 'recipient_partner_id',
  recipient_tax_number: 'recipient_tax_number',
  discount: 'discount',
  payment_target: 'payment_target',
  creator_partner_vat: 'creator_partner_vat',
  recipient_partner_vat: 'recipient_partner_vat',
  status: 'status',
  type: 'type',
  external_partner_number: 'external_partner_number',
  paid_date: 'paid_date',
  subject: 'subject',
  creator_tax_number: 'creator_tax_number',
  refer_to_recipient_contact_person: 'refer_to_recipient_contact_person',
  contract_id: 'contract_id',
  cancelation_date: 'cancelation_date',
  vat_rate: 'vat_rate',
  vat_note: 'vat_note',
  payment_due_days: 'payment_due_days'
});

exports.Prisma.Invoicing_advance_payment_associationScalarFieldEnum = makeEnum({
  invoicing_id: 'invoicing_id',
  advance_payment_id: 'advance_payment_id'
});

exports.Prisma.Invoicing_bank_accountScalarFieldEnum = makeEnum({
  id: 'id',
  invoicing_id: 'invoicing_id',
  party: 'party',
  bank_name: 'bank_name',
  iban: 'iban',
  bic: 'bic',
  remark: 'remark',
  certification: 'certification'
});

exports.Prisma.Invoicing_contact_dataScalarFieldEnum = makeEnum({
  id: 'id',
  party: 'party',
  invoicing_id: 'invoicing_id',
  country_code: 'country_code',
  postcode: 'postcode',
  city: 'city',
  address_line: 'address_line',
  email: 'email',
  landline_number: 'landline_number',
  fax_number: 'fax_number',
  homepage: 'homepage',
  management: 'management',
  management_local_court: 'management_local_court',
  management_registration_number: 'management_registration_number',
  company_name: 'company_name',
  contact_person_name: 'contact_person_name',
  partner_number: 'partner_number',
  name_addition: 'name_addition'
});

exports.Prisma.Invoicing_positionScalarFieldEnum = makeEnum({
  id: 'id',
  invoicing_id: 'invoicing_id',
  pile_id: 'pile_id',
  position_title: 'position_title',
  position_number: 'position_number',
  amount_rm: 'amount_rm',
  price_unit: 'price_unit',
  lump_sum_percentage: 'lump_sum_percentage',
  lump_sum_price_per_unit: 'lump_sum_price_per_unit',
  lump_sum_wood_quality: 'lump_sum_wood_quality',
  lump_sum_vat: 'lump_sum_vat',
  pile_measurement_type: 'pile_measurement_type',
  position_type: 'position_type',
  advance_payment_id: 'advance_payment_id'
});

exports.Prisma.Invoicing_position_entryScalarFieldEnum = makeEnum({
  id: 'id',
  invoicing_position_id: 'invoicing_position_id',
  wood_type: 'wood_type',
  wood_kind: 'wood_kind',
  wood_quality: 'wood_quality',
  price_unit: 'price_unit',
  wood_strength_class: 'wood_strength_class',
  amount_rm: 'amount_rm',
  billed_price_per_unit: 'billed_price_per_unit',
  original_amount_rm: 'original_amount_rm',
  vat: 'vat',
  projected_price_per_unit: 'projected_price_per_unit',
  amount_changed: 'amount_changed',
  task_type: 'task_type',
  amount_hour: 'amount_hour',
  strength_class_plus: 'strength_class_plus',
  pile_task_id: 'pile_task_id',
  addendum: 'addendum',
  month: 'month',
  reason: 'reason',
  price: 'price'
});

exports.Prisma.Invoicing_uploaded_documentScalarFieldEnum = makeEnum({
  id: 'id',
  invoice_id: 'invoice_id',
  name: 'name',
  path: 'path'
});

exports.Prisma.Location_designationScalarFieldEnum = makeEnum({
  id: 'id',
  location_id: 'location_id',
  location_name: 'location_name'
});

exports.Prisma.NotificationScalarFieldEnum = makeEnum({
  id: 'id',
  notification_type: 'notification_type',
  message: 'message',
  status: 'status',
  creation_time: 'creation_time',
  sender_partner_id: 'sender_partner_id',
  receiver_partner_id: 'receiver_partner_id',
  sender_contact_person_id: 'sender_contact_person_id',
  receiver_contact_person_id: 'receiver_contact_person_id',
  is_sender_delete_notification: 'is_sender_delete_notification',
  is_receiver_delete_notification: 'is_receiver_delete_notification'
});

exports.Prisma.PartnerScalarFieldEnum = makeEnum({
  id: 'id',
  company_name: 'company_name',
  partner_type: 'partner_type',
  activated: 'activated',
  vat: 'vat',
  tax_number: 'tax_number',
  partner_number: 'partner_number',
  legal_form: 'legal_form',
  latitude: 'latitude',
  longitude: 'longitude',
  timber_trading_partner_id: 'timber_trading_partner_id',
  pile_number_prefix: 'pile_number_prefix',
  customer_is_mandatory_for_freight_tables: 'customer_is_mandatory_for_freight_tables',
  share_access_rights_for_management: 'share_access_rights_for_management',
  share_access_rights_for_all: 'share_access_rights_for_all',
  editable_for_external_users: 'editable_for_external_users',
  certificate_is_mandatory_for_piles: 'certificate_is_mandatory_for_piles',
  force_pile_ownership_transfer: 'force_pile_ownership_transfer',
  accounting_contact_person_id: 'accounting_contact_person_id',
  vat_rate: 'vat_rate',
  delivery_note_number_is_mandatory_for_pile_removal: 'delivery_note_number_is_mandatory_for_pile_removal',
  licence_number: 'licence_number',
  licence_remark: 'licence_remark',
  licence_valid_from: 'licence_valid_from',
  licence_valid_until: 'licence_valid_until',
  licence_valid_eternally: 'licence_valid_eternally',
  unlicenced: 'unlicenced',
  created_by: 'created_by',
  created_at: 'created_at',
  updated_by: 'updated_by',
  updated_at: 'updated_at',
  auto_generate_project_number: 'auto_generate_project_number',
  hide_member_list: 'hide_member_list',
  service_mandatory_for_invoicing: 'service_mandatory_for_invoicing',
  partner_prefix: 'partner_prefix',
  auto_generate_partner_number: 'auto_generate_partner_number',
  vat_note: 'vat_note',
  contract_is_mandatory_for_pile: 'contract_is_mandatory_for_pile',
  customer_type: 'customer_type',
  name_addition: 'name_addition'
});

exports.Prisma.Partner_commentScalarFieldEnum = makeEnum({
  id: 'id',
  partner_id: 'partner_id',
  user_id: 'user_id',
  user_partner_id: 'user_partner_id',
  created_at: 'created_at',
  comment: 'comment'
});

exports.Prisma.Partner_mandate_personScalarFieldEnum = makeEnum({
  id: 'id',
  partner_id: 'partner_id',
  contact_person_id: 'contact_person_id'
});

exports.Prisma.Partner_numberScalarFieldEnum = makeEnum({
  id: 'id',
  partner_id: 'partner_id',
  number_owner_partner_id: 'number_owner_partner_id',
  number: 'number'
});

exports.Prisma.Partner_relationshipScalarFieldEnum = makeEnum({
  id: 'id',
  partner_id: 'partner_id',
  relationship_partner_id: 'relationship_partner_id',
  partner_relationship_type: 'partner_relationship_type',
  external_partner_number: 'external_partner_number'
});

exports.Prisma.Partner_supervisorScalarFieldEnum = makeEnum({
  id: 'id',
  partner_id: 'partner_id',
  supervisor_partner_id: 'supervisor_partner_id',
  supervisor_contact_person_id: 'supervisor_contact_person_id'
});

exports.Prisma.Partner_uploaded_documentScalarFieldEnum = makeEnum({
  id: 'id',
  partner_id: 'partner_id',
  name: 'name',
  path: 'path',
  document_type: 'document_type'
});

exports.Prisma.PileScalarFieldEnum = makeEnum({
  id: 'id',
  list_id: 'list_id',
  project_id: 'project_id',
  pile_number: 'pile_number',
  forest_owner_id: 'forest_owner_id',
  wood_buyer_id: 'wood_buyer_id',
  forest_id: 'forest_id',
  min_diameter_cm: 'min_diameter_cm',
  max_diameter_cm: 'max_diameter_cm',
  logistic_status: 'logistic_status',
  registration_date: 'registration_date',
  close_date: 'close_date',
  vibrate_factor: 'vibrate_factor',
  comment: 'comment',
  longitude: 'longitude',
  latitude: 'latitude',
  status: 'status',
  status_date: 'status_date',
  measurement_type: 'measurement_type',
  measurement_unit: 'measurement_unit',
  avg_diameter_cm: 'avg_diameter_cm',
  avg_length_m: 'avg_length_m',
  amount_rm: 'amount_rm',
  buying_unit: 'buying_unit',
  inventory_number: 'inventory_number',
  logistic_status_date: 'logistic_status_date',
  logistic_status_user_id: 'logistic_status_user_id',
  status_user_id: 'status_user_id',
  road_surface_condition: 'road_surface_condition',
  road_driving_possibility: 'road_driving_possibility',
  road_loading_possibility: 'road_loading_possibility',
  road_condition_comment: 'road_condition_comment',
  front_width_m: 'front_width_m',
  front_section_width_m: 'front_section_width_m',
  back_width_m: 'back_width_m',
  back_section_width_m: 'back_section_width_m',
  logistic_ready_status: 'logistic_ready_status',
  fsc_pool: 'fsc_pool',
  forest_owner_cost: 'forest_owner_cost',
  forest_owner_cost_with_discount: 'forest_owner_cost_with_discount',
  forest_owner_payment_date: 'forest_owner_payment_date',
  forest_owner_sale_type: 'forest_owner_sale_type',
  inventory_amount_rm: 'inventory_amount_rm',
  state: 'state',
  district: 'district',
  nearest_city: 'nearest_city',
  inventory_remaining_amount_rm: 'inventory_remaining_amount_rm',
  section_c_amount_rm: 'section_c_amount_rm',
  age_from: 'age_from',
  age_to: 'age_to',
  conversion_factor: 'conversion_factor',
  forest_owner_price_per_unit: 'forest_owner_price_per_unit',
  forest_owner_price_per_unit_with_discount: 'forest_owner_price_per_unit_with_discount',
  length_addition_m: 'length_addition_m',
  forest_owner_contact_id: 'forest_owner_contact_id',
  forest_entrance_longitude: 'forest_entrance_longitude',
  forest_entrance_latitude: 'forest_entrance_latitude',
  excessively_removed_amount_rm: 'excessively_removed_amount_rm',
  registration_user_id: 'registration_user_id',
  parcel: 'parcel',
  forest_department: 'forest_department',
  timber_trading_partner_id: 'timber_trading_partner_id',
  tech_support_partner_id: 'tech_support_partner_id',
  pile_damage: 'pile_damage',
  pile_damage_type: 'pile_damage_type',
  pile_damage_percentage: 'pile_damage_percentage',
  pile_damage_comment: 'pile_damage_comment',
  forest_owner_projected_cost: 'forest_owner_projected_cost',
  forest_owner_projected_price_per_unit: 'forest_owner_projected_price_per_unit',
  contract_id: 'contract_id',
  price_book_id: 'price_book_id',
  create_date: 'create_date',
  update_date: 'update_date',
  update_user_id: 'update_user_id',
  remaining_amount_rm: 'remaining_amount_rm',
  ownership_transferred: 'ownership_transferred',
  non_certified_wood: 'non_certified_wood',
  forest_owner_pile_status: 'forest_owner_pile_status',
  original_pile_id: 'original_pile_id',
  offered_pile_id: 'offered_pile_id',
  offer: 'offer',
  section_c_part_amount_rm: 'section_c_part_amount_rm',
  section_c_part_count: 'section_c_part_count',
  harvest_date: 'harvest_date',
  use_gross_amount: 'use_gross_amount',
  last_pile_removal_date: 'last_pile_removal_date',
  days_until_disposed: 'days_until_disposed',
  days_until_done: 'days_until_done',
  customer_id: 'customer_id',
  timber_trading_projected_revenues: 'timber_trading_projected_revenues',
  timber_trading_revenues: 'timber_trading_revenues',
  timber_trading_revenues_with_discount: 'timber_trading_revenues_with_discount',
  contract_measurement_type: 'contract_measurement_type',
  forest_measurement_type: 'forest_measurement_type',
  sales_amount_auto_rm: 'sales_amount_auto_rm',
  sales_amount_rm: 'sales_amount_rm',
  sales_amount_type: 'sales_amount_type'
});

exports.Prisma.Pile_certificateScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  certificate_id: 'certificate_id'
});

exports.Prisma.Pile_commentScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  user_id: 'user_id',
  created_date: 'created_date',
  comment: 'comment'
});

exports.Prisma.Pile_harvest_yieldScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  parcel_id: 'parcel_id',
  cadastral_district: 'cadastral_district',
  parcel: 'parcel',
  plot: 'plot',
  percentage: 'percentage',
  forestry_district_id: 'forestry_district_id',
  department_name: 'department_name',
  subdepartment_name: 'subdepartment_name',
  subarea_name: 'subarea_name'
});

exports.Prisma.Pile_harvest_yield_departmentScalarFieldEnum = makeEnum({
  id: 'id',
  amount_rm: 'amount_rm',
  percentage: 'percentage',
  harvest_yield_department_id: 'harvest_yield_department_id',
  pile_id: 'pile_id'
});

exports.Prisma.Pile_harvest_yield_parcelScalarFieldEnum = makeEnum({
  id: 'id',
  amount_rm: 'amount_rm',
  percentage: 'percentage',
  harvest_yield_parcel_id: 'harvest_yield_parcel_id',
  pile_id: 'pile_id'
});

exports.Prisma.Pile_intended_customerScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  customer_id: 'customer_id'
});

exports.Prisma.Pile_listScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  forest_owner_id: 'forest_owner_id',
  wood_buyer_id: 'wood_buyer_id',
  creation_date: 'creation_date',
  status: 'status',
  project_id: 'project_id',
  comment: 'comment'
});

exports.Prisma.Pile_logistic_status_historyScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  date_from: 'date_from',
  date_until: 'date_until',
  logistic_status_user_id: 'logistic_status_user_id',
  logistic_status: 'logistic_status'
});

exports.Prisma.Pile_number_configScalarFieldEnum = makeEnum({
  id: 'id',
  partner_id: 'partner_id',
  enabled: 'enabled',
  prefix: 'prefix',
  year_format: 'year_format',
  separator1: 'separator1',
  separator2: 'separator2',
  digits: 'digits',
  max_number: 'max_number'
});

exports.Prisma.Pile_numbersScalarFieldEnum = makeEnum({
  id: 'id',
  forest_owner_id: 'forest_owner_id',
  wood_buyer_id: 'wood_buyer_id',
  max_number: 'max_number'
});

exports.Prisma.Pile_offerScalarFieldEnum = makeEnum({
  id: 'id',
  seller_partner_id: 'seller_partner_id',
  seller_contact_person_id: 'seller_contact_person_id',
  seller_deleted: 'seller_deleted',
  buyer_partner_id: 'buyer_partner_id',
  buyer_contact_person_id: 'buyer_contact_person_id',
  buyer_deleted: 'buyer_deleted',
  pile_id: 'pile_id',
  original_pile_id: 'original_pile_id',
  creation_date: 'creation_date',
  offer_status: 'offer_status',
  nearest_city: 'nearest_city',
  longitude: 'longitude',
  latitude: 'latitude',
  wood_type: 'wood_type',
  wood_kind: 'wood_kind',
  wood_quality: 'wood_quality',
  amount_rm: 'amount_rm',
  offer_type: 'offer_type',
  create_removal: 'create_removal'
});

exports.Prisma.Pile_removalScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  amount_rm: 'amount_rm',
  wood_type: 'wood_type',
  pile_id: 'pile_id',
  transport_order_id: 'transport_order_id',
  customer_id: 'customer_id',
  buying_unit: 'buying_unit',
  delivery_bill_number: 'delivery_bill_number',
  creation_user_id: 'creation_user_id',
  creation_date: 'creation_date',
  creation_partner_id: 'creation_partner_id',
  factory_delivery_number: 'factory_delivery_number',
  pile_removal_origin: 'pile_removal_origin',
  disposed_amount_rm: 'disposed_amount_rm',
  sale_entry_id: 'sale_entry_id'
});

exports.Prisma.Pile_sectionScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  s_type: 's_type',
  s_index: 's_index',
  height_m: 'height_m'
});

exports.Prisma.Pile_sharingScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  partner_id: 'partner_id'
});

exports.Prisma.Pile_speciesScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  wood_type: 'wood_type',
  amount_rm: 'amount_rm',
  amount_percentage: 'amount_percentage',
  remaining_amount_rm: 'remaining_amount_rm',
  number_of_pieces: 'number_of_pieces'
});

exports.Prisma.Pile_species_actual_entryScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  wood_type: 'wood_type',
  wood_quality: 'wood_quality',
  wood_kind: 'wood_kind',
  amount_percentage: 'amount_percentage',
  species_entry_id: 'species_entry_id'
});

exports.Prisma.Pile_species_entryScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  wood_type: 'wood_type',
  wood_kind: 'wood_kind',
  wood_quality: 'wood_quality',
  amount_rm: 'amount_rm',
  amount_percentage: 'amount_percentage',
  number_of_pieces: 'number_of_pieces',
  price_book_id: 'price_book_id',
  product_type_fsc: 'product_type_fsc',
  wood_strength_class: 'wood_strength_class'
});

exports.Prisma.Pile_taskScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  task_type: 'task_type',
  partner_id: 'partner_id',
  technique: 'technique',
  payment_date: 'payment_date',
  cost_net: 'cost_net',
  cost_with_discount: 'cost_with_discount',
  certificate_id: 'certificate_id',
  price_per_unit: 'price_per_unit',
  price_per_unit_with_discount: 'price_per_unit_with_discount',
  projected_cost: 'projected_cost',
  projected_price_per_unit: 'projected_price_per_unit',
  price_book_id: 'price_book_id',
  contract_id: 'contract_id'
});

exports.Prisma.Pile_uploaded_documentScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  name: 'name',
  path: 'path',
  category: 'category'
});

exports.Prisma.PoiScalarFieldEnum = makeEnum({
  id: 'id',
  creator_user_id: 'creator_user_id',
  creator_partner_id: 'creator_partner_id',
  name: 'name',
  longitude: 'longitude',
  latitude: 'latitude',
  type_id: 'type_id',
  description: 'description',
  access_level: 'access_level',
  created_at: 'created_at'
});

exports.Prisma.Poi_commentScalarFieldEnum = makeEnum({
  id: 'id',
  poi_id: 'poi_id',
  created_at: 'created_at',
  comment: 'comment',
  creator_id: 'creator_id'
});

exports.Prisma.Poi_geometryScalarFieldEnum = makeEnum({
  id: 'id',
  poi_id: 'poi_id',
  geometry_type: 'geometry_type',
  geometry: 'geometry'
});

exports.Prisma.Poi_typeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  symbol: 'symbol',
  color: 'color'
});

exports.Prisma.Poi_uploaded_documentScalarFieldEnum = makeEnum({
  id: 'id',
  poi_id: 'poi_id',
  name: 'name',
  path: 'path'
});

exports.Prisma.Price_bookScalarFieldEnum = makeEnum({
  id: 'id',
  length_m: 'length_m',
  diameter_cm: 'diameter_cm',
  kind: 'kind',
  tree_species: 'tree_species',
  quality: 'quality',
  price: 'price',
  contract_id: 'contract_id',
  strength_class: 'strength_class',
  buying_unit: 'buying_unit',
  order_number: 'order_number',
  read_only: 'read_only',
  length_addition_m: 'length_addition_m',
  minimum_diameter: 'minimum_diameter',
  maximum_diameter: 'maximum_diameter',
  minimum_tree_top: 'minimum_tree_top',
  maximum_tree_top: 'maximum_tree_top',
  trunk_base: 'trunk_base',
  strength_class_plus: 'strength_class_plus',
  contract_measurement_type: 'contract_measurement_type'
});

exports.Prisma.ProjectScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  project_number: 'project_number',
  project_status: 'project_status',
  wood_buyer_id: 'wood_buyer_id',
  start_date: 'start_date',
  forest_owner_id: 'forest_owner_id',
  timber_trade_partner_id: 'timber_trade_partner_id',
  close_date: 'close_date'
});

exports.Prisma.SaleScalarFieldEnum = makeEnum({
  id: 'id',
  system_number: 'system_number',
  user_defined_number: 'user_defined_number',
  business_year: 'business_year',
  sale_entry_number: 'sale_entry_number',
  lot_code_purchase_document_mac: 'lot_code_purchase_document_mac',
  customer_id: 'customer_id',
  seller_id: 'seller_id',
  delivery_date: 'delivery_date',
  reference_number: 'reference_number',
  creator_partner_id: 'creator_partner_id',
  created_by: 'created_by',
  created_at: 'created_at',
  updated_by: 'updated_by',
  updater_partner_id: 'updater_partner_id',
  updated_at: 'updated_at',
  system_number_counter: 'system_number_counter',
  sale_status: 'sale_status',
  measurement_type: 'measurement_type'
});

exports.Prisma.Sale_entryScalarFieldEnum = makeEnum({
  id: 'id',
  sale_id: 'sale_id',
  pile_id: 'pile_id',
  wood_type: 'wood_type',
  amount_rm: 'amount_rm',
  buying_unit: 'buying_unit',
  system_number: 'system_number',
  user_defined_number: 'user_defined_number',
  wood_kind: 'wood_kind',
  wood_quality: 'wood_quality',
  pile_length_m: 'pile_length_m',
  nb_pieces: 'nb_pieces',
  price_per_unit: 'price_per_unit',
  total_price: 'total_price',
  reference_field: 'reference_field',
  reference_number: 'reference_number',
  pile_removal_id: 'pile_removal_id'
});

exports.Prisma.Sale_reference_numberScalarFieldEnum = makeEnum({
  id: 'id',
  sale_id: 'sale_id',
  reference_field: 'reference_field',
  reference_number: 'reference_number'
});

exports.Prisma.Sale_wood_entryScalarFieldEnum = makeEnum({
  id: 'id',
  sale_entry_id: 'sale_entry_id',
  wood_id: 'wood_id'
});

exports.Prisma.Scheduled_notificationScalarFieldEnum = makeEnum({
  id: 'id',
  notification_type: 'notification_type',
  last_checked_date: 'last_checked_date'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Transport_orderScalarFieldEnum = makeEnum({
  id: 'id',
  customer_id: 'customer_id',
  logistics_company_id: 'logistics_company_id',
  transport_order_number: 'transport_order_number',
  date_of_order_created: 'date_of_order_created',
  date_of_wood_availability: 'date_of_wood_availability',
  date_of_pickup_deadline: 'date_of_pickup_deadline',
  delivery_note_number_customer: 'delivery_note_number_customer',
  delivery_note_number_biocen: 'delivery_note_number_biocen',
  delivery_notes_unknown: 'delivery_notes_unknown',
  delivery_note_file: 'delivery_note_file',
  delivery_date: 'delivery_date',
  logistic_amount_rm: 'logistic_amount_rm',
  status: 'status',
  cost: 'cost',
  route_km: 'route_km',
  freight_zone_id: 'freight_zone_id',
  removals_created: 'removals_created',
  logistic_amount_unit: 'logistic_amount_unit',
  creator_partner_id: 'creator_partner_id',
  created_by: 'created_by',
  created_at: 'created_at',
  updated_by: 'updated_by',
  updated_at: 'updated_at',
  storage_id: 'storage_id',
  storage_destination: 'storage_destination'
});

exports.Prisma.Transport_order_commentScalarFieldEnum = makeEnum({
  id: 'id',
  transport_order_id: 'transport_order_id',
  date: 'date',
  user_id: 'user_id',
  comment: 'comment'
});

exports.Prisma.Transport_order_contact_dataScalarFieldEnum = makeEnum({
  id: 'id',
  transport_order_id: 'transport_order_id',
  company_name: 'company_name',
  partner_number: 'partner_number',
  country_code: 'country_code',
  postcode: 'postcode',
  city: 'city',
  address_line: 'address_line',
  email: 'email',
  landline_number: 'landline_number',
  fax_number: 'fax_number',
  homepage: 'homepage',
  management: 'management',
  management_local_court: 'management_local_court',
  management_registration_number: 'management_registration_number',
  vat_rate: 'vat_rate',
  vat_note: 'vat_note',
  longitude: 'longitude',
  latitude: 'latitude',
  licence_number: 'licence_number',
  licence_remark: 'licence_remark',
  licence_valid_from: 'licence_valid_from',
  licence_valid_until: 'licence_valid_until',
  licence_valid_eternally: 'licence_valid_eternally',
  state: 'state',
  district: 'district',
  parcel: 'parcel',
  party: 'party',
  name_addition: 'name_addition'
});

exports.Prisma.Transport_order_entryScalarFieldEnum = makeEnum({
  id: 'id',
  wood_type: 'wood_type',
  amount_rm: 'amount_rm',
  distance_to_customer_km: 'distance_to_customer_km',
  transport_order_id: 'transport_order_id',
  pile_id: 'pile_id',
  freight_zone_entry_index: 'freight_zone_entry_index',
  buying_unit: 'buying_unit',
  additional_amount: 'additional_amount',
  dispose_amount_rm: 'dispose_amount_rm',
  quality: 'quality',
  kind: 'kind',
  cost: 'cost',
  delivery_bill_number: 'delivery_bill_number',
  wood_types: 'wood_types'
});

exports.Prisma.Transport_order_numberScalarFieldEnum = makeEnum({
  id: 'id',
  year: 'year',
  month: 'month',
  next_number: 'next_number'
});

exports.Prisma.Transport_order_uploaded_documentScalarFieldEnum = makeEnum({
  id: 'id',
  transport_order_id: 'transport_order_id',
  name: 'name',
  path: 'path'
});

exports.Prisma.Transport_wood_entryScalarFieldEnum = makeEnum({
  id: 'id',
  transport_order_entry_id: 'transport_order_entry_id',
  wood_id: 'wood_id'
});

exports.Prisma.WoodScalarFieldEnum = makeEnum({
  id: 'id',
  pile_id: 'pile_id',
  wood_type: 'wood_type',
  quality: 'quality',
  kind: 'kind',
  length_m: 'length_m',
  amount_rm: 'amount_rm',
  diameter_cm: 'diameter_cm',
  buying_unit: 'buying_unit',
  pile_removal_id: 'pile_removal_id',
  wood_number: 'wood_number',
  fsc_pool: 'fsc_pool',
  bracket: 'bracket',
  manual_wood_number: 'manual_wood_number',
  length_addition_m: 'length_addition_m',
  remove_bark: 'remove_bark',
  diameter_without_bark: 'diameter_without_bark',
  price_book_id: 'price_book_id'
});


exports.Prisma.ModelName = makeEnum({
  access_rights: 'access_rights',
  access_rights_invitation: 'access_rights_invitation',
  advance_payment: 'advance_payment',
  bank_account: 'bank_account',
  certificate: 'certificate',
  contact_data: 'contact_data',
  contact_person: 'contact_person',
  contract: 'contract',
  contract_comment: 'contract_comment',
  contract_details_timber_trade: 'contract_details_timber_trade',
  contract_details_timber_trade_certificate: 'contract_details_timber_trade_certificate',
  contract_details_timber_trade_fsp_contract: 'contract_details_timber_trade_fsp_contract',
  contract_uploaded_document: 'contract_uploaded_document',
  country: 'country',
  flyway_schema_history: 'flyway_schema_history',
  forest_area: 'forest_area',
  forest_area_import_history: 'forest_area_import_history',
  forest_area_import_history_error: 'forest_area_import_history_error',
  forest_area_parcel: 'forest_area_parcel',
  forest_area_parcel_share: 'forest_area_parcel_share',
  forest_area_sharing: 'forest_area_sharing',
  forest_department: 'forest_department',
  forest_lead: 'forest_lead',
  forest_lead_location: 'forest_lead_location',
  forest_lead_tree_type: 'forest_lead_tree_type',
  forest_stand: 'forest_stand',
  forest_stand_species: 'forest_stand_species',
  forest_subarea: 'forest_subarea',
  forest_subdepartment: 'forest_subdepartment',
  forestry_climatic_data: 'forestry_climatic_data',
  forestry_district_data: 'forestry_district_data',
  forestry_district_parcel: 'forestry_district_parcel',
  forestry_price_book: 'forestry_price_book',
  freight_zone: 'freight_zone',
  freight_zone_entry: 'freight_zone_entry',
  freight_zone_intended_customer: 'freight_zone_intended_customer',
  harvest_yield: 'harvest_yield',
  harvest_yield_department: 'harvest_yield_department',
  harvest_yield_kind: 'harvest_yield_kind',
  harvest_yield_parcel: 'harvest_yield_parcel',
  harvest_yield_quality: 'harvest_yield_quality',
  harvest_yield_wood_type: 'harvest_yield_wood_type',
  intermediate_storage: 'intermediate_storage',
  invoicing: 'invoicing',
  invoicing_advance_payment_association: 'invoicing_advance_payment_association',
  invoicing_bank_account: 'invoicing_bank_account',
  invoicing_contact_data: 'invoicing_contact_data',
  invoicing_position: 'invoicing_position',
  invoicing_position_entry: 'invoicing_position_entry',
  invoicing_uploaded_document: 'invoicing_uploaded_document',
  location_designation: 'location_designation',
  notification: 'notification',
  partner: 'partner',
  partner_comment: 'partner_comment',
  partner_mandate_person: 'partner_mandate_person',
  partner_number: 'partner_number',
  partner_relationship: 'partner_relationship',
  partner_supervisor: 'partner_supervisor',
  partner_uploaded_document: 'partner_uploaded_document',
  pile: 'pile',
  pile_certificate: 'pile_certificate',
  pile_comment: 'pile_comment',
  pile_harvest_yield: 'pile_harvest_yield',
  pile_harvest_yield_department: 'pile_harvest_yield_department',
  pile_harvest_yield_parcel: 'pile_harvest_yield_parcel',
  pile_intended_customer: 'pile_intended_customer',
  pile_list: 'pile_list',
  pile_logistic_status_history: 'pile_logistic_status_history',
  pile_number_config: 'pile_number_config',
  pile_numbers: 'pile_numbers',
  pile_offer: 'pile_offer',
  pile_removal: 'pile_removal',
  pile_section: 'pile_section',
  pile_sharing: 'pile_sharing',
  pile_species: 'pile_species',
  pile_species_actual_entry: 'pile_species_actual_entry',
  pile_species_entry: 'pile_species_entry',
  pile_task: 'pile_task',
  pile_uploaded_document: 'pile_uploaded_document',
  poi: 'poi',
  poi_comment: 'poi_comment',
  poi_geometry: 'poi_geometry',
  poi_type: 'poi_type',
  poi_uploaded_document: 'poi_uploaded_document',
  price_book: 'price_book',
  project: 'project',
  sale: 'sale',
  sale_entry: 'sale_entry',
  sale_reference_number: 'sale_reference_number',
  sale_wood_entry: 'sale_wood_entry',
  scheduled_notification: 'scheduled_notification',
  transport_order: 'transport_order',
  transport_order_comment: 'transport_order_comment',
  transport_order_contact_data: 'transport_order_contact_data',
  transport_order_entry: 'transport_order_entry',
  transport_order_number: 'transport_order_number',
  transport_order_uploaded_document: 'transport_order_uploaded_document',
  transport_wood_entry: 'transport_wood_entry',
  wood: 'wood'
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
