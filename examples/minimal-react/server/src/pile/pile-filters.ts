import { OrderByDirection, SqlParams } from '../utils/sql';
import { LogisticStatus, LogisticStatusEnum } from './models';
import {
  INVOICING_POSITION_ID,
  INVOICING_POSITION_INVOICING_ID,
  PILE_AMOUNT_RM,
  PILE_AVG_DIAMETER_CM,
  PILE_AVG_LENGTH_M,
  PILE_CERTIFICATE_CERTIFICATE_ID,
  PILE_CLOSE_DATE,
  PILE_COMMENT,
  PILE_COMMENT_COMMENT,
  PILE_COMMENT_CREATED_DATE,
  PILE_COMMENT_USER_ID,
  PILE_CONTRACT_ID,
  PILE_CONTRACT_MEASUREMENT_TYPE,
  PILE_DAMAGE,
  PILE_DAMAGE_PERCENTAGE,
  PILE_DAMAGE_TYPE,
  PILE_DISTRICT,
  PILE_FOREST_DEPARTMENT,
  PILE_FOREST_MEASUREMENT_TYPE,
  PILE_FOREST_OWNER_ID,
  PILE_FOREST_OWNER_PILE_STATUS,
  PILE_FOREST_OWNER_SALE_TYPE,
  PILE_FSC_POOL,
  PILE_INTENDED_CUSTOMER_CUSTOMER_ID,
  PILE_INTENDED_CUSTOMER_ID,
  PILE_INVENTORY_NUMBER,
  PILE_LIST_ID,
  PILE_LOGISTIC_READY_STATUS,
  PILE_LOGISTIC_STATUS,
  PILE_LOGISTIC_STATUS_DATE,
  PILE_LOGISTIC_STATUS_USER_ID,
  PILE_MEASUREMENT_TYPE,
  PILE_NEAREST_CITY,
  PILE_NON_CERTIFIED_WOOD,
  PILE_NUMBER,
  PILE_OVER_UNDER_SIZE,
  PILE_PARCEL,
  PILE_PROJECT_ID,
  PILE_REGISTRATION_DATE,
  PILE_REGISTRATION_USER_ID,
  PILE_REMAINING_AMOUNT_RM,
  PILE_SALES_AMOUNT_RM,
  PILE_SERVICE_COST,
  PILE_SPECIES_ACTUAL_ENTRY_WOOD_KIND,
  PILE_SPECIES_ACTUAL_ENTRY_WOOD_QUALITY,
  PILE_SPECIES_ENTRY_WOOD_KIND,
  PILE_SPECIES_ENTRY_WOOD_QUALITY,
  PILE_SPECIES_ENTRY_WOOD_TYPE,
  PILE_STATE,
  PILE_STATUS,
  PILE_STATUS_DATE,
  PILE_STATUS_USER_ID,
  PILE_TASK_CERTIFICATE_ID,
  PILE_TASK_CONTRACT_ID,
  PILE_TASK_PARTNER_ID,
  PILE_TASK_TASK_TYPE,
  PILE_TASK_TECHNIQUE,
  PILE_TIMBER_TRADING_PARTNER_ID,
  PILE_WOOD_BUYER_ID,
  PILE_WOOD_BUYING_UNIT,
  PROJECT_STATUS,
  SALE_CUSTOMER_ID,
  TRANSPORT_ORDER_CUSTOMER_ID,
  TRANSPORT_ORDER_ID,
  TRANSPORT_ORDER_LOGISTICS_COMPANY_ID,
  TRANSPORT_ORDER_STORAGE_ID,
  WOOD_DIAMETER_CM,
  WOOD_LENGTH_M,
  WOOD_WOOD_KIND,
  WOOD_WOOD_QUALITY,
  WOOD_WOOD_TYPE,
} from './pile-columns';
import {
  INNER_JOIN_PILE_CERTIFICATE,
  INNER_JOIN_PILE_COMMENT,
  INNER_JOIN_PROJECT,
  INNER_JOIN_SALE,
  INNER_JOIN_TRANSPORT_ORDER,
  LEFT_JOIN_INVOICING_POSITION,
  LEFT_JOIN_PILE_INTENDED_CUSTOMER,
  LEFT_JOIN_PILE_SPECIES_ACTUAL_ENTRY,
  LEFT_JOIN_PILE_SPECIES_ENTRY,
  LEFT_JOIN_PILE_TASK,
  LEFT_JOIN_WOOD,
} from './pile-joins';
import { PileQueryParams } from './pile-query-params';
import {
  SELECT_PILE_ID,
  SELECT_PILE_OVER_UNDER_SIZE,
  SELECT_PILE_SERVICE_COST,
} from './pile-selects';

export function getAllPileFilter(params: PileQueryParams): SqlParams {
  const selects = new Set<string>();
  selects.add(SELECT_PILE_ID);
  const from = 'pile p';
  const join = new Set<string>();
  const where: string[] = [];
  const groupBy = 'p.id';
  const having: string[] = [];
  let limit = '';

  // filter by project id
  if (notEmpty(params?.projectIdList)) {
    where.push(
      `${PILE_PROJECT_ID} IN (${params?.projectIdList
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by pile list id
  if (notEmpty(params?.pileListIdList)) {
    where.push(
      `${PILE_LIST_ID} IN (${params?.pileListIdList
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by wood buyer id
  if (notEmpty(params?.woodBuyerIdList)) {
    where.push(
      `${PILE_WOOD_BUYER_ID} IN (${params?.woodBuyerIdList
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by forest owner id
  if (notEmpty(params?.forestOwnerIdList)) {
    where.push(
      `${PILE_FOREST_OWNER_ID} IN (${params?.forestOwnerIdList
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by logistic status
  if (notEmpty(params?.logisticStatusList)) {
    where.push(`${PILE_LOGISTIC_STATUS} IN (${params?.logisticStatusList})`);
  }

  // filter by logistic ready status
  if (notEmpty(params?.logisticReadyStatusList)) {
    where.push(
      `${PILE_LOGISTIC_READY_STATUS} IN (${params?.logisticReadyStatusList
        ?.map((status) => `'${status}'`)
        .join(',')})`,
    );
  }

  // filter by excluded logistic status
  if (notEmpty(params?.excludedLogisticStatusList)) {
    where.push(
      `${PILE_LOGISTIC_STATUS} NOT IN (${params?.excludedLogisticStatusList})`,
    );
  }

  // filter by pile status
  if (notEmpty(params?.pileStatusList)) {
    where.push(`${PILE_STATUS} IN (${params?.pileStatusList})`);
  }

  // filter by pile sale type
  if (notEmpty(params?.pileSaleTypeList)) {
    where.push(
      `${PILE_FOREST_OWNER_SALE_TYPE} IN (${params?.pileSaleTypeList
        ?.map((type) => `'${type}'`)
        .join(',')})`,
    );
  }

  // filter by project status
  if (params?.projectStatusList) {
    join.add(INNER_JOIN_PROJECT);
    where.push(`${PROJECT_STATUS} IN (${params.projectStatusList})`);
  }

  // filter by pile damage type
  if (notEmpty(params?.pileDamageTypeList)) {
    where.push(
      `${PILE_DAMAGE_TYPE} IN (${params?.pileDamageTypeList
        ?.map((type) => `'${type}'`)
        .join(',')})`,
    );
  }

  // filter by wood type
  if (notEmpty(params?.woodTypeIdList)) {
    join.add(LEFT_JOIN_WOOD);
    join.add(LEFT_JOIN_PILE_SPECIES_ENTRY);
    where.push(
      `${WOOD_WOOD_TYPE} IN (${params?.woodTypeIdList}) OR ${PILE_SPECIES_ENTRY_WOOD_TYPE} IN (${params?.woodTypeIdList})`,
    );
  }

  // filter by wood kind
  if (notEmpty(params?.woodKindList)) {
    join.add(LEFT_JOIN_WOOD);
    join.add(LEFT_JOIN_PILE_SPECIES_ENTRY);
    const woodKinds = params?.woodKindList
      ?.map((kind) => `'${kind}'`)
      .join(',');
    where.push(
      `${WOOD_WOOD_KIND} IN (${woodKinds}) OR ${PILE_SPECIES_ENTRY_WOOD_KIND} IN (${woodKinds})`,
    );
  }

  // filter by wood quality
  if (notEmpty(params?.woodQualityList)) {
    join.add(LEFT_JOIN_WOOD);
    join.add(LEFT_JOIN_PILE_SPECIES_ENTRY);
    where.push(
      `${WOOD_WOOD_QUALITY} IN (${params?.woodQualityList}) OR ${PILE_SPECIES_ENTRY_WOOD_QUALITY} IN (${params?.woodQualityList})`,
    );
  }

  // filter by wood diameter cm
  if (params?.diameterCmFrom || params?.diameterCmTo) {
    join.add(LEFT_JOIN_WOOD);
    if (params?.diameterCmFrom && params?.diameterCmTo) {
      where.push(
        `(${WOOD_DIAMETER_CM} >= ${params.diameterCmFrom} AND ${WOOD_DIAMETER_CM} <= ${params.diameterCmTo}) OR (${PILE_AVG_DIAMETER_CM} >= ${params.diameterCmFrom} AND ${PILE_AVG_DIAMETER_CM} <= ${params.diameterCmTo})`,
      );
    } else if (params?.diameterCmFrom) {
      where.push(
        `${WOOD_DIAMETER_CM} >= ${params.diameterCmFrom} OR ${PILE_AVG_DIAMETER_CM} >= ${params.diameterCmFrom}`,
      );
    } else if (params?.diameterCmTo) {
      where.push(
        `${WOOD_DIAMETER_CM} <= ${params.diameterCmTo} OR ${PILE_AVG_DIAMETER_CM} <= ${params.diameterCmTo}`,
      );
    }
  }

  // filter by amount rm from
  if (params?.amountRmFrom) {
    where.push(`${PILE_AMOUNT_RM} >= ${params.amountRmFrom}`);
  }

  // filter by amount rm to
  if (params?.amountRmTo) {
    where.push(`${PILE_AMOUNT_RM} <= ${params.amountRmTo}`);
  }

  // filter by sales amount rm from
  if (params?.salesAmountRmFrom) {
    where.push(`${PILE_SALES_AMOUNT_RM} >= ${params.salesAmountRmFrom}`);
  }

  // filter by sales amount rm to
  if (params?.salesAmountRmTo) {
    where.push(`${PILE_SALES_AMOUNT_RM} <= ${params.salesAmountRmTo}`);
  }

  // filter by length m
  if (params?.lengthMFrom || params?.lengthMTo) {
    join.add(LEFT_JOIN_WOOD);
    if (params?.lengthMFrom && params?.lengthMTo) {
      where.push(
        `(${WOOD_LENGTH_M} >= ${params.lengthMFrom} AND ${WOOD_LENGTH_M} <= ${params.lengthMTo}) OR (${PILE_AVG_LENGTH_M} >= ${params.lengthMFrom} AND ${PILE_AVG_LENGTH_M} <= ${params.lengthMTo})`,
      );
    } else if (params?.lengthMFrom) {
      where.push(
        `${WOOD_LENGTH_M} >= ${params.lengthMFrom} OR ${PILE_AVG_LENGTH_M} >= ${params.lengthMFrom}`,
      );
    } else if (params?.lengthMTo) {
      where.push(
        `${WOOD_LENGTH_M} <= ${params.lengthMTo} OR ${PILE_AVG_LENGTH_M} <= ${params.lengthMTo}`,
      );
    }
  }

  // filter by actual wood kind
  if (params?.actualWoodKind) {
    join.add(LEFT_JOIN_PILE_SPECIES_ACTUAL_ENTRY);
    where.push(
      `${PILE_SPECIES_ACTUAL_ENTRY_WOOD_KIND} = '${params.actualWoodKind}'`,
    );
  }

  // filter by actual wood quality
  if (params?.actualWoodQuality) {
    join.add(LEFT_JOIN_PILE_SPECIES_ACTUAL_ENTRY);
    where.push(
      `${PILE_SPECIES_ACTUAL_ENTRY_WOOD_QUALITY} = '${params.actualWoodQuality}'`,
    );
  }

  // filter by registration date from
  if (params?.registrationDateFrom) {
    where.push(
      `${PILE_REGISTRATION_DATE} >= '${new Date(
        params.registrationDateFrom,
      ).toISOString()}'`,
    );
  }

  // filter by registration date to
  if (params?.registrationDateTo) {
    where.push(
      `${PILE_REGISTRATION_DATE} <= '${new Date(
        params.registrationDateTo,
      ).toISOString()}'`,
    );
  }

  // filter by registration user ids
  if (notEmpty(params?.registrationUserIds)) {
    where.push(
      `${PILE_REGISTRATION_USER_ID} IN (${params?.registrationUserIds
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by closing date
  if (params?.closingDateNull) {
    where.push(`${PILE_CLOSE_DATE} IS NULL`);
  } else {
    if (params?.closingDateFrom) {
      where.push(
        `${PILE_CLOSE_DATE} >= '${new Date(
          params.closingDateFrom,
        ).toISOString()}'`,
      );
    }
    if (params?.closingDateTo) {
      where.push(
        `${PILE_CLOSE_DATE} <= '${new Date(
          params.closingDateTo,
        ).toISOString()}'`,
      );
    }
  }

  // filter by status date from
  if (params?.statusDateFrom) {
    where.push(
      `${PILE_STATUS_DATE} >= '${new Date(
        params.statusDateFrom,
      ).toISOString()}'`,
    );
  }

  // filter by status date to
  if (params?.statusDateTo) {
    where.push(
      `${PILE_STATUS_DATE} <= '${new Date(params.statusDateTo).toISOString()}'`,
    );
  }

  // filter by state
  if (notEmpty(params?.stateList)) {
    where.push(
      `${PILE_STATE} IN (${params?.stateList
        ?.map((state) => `'${state}'`)
        .join(',')})`,
    );
  }

  // filter by district
  if (notEmpty(params?.districtList)) {
    where.push(
      `${PILE_DISTRICT} IN (${params?.districtList
        ?.map((district) => `'${district}'`)
        .join(',')})`,
    );
  }

  // filter by nearest city
  if (params?.nearestCity) {
    const cities = params.nearestCity.split(',');
    where.push(
      `${cities
        .map((city) => `${PILE_NEAREST_CITY} LIKE '%${city.trim()}%'`)
        .join(' OR ')}`,
    );
  }

  // filter by search text
  if (params?.searchText) {
    const texts = params.searchText.split(',');
    if (params.matchPileNumber) {
      const textsJoin = texts.map((text) => `'${text.trim()}'`).join(',');
      where.push(
        `${PILE_NUMBER} IN (${textsJoin}) OR ${PILE_INVENTORY_NUMBER} IN (${textsJoin})`,
      );
    } else {
      where.push(
        `${texts
          .map(
            (text) =>
              `${PILE_INVENTORY_NUMBER} LIKE '%${text.trim()}%' OR ${PILE_NUMBER} LIKE '%${text.trim()}%' OR ${PILE_COMMENT} LIKE '%${text.trim()}%'`,
          )
          .join(' OR ')}`,
      );
    }
  }

  // filter by intended customer ids
  if (notEmpty(params?.intendedCustomerIdList)) {
    join.add(LEFT_JOIN_PILE_INTENDED_CUSTOMER);
    where.push(
      `${PILE_INTENDED_CUSTOMER_CUSTOMER_ID} IN (${params?.intendedCustomerIdList
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by fsc pool
  if (params?.fscPool) {
    where.push(`${PILE_FSC_POOL} = ${params.fscPool}`);
  }

  // filter by status user id
  if (params?.inventoryPerson) {
    where.push(`${PILE_STATUS_USER_ID} = '${params.inventoryPerson}'`);
  }

  // filter by actual customer id
  if (notEmpty(params?.actualCustomerIdList)) {
    join.add(INNER_JOIN_SALE);
    where.push(
      `${SALE_CUSTOMER_ID} IN (${params?.actualCustomerIdList
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by transport order id list
  if (notEmpty(params?.transportOrderIdList)) {
    join.add(INNER_JOIN_TRANSPORT_ORDER);
    where.push(
      `${TRANSPORT_ORDER_ID} IN (${params?.transportOrderIdList
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by pile damage percentage from
  if (params?.pileDamagePercentageFrom) {
    where.push(
      `${PILE_DAMAGE_PERCENTAGE} >= ${params.pileDamagePercentageFrom}`,
    );
  }

  // filter by pile damage percentage to
  if (params?.pileDamagePercentageTo) {
    where.push(`${PILE_DAMAGE_PERCENTAGE} <= ${params.pileDamagePercentageTo}`);
  }

  // filter by wood buying unit
  if (params?.woodBuyingUnit) {
    where.push(`${PILE_WOOD_BUYING_UNIT} = ${params?.woodBuyingUnit}`);
  }

  // filter by remaining amount rm
  if (params?.remainingAmountRmIsNull) {
    where.push(`${PILE_REMAINING_AMOUNT_RM} IS NULL`);
  } else {
    if (params?.remainingAmountRmFrom) {
      where.push(
        `${PILE_REMAINING_AMOUNT_RM} >= ${params.remainingAmountRmFrom}`,
      );
    }
    if (params?.remainingAmountRmTo) {
      where.push(
        `${PILE_REMAINING_AMOUNT_RM} <= ${params.remainingAmountRmTo}`,
      );
    }
  }

  // filter by over under size from
  if (params?.overUnderSizeFrom) {
    selects.add(SELECT_PILE_OVER_UNDER_SIZE);
    having.push(`${PILE_OVER_UNDER_SIZE} >= ${params.overUnderSizeFrom}`);
  }

  // filter by over under size to
  if (params?.overUnderSizeTo) {
    selects.add(SELECT_PILE_OVER_UNDER_SIZE);
    having.push(`${PILE_OVER_UNDER_SIZE} <= ${params.overUnderSizeTo}`);
  }

  // filter by contract ids
  if (notEmpty(params?.contractIds)) {
    where.push(
      `${PILE_CONTRACT_ID} IN (${params?.contractIds
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by certificate ids
  if (notEmpty(params?.certificateIds)) {
    join.add(INNER_JOIN_PILE_CERTIFICATE);
    where.push(
      `${PILE_CERTIFICATE_CERTIFICATE_ID} IN (${params?.certificateIds
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by forest owner pile status
  if (notEmpty(params?.forestOwnerPileStatus)) {
    where.push(
      `${PILE_FOREST_OWNER_PILE_STATUS} IN (${params?.forestOwnerPileStatus
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by comment content
  if (params?.commentContent) {
    join.add(INNER_JOIN_PILE_COMMENT);
    where.push(
      `${PILE_COMMENT_COMMENT} LIKE '%${params.commentContent.trim()}%'`,
    );
  }

  // filter by comment creator ids
  if (notEmpty(params?.commentCreatorIds)) {
    join.add(INNER_JOIN_PILE_COMMENT);
    where.push(
      `${PILE_COMMENT_USER_ID} IN (${params?.commentCreatorIds
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by comment created date from
  if (params?.commentCreatedDateFrom) {
    join.add(INNER_JOIN_PILE_COMMENT);
    where.push(
      `${PILE_COMMENT_CREATED_DATE} >= '${new Date(
        params.commentCreatedDateFrom,
      ).toISOString()}'`,
    );
  }

  // filter by comment created date to
  if (params?.commentCreatedDateTo) {
    join.add(INNER_JOIN_PILE_COMMENT);
    where.push(
      `${PILE_COMMENT_CREATED_DATE} <= '${new Date(
        params.commentCreatedDateTo,
      ).toISOString()}'`,
    );
  }
  // filter by forest owner id
  if (params?.forestOwnerId) {
    where.push(`${PILE_FOREST_OWNER_ID} = '${params.forestOwnerId}'`);
  }

  // filter by timber trading partner id
  if (params?.timberTradingPartnerId) {
    where.push(
      `${PILE_TIMBER_TRADING_PARTNER_ID} = '${params.timberTradingPartnerId}'`,
    );
  }

  // filter by timber trading partner id is not null
  if (params?.timberTradingPartnerIdIsNotNull) {
    where.push(`${PILE_TIMBER_TRADING_PARTNER_ID} IS NOT NULL`);
  }

  // filter by intended customer unknown
  if (params?.intendedCustomerUnknown) {
    join.add(LEFT_JOIN_PILE_INTENDED_CUSTOMER);
    where.push(`${PILE_INTENDED_CUSTOMER_ID} IS NULL`);
  }

  // filter by measurement types
  if (notEmpty(params?.measurementTypes)) {
    where.push(`${PILE_MEASUREMENT_TYPE} IN (${params?.measurementTypes})`);
  }

  // filter by logistic company ids
  if (notEmpty(params?.logisticCompanyIds)) {
    join.add(INNER_JOIN_TRANSPORT_ORDER);
    where.push(
      `${TRANSPORT_ORDER_LOGISTICS_COMPANY_ID} IN (${params?.logisticCompanyIds
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by without invoice
  if (params?.withoutInvoice) {
    join.add(LEFT_JOIN_INVOICING_POSITION);
    where.push(`${INVOICING_POSITION_ID} IS NULL`);
  }

  // filter logistic status date from
  if (params?.logisticStatusDateFrom) {
    where.push(
      `${PILE_LOGISTIC_STATUS_DATE} >= '${new Date(
        params.logisticStatusDateFrom,
      ).toISOString()}'`,
    );
  }

  // filter logistic status date to
  if (params?.logisticStatusDateTo) {
    where.push(
      `${PILE_LOGISTIC_STATUS_DATE} <= '${new Date(
        params.logisticStatusDateTo,
      ).toISOString()}'`,
    );
  }

  // filter by logistic status user ids
  if (notEmpty(params?.logisticStatusUserIds)) {
    where.push(
      `${PILE_LOGISTIC_STATUS_USER_ID} IN (${params?.logisticStatusUserIds
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by parcel
  if (params?.parcel) {
    where.push(`${PILE_PARCEL} LIKE '%${params.parcel.trim()}%'`);
  }

  // filter by forest department
  if (params?.forestDepartment) {
    where.push(
      `${PILE_FOREST_DEPARTMENT} LIKE '%${params.forestDepartment.trim()}%'`,
    );
  }

  // filter by recipient partner id
  if (params?.recipientPartnerId) {
    join.add(LEFT_JOIN_INVOICING_POSITION); // not included in the current pile service, my be not right
    join.add(LEFT_JOIN_PILE_INTENDED_CUSTOMER);
    join.add(LEFT_JOIN_PILE_TASK);
    where.push(
      `${INVOICING_POSITION_INVOICING_ID} IS NOT NULL AND (${PILE_TIMBER_TRADING_PARTNER_ID} = '${params.recipientPartnerId}' OR ${PILE_FOREST_OWNER_ID} = '${params.recipientPartnerId}' OR ${PILE_TASK_PARTNER_ID} = '${params.recipientPartnerId}' OR ${PILE_INTENDED_CUSTOMER_CUSTOMER_ID} = '${params.recipientPartnerId}')`,
    ); // invoicing position invoicing id not null not included in current pile service
  }

  // filter by forest service contracts
  if (notEmpty(params?.forestServiceContracts)) {
    join.add(LEFT_JOIN_PILE_TASK);
    where.push(
      `${PILE_TASK_CONTRACT_ID} IN (${params?.forestServiceContracts
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by task certificate ids
  if (notEmpty(params?.taskCertificateIds)) {
    join.add(LEFT_JOIN_PILE_TASK);
    where.push(
      `${PILE_TASK_CERTIFICATE_ID} IN (${params?.taskCertificateIds
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by task type
  if (params?.taskType) {
    join.add(LEFT_JOIN_PILE_TASK);
    where.push(`${PILE_TASK_TASK_TYPE} = '${params.taskType}'`);
  }

  // filter by technique
  if (params?.technique) {
    join.add(LEFT_JOIN_PILE_TASK);
    where.push(`${PILE_TASK_TECHNIQUE} = '${params.technique}'`);
  }

  // filter by forest service provider ids
  if (notEmpty(params?.forestServiceProviderIds)) {
    join.add(LEFT_JOIN_PILE_TASK);
    where.push(
      `${PILE_TASK_PARTNER_ID} IN (${params?.forestServiceProviderIds
        ?.map((id) => `'${id}'`)
        .join(',')})`,
    );
  }

  // filter by no damage
  if (params?.noDamage) {
    where.push(`${PILE_DAMAGE} = 0`);
  }

  // filter by transport order destination ids
  if (notEmpty(params?.transportOrderDestinationIds)) {
    join.add(INNER_JOIN_TRANSPORT_ORDER);
    const destinationIds = params?.transportOrderDestinationIds
      ?.map((id) => `'${id}'`)
      .join(',');
    where.push(
      `${TRANSPORT_ORDER_CUSTOMER_ID} IN (${destinationIds}) OR ${TRANSPORT_ORDER_STORAGE_ID} IN (${destinationIds})`,
    );
  }

  // filter by non certified wood
  if (params?.nonCertifiedWood) {
    where.push(`${PILE_NON_CERTIFIED_WOOD} = 1`);
  }

  // filter by timber trade and forest service contract ids
  if (notEmpty(params?.timberTradeAndForestServiceContractIds)) {
    join.add(LEFT_JOIN_PILE_TASK);
    const contractIds = params?.timberTradeAndForestServiceContractIds
      ?.map((id) => `'${id}'`)
      .join(',');
    where.push(
      `${PILE_TASK_CONTRACT_ID} IN (${contractIds}) OR ${PILE_CONTRACT_ID} IN (${contractIds})`,
    );
  }

  // filter by contract measurement types
  if (notEmpty(params?.contractMeasurementTypes)) {
    where.push(
      `${PILE_CONTRACT_MEASUREMENT_TYPE} IN (${params?.contractMeasurementTypes
        ?.map((type) => `'${type}'`)
        .join(',')}) `,
    );
  }

  // filter by forest measurement types
  if (notEmpty(params?.forestMeasurementTypes)) {
    where.push(
      `${PILE_FOREST_MEASUREMENT_TYPE} IN (${params?.forestMeasurementTypes
        ?.map((type) => `'${type}'`)
        .join(',')}) `,
    );
  }

  // filter by no pile number
  if (params?.noPileNumber) {
    where.push(`${PILE_NUMBER} IS NULL AND ${PILE_INVENTORY_NUMBER} IS NULL`);
  }

  // filter by no wood buyer
  if (params?.noWoodBuyer) {
    where.push(`${PILE_WOOD_BUYER_ID} IS NULL`);
  }

  // filter by service cost from
  if (params?.serviceCostFrom) {
    selects.add(SELECT_PILE_SERVICE_COST);
    join.add(LEFT_JOIN_PILE_TASK);
    having.push(`${PILE_SERVICE_COST} >= ${params.serviceCostFrom}`);
  }

  // filter by service cost to
  if (params?.serviceCostTo) {
    selects.add(SELECT_PILE_SERVICE_COST);
    join.add(LEFT_JOIN_PILE_TASK);
    having.push(`${PILE_SERVICE_COST} <= ${params.serviceCostTo}`);
  }

  if (params?.pageSize) {
    limit = `${
      params.pageNumber
        ? `${((params.pageNumber - 1) * params.pageSize).toString()},`
        : ''
    } ${params.pageSize}`;
  }

  const orderBy: string[] = []; // [SERVICE_COST];
  const orderByDirection = OrderByDirection.DESC;

  return {
    selects,
    from,
    join,
    where,
    groupBy,
    orderBy,
    orderByDirection,
    having,
    limit,
  };
}

const notEmpty = (arr?: string[] | number[]) => {
  return arr && arr?.length > 0;
};
