
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model ForestManagement_contactpersonAccessRights
 * 
 */
export type ForestManagement_contactpersonAccessRights = {
  partnerId: string
}

/**
 * Model Map_configLayers
 * 
 */
export type Map_configLayers = {
  name: string
  options: Map_configLayersOptions[]
}

/**
 * Model Map_configLayersOptions
 * 
 */
export type Map_configLayersOptions = {
  id: string
  value: boolean
}

/**
 * Model Pile_contactpersonAccessRights
 * 
 */
export type Pile_contactpersonAccessRights = {
  partnerId: string
}

/**
 * Model Pile_mapTreeSpecies
 * 
 */
export type Pile_mapTreeSpecies = {
  amountPercentage: number
  woodKind: string
  woodQuality: string
  woodType: string
}

/**
 * Model Pile_mapWoodSpecies
 * 
 */
export type Pile_mapWoodSpecies = {
  woodKinds: string[]
  woodQualities: string[]
  woodTypes: Prisma.JsonValue
}

/**
 * Model pile_table_preferencesColumns
 * 
 */
export type pile_table_preferencesColumns = {
  id: string
  name: string
  width: number
}

/**
 * Model pile_user_configCopyConfig
 * 
 */
export type pile_user_configCopyConfig = {
  avgDiameter: boolean
  avgLength: boolean
  comments: boolean
  contract: boolean
  district: boolean
  forestArea: boolean
  forestDepartment: boolean
  forestEntrance: boolean
  forestOwner: boolean
  forestOwnerCertificate: boolean
  forestOwnerContactPerson: boolean
  intendedCustomer: boolean
  kind: boolean
  list: boolean
  logisticReadyStatus: boolean
  maxDiameter: boolean
  minDiameter: boolean
  nearestCity: boolean
  parcel: boolean
  pileDamage: boolean
  pilePosition: boolean
  project: boolean
  quality: boolean
  roadConditionComment: boolean
  roadDrivingPossibility: boolean
  roadLoadingPossibility: boolean
  roadSurfaceCondition: boolean
  salesType: boolean
  services: boolean
  sharedAccess: boolean
  state: boolean
  techSupportAccess: boolean
  timberTradeAccess: boolean
  transferOwnership: boolean
  treeAge: boolean
  treeSpecies: boolean
}

/**
 * Model forest_management_contactperson
 * 
 */
export type forest_management_contactperson = {
  id: string
  accessRights: ForestManagement_contactpersonAccessRights[]
  email: string | null
  firstName: string
  id_: string
  lastName: string
  locale: string | null
  mandatePartnerIds: string[]
  partnerId: string
  roles: string[]
}

/**
 * Model forest_management_partner
 * 
 */
export type forest_management_partner = {
  id: string
  associatedPartnerIdList: string[]
  company: string
  contactName: string
  deactivated: boolean
  forestCompanyAssociations: string[]
  id_: string
  latitude: number | null
  longitude: number | null
  mandatePersonIds: string[]
  partnerNumber: string
}

/**
 * Model map_config
 * 
 */
export type map_config = {
  id: string
  contactPersonId: string
  layers: Map_configLayers[]
  mapStartAtHomePosition: boolean
  pileColoringStrategy: string
}

/**
 * Model pile_certificates
 * 
 */
export type pile_certificates = {
  id: string
  expiryDate: string
  id_: string
  licenseNumber: string | null
  number: string
  partnerId: string
  type: string
}

/**
 * Model pile_contactperson
 * 
 */
export type pile_contactperson = {
  id: string
  accessRights: Pile_contactpersonAccessRights[]
  email: string | null
  firstName: string
  id_: string
  landlineNumber: string | null
  lastName: string
  locale: string | null
  mandatePartnerIds: string[]
  partnerId: string
  pileNumberRangeIndex: number | null
  roles: string[]
  salutation: string | null
}

/**
 * Model pile_intermediatestorages
 * 
 */
export type pile_intermediatestorages = {
  id: string
  city: string | null
  designation: string | null
  district: string | null
  id_: string
  latitude: number
  longitude: number
  parcel: string | null
  partnerId: string
  state: string | null
}

/**
 * Model pile_inventory
 * 
 */
export type pile_inventory = {
  id: string
  buyingUnit: string
  comment: string
  correction: boolean
  createdDate: bigint
  createdUserId: string
  faultyInventory: boolean
  inventoryAmountRm: number
  pileId: string
  status: string
  statusDate: bigint
  statusUserId: string
}

/**
 * Model pile_map
 * 
 */
export type pile_map = {
  id: string
  actualAmount: number
  amountRm: number
  avgLengthM: number
  buyingUnit: string
  forestOwnerId: string
  forestOwnerPileNumber: string | null
  forestOwnerPileStatus: string | null
  hasRemoval: number
  id_: string
  inventoryAmountRm: number
  latitude: number
  logisticStatus: string
  longitude: number
  pileNumber: string
  registrationDate: bigint
  remainingAmountRm: number
  status: string
  statusDate: bigint
  treeSpecies: Pile_mapTreeSpecies[]
  woodBuyerId: string
  woodSpecies: Pile_mapWoodSpecies | null
}

/**
 * Model pile_partner
 * 
 */
export type pile_partner = {
  id: string
  accountingContactPersonId: string
  address: string | null
  associatedPartnerIdList: string[]
  city: string | null
  company: string
  contactName: string
  country: string | null
  deactivated: boolean
  forestCompanyAssociations: string[]
  id_: string
  latitude: number | null
  longitude: number | null
  mandatePersonIds: string[]
  partnerNumber: string
  partnerType: string
  pileNumberPrefix: string | null
  postcode: string | null
}

/**
 * Model pile_table_preferences
 * 
 */
export type pile_table_preferences = {
  id: string
  columns: pile_table_preferencesColumns[]
  contactPersonId: string
  id_: string
  preferenceName: string
}

/**
 * Model pile_user_config
 * 
 */
export type pile_user_config = {
  id: string
  contactPersonId: string
  copyConfig: pile_user_configCopyConfig
}

/**
 * Model report_generated
 * 
 */
export type report_generated = {
  id: string
  generatedAt: bigint
  locale: string
  reportData: number[]
  reportDescription: string
  reportFormat: string
  reportId: string
  reportName: string
  reportTitle: string
  success: boolean
  userId: string
  username: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Forest_management_contactpeople
 * const forest_management_contactpeople = await prisma.forest_management_contactperson.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Forest_management_contactpeople
   * const forest_management_contactpeople = await prisma.forest_management_contactperson.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>

      /**
   * `prisma.forest_management_contactperson`: Exposes CRUD operations for the **forest_management_contactperson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forest_management_contactpeople
    * const forest_management_contactpeople = await prisma.forest_management_contactperson.findMany()
    * ```
    */
  get forest_management_contactperson(): Prisma.forest_management_contactpersonDelegate<GlobalReject>;

  /**
   * `prisma.forest_management_partner`: Exposes CRUD operations for the **forest_management_partner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forest_management_partners
    * const forest_management_partners = await prisma.forest_management_partner.findMany()
    * ```
    */
  get forest_management_partner(): Prisma.forest_management_partnerDelegate<GlobalReject>;

  /**
   * `prisma.map_config`: Exposes CRUD operations for the **map_config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Map_configs
    * const map_configs = await prisma.map_config.findMany()
    * ```
    */
  get map_config(): Prisma.map_configDelegate<GlobalReject>;

  /**
   * `prisma.pile_certificates`: Exposes CRUD operations for the **pile_certificates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pile_certificates
    * const pile_certificates = await prisma.pile_certificates.findMany()
    * ```
    */
  get pile_certificates(): Prisma.pile_certificatesDelegate<GlobalReject>;

  /**
   * `prisma.pile_contactperson`: Exposes CRUD operations for the **pile_contactperson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pile_contactpeople
    * const pile_contactpeople = await prisma.pile_contactperson.findMany()
    * ```
    */
  get pile_contactperson(): Prisma.pile_contactpersonDelegate<GlobalReject>;

  /**
   * `prisma.pile_intermediatestorages`: Exposes CRUD operations for the **pile_intermediatestorages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pile_intermediatestorages
    * const pile_intermediatestorages = await prisma.pile_intermediatestorages.findMany()
    * ```
    */
  get pile_intermediatestorages(): Prisma.pile_intermediatestoragesDelegate<GlobalReject>;

  /**
   * `prisma.pile_inventory`: Exposes CRUD operations for the **pile_inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pile_inventories
    * const pile_inventories = await prisma.pile_inventory.findMany()
    * ```
    */
  get pile_inventory(): Prisma.pile_inventoryDelegate<GlobalReject>;

  /**
   * `prisma.pile_map`: Exposes CRUD operations for the **pile_map** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pile_maps
    * const pile_maps = await prisma.pile_map.findMany()
    * ```
    */
  get pile_map(): Prisma.pile_mapDelegate<GlobalReject>;

  /**
   * `prisma.pile_partner`: Exposes CRUD operations for the **pile_partner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pile_partners
    * const pile_partners = await prisma.pile_partner.findMany()
    * ```
    */
  get pile_partner(): Prisma.pile_partnerDelegate<GlobalReject>;

  /**
   * `prisma.pile_table_preferences`: Exposes CRUD operations for the **pile_table_preferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pile_table_preferences
    * const pile_table_preferences = await prisma.pile_table_preferences.findMany()
    * ```
    */
  get pile_table_preferences(): Prisma.pile_table_preferencesDelegate<GlobalReject>;

  /**
   * `prisma.pile_user_config`: Exposes CRUD operations for the **pile_user_config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pile_user_configs
    * const pile_user_configs = await prisma.pile_user_config.findMany()
    * ```
    */
  get pile_user_config(): Prisma.pile_user_configDelegate<GlobalReject>;

  /**
   * `prisma.report_generated`: Exposes CRUD operations for the **report_generated** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Report_generateds
    * const report_generateds = await prisma.report_generated.findMany()
    * ```
    */
  get report_generated(): Prisma.report_generatedDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.9.0
   * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ForestManagement_contactpersonAccessRights
   */





  export type ForestManagement_contactpersonAccessRightsSelect = {
    partnerId?: boolean
  }


  export type ForestManagement_contactpersonAccessRightsGetPayload<S extends boolean | null | undefined | ForestManagement_contactpersonAccessRightsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ForestManagement_contactpersonAccessRights :
    S extends undefined ? never :
    S extends { include: any } & (ForestManagement_contactpersonAccessRightsArgs)
    ? ForestManagement_contactpersonAccessRights 
    : S extends { select: any } & (ForestManagement_contactpersonAccessRightsArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ForestManagement_contactpersonAccessRights ? ForestManagement_contactpersonAccessRights[P] : never
  } 
      : ForestManagement_contactpersonAccessRights



  export interface ForestManagement_contactpersonAccessRightsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for ForestManagement_contactpersonAccessRights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ForestManagement_contactpersonAccessRightsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ForestManagement_contactpersonAccessRights without action
   */
  export type ForestManagement_contactpersonAccessRightsArgs = {
    /**
     * Select specific fields to fetch from the ForestManagement_contactpersonAccessRights
     */
    select?: ForestManagement_contactpersonAccessRightsSelect | null
  }



  /**
   * Model Map_configLayers
   */





  export type Map_configLayersSelect = {
    name?: boolean
    options?: boolean | Map_configLayersOptionsArgs
  }


  export type Map_configLayersInclude = {}

  export type Map_configLayersGetPayload<S extends boolean | null | undefined | Map_configLayersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Map_configLayers :
    S extends undefined ? never :
    S extends { include: any } & (Map_configLayersArgs)
    ? Map_configLayers 
    : S extends { select: any } & (Map_configLayersArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'options' ? Array < Map_configLayersOptionsGetPayload<S['select'][P]>>  :  P extends keyof Map_configLayers ? Map_configLayers[P] : never
  } 
      : Map_configLayers



  export interface Map_configLayersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for Map_configLayers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Map_configLayersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    options<T extends Map_configLayersOptionsArgs= {}>(args?: Subset<T, Map_configLayersOptionsArgs>): PrismaPromise<Array<Map_configLayersOptionsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Map_configLayers without action
   */
  export type Map_configLayersArgs = {
    /**
     * Select specific fields to fetch from the Map_configLayers
     */
    select?: Map_configLayersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Map_configLayersInclude | null
  }



  /**
   * Model Map_configLayersOptions
   */





  export type Map_configLayersOptionsSelect = {
    id?: boolean
    value?: boolean
  }


  export type Map_configLayersOptionsGetPayload<S extends boolean | null | undefined | Map_configLayersOptionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Map_configLayersOptions :
    S extends undefined ? never :
    S extends { include: any } & (Map_configLayersOptionsArgs)
    ? Map_configLayersOptions 
    : S extends { select: any } & (Map_configLayersOptionsArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Map_configLayersOptions ? Map_configLayersOptions[P] : never
  } 
      : Map_configLayersOptions



  export interface Map_configLayersOptionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for Map_configLayersOptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Map_configLayersOptionsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Map_configLayersOptions without action
   */
  export type Map_configLayersOptionsArgs = {
    /**
     * Select specific fields to fetch from the Map_configLayersOptions
     */
    select?: Map_configLayersOptionsSelect | null
  }



  /**
   * Model Pile_contactpersonAccessRights
   */





  export type Pile_contactpersonAccessRightsSelect = {
    partnerId?: boolean
  }


  export type Pile_contactpersonAccessRightsGetPayload<S extends boolean | null | undefined | Pile_contactpersonAccessRightsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Pile_contactpersonAccessRights :
    S extends undefined ? never :
    S extends { include: any } & (Pile_contactpersonAccessRightsArgs)
    ? Pile_contactpersonAccessRights 
    : S extends { select: any } & (Pile_contactpersonAccessRightsArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Pile_contactpersonAccessRights ? Pile_contactpersonAccessRights[P] : never
  } 
      : Pile_contactpersonAccessRights



  export interface Pile_contactpersonAccessRightsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for Pile_contactpersonAccessRights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Pile_contactpersonAccessRightsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Pile_contactpersonAccessRights without action
   */
  export type Pile_contactpersonAccessRightsArgs = {
    /**
     * Select specific fields to fetch from the Pile_contactpersonAccessRights
     */
    select?: Pile_contactpersonAccessRightsSelect | null
  }



  /**
   * Model Pile_mapTreeSpecies
   */





  export type Pile_mapTreeSpeciesSelect = {
    amountPercentage?: boolean
    woodKind?: boolean
    woodQuality?: boolean
    woodType?: boolean
  }


  export type Pile_mapTreeSpeciesGetPayload<S extends boolean | null | undefined | Pile_mapTreeSpeciesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Pile_mapTreeSpecies :
    S extends undefined ? never :
    S extends { include: any } & (Pile_mapTreeSpeciesArgs)
    ? Pile_mapTreeSpecies 
    : S extends { select: any } & (Pile_mapTreeSpeciesArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Pile_mapTreeSpecies ? Pile_mapTreeSpecies[P] : never
  } 
      : Pile_mapTreeSpecies



  export interface Pile_mapTreeSpeciesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for Pile_mapTreeSpecies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Pile_mapTreeSpeciesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Pile_mapTreeSpecies without action
   */
  export type Pile_mapTreeSpeciesArgs = {
    /**
     * Select specific fields to fetch from the Pile_mapTreeSpecies
     */
    select?: Pile_mapTreeSpeciesSelect | null
  }



  /**
   * Model Pile_mapWoodSpecies
   */





  export type Pile_mapWoodSpeciesSelect = {
    woodKinds?: boolean
    woodQualities?: boolean
    woodTypes?: boolean
  }


  export type Pile_mapWoodSpeciesGetPayload<S extends boolean | null | undefined | Pile_mapWoodSpeciesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Pile_mapWoodSpecies :
    S extends undefined ? never :
    S extends { include: any } & (Pile_mapWoodSpeciesArgs)
    ? Pile_mapWoodSpecies 
    : S extends { select: any } & (Pile_mapWoodSpeciesArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Pile_mapWoodSpecies ? Pile_mapWoodSpecies[P] : never
  } 
      : Pile_mapWoodSpecies



  export interface Pile_mapWoodSpeciesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for Pile_mapWoodSpecies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Pile_mapWoodSpeciesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Pile_mapWoodSpecies without action
   */
  export type Pile_mapWoodSpeciesArgs = {
    /**
     * Select specific fields to fetch from the Pile_mapWoodSpecies
     */
    select?: Pile_mapWoodSpeciesSelect | null
  }



  /**
   * Model pile_table_preferencesColumns
   */





  export type pile_table_preferencesColumnsSelect = {
    id?: boolean
    name?: boolean
    width?: boolean
  }


  export type pile_table_preferencesColumnsGetPayload<S extends boolean | null | undefined | pile_table_preferencesColumnsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pile_table_preferencesColumns :
    S extends undefined ? never :
    S extends { include: any } & (pile_table_preferencesColumnsArgs)
    ? pile_table_preferencesColumns 
    : S extends { select: any } & (pile_table_preferencesColumnsArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof pile_table_preferencesColumns ? pile_table_preferencesColumns[P] : never
  } 
      : pile_table_preferencesColumns



  export interface pile_table_preferencesColumnsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for pile_table_preferencesColumns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pile_table_preferencesColumnsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pile_table_preferencesColumns without action
   */
  export type pile_table_preferencesColumnsArgs = {
    /**
     * Select specific fields to fetch from the pile_table_preferencesColumns
     */
    select?: pile_table_preferencesColumnsSelect | null
  }



  /**
   * Model pile_user_configCopyConfig
   */





  export type pile_user_configCopyConfigSelect = {
    avgDiameter?: boolean
    avgLength?: boolean
    comments?: boolean
    contract?: boolean
    district?: boolean
    forestArea?: boolean
    forestDepartment?: boolean
    forestEntrance?: boolean
    forestOwner?: boolean
    forestOwnerCertificate?: boolean
    forestOwnerContactPerson?: boolean
    intendedCustomer?: boolean
    kind?: boolean
    list?: boolean
    logisticReadyStatus?: boolean
    maxDiameter?: boolean
    minDiameter?: boolean
    nearestCity?: boolean
    parcel?: boolean
    pileDamage?: boolean
    pilePosition?: boolean
    project?: boolean
    quality?: boolean
    roadConditionComment?: boolean
    roadDrivingPossibility?: boolean
    roadLoadingPossibility?: boolean
    roadSurfaceCondition?: boolean
    salesType?: boolean
    services?: boolean
    sharedAccess?: boolean
    state?: boolean
    techSupportAccess?: boolean
    timberTradeAccess?: boolean
    transferOwnership?: boolean
    treeAge?: boolean
    treeSpecies?: boolean
  }


  export type pile_user_configCopyConfigGetPayload<S extends boolean | null | undefined | pile_user_configCopyConfigArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pile_user_configCopyConfig :
    S extends undefined ? never :
    S extends { include: any } & (pile_user_configCopyConfigArgs)
    ? pile_user_configCopyConfig 
    : S extends { select: any } & (pile_user_configCopyConfigArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof pile_user_configCopyConfig ? pile_user_configCopyConfig[P] : never
  } 
      : pile_user_configCopyConfig



  export interface pile_user_configCopyConfigDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for pile_user_configCopyConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pile_user_configCopyConfigClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pile_user_configCopyConfig without action
   */
  export type pile_user_configCopyConfigArgs = {
    /**
     * Select specific fields to fetch from the pile_user_configCopyConfig
     */
    select?: pile_user_configCopyConfigSelect | null
  }



  /**
   * Model forest_management_contactperson
   */


  export type AggregateForest_management_contactperson = {
    _count: Forest_management_contactpersonCountAggregateOutputType | null
    _min: Forest_management_contactpersonMinAggregateOutputType | null
    _max: Forest_management_contactpersonMaxAggregateOutputType | null
  }

  export type Forest_management_contactpersonMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    id_: string | null
    lastName: string | null
    locale: string | null
    partnerId: string | null
  }

  export type Forest_management_contactpersonMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    id_: string | null
    lastName: string | null
    locale: string | null
    partnerId: string | null
  }

  export type Forest_management_contactpersonCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    id_: number
    lastName: number
    locale: number
    mandatePartnerIds: number
    partnerId: number
    roles: number
    _all: number
  }


  export type Forest_management_contactpersonMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    id_?: true
    lastName?: true
    locale?: true
    partnerId?: true
  }

  export type Forest_management_contactpersonMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    id_?: true
    lastName?: true
    locale?: true
    partnerId?: true
  }

  export type Forest_management_contactpersonCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    id_?: true
    lastName?: true
    locale?: true
    mandatePartnerIds?: true
    partnerId?: true
    roles?: true
    _all?: true
  }

  export type Forest_management_contactpersonAggregateArgs = {
    /**
     * Filter which forest_management_contactperson to aggregate.
     */
    where?: forest_management_contactpersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forest_management_contactpeople to fetch.
     */
    orderBy?: Enumerable<forest_management_contactpersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: forest_management_contactpersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forest_management_contactpeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forest_management_contactpeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned forest_management_contactpeople
    **/
    _count?: true | Forest_management_contactpersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Forest_management_contactpersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Forest_management_contactpersonMaxAggregateInputType
  }

  export type GetForest_management_contactpersonAggregateType<T extends Forest_management_contactpersonAggregateArgs> = {
        [P in keyof T & keyof AggregateForest_management_contactperson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForest_management_contactperson[P]>
      : GetScalarType<T[P], AggregateForest_management_contactperson[P]>
  }




  export type Forest_management_contactpersonGroupByArgs = {
    where?: forest_management_contactpersonWhereInput
    orderBy?: Enumerable<forest_management_contactpersonOrderByWithAggregationInput>
    by: Forest_management_contactpersonScalarFieldEnum[]
    having?: forest_management_contactpersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Forest_management_contactpersonCountAggregateInputType | true
    _min?: Forest_management_contactpersonMinAggregateInputType
    _max?: Forest_management_contactpersonMaxAggregateInputType
  }


  export type Forest_management_contactpersonGroupByOutputType = {
    id: string
    email: string | null
    firstName: string
    id_: string
    lastName: string
    locale: string | null
    mandatePartnerIds: string[]
    partnerId: string
    roles: string[]
    _count: Forest_management_contactpersonCountAggregateOutputType | null
    _min: Forest_management_contactpersonMinAggregateOutputType | null
    _max: Forest_management_contactpersonMaxAggregateOutputType | null
  }

  type GetForest_management_contactpersonGroupByPayload<T extends Forest_management_contactpersonGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Forest_management_contactpersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Forest_management_contactpersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Forest_management_contactpersonGroupByOutputType[P]>
            : GetScalarType<T[P], Forest_management_contactpersonGroupByOutputType[P]>
        }
      >
    >


  export type forest_management_contactpersonSelect = {
    id?: boolean
    accessRights?: boolean | ForestManagement_contactpersonAccessRightsArgs
    email?: boolean
    firstName?: boolean
    id_?: boolean
    lastName?: boolean
    locale?: boolean
    mandatePartnerIds?: boolean
    partnerId?: boolean
    roles?: boolean
  }


  export type forest_management_contactpersonInclude = {}

  export type forest_management_contactpersonGetPayload<S extends boolean | null | undefined | forest_management_contactpersonArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? forest_management_contactperson :
    S extends undefined ? never :
    S extends { include: any } & (forest_management_contactpersonArgs | forest_management_contactpersonFindManyArgs)
    ? forest_management_contactperson 
    : S extends { select: any } & (forest_management_contactpersonArgs | forest_management_contactpersonFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accessRights' ? Array < ForestManagement_contactpersonAccessRightsGetPayload<S['select'][P]>>  :  P extends keyof forest_management_contactperson ? forest_management_contactperson[P] : never
  } 
      : forest_management_contactperson


  type forest_management_contactpersonCountArgs = 
    Omit<forest_management_contactpersonFindManyArgs, 'select' | 'include'> & {
      select?: Forest_management_contactpersonCountAggregateInputType | true
    }

  export interface forest_management_contactpersonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Forest_management_contactperson that matches the filter.
     * @param {forest_management_contactpersonFindUniqueArgs} args - Arguments to find a Forest_management_contactperson
     * @example
     * // Get one Forest_management_contactperson
     * const forest_management_contactperson = await prisma.forest_management_contactperson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends forest_management_contactpersonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, forest_management_contactpersonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'forest_management_contactperson'> extends True ? Prisma__forest_management_contactpersonClient<forest_management_contactpersonGetPayload<T>> : Prisma__forest_management_contactpersonClient<forest_management_contactpersonGetPayload<T> | null, null>

    /**
     * Find one Forest_management_contactperson that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {forest_management_contactpersonFindUniqueOrThrowArgs} args - Arguments to find a Forest_management_contactperson
     * @example
     * // Get one Forest_management_contactperson
     * const forest_management_contactperson = await prisma.forest_management_contactperson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends forest_management_contactpersonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, forest_management_contactpersonFindUniqueOrThrowArgs>
    ): Prisma__forest_management_contactpersonClient<forest_management_contactpersonGetPayload<T>>

    /**
     * Find the first Forest_management_contactperson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {forest_management_contactpersonFindFirstArgs} args - Arguments to find a Forest_management_contactperson
     * @example
     * // Get one Forest_management_contactperson
     * const forest_management_contactperson = await prisma.forest_management_contactperson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends forest_management_contactpersonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, forest_management_contactpersonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'forest_management_contactperson'> extends True ? Prisma__forest_management_contactpersonClient<forest_management_contactpersonGetPayload<T>> : Prisma__forest_management_contactpersonClient<forest_management_contactpersonGetPayload<T> | null, null>

    /**
     * Find the first Forest_management_contactperson that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {forest_management_contactpersonFindFirstOrThrowArgs} args - Arguments to find a Forest_management_contactperson
     * @example
     * // Get one Forest_management_contactperson
     * const forest_management_contactperson = await prisma.forest_management_contactperson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends forest_management_contactpersonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, forest_management_contactpersonFindFirstOrThrowArgs>
    ): Prisma__forest_management_contactpersonClient<forest_management_contactpersonGetPayload<T>>

    /**
     * Find zero or more Forest_management_contactpeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {forest_management_contactpersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forest_management_contactpeople
     * const forest_management_contactpeople = await prisma.forest_management_contactperson.findMany()
     * 
     * // Get first 10 Forest_management_contactpeople
     * const forest_management_contactpeople = await prisma.forest_management_contactperson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forest_management_contactpersonWithIdOnly = await prisma.forest_management_contactperson.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends forest_management_contactpersonFindManyArgs>(
      args?: SelectSubset<T, forest_management_contactpersonFindManyArgs>
    ): PrismaPromise<Array<forest_management_contactpersonGetPayload<T>>>

    /**
     * Create a Forest_management_contactperson.
     * @param {forest_management_contactpersonCreateArgs} args - Arguments to create a Forest_management_contactperson.
     * @example
     * // Create one Forest_management_contactperson
     * const Forest_management_contactperson = await prisma.forest_management_contactperson.create({
     *   data: {
     *     // ... data to create a Forest_management_contactperson
     *   }
     * })
     * 
    **/
    create<T extends forest_management_contactpersonCreateArgs>(
      args: SelectSubset<T, forest_management_contactpersonCreateArgs>
    ): Prisma__forest_management_contactpersonClient<forest_management_contactpersonGetPayload<T>>

    /**
     * Create many Forest_management_contactpeople.
     *     @param {forest_management_contactpersonCreateManyArgs} args - Arguments to create many Forest_management_contactpeople.
     *     @example
     *     // Create many Forest_management_contactpeople
     *     const forest_management_contactperson = await prisma.forest_management_contactperson.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends forest_management_contactpersonCreateManyArgs>(
      args?: SelectSubset<T, forest_management_contactpersonCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Forest_management_contactperson.
     * @param {forest_management_contactpersonDeleteArgs} args - Arguments to delete one Forest_management_contactperson.
     * @example
     * // Delete one Forest_management_contactperson
     * const Forest_management_contactperson = await prisma.forest_management_contactperson.delete({
     *   where: {
     *     // ... filter to delete one Forest_management_contactperson
     *   }
     * })
     * 
    **/
    delete<T extends forest_management_contactpersonDeleteArgs>(
      args: SelectSubset<T, forest_management_contactpersonDeleteArgs>
    ): Prisma__forest_management_contactpersonClient<forest_management_contactpersonGetPayload<T>>

    /**
     * Update one Forest_management_contactperson.
     * @param {forest_management_contactpersonUpdateArgs} args - Arguments to update one Forest_management_contactperson.
     * @example
     * // Update one Forest_management_contactperson
     * const forest_management_contactperson = await prisma.forest_management_contactperson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends forest_management_contactpersonUpdateArgs>(
      args: SelectSubset<T, forest_management_contactpersonUpdateArgs>
    ): Prisma__forest_management_contactpersonClient<forest_management_contactpersonGetPayload<T>>

    /**
     * Delete zero or more Forest_management_contactpeople.
     * @param {forest_management_contactpersonDeleteManyArgs} args - Arguments to filter Forest_management_contactpeople to delete.
     * @example
     * // Delete a few Forest_management_contactpeople
     * const { count } = await prisma.forest_management_contactperson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends forest_management_contactpersonDeleteManyArgs>(
      args?: SelectSubset<T, forest_management_contactpersonDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forest_management_contactpeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {forest_management_contactpersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forest_management_contactpeople
     * const forest_management_contactperson = await prisma.forest_management_contactperson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends forest_management_contactpersonUpdateManyArgs>(
      args: SelectSubset<T, forest_management_contactpersonUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Forest_management_contactperson.
     * @param {forest_management_contactpersonUpsertArgs} args - Arguments to update or create a Forest_management_contactperson.
     * @example
     * // Update or create a Forest_management_contactperson
     * const forest_management_contactperson = await prisma.forest_management_contactperson.upsert({
     *   create: {
     *     // ... data to create a Forest_management_contactperson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Forest_management_contactperson we want to update
     *   }
     * })
    **/
    upsert<T extends forest_management_contactpersonUpsertArgs>(
      args: SelectSubset<T, forest_management_contactpersonUpsertArgs>
    ): Prisma__forest_management_contactpersonClient<forest_management_contactpersonGetPayload<T>>

    /**
     * Find zero or more Forest_management_contactpeople that matches the filter.
     * @param {forest_management_contactpersonFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const forest_management_contactperson = await prisma.forest_management_contactperson.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: forest_management_contactpersonFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Forest_management_contactperson.
     * @param {forest_management_contactpersonAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const forest_management_contactperson = await prisma.forest_management_contactperson.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: forest_management_contactpersonAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Forest_management_contactpeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {forest_management_contactpersonCountArgs} args - Arguments to filter Forest_management_contactpeople to count.
     * @example
     * // Count the number of Forest_management_contactpeople
     * const count = await prisma.forest_management_contactperson.count({
     *   where: {
     *     // ... the filter for the Forest_management_contactpeople we want to count
     *   }
     * })
    **/
    count<T extends forest_management_contactpersonCountArgs>(
      args?: Subset<T, forest_management_contactpersonCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Forest_management_contactpersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Forest_management_contactperson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Forest_management_contactpersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Forest_management_contactpersonAggregateArgs>(args: Subset<T, Forest_management_contactpersonAggregateArgs>): PrismaPromise<GetForest_management_contactpersonAggregateType<T>>

    /**
     * Group by Forest_management_contactperson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Forest_management_contactpersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Forest_management_contactpersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Forest_management_contactpersonGroupByArgs['orderBy'] }
        : { orderBy?: Forest_management_contactpersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Forest_management_contactpersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForest_management_contactpersonGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for forest_management_contactperson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__forest_management_contactpersonClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accessRights<T extends ForestManagement_contactpersonAccessRightsArgs= {}>(args?: Subset<T, ForestManagement_contactpersonAccessRightsArgs>): PrismaPromise<Array<ForestManagement_contactpersonAccessRightsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * forest_management_contactperson base type for findUnique actions
   */
  export type forest_management_contactpersonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the forest_management_contactperson
     */
    select?: forest_management_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: forest_management_contactpersonInclude | null
    /**
     * Filter, which forest_management_contactperson to fetch.
     */
    where: forest_management_contactpersonWhereUniqueInput
  }

  /**
   * forest_management_contactperson findUnique
   */
  export interface forest_management_contactpersonFindUniqueArgs extends forest_management_contactpersonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * forest_management_contactperson findUniqueOrThrow
   */
  export type forest_management_contactpersonFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the forest_management_contactperson
     */
    select?: forest_management_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: forest_management_contactpersonInclude | null
    /**
     * Filter, which forest_management_contactperson to fetch.
     */
    where: forest_management_contactpersonWhereUniqueInput
  }


  /**
   * forest_management_contactperson base type for findFirst actions
   */
  export type forest_management_contactpersonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the forest_management_contactperson
     */
    select?: forest_management_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: forest_management_contactpersonInclude | null
    /**
     * Filter, which forest_management_contactperson to fetch.
     */
    where?: forest_management_contactpersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forest_management_contactpeople to fetch.
     */
    orderBy?: Enumerable<forest_management_contactpersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for forest_management_contactpeople.
     */
    cursor?: forest_management_contactpersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forest_management_contactpeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forest_management_contactpeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of forest_management_contactpeople.
     */
    distinct?: Enumerable<Forest_management_contactpersonScalarFieldEnum>
  }

  /**
   * forest_management_contactperson findFirst
   */
  export interface forest_management_contactpersonFindFirstArgs extends forest_management_contactpersonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * forest_management_contactperson findFirstOrThrow
   */
  export type forest_management_contactpersonFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the forest_management_contactperson
     */
    select?: forest_management_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: forest_management_contactpersonInclude | null
    /**
     * Filter, which forest_management_contactperson to fetch.
     */
    where?: forest_management_contactpersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forest_management_contactpeople to fetch.
     */
    orderBy?: Enumerable<forest_management_contactpersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for forest_management_contactpeople.
     */
    cursor?: forest_management_contactpersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forest_management_contactpeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forest_management_contactpeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of forest_management_contactpeople.
     */
    distinct?: Enumerable<Forest_management_contactpersonScalarFieldEnum>
  }


  /**
   * forest_management_contactperson findMany
   */
  export type forest_management_contactpersonFindManyArgs = {
    /**
     * Select specific fields to fetch from the forest_management_contactperson
     */
    select?: forest_management_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: forest_management_contactpersonInclude | null
    /**
     * Filter, which forest_management_contactpeople to fetch.
     */
    where?: forest_management_contactpersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forest_management_contactpeople to fetch.
     */
    orderBy?: Enumerable<forest_management_contactpersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing forest_management_contactpeople.
     */
    cursor?: forest_management_contactpersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forest_management_contactpeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forest_management_contactpeople.
     */
    skip?: number
    distinct?: Enumerable<Forest_management_contactpersonScalarFieldEnum>
  }


  /**
   * forest_management_contactperson create
   */
  export type forest_management_contactpersonCreateArgs = {
    /**
     * Select specific fields to fetch from the forest_management_contactperson
     */
    select?: forest_management_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: forest_management_contactpersonInclude | null
    /**
     * The data needed to create a forest_management_contactperson.
     */
    data: XOR<forest_management_contactpersonCreateInput, forest_management_contactpersonUncheckedCreateInput>
  }


  /**
   * forest_management_contactperson createMany
   */
  export type forest_management_contactpersonCreateManyArgs = {
    /**
     * The data used to create many forest_management_contactpeople.
     */
    data: Enumerable<forest_management_contactpersonCreateManyInput>
  }


  /**
   * forest_management_contactperson update
   */
  export type forest_management_contactpersonUpdateArgs = {
    /**
     * Select specific fields to fetch from the forest_management_contactperson
     */
    select?: forest_management_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: forest_management_contactpersonInclude | null
    /**
     * The data needed to update a forest_management_contactperson.
     */
    data: XOR<forest_management_contactpersonUpdateInput, forest_management_contactpersonUncheckedUpdateInput>
    /**
     * Choose, which forest_management_contactperson to update.
     */
    where: forest_management_contactpersonWhereUniqueInput
  }


  /**
   * forest_management_contactperson updateMany
   */
  export type forest_management_contactpersonUpdateManyArgs = {
    /**
     * The data used to update forest_management_contactpeople.
     */
    data: XOR<forest_management_contactpersonUpdateManyMutationInput, forest_management_contactpersonUncheckedUpdateManyInput>
    /**
     * Filter which forest_management_contactpeople to update
     */
    where?: forest_management_contactpersonWhereInput
  }


  /**
   * forest_management_contactperson upsert
   */
  export type forest_management_contactpersonUpsertArgs = {
    /**
     * Select specific fields to fetch from the forest_management_contactperson
     */
    select?: forest_management_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: forest_management_contactpersonInclude | null
    /**
     * The filter to search for the forest_management_contactperson to update in case it exists.
     */
    where: forest_management_contactpersonWhereUniqueInput
    /**
     * In case the forest_management_contactperson found by the `where` argument doesn't exist, create a new forest_management_contactperson with this data.
     */
    create: XOR<forest_management_contactpersonCreateInput, forest_management_contactpersonUncheckedCreateInput>
    /**
     * In case the forest_management_contactperson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<forest_management_contactpersonUpdateInput, forest_management_contactpersonUncheckedUpdateInput>
  }


  /**
   * forest_management_contactperson delete
   */
  export type forest_management_contactpersonDeleteArgs = {
    /**
     * Select specific fields to fetch from the forest_management_contactperson
     */
    select?: forest_management_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: forest_management_contactpersonInclude | null
    /**
     * Filter which forest_management_contactperson to delete.
     */
    where: forest_management_contactpersonWhereUniqueInput
  }


  /**
   * forest_management_contactperson deleteMany
   */
  export type forest_management_contactpersonDeleteManyArgs = {
    /**
     * Filter which forest_management_contactpeople to delete
     */
    where?: forest_management_contactpersonWhereInput
  }


  /**
   * forest_management_contactperson findRaw
   */
  export type forest_management_contactpersonFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * forest_management_contactperson aggregateRaw
   */
  export type forest_management_contactpersonAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * forest_management_contactperson without action
   */
  export type forest_management_contactpersonArgs = {
    /**
     * Select specific fields to fetch from the forest_management_contactperson
     */
    select?: forest_management_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: forest_management_contactpersonInclude | null
  }



  /**
   * Model forest_management_partner
   */


  export type AggregateForest_management_partner = {
    _count: Forest_management_partnerCountAggregateOutputType | null
    _avg: Forest_management_partnerAvgAggregateOutputType | null
    _sum: Forest_management_partnerSumAggregateOutputType | null
    _min: Forest_management_partnerMinAggregateOutputType | null
    _max: Forest_management_partnerMaxAggregateOutputType | null
  }

  export type Forest_management_partnerAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type Forest_management_partnerSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type Forest_management_partnerMinAggregateOutputType = {
    id: string | null
    company: string | null
    contactName: string | null
    deactivated: boolean | null
    id_: string | null
    latitude: number | null
    longitude: number | null
    partnerNumber: string | null
  }

  export type Forest_management_partnerMaxAggregateOutputType = {
    id: string | null
    company: string | null
    contactName: string | null
    deactivated: boolean | null
    id_: string | null
    latitude: number | null
    longitude: number | null
    partnerNumber: string | null
  }

  export type Forest_management_partnerCountAggregateOutputType = {
    id: number
    associatedPartnerIdList: number
    company: number
    contactName: number
    deactivated: number
    forestCompanyAssociations: number
    id_: number
    latitude: number
    longitude: number
    mandatePersonIds: number
    partnerNumber: number
    _all: number
  }


  export type Forest_management_partnerAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type Forest_management_partnerSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type Forest_management_partnerMinAggregateInputType = {
    id?: true
    company?: true
    contactName?: true
    deactivated?: true
    id_?: true
    latitude?: true
    longitude?: true
    partnerNumber?: true
  }

  export type Forest_management_partnerMaxAggregateInputType = {
    id?: true
    company?: true
    contactName?: true
    deactivated?: true
    id_?: true
    latitude?: true
    longitude?: true
    partnerNumber?: true
  }

  export type Forest_management_partnerCountAggregateInputType = {
    id?: true
    associatedPartnerIdList?: true
    company?: true
    contactName?: true
    deactivated?: true
    forestCompanyAssociations?: true
    id_?: true
    latitude?: true
    longitude?: true
    mandatePersonIds?: true
    partnerNumber?: true
    _all?: true
  }

  export type Forest_management_partnerAggregateArgs = {
    /**
     * Filter which forest_management_partner to aggregate.
     */
    where?: forest_management_partnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forest_management_partners to fetch.
     */
    orderBy?: Enumerable<forest_management_partnerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: forest_management_partnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forest_management_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forest_management_partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned forest_management_partners
    **/
    _count?: true | Forest_management_partnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Forest_management_partnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Forest_management_partnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Forest_management_partnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Forest_management_partnerMaxAggregateInputType
  }

  export type GetForest_management_partnerAggregateType<T extends Forest_management_partnerAggregateArgs> = {
        [P in keyof T & keyof AggregateForest_management_partner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForest_management_partner[P]>
      : GetScalarType<T[P], AggregateForest_management_partner[P]>
  }




  export type Forest_management_partnerGroupByArgs = {
    where?: forest_management_partnerWhereInput
    orderBy?: Enumerable<forest_management_partnerOrderByWithAggregationInput>
    by: Forest_management_partnerScalarFieldEnum[]
    having?: forest_management_partnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Forest_management_partnerCountAggregateInputType | true
    _avg?: Forest_management_partnerAvgAggregateInputType
    _sum?: Forest_management_partnerSumAggregateInputType
    _min?: Forest_management_partnerMinAggregateInputType
    _max?: Forest_management_partnerMaxAggregateInputType
  }


  export type Forest_management_partnerGroupByOutputType = {
    id: string
    associatedPartnerIdList: string[]
    company: string
    contactName: string
    deactivated: boolean
    forestCompanyAssociations: string[]
    id_: string
    latitude: number | null
    longitude: number | null
    mandatePersonIds: string[]
    partnerNumber: string
    _count: Forest_management_partnerCountAggregateOutputType | null
    _avg: Forest_management_partnerAvgAggregateOutputType | null
    _sum: Forest_management_partnerSumAggregateOutputType | null
    _min: Forest_management_partnerMinAggregateOutputType | null
    _max: Forest_management_partnerMaxAggregateOutputType | null
  }

  type GetForest_management_partnerGroupByPayload<T extends Forest_management_partnerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Forest_management_partnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Forest_management_partnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Forest_management_partnerGroupByOutputType[P]>
            : GetScalarType<T[P], Forest_management_partnerGroupByOutputType[P]>
        }
      >
    >


  export type forest_management_partnerSelect = {
    id?: boolean
    associatedPartnerIdList?: boolean
    company?: boolean
    contactName?: boolean
    deactivated?: boolean
    forestCompanyAssociations?: boolean
    id_?: boolean
    latitude?: boolean
    longitude?: boolean
    mandatePersonIds?: boolean
    partnerNumber?: boolean
  }


  export type forest_management_partnerGetPayload<S extends boolean | null | undefined | forest_management_partnerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? forest_management_partner :
    S extends undefined ? never :
    S extends { include: any } & (forest_management_partnerArgs | forest_management_partnerFindManyArgs)
    ? forest_management_partner 
    : S extends { select: any } & (forest_management_partnerArgs | forest_management_partnerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof forest_management_partner ? forest_management_partner[P] : never
  } 
      : forest_management_partner


  type forest_management_partnerCountArgs = 
    Omit<forest_management_partnerFindManyArgs, 'select' | 'include'> & {
      select?: Forest_management_partnerCountAggregateInputType | true
    }

  export interface forest_management_partnerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Forest_management_partner that matches the filter.
     * @param {forest_management_partnerFindUniqueArgs} args - Arguments to find a Forest_management_partner
     * @example
     * // Get one Forest_management_partner
     * const forest_management_partner = await prisma.forest_management_partner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends forest_management_partnerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, forest_management_partnerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'forest_management_partner'> extends True ? Prisma__forest_management_partnerClient<forest_management_partnerGetPayload<T>> : Prisma__forest_management_partnerClient<forest_management_partnerGetPayload<T> | null, null>

    /**
     * Find one Forest_management_partner that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {forest_management_partnerFindUniqueOrThrowArgs} args - Arguments to find a Forest_management_partner
     * @example
     * // Get one Forest_management_partner
     * const forest_management_partner = await prisma.forest_management_partner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends forest_management_partnerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, forest_management_partnerFindUniqueOrThrowArgs>
    ): Prisma__forest_management_partnerClient<forest_management_partnerGetPayload<T>>

    /**
     * Find the first Forest_management_partner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {forest_management_partnerFindFirstArgs} args - Arguments to find a Forest_management_partner
     * @example
     * // Get one Forest_management_partner
     * const forest_management_partner = await prisma.forest_management_partner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends forest_management_partnerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, forest_management_partnerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'forest_management_partner'> extends True ? Prisma__forest_management_partnerClient<forest_management_partnerGetPayload<T>> : Prisma__forest_management_partnerClient<forest_management_partnerGetPayload<T> | null, null>

    /**
     * Find the first Forest_management_partner that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {forest_management_partnerFindFirstOrThrowArgs} args - Arguments to find a Forest_management_partner
     * @example
     * // Get one Forest_management_partner
     * const forest_management_partner = await prisma.forest_management_partner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends forest_management_partnerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, forest_management_partnerFindFirstOrThrowArgs>
    ): Prisma__forest_management_partnerClient<forest_management_partnerGetPayload<T>>

    /**
     * Find zero or more Forest_management_partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {forest_management_partnerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forest_management_partners
     * const forest_management_partners = await prisma.forest_management_partner.findMany()
     * 
     * // Get first 10 Forest_management_partners
     * const forest_management_partners = await prisma.forest_management_partner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forest_management_partnerWithIdOnly = await prisma.forest_management_partner.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends forest_management_partnerFindManyArgs>(
      args?: SelectSubset<T, forest_management_partnerFindManyArgs>
    ): PrismaPromise<Array<forest_management_partnerGetPayload<T>>>

    /**
     * Create a Forest_management_partner.
     * @param {forest_management_partnerCreateArgs} args - Arguments to create a Forest_management_partner.
     * @example
     * // Create one Forest_management_partner
     * const Forest_management_partner = await prisma.forest_management_partner.create({
     *   data: {
     *     // ... data to create a Forest_management_partner
     *   }
     * })
     * 
    **/
    create<T extends forest_management_partnerCreateArgs>(
      args: SelectSubset<T, forest_management_partnerCreateArgs>
    ): Prisma__forest_management_partnerClient<forest_management_partnerGetPayload<T>>

    /**
     * Create many Forest_management_partners.
     *     @param {forest_management_partnerCreateManyArgs} args - Arguments to create many Forest_management_partners.
     *     @example
     *     // Create many Forest_management_partners
     *     const forest_management_partner = await prisma.forest_management_partner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends forest_management_partnerCreateManyArgs>(
      args?: SelectSubset<T, forest_management_partnerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Forest_management_partner.
     * @param {forest_management_partnerDeleteArgs} args - Arguments to delete one Forest_management_partner.
     * @example
     * // Delete one Forest_management_partner
     * const Forest_management_partner = await prisma.forest_management_partner.delete({
     *   where: {
     *     // ... filter to delete one Forest_management_partner
     *   }
     * })
     * 
    **/
    delete<T extends forest_management_partnerDeleteArgs>(
      args: SelectSubset<T, forest_management_partnerDeleteArgs>
    ): Prisma__forest_management_partnerClient<forest_management_partnerGetPayload<T>>

    /**
     * Update one Forest_management_partner.
     * @param {forest_management_partnerUpdateArgs} args - Arguments to update one Forest_management_partner.
     * @example
     * // Update one Forest_management_partner
     * const forest_management_partner = await prisma.forest_management_partner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends forest_management_partnerUpdateArgs>(
      args: SelectSubset<T, forest_management_partnerUpdateArgs>
    ): Prisma__forest_management_partnerClient<forest_management_partnerGetPayload<T>>

    /**
     * Delete zero or more Forest_management_partners.
     * @param {forest_management_partnerDeleteManyArgs} args - Arguments to filter Forest_management_partners to delete.
     * @example
     * // Delete a few Forest_management_partners
     * const { count } = await prisma.forest_management_partner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends forest_management_partnerDeleteManyArgs>(
      args?: SelectSubset<T, forest_management_partnerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forest_management_partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {forest_management_partnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forest_management_partners
     * const forest_management_partner = await prisma.forest_management_partner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends forest_management_partnerUpdateManyArgs>(
      args: SelectSubset<T, forest_management_partnerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Forest_management_partner.
     * @param {forest_management_partnerUpsertArgs} args - Arguments to update or create a Forest_management_partner.
     * @example
     * // Update or create a Forest_management_partner
     * const forest_management_partner = await prisma.forest_management_partner.upsert({
     *   create: {
     *     // ... data to create a Forest_management_partner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Forest_management_partner we want to update
     *   }
     * })
    **/
    upsert<T extends forest_management_partnerUpsertArgs>(
      args: SelectSubset<T, forest_management_partnerUpsertArgs>
    ): Prisma__forest_management_partnerClient<forest_management_partnerGetPayload<T>>

    /**
     * Find zero or more Forest_management_partners that matches the filter.
     * @param {forest_management_partnerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const forest_management_partner = await prisma.forest_management_partner.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: forest_management_partnerFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Forest_management_partner.
     * @param {forest_management_partnerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const forest_management_partner = await prisma.forest_management_partner.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: forest_management_partnerAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Forest_management_partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {forest_management_partnerCountArgs} args - Arguments to filter Forest_management_partners to count.
     * @example
     * // Count the number of Forest_management_partners
     * const count = await prisma.forest_management_partner.count({
     *   where: {
     *     // ... the filter for the Forest_management_partners we want to count
     *   }
     * })
    **/
    count<T extends forest_management_partnerCountArgs>(
      args?: Subset<T, forest_management_partnerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Forest_management_partnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Forest_management_partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Forest_management_partnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Forest_management_partnerAggregateArgs>(args: Subset<T, Forest_management_partnerAggregateArgs>): PrismaPromise<GetForest_management_partnerAggregateType<T>>

    /**
     * Group by Forest_management_partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Forest_management_partnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Forest_management_partnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Forest_management_partnerGroupByArgs['orderBy'] }
        : { orderBy?: Forest_management_partnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Forest_management_partnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForest_management_partnerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for forest_management_partner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__forest_management_partnerClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * forest_management_partner base type for findUnique actions
   */
  export type forest_management_partnerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the forest_management_partner
     */
    select?: forest_management_partnerSelect | null
    /**
     * Filter, which forest_management_partner to fetch.
     */
    where: forest_management_partnerWhereUniqueInput
  }

  /**
   * forest_management_partner findUnique
   */
  export interface forest_management_partnerFindUniqueArgs extends forest_management_partnerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * forest_management_partner findUniqueOrThrow
   */
  export type forest_management_partnerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the forest_management_partner
     */
    select?: forest_management_partnerSelect | null
    /**
     * Filter, which forest_management_partner to fetch.
     */
    where: forest_management_partnerWhereUniqueInput
  }


  /**
   * forest_management_partner base type for findFirst actions
   */
  export type forest_management_partnerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the forest_management_partner
     */
    select?: forest_management_partnerSelect | null
    /**
     * Filter, which forest_management_partner to fetch.
     */
    where?: forest_management_partnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forest_management_partners to fetch.
     */
    orderBy?: Enumerable<forest_management_partnerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for forest_management_partners.
     */
    cursor?: forest_management_partnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forest_management_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forest_management_partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of forest_management_partners.
     */
    distinct?: Enumerable<Forest_management_partnerScalarFieldEnum>
  }

  /**
   * forest_management_partner findFirst
   */
  export interface forest_management_partnerFindFirstArgs extends forest_management_partnerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * forest_management_partner findFirstOrThrow
   */
  export type forest_management_partnerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the forest_management_partner
     */
    select?: forest_management_partnerSelect | null
    /**
     * Filter, which forest_management_partner to fetch.
     */
    where?: forest_management_partnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forest_management_partners to fetch.
     */
    orderBy?: Enumerable<forest_management_partnerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for forest_management_partners.
     */
    cursor?: forest_management_partnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forest_management_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forest_management_partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of forest_management_partners.
     */
    distinct?: Enumerable<Forest_management_partnerScalarFieldEnum>
  }


  /**
   * forest_management_partner findMany
   */
  export type forest_management_partnerFindManyArgs = {
    /**
     * Select specific fields to fetch from the forest_management_partner
     */
    select?: forest_management_partnerSelect | null
    /**
     * Filter, which forest_management_partners to fetch.
     */
    where?: forest_management_partnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forest_management_partners to fetch.
     */
    orderBy?: Enumerable<forest_management_partnerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing forest_management_partners.
     */
    cursor?: forest_management_partnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forest_management_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forest_management_partners.
     */
    skip?: number
    distinct?: Enumerable<Forest_management_partnerScalarFieldEnum>
  }


  /**
   * forest_management_partner create
   */
  export type forest_management_partnerCreateArgs = {
    /**
     * Select specific fields to fetch from the forest_management_partner
     */
    select?: forest_management_partnerSelect | null
    /**
     * The data needed to create a forest_management_partner.
     */
    data: XOR<forest_management_partnerCreateInput, forest_management_partnerUncheckedCreateInput>
  }


  /**
   * forest_management_partner createMany
   */
  export type forest_management_partnerCreateManyArgs = {
    /**
     * The data used to create many forest_management_partners.
     */
    data: Enumerable<forest_management_partnerCreateManyInput>
  }


  /**
   * forest_management_partner update
   */
  export type forest_management_partnerUpdateArgs = {
    /**
     * Select specific fields to fetch from the forest_management_partner
     */
    select?: forest_management_partnerSelect | null
    /**
     * The data needed to update a forest_management_partner.
     */
    data: XOR<forest_management_partnerUpdateInput, forest_management_partnerUncheckedUpdateInput>
    /**
     * Choose, which forest_management_partner to update.
     */
    where: forest_management_partnerWhereUniqueInput
  }


  /**
   * forest_management_partner updateMany
   */
  export type forest_management_partnerUpdateManyArgs = {
    /**
     * The data used to update forest_management_partners.
     */
    data: XOR<forest_management_partnerUpdateManyMutationInput, forest_management_partnerUncheckedUpdateManyInput>
    /**
     * Filter which forest_management_partners to update
     */
    where?: forest_management_partnerWhereInput
  }


  /**
   * forest_management_partner upsert
   */
  export type forest_management_partnerUpsertArgs = {
    /**
     * Select specific fields to fetch from the forest_management_partner
     */
    select?: forest_management_partnerSelect | null
    /**
     * The filter to search for the forest_management_partner to update in case it exists.
     */
    where: forest_management_partnerWhereUniqueInput
    /**
     * In case the forest_management_partner found by the `where` argument doesn't exist, create a new forest_management_partner with this data.
     */
    create: XOR<forest_management_partnerCreateInput, forest_management_partnerUncheckedCreateInput>
    /**
     * In case the forest_management_partner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<forest_management_partnerUpdateInput, forest_management_partnerUncheckedUpdateInput>
  }


  /**
   * forest_management_partner delete
   */
  export type forest_management_partnerDeleteArgs = {
    /**
     * Select specific fields to fetch from the forest_management_partner
     */
    select?: forest_management_partnerSelect | null
    /**
     * Filter which forest_management_partner to delete.
     */
    where: forest_management_partnerWhereUniqueInput
  }


  /**
   * forest_management_partner deleteMany
   */
  export type forest_management_partnerDeleteManyArgs = {
    /**
     * Filter which forest_management_partners to delete
     */
    where?: forest_management_partnerWhereInput
  }


  /**
   * forest_management_partner findRaw
   */
  export type forest_management_partnerFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * forest_management_partner aggregateRaw
   */
  export type forest_management_partnerAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * forest_management_partner without action
   */
  export type forest_management_partnerArgs = {
    /**
     * Select specific fields to fetch from the forest_management_partner
     */
    select?: forest_management_partnerSelect | null
  }



  /**
   * Model map_config
   */


  export type AggregateMap_config = {
    _count: Map_configCountAggregateOutputType | null
    _min: Map_configMinAggregateOutputType | null
    _max: Map_configMaxAggregateOutputType | null
  }

  export type Map_configMinAggregateOutputType = {
    id: string | null
    contactPersonId: string | null
    mapStartAtHomePosition: boolean | null
    pileColoringStrategy: string | null
  }

  export type Map_configMaxAggregateOutputType = {
    id: string | null
    contactPersonId: string | null
    mapStartAtHomePosition: boolean | null
    pileColoringStrategy: string | null
  }

  export type Map_configCountAggregateOutputType = {
    id: number
    contactPersonId: number
    mapStartAtHomePosition: number
    pileColoringStrategy: number
    _all: number
  }


  export type Map_configMinAggregateInputType = {
    id?: true
    contactPersonId?: true
    mapStartAtHomePosition?: true
    pileColoringStrategy?: true
  }

  export type Map_configMaxAggregateInputType = {
    id?: true
    contactPersonId?: true
    mapStartAtHomePosition?: true
    pileColoringStrategy?: true
  }

  export type Map_configCountAggregateInputType = {
    id?: true
    contactPersonId?: true
    mapStartAtHomePosition?: true
    pileColoringStrategy?: true
    _all?: true
  }

  export type Map_configAggregateArgs = {
    /**
     * Filter which map_config to aggregate.
     */
    where?: map_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of map_configs to fetch.
     */
    orderBy?: Enumerable<map_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: map_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` map_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` map_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned map_configs
    **/
    _count?: true | Map_configCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Map_configMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Map_configMaxAggregateInputType
  }

  export type GetMap_configAggregateType<T extends Map_configAggregateArgs> = {
        [P in keyof T & keyof AggregateMap_config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMap_config[P]>
      : GetScalarType<T[P], AggregateMap_config[P]>
  }




  export type Map_configGroupByArgs = {
    where?: map_configWhereInput
    orderBy?: Enumerable<map_configOrderByWithAggregationInput>
    by: Map_configScalarFieldEnum[]
    having?: map_configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Map_configCountAggregateInputType | true
    _min?: Map_configMinAggregateInputType
    _max?: Map_configMaxAggregateInputType
  }


  export type Map_configGroupByOutputType = {
    id: string
    contactPersonId: string
    mapStartAtHomePosition: boolean
    pileColoringStrategy: string
    _count: Map_configCountAggregateOutputType | null
    _min: Map_configMinAggregateOutputType | null
    _max: Map_configMaxAggregateOutputType | null
  }

  type GetMap_configGroupByPayload<T extends Map_configGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Map_configGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Map_configGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Map_configGroupByOutputType[P]>
            : GetScalarType<T[P], Map_configGroupByOutputType[P]>
        }
      >
    >


  export type map_configSelect = {
    id?: boolean
    contactPersonId?: boolean
    layers?: boolean | Map_configLayersArgs
    mapStartAtHomePosition?: boolean
    pileColoringStrategy?: boolean
  }


  export type map_configInclude = {}

  export type map_configGetPayload<S extends boolean | null | undefined | map_configArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? map_config :
    S extends undefined ? never :
    S extends { include: any } & (map_configArgs | map_configFindManyArgs)
    ? map_config 
    : S extends { select: any } & (map_configArgs | map_configFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'layers' ? Array < Map_configLayersGetPayload<S['select'][P]>>  :  P extends keyof map_config ? map_config[P] : never
  } 
      : map_config


  type map_configCountArgs = 
    Omit<map_configFindManyArgs, 'select' | 'include'> & {
      select?: Map_configCountAggregateInputType | true
    }

  export interface map_configDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Map_config that matches the filter.
     * @param {map_configFindUniqueArgs} args - Arguments to find a Map_config
     * @example
     * // Get one Map_config
     * const map_config = await prisma.map_config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends map_configFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, map_configFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'map_config'> extends True ? Prisma__map_configClient<map_configGetPayload<T>> : Prisma__map_configClient<map_configGetPayload<T> | null, null>

    /**
     * Find one Map_config that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {map_configFindUniqueOrThrowArgs} args - Arguments to find a Map_config
     * @example
     * // Get one Map_config
     * const map_config = await prisma.map_config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends map_configFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, map_configFindUniqueOrThrowArgs>
    ): Prisma__map_configClient<map_configGetPayload<T>>

    /**
     * Find the first Map_config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_configFindFirstArgs} args - Arguments to find a Map_config
     * @example
     * // Get one Map_config
     * const map_config = await prisma.map_config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends map_configFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, map_configFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'map_config'> extends True ? Prisma__map_configClient<map_configGetPayload<T>> : Prisma__map_configClient<map_configGetPayload<T> | null, null>

    /**
     * Find the first Map_config that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_configFindFirstOrThrowArgs} args - Arguments to find a Map_config
     * @example
     * // Get one Map_config
     * const map_config = await prisma.map_config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends map_configFindFirstOrThrowArgs>(
      args?: SelectSubset<T, map_configFindFirstOrThrowArgs>
    ): Prisma__map_configClient<map_configGetPayload<T>>

    /**
     * Find zero or more Map_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_configFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Map_configs
     * const map_configs = await prisma.map_config.findMany()
     * 
     * // Get first 10 Map_configs
     * const map_configs = await prisma.map_config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const map_configWithIdOnly = await prisma.map_config.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends map_configFindManyArgs>(
      args?: SelectSubset<T, map_configFindManyArgs>
    ): PrismaPromise<Array<map_configGetPayload<T>>>

    /**
     * Create a Map_config.
     * @param {map_configCreateArgs} args - Arguments to create a Map_config.
     * @example
     * // Create one Map_config
     * const Map_config = await prisma.map_config.create({
     *   data: {
     *     // ... data to create a Map_config
     *   }
     * })
     * 
    **/
    create<T extends map_configCreateArgs>(
      args: SelectSubset<T, map_configCreateArgs>
    ): Prisma__map_configClient<map_configGetPayload<T>>

    /**
     * Create many Map_configs.
     *     @param {map_configCreateManyArgs} args - Arguments to create many Map_configs.
     *     @example
     *     // Create many Map_configs
     *     const map_config = await prisma.map_config.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends map_configCreateManyArgs>(
      args?: SelectSubset<T, map_configCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Map_config.
     * @param {map_configDeleteArgs} args - Arguments to delete one Map_config.
     * @example
     * // Delete one Map_config
     * const Map_config = await prisma.map_config.delete({
     *   where: {
     *     // ... filter to delete one Map_config
     *   }
     * })
     * 
    **/
    delete<T extends map_configDeleteArgs>(
      args: SelectSubset<T, map_configDeleteArgs>
    ): Prisma__map_configClient<map_configGetPayload<T>>

    /**
     * Update one Map_config.
     * @param {map_configUpdateArgs} args - Arguments to update one Map_config.
     * @example
     * // Update one Map_config
     * const map_config = await prisma.map_config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends map_configUpdateArgs>(
      args: SelectSubset<T, map_configUpdateArgs>
    ): Prisma__map_configClient<map_configGetPayload<T>>

    /**
     * Delete zero or more Map_configs.
     * @param {map_configDeleteManyArgs} args - Arguments to filter Map_configs to delete.
     * @example
     * // Delete a few Map_configs
     * const { count } = await prisma.map_config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends map_configDeleteManyArgs>(
      args?: SelectSubset<T, map_configDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Map_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Map_configs
     * const map_config = await prisma.map_config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends map_configUpdateManyArgs>(
      args: SelectSubset<T, map_configUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Map_config.
     * @param {map_configUpsertArgs} args - Arguments to update or create a Map_config.
     * @example
     * // Update or create a Map_config
     * const map_config = await prisma.map_config.upsert({
     *   create: {
     *     // ... data to create a Map_config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Map_config we want to update
     *   }
     * })
    **/
    upsert<T extends map_configUpsertArgs>(
      args: SelectSubset<T, map_configUpsertArgs>
    ): Prisma__map_configClient<map_configGetPayload<T>>

    /**
     * Find zero or more Map_configs that matches the filter.
     * @param {map_configFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const map_config = await prisma.map_config.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: map_configFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Map_config.
     * @param {map_configAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const map_config = await prisma.map_config.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: map_configAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Map_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_configCountArgs} args - Arguments to filter Map_configs to count.
     * @example
     * // Count the number of Map_configs
     * const count = await prisma.map_config.count({
     *   where: {
     *     // ... the filter for the Map_configs we want to count
     *   }
     * })
    **/
    count<T extends map_configCountArgs>(
      args?: Subset<T, map_configCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Map_configCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Map_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Map_configAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Map_configAggregateArgs>(args: Subset<T, Map_configAggregateArgs>): PrismaPromise<GetMap_configAggregateType<T>>

    /**
     * Group by Map_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Map_configGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Map_configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Map_configGroupByArgs['orderBy'] }
        : { orderBy?: Map_configGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Map_configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMap_configGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for map_config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__map_configClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    layers<T extends Map_configLayersArgs= {}>(args?: Subset<T, Map_configLayersArgs>): PrismaPromise<Array<Map_configLayersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * map_config base type for findUnique actions
   */
  export type map_configFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the map_config
     */
    select?: map_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: map_configInclude | null
    /**
     * Filter, which map_config to fetch.
     */
    where: map_configWhereUniqueInput
  }

  /**
   * map_config findUnique
   */
  export interface map_configFindUniqueArgs extends map_configFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * map_config findUniqueOrThrow
   */
  export type map_configFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the map_config
     */
    select?: map_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: map_configInclude | null
    /**
     * Filter, which map_config to fetch.
     */
    where: map_configWhereUniqueInput
  }


  /**
   * map_config base type for findFirst actions
   */
  export type map_configFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the map_config
     */
    select?: map_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: map_configInclude | null
    /**
     * Filter, which map_config to fetch.
     */
    where?: map_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of map_configs to fetch.
     */
    orderBy?: Enumerable<map_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for map_configs.
     */
    cursor?: map_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` map_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` map_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of map_configs.
     */
    distinct?: Enumerable<Map_configScalarFieldEnum>
  }

  /**
   * map_config findFirst
   */
  export interface map_configFindFirstArgs extends map_configFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * map_config findFirstOrThrow
   */
  export type map_configFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the map_config
     */
    select?: map_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: map_configInclude | null
    /**
     * Filter, which map_config to fetch.
     */
    where?: map_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of map_configs to fetch.
     */
    orderBy?: Enumerable<map_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for map_configs.
     */
    cursor?: map_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` map_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` map_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of map_configs.
     */
    distinct?: Enumerable<Map_configScalarFieldEnum>
  }


  /**
   * map_config findMany
   */
  export type map_configFindManyArgs = {
    /**
     * Select specific fields to fetch from the map_config
     */
    select?: map_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: map_configInclude | null
    /**
     * Filter, which map_configs to fetch.
     */
    where?: map_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of map_configs to fetch.
     */
    orderBy?: Enumerable<map_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing map_configs.
     */
    cursor?: map_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` map_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` map_configs.
     */
    skip?: number
    distinct?: Enumerable<Map_configScalarFieldEnum>
  }


  /**
   * map_config create
   */
  export type map_configCreateArgs = {
    /**
     * Select specific fields to fetch from the map_config
     */
    select?: map_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: map_configInclude | null
    /**
     * The data needed to create a map_config.
     */
    data: XOR<map_configCreateInput, map_configUncheckedCreateInput>
  }


  /**
   * map_config createMany
   */
  export type map_configCreateManyArgs = {
    /**
     * The data used to create many map_configs.
     */
    data: Enumerable<map_configCreateManyInput>
  }


  /**
   * map_config update
   */
  export type map_configUpdateArgs = {
    /**
     * Select specific fields to fetch from the map_config
     */
    select?: map_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: map_configInclude | null
    /**
     * The data needed to update a map_config.
     */
    data: XOR<map_configUpdateInput, map_configUncheckedUpdateInput>
    /**
     * Choose, which map_config to update.
     */
    where: map_configWhereUniqueInput
  }


  /**
   * map_config updateMany
   */
  export type map_configUpdateManyArgs = {
    /**
     * The data used to update map_configs.
     */
    data: XOR<map_configUpdateManyMutationInput, map_configUncheckedUpdateManyInput>
    /**
     * Filter which map_configs to update
     */
    where?: map_configWhereInput
  }


  /**
   * map_config upsert
   */
  export type map_configUpsertArgs = {
    /**
     * Select specific fields to fetch from the map_config
     */
    select?: map_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: map_configInclude | null
    /**
     * The filter to search for the map_config to update in case it exists.
     */
    where: map_configWhereUniqueInput
    /**
     * In case the map_config found by the `where` argument doesn't exist, create a new map_config with this data.
     */
    create: XOR<map_configCreateInput, map_configUncheckedCreateInput>
    /**
     * In case the map_config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<map_configUpdateInput, map_configUncheckedUpdateInput>
  }


  /**
   * map_config delete
   */
  export type map_configDeleteArgs = {
    /**
     * Select specific fields to fetch from the map_config
     */
    select?: map_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: map_configInclude | null
    /**
     * Filter which map_config to delete.
     */
    where: map_configWhereUniqueInput
  }


  /**
   * map_config deleteMany
   */
  export type map_configDeleteManyArgs = {
    /**
     * Filter which map_configs to delete
     */
    where?: map_configWhereInput
  }


  /**
   * map_config findRaw
   */
  export type map_configFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * map_config aggregateRaw
   */
  export type map_configAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * map_config without action
   */
  export type map_configArgs = {
    /**
     * Select specific fields to fetch from the map_config
     */
    select?: map_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: map_configInclude | null
  }



  /**
   * Model pile_certificates
   */


  export type AggregatePile_certificates = {
    _count: Pile_certificatesCountAggregateOutputType | null
    _min: Pile_certificatesMinAggregateOutputType | null
    _max: Pile_certificatesMaxAggregateOutputType | null
  }

  export type Pile_certificatesMinAggregateOutputType = {
    id: string | null
    expiryDate: string | null
    id_: string | null
    licenseNumber: string | null
    number: string | null
    partnerId: string | null
    type: string | null
  }

  export type Pile_certificatesMaxAggregateOutputType = {
    id: string | null
    expiryDate: string | null
    id_: string | null
    licenseNumber: string | null
    number: string | null
    partnerId: string | null
    type: string | null
  }

  export type Pile_certificatesCountAggregateOutputType = {
    id: number
    expiryDate: number
    id_: number
    licenseNumber: number
    number: number
    partnerId: number
    type: number
    _all: number
  }


  export type Pile_certificatesMinAggregateInputType = {
    id?: true
    expiryDate?: true
    id_?: true
    licenseNumber?: true
    number?: true
    partnerId?: true
    type?: true
  }

  export type Pile_certificatesMaxAggregateInputType = {
    id?: true
    expiryDate?: true
    id_?: true
    licenseNumber?: true
    number?: true
    partnerId?: true
    type?: true
  }

  export type Pile_certificatesCountAggregateInputType = {
    id?: true
    expiryDate?: true
    id_?: true
    licenseNumber?: true
    number?: true
    partnerId?: true
    type?: true
    _all?: true
  }

  export type Pile_certificatesAggregateArgs = {
    /**
     * Filter which pile_certificates to aggregate.
     */
    where?: pile_certificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_certificates to fetch.
     */
    orderBy?: Enumerable<pile_certificatesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pile_certificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pile_certificates
    **/
    _count?: true | Pile_certificatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pile_certificatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pile_certificatesMaxAggregateInputType
  }

  export type GetPile_certificatesAggregateType<T extends Pile_certificatesAggregateArgs> = {
        [P in keyof T & keyof AggregatePile_certificates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePile_certificates[P]>
      : GetScalarType<T[P], AggregatePile_certificates[P]>
  }




  export type Pile_certificatesGroupByArgs = {
    where?: pile_certificatesWhereInput
    orderBy?: Enumerable<pile_certificatesOrderByWithAggregationInput>
    by: Pile_certificatesScalarFieldEnum[]
    having?: pile_certificatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pile_certificatesCountAggregateInputType | true
    _min?: Pile_certificatesMinAggregateInputType
    _max?: Pile_certificatesMaxAggregateInputType
  }


  export type Pile_certificatesGroupByOutputType = {
    id: string
    expiryDate: string
    id_: string
    licenseNumber: string | null
    number: string
    partnerId: string
    type: string
    _count: Pile_certificatesCountAggregateOutputType | null
    _min: Pile_certificatesMinAggregateOutputType | null
    _max: Pile_certificatesMaxAggregateOutputType | null
  }

  type GetPile_certificatesGroupByPayload<T extends Pile_certificatesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Pile_certificatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pile_certificatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pile_certificatesGroupByOutputType[P]>
            : GetScalarType<T[P], Pile_certificatesGroupByOutputType[P]>
        }
      >
    >


  export type pile_certificatesSelect = {
    id?: boolean
    expiryDate?: boolean
    id_?: boolean
    licenseNumber?: boolean
    number?: boolean
    partnerId?: boolean
    type?: boolean
  }


  export type pile_certificatesGetPayload<S extends boolean | null | undefined | pile_certificatesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pile_certificates :
    S extends undefined ? never :
    S extends { include: any } & (pile_certificatesArgs | pile_certificatesFindManyArgs)
    ? pile_certificates 
    : S extends { select: any } & (pile_certificatesArgs | pile_certificatesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof pile_certificates ? pile_certificates[P] : never
  } 
      : pile_certificates


  type pile_certificatesCountArgs = 
    Omit<pile_certificatesFindManyArgs, 'select' | 'include'> & {
      select?: Pile_certificatesCountAggregateInputType | true
    }

  export interface pile_certificatesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pile_certificates that matches the filter.
     * @param {pile_certificatesFindUniqueArgs} args - Arguments to find a Pile_certificates
     * @example
     * // Get one Pile_certificates
     * const pile_certificates = await prisma.pile_certificates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pile_certificatesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pile_certificatesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pile_certificates'> extends True ? Prisma__pile_certificatesClient<pile_certificatesGetPayload<T>> : Prisma__pile_certificatesClient<pile_certificatesGetPayload<T> | null, null>

    /**
     * Find one Pile_certificates that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pile_certificatesFindUniqueOrThrowArgs} args - Arguments to find a Pile_certificates
     * @example
     * // Get one Pile_certificates
     * const pile_certificates = await prisma.pile_certificates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pile_certificatesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, pile_certificatesFindUniqueOrThrowArgs>
    ): Prisma__pile_certificatesClient<pile_certificatesGetPayload<T>>

    /**
     * Find the first Pile_certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_certificatesFindFirstArgs} args - Arguments to find a Pile_certificates
     * @example
     * // Get one Pile_certificates
     * const pile_certificates = await prisma.pile_certificates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pile_certificatesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pile_certificatesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pile_certificates'> extends True ? Prisma__pile_certificatesClient<pile_certificatesGetPayload<T>> : Prisma__pile_certificatesClient<pile_certificatesGetPayload<T> | null, null>

    /**
     * Find the first Pile_certificates that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_certificatesFindFirstOrThrowArgs} args - Arguments to find a Pile_certificates
     * @example
     * // Get one Pile_certificates
     * const pile_certificates = await prisma.pile_certificates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pile_certificatesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, pile_certificatesFindFirstOrThrowArgs>
    ): Prisma__pile_certificatesClient<pile_certificatesGetPayload<T>>

    /**
     * Find zero or more Pile_certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_certificatesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pile_certificates
     * const pile_certificates = await prisma.pile_certificates.findMany()
     * 
     * // Get first 10 Pile_certificates
     * const pile_certificates = await prisma.pile_certificates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pile_certificatesWithIdOnly = await prisma.pile_certificates.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends pile_certificatesFindManyArgs>(
      args?: SelectSubset<T, pile_certificatesFindManyArgs>
    ): PrismaPromise<Array<pile_certificatesGetPayload<T>>>

    /**
     * Create a Pile_certificates.
     * @param {pile_certificatesCreateArgs} args - Arguments to create a Pile_certificates.
     * @example
     * // Create one Pile_certificates
     * const Pile_certificates = await prisma.pile_certificates.create({
     *   data: {
     *     // ... data to create a Pile_certificates
     *   }
     * })
     * 
    **/
    create<T extends pile_certificatesCreateArgs>(
      args: SelectSubset<T, pile_certificatesCreateArgs>
    ): Prisma__pile_certificatesClient<pile_certificatesGetPayload<T>>

    /**
     * Create many Pile_certificates.
     *     @param {pile_certificatesCreateManyArgs} args - Arguments to create many Pile_certificates.
     *     @example
     *     // Create many Pile_certificates
     *     const pile_certificates = await prisma.pile_certificates.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pile_certificatesCreateManyArgs>(
      args?: SelectSubset<T, pile_certificatesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Pile_certificates.
     * @param {pile_certificatesDeleteArgs} args - Arguments to delete one Pile_certificates.
     * @example
     * // Delete one Pile_certificates
     * const Pile_certificates = await prisma.pile_certificates.delete({
     *   where: {
     *     // ... filter to delete one Pile_certificates
     *   }
     * })
     * 
    **/
    delete<T extends pile_certificatesDeleteArgs>(
      args: SelectSubset<T, pile_certificatesDeleteArgs>
    ): Prisma__pile_certificatesClient<pile_certificatesGetPayload<T>>

    /**
     * Update one Pile_certificates.
     * @param {pile_certificatesUpdateArgs} args - Arguments to update one Pile_certificates.
     * @example
     * // Update one Pile_certificates
     * const pile_certificates = await prisma.pile_certificates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pile_certificatesUpdateArgs>(
      args: SelectSubset<T, pile_certificatesUpdateArgs>
    ): Prisma__pile_certificatesClient<pile_certificatesGetPayload<T>>

    /**
     * Delete zero or more Pile_certificates.
     * @param {pile_certificatesDeleteManyArgs} args - Arguments to filter Pile_certificates to delete.
     * @example
     * // Delete a few Pile_certificates
     * const { count } = await prisma.pile_certificates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pile_certificatesDeleteManyArgs>(
      args?: SelectSubset<T, pile_certificatesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pile_certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_certificatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pile_certificates
     * const pile_certificates = await prisma.pile_certificates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pile_certificatesUpdateManyArgs>(
      args: SelectSubset<T, pile_certificatesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pile_certificates.
     * @param {pile_certificatesUpsertArgs} args - Arguments to update or create a Pile_certificates.
     * @example
     * // Update or create a Pile_certificates
     * const pile_certificates = await prisma.pile_certificates.upsert({
     *   create: {
     *     // ... data to create a Pile_certificates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pile_certificates we want to update
     *   }
     * })
    **/
    upsert<T extends pile_certificatesUpsertArgs>(
      args: SelectSubset<T, pile_certificatesUpsertArgs>
    ): Prisma__pile_certificatesClient<pile_certificatesGetPayload<T>>

    /**
     * Find zero or more Pile_certificates that matches the filter.
     * @param {pile_certificatesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pile_certificates = await prisma.pile_certificates.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: pile_certificatesFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pile_certificates.
     * @param {pile_certificatesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pile_certificates = await prisma.pile_certificates.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: pile_certificatesAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Pile_certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_certificatesCountArgs} args - Arguments to filter Pile_certificates to count.
     * @example
     * // Count the number of Pile_certificates
     * const count = await prisma.pile_certificates.count({
     *   where: {
     *     // ... the filter for the Pile_certificates we want to count
     *   }
     * })
    **/
    count<T extends pile_certificatesCountArgs>(
      args?: Subset<T, pile_certificatesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pile_certificatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pile_certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_certificatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pile_certificatesAggregateArgs>(args: Subset<T, Pile_certificatesAggregateArgs>): PrismaPromise<GetPile_certificatesAggregateType<T>>

    /**
     * Group by Pile_certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_certificatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Pile_certificatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pile_certificatesGroupByArgs['orderBy'] }
        : { orderBy?: Pile_certificatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Pile_certificatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPile_certificatesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pile_certificates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pile_certificatesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pile_certificates base type for findUnique actions
   */
  export type pile_certificatesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the pile_certificates
     */
    select?: pile_certificatesSelect | null
    /**
     * Filter, which pile_certificates to fetch.
     */
    where: pile_certificatesWhereUniqueInput
  }

  /**
   * pile_certificates findUnique
   */
  export interface pile_certificatesFindUniqueArgs extends pile_certificatesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_certificates findUniqueOrThrow
   */
  export type pile_certificatesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_certificates
     */
    select?: pile_certificatesSelect | null
    /**
     * Filter, which pile_certificates to fetch.
     */
    where: pile_certificatesWhereUniqueInput
  }


  /**
   * pile_certificates base type for findFirst actions
   */
  export type pile_certificatesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the pile_certificates
     */
    select?: pile_certificatesSelect | null
    /**
     * Filter, which pile_certificates to fetch.
     */
    where?: pile_certificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_certificates to fetch.
     */
    orderBy?: Enumerable<pile_certificatesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_certificates.
     */
    cursor?: pile_certificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_certificates.
     */
    distinct?: Enumerable<Pile_certificatesScalarFieldEnum>
  }

  /**
   * pile_certificates findFirst
   */
  export interface pile_certificatesFindFirstArgs extends pile_certificatesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_certificates findFirstOrThrow
   */
  export type pile_certificatesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_certificates
     */
    select?: pile_certificatesSelect | null
    /**
     * Filter, which pile_certificates to fetch.
     */
    where?: pile_certificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_certificates to fetch.
     */
    orderBy?: Enumerable<pile_certificatesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_certificates.
     */
    cursor?: pile_certificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_certificates.
     */
    distinct?: Enumerable<Pile_certificatesScalarFieldEnum>
  }


  /**
   * pile_certificates findMany
   */
  export type pile_certificatesFindManyArgs = {
    /**
     * Select specific fields to fetch from the pile_certificates
     */
    select?: pile_certificatesSelect | null
    /**
     * Filter, which pile_certificates to fetch.
     */
    where?: pile_certificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_certificates to fetch.
     */
    orderBy?: Enumerable<pile_certificatesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pile_certificates.
     */
    cursor?: pile_certificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_certificates.
     */
    skip?: number
    distinct?: Enumerable<Pile_certificatesScalarFieldEnum>
  }


  /**
   * pile_certificates create
   */
  export type pile_certificatesCreateArgs = {
    /**
     * Select specific fields to fetch from the pile_certificates
     */
    select?: pile_certificatesSelect | null
    /**
     * The data needed to create a pile_certificates.
     */
    data: XOR<pile_certificatesCreateInput, pile_certificatesUncheckedCreateInput>
  }


  /**
   * pile_certificates createMany
   */
  export type pile_certificatesCreateManyArgs = {
    /**
     * The data used to create many pile_certificates.
     */
    data: Enumerable<pile_certificatesCreateManyInput>
  }


  /**
   * pile_certificates update
   */
  export type pile_certificatesUpdateArgs = {
    /**
     * Select specific fields to fetch from the pile_certificates
     */
    select?: pile_certificatesSelect | null
    /**
     * The data needed to update a pile_certificates.
     */
    data: XOR<pile_certificatesUpdateInput, pile_certificatesUncheckedUpdateInput>
    /**
     * Choose, which pile_certificates to update.
     */
    where: pile_certificatesWhereUniqueInput
  }


  /**
   * pile_certificates updateMany
   */
  export type pile_certificatesUpdateManyArgs = {
    /**
     * The data used to update pile_certificates.
     */
    data: XOR<pile_certificatesUpdateManyMutationInput, pile_certificatesUncheckedUpdateManyInput>
    /**
     * Filter which pile_certificates to update
     */
    where?: pile_certificatesWhereInput
  }


  /**
   * pile_certificates upsert
   */
  export type pile_certificatesUpsertArgs = {
    /**
     * Select specific fields to fetch from the pile_certificates
     */
    select?: pile_certificatesSelect | null
    /**
     * The filter to search for the pile_certificates to update in case it exists.
     */
    where: pile_certificatesWhereUniqueInput
    /**
     * In case the pile_certificates found by the `where` argument doesn't exist, create a new pile_certificates with this data.
     */
    create: XOR<pile_certificatesCreateInput, pile_certificatesUncheckedCreateInput>
    /**
     * In case the pile_certificates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pile_certificatesUpdateInput, pile_certificatesUncheckedUpdateInput>
  }


  /**
   * pile_certificates delete
   */
  export type pile_certificatesDeleteArgs = {
    /**
     * Select specific fields to fetch from the pile_certificates
     */
    select?: pile_certificatesSelect | null
    /**
     * Filter which pile_certificates to delete.
     */
    where: pile_certificatesWhereUniqueInput
  }


  /**
   * pile_certificates deleteMany
   */
  export type pile_certificatesDeleteManyArgs = {
    /**
     * Filter which pile_certificates to delete
     */
    where?: pile_certificatesWhereInput
  }


  /**
   * pile_certificates findRaw
   */
  export type pile_certificatesFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_certificates aggregateRaw
   */
  export type pile_certificatesAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_certificates without action
   */
  export type pile_certificatesArgs = {
    /**
     * Select specific fields to fetch from the pile_certificates
     */
    select?: pile_certificatesSelect | null
  }



  /**
   * Model pile_contactperson
   */


  export type AggregatePile_contactperson = {
    _count: Pile_contactpersonCountAggregateOutputType | null
    _avg: Pile_contactpersonAvgAggregateOutputType | null
    _sum: Pile_contactpersonSumAggregateOutputType | null
    _min: Pile_contactpersonMinAggregateOutputType | null
    _max: Pile_contactpersonMaxAggregateOutputType | null
  }

  export type Pile_contactpersonAvgAggregateOutputType = {
    pileNumberRangeIndex: number | null
  }

  export type Pile_contactpersonSumAggregateOutputType = {
    pileNumberRangeIndex: number | null
  }

  export type Pile_contactpersonMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    id_: string | null
    landlineNumber: string | null
    lastName: string | null
    locale: string | null
    partnerId: string | null
    pileNumberRangeIndex: number | null
    salutation: string | null
  }

  export type Pile_contactpersonMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    id_: string | null
    landlineNumber: string | null
    lastName: string | null
    locale: string | null
    partnerId: string | null
    pileNumberRangeIndex: number | null
    salutation: string | null
  }

  export type Pile_contactpersonCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    id_: number
    landlineNumber: number
    lastName: number
    locale: number
    mandatePartnerIds: number
    partnerId: number
    pileNumberRangeIndex: number
    roles: number
    salutation: number
    _all: number
  }


  export type Pile_contactpersonAvgAggregateInputType = {
    pileNumberRangeIndex?: true
  }

  export type Pile_contactpersonSumAggregateInputType = {
    pileNumberRangeIndex?: true
  }

  export type Pile_contactpersonMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    id_?: true
    landlineNumber?: true
    lastName?: true
    locale?: true
    partnerId?: true
    pileNumberRangeIndex?: true
    salutation?: true
  }

  export type Pile_contactpersonMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    id_?: true
    landlineNumber?: true
    lastName?: true
    locale?: true
    partnerId?: true
    pileNumberRangeIndex?: true
    salutation?: true
  }

  export type Pile_contactpersonCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    id_?: true
    landlineNumber?: true
    lastName?: true
    locale?: true
    mandatePartnerIds?: true
    partnerId?: true
    pileNumberRangeIndex?: true
    roles?: true
    salutation?: true
    _all?: true
  }

  export type Pile_contactpersonAggregateArgs = {
    /**
     * Filter which pile_contactperson to aggregate.
     */
    where?: pile_contactpersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_contactpeople to fetch.
     */
    orderBy?: Enumerable<pile_contactpersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pile_contactpersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_contactpeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_contactpeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pile_contactpeople
    **/
    _count?: true | Pile_contactpersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pile_contactpersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pile_contactpersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pile_contactpersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pile_contactpersonMaxAggregateInputType
  }

  export type GetPile_contactpersonAggregateType<T extends Pile_contactpersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePile_contactperson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePile_contactperson[P]>
      : GetScalarType<T[P], AggregatePile_contactperson[P]>
  }




  export type Pile_contactpersonGroupByArgs = {
    where?: pile_contactpersonWhereInput
    orderBy?: Enumerable<pile_contactpersonOrderByWithAggregationInput>
    by: Pile_contactpersonScalarFieldEnum[]
    having?: pile_contactpersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pile_contactpersonCountAggregateInputType | true
    _avg?: Pile_contactpersonAvgAggregateInputType
    _sum?: Pile_contactpersonSumAggregateInputType
    _min?: Pile_contactpersonMinAggregateInputType
    _max?: Pile_contactpersonMaxAggregateInputType
  }


  export type Pile_contactpersonGroupByOutputType = {
    id: string
    email: string | null
    firstName: string
    id_: string
    landlineNumber: string | null
    lastName: string
    locale: string | null
    mandatePartnerIds: string[]
    partnerId: string
    pileNumberRangeIndex: number | null
    roles: string[]
    salutation: string | null
    _count: Pile_contactpersonCountAggregateOutputType | null
    _avg: Pile_contactpersonAvgAggregateOutputType | null
    _sum: Pile_contactpersonSumAggregateOutputType | null
    _min: Pile_contactpersonMinAggregateOutputType | null
    _max: Pile_contactpersonMaxAggregateOutputType | null
  }

  type GetPile_contactpersonGroupByPayload<T extends Pile_contactpersonGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Pile_contactpersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pile_contactpersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pile_contactpersonGroupByOutputType[P]>
            : GetScalarType<T[P], Pile_contactpersonGroupByOutputType[P]>
        }
      >
    >


  export type pile_contactpersonSelect = {
    id?: boolean
    accessRights?: boolean | Pile_contactpersonAccessRightsArgs
    email?: boolean
    firstName?: boolean
    id_?: boolean
    landlineNumber?: boolean
    lastName?: boolean
    locale?: boolean
    mandatePartnerIds?: boolean
    partnerId?: boolean
    pileNumberRangeIndex?: boolean
    roles?: boolean
    salutation?: boolean
  }


  export type pile_contactpersonInclude = {}

  export type pile_contactpersonGetPayload<S extends boolean | null | undefined | pile_contactpersonArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pile_contactperson :
    S extends undefined ? never :
    S extends { include: any } & (pile_contactpersonArgs | pile_contactpersonFindManyArgs)
    ? pile_contactperson 
    : S extends { select: any } & (pile_contactpersonArgs | pile_contactpersonFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accessRights' ? Array < Pile_contactpersonAccessRightsGetPayload<S['select'][P]>>  :  P extends keyof pile_contactperson ? pile_contactperson[P] : never
  } 
      : pile_contactperson


  type pile_contactpersonCountArgs = 
    Omit<pile_contactpersonFindManyArgs, 'select' | 'include'> & {
      select?: Pile_contactpersonCountAggregateInputType | true
    }

  export interface pile_contactpersonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pile_contactperson that matches the filter.
     * @param {pile_contactpersonFindUniqueArgs} args - Arguments to find a Pile_contactperson
     * @example
     * // Get one Pile_contactperson
     * const pile_contactperson = await prisma.pile_contactperson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pile_contactpersonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pile_contactpersonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pile_contactperson'> extends True ? Prisma__pile_contactpersonClient<pile_contactpersonGetPayload<T>> : Prisma__pile_contactpersonClient<pile_contactpersonGetPayload<T> | null, null>

    /**
     * Find one Pile_contactperson that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pile_contactpersonFindUniqueOrThrowArgs} args - Arguments to find a Pile_contactperson
     * @example
     * // Get one Pile_contactperson
     * const pile_contactperson = await prisma.pile_contactperson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pile_contactpersonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, pile_contactpersonFindUniqueOrThrowArgs>
    ): Prisma__pile_contactpersonClient<pile_contactpersonGetPayload<T>>

    /**
     * Find the first Pile_contactperson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_contactpersonFindFirstArgs} args - Arguments to find a Pile_contactperson
     * @example
     * // Get one Pile_contactperson
     * const pile_contactperson = await prisma.pile_contactperson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pile_contactpersonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pile_contactpersonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pile_contactperson'> extends True ? Prisma__pile_contactpersonClient<pile_contactpersonGetPayload<T>> : Prisma__pile_contactpersonClient<pile_contactpersonGetPayload<T> | null, null>

    /**
     * Find the first Pile_contactperson that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_contactpersonFindFirstOrThrowArgs} args - Arguments to find a Pile_contactperson
     * @example
     * // Get one Pile_contactperson
     * const pile_contactperson = await prisma.pile_contactperson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pile_contactpersonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, pile_contactpersonFindFirstOrThrowArgs>
    ): Prisma__pile_contactpersonClient<pile_contactpersonGetPayload<T>>

    /**
     * Find zero or more Pile_contactpeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_contactpersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pile_contactpeople
     * const pile_contactpeople = await prisma.pile_contactperson.findMany()
     * 
     * // Get first 10 Pile_contactpeople
     * const pile_contactpeople = await prisma.pile_contactperson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pile_contactpersonWithIdOnly = await prisma.pile_contactperson.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends pile_contactpersonFindManyArgs>(
      args?: SelectSubset<T, pile_contactpersonFindManyArgs>
    ): PrismaPromise<Array<pile_contactpersonGetPayload<T>>>

    /**
     * Create a Pile_contactperson.
     * @param {pile_contactpersonCreateArgs} args - Arguments to create a Pile_contactperson.
     * @example
     * // Create one Pile_contactperson
     * const Pile_contactperson = await prisma.pile_contactperson.create({
     *   data: {
     *     // ... data to create a Pile_contactperson
     *   }
     * })
     * 
    **/
    create<T extends pile_contactpersonCreateArgs>(
      args: SelectSubset<T, pile_contactpersonCreateArgs>
    ): Prisma__pile_contactpersonClient<pile_contactpersonGetPayload<T>>

    /**
     * Create many Pile_contactpeople.
     *     @param {pile_contactpersonCreateManyArgs} args - Arguments to create many Pile_contactpeople.
     *     @example
     *     // Create many Pile_contactpeople
     *     const pile_contactperson = await prisma.pile_contactperson.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pile_contactpersonCreateManyArgs>(
      args?: SelectSubset<T, pile_contactpersonCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Pile_contactperson.
     * @param {pile_contactpersonDeleteArgs} args - Arguments to delete one Pile_contactperson.
     * @example
     * // Delete one Pile_contactperson
     * const Pile_contactperson = await prisma.pile_contactperson.delete({
     *   where: {
     *     // ... filter to delete one Pile_contactperson
     *   }
     * })
     * 
    **/
    delete<T extends pile_contactpersonDeleteArgs>(
      args: SelectSubset<T, pile_contactpersonDeleteArgs>
    ): Prisma__pile_contactpersonClient<pile_contactpersonGetPayload<T>>

    /**
     * Update one Pile_contactperson.
     * @param {pile_contactpersonUpdateArgs} args - Arguments to update one Pile_contactperson.
     * @example
     * // Update one Pile_contactperson
     * const pile_contactperson = await prisma.pile_contactperson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pile_contactpersonUpdateArgs>(
      args: SelectSubset<T, pile_contactpersonUpdateArgs>
    ): Prisma__pile_contactpersonClient<pile_contactpersonGetPayload<T>>

    /**
     * Delete zero or more Pile_contactpeople.
     * @param {pile_contactpersonDeleteManyArgs} args - Arguments to filter Pile_contactpeople to delete.
     * @example
     * // Delete a few Pile_contactpeople
     * const { count } = await prisma.pile_contactperson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pile_contactpersonDeleteManyArgs>(
      args?: SelectSubset<T, pile_contactpersonDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pile_contactpeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_contactpersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pile_contactpeople
     * const pile_contactperson = await prisma.pile_contactperson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pile_contactpersonUpdateManyArgs>(
      args: SelectSubset<T, pile_contactpersonUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pile_contactperson.
     * @param {pile_contactpersonUpsertArgs} args - Arguments to update or create a Pile_contactperson.
     * @example
     * // Update or create a Pile_contactperson
     * const pile_contactperson = await prisma.pile_contactperson.upsert({
     *   create: {
     *     // ... data to create a Pile_contactperson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pile_contactperson we want to update
     *   }
     * })
    **/
    upsert<T extends pile_contactpersonUpsertArgs>(
      args: SelectSubset<T, pile_contactpersonUpsertArgs>
    ): Prisma__pile_contactpersonClient<pile_contactpersonGetPayload<T>>

    /**
     * Find zero or more Pile_contactpeople that matches the filter.
     * @param {pile_contactpersonFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pile_contactperson = await prisma.pile_contactperson.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: pile_contactpersonFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pile_contactperson.
     * @param {pile_contactpersonAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pile_contactperson = await prisma.pile_contactperson.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: pile_contactpersonAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Pile_contactpeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_contactpersonCountArgs} args - Arguments to filter Pile_contactpeople to count.
     * @example
     * // Count the number of Pile_contactpeople
     * const count = await prisma.pile_contactperson.count({
     *   where: {
     *     // ... the filter for the Pile_contactpeople we want to count
     *   }
     * })
    **/
    count<T extends pile_contactpersonCountArgs>(
      args?: Subset<T, pile_contactpersonCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pile_contactpersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pile_contactperson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_contactpersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pile_contactpersonAggregateArgs>(args: Subset<T, Pile_contactpersonAggregateArgs>): PrismaPromise<GetPile_contactpersonAggregateType<T>>

    /**
     * Group by Pile_contactperson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_contactpersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Pile_contactpersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pile_contactpersonGroupByArgs['orderBy'] }
        : { orderBy?: Pile_contactpersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Pile_contactpersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPile_contactpersonGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pile_contactperson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pile_contactpersonClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accessRights<T extends Pile_contactpersonAccessRightsArgs= {}>(args?: Subset<T, Pile_contactpersonAccessRightsArgs>): PrismaPromise<Array<Pile_contactpersonAccessRightsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pile_contactperson base type for findUnique actions
   */
  export type pile_contactpersonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the pile_contactperson
     */
    select?: pile_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_contactpersonInclude | null
    /**
     * Filter, which pile_contactperson to fetch.
     */
    where: pile_contactpersonWhereUniqueInput
  }

  /**
   * pile_contactperson findUnique
   */
  export interface pile_contactpersonFindUniqueArgs extends pile_contactpersonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_contactperson findUniqueOrThrow
   */
  export type pile_contactpersonFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_contactperson
     */
    select?: pile_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_contactpersonInclude | null
    /**
     * Filter, which pile_contactperson to fetch.
     */
    where: pile_contactpersonWhereUniqueInput
  }


  /**
   * pile_contactperson base type for findFirst actions
   */
  export type pile_contactpersonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the pile_contactperson
     */
    select?: pile_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_contactpersonInclude | null
    /**
     * Filter, which pile_contactperson to fetch.
     */
    where?: pile_contactpersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_contactpeople to fetch.
     */
    orderBy?: Enumerable<pile_contactpersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_contactpeople.
     */
    cursor?: pile_contactpersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_contactpeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_contactpeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_contactpeople.
     */
    distinct?: Enumerable<Pile_contactpersonScalarFieldEnum>
  }

  /**
   * pile_contactperson findFirst
   */
  export interface pile_contactpersonFindFirstArgs extends pile_contactpersonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_contactperson findFirstOrThrow
   */
  export type pile_contactpersonFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_contactperson
     */
    select?: pile_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_contactpersonInclude | null
    /**
     * Filter, which pile_contactperson to fetch.
     */
    where?: pile_contactpersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_contactpeople to fetch.
     */
    orderBy?: Enumerable<pile_contactpersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_contactpeople.
     */
    cursor?: pile_contactpersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_contactpeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_contactpeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_contactpeople.
     */
    distinct?: Enumerable<Pile_contactpersonScalarFieldEnum>
  }


  /**
   * pile_contactperson findMany
   */
  export type pile_contactpersonFindManyArgs = {
    /**
     * Select specific fields to fetch from the pile_contactperson
     */
    select?: pile_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_contactpersonInclude | null
    /**
     * Filter, which pile_contactpeople to fetch.
     */
    where?: pile_contactpersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_contactpeople to fetch.
     */
    orderBy?: Enumerable<pile_contactpersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pile_contactpeople.
     */
    cursor?: pile_contactpersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_contactpeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_contactpeople.
     */
    skip?: number
    distinct?: Enumerable<Pile_contactpersonScalarFieldEnum>
  }


  /**
   * pile_contactperson create
   */
  export type pile_contactpersonCreateArgs = {
    /**
     * Select specific fields to fetch from the pile_contactperson
     */
    select?: pile_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_contactpersonInclude | null
    /**
     * The data needed to create a pile_contactperson.
     */
    data: XOR<pile_contactpersonCreateInput, pile_contactpersonUncheckedCreateInput>
  }


  /**
   * pile_contactperson createMany
   */
  export type pile_contactpersonCreateManyArgs = {
    /**
     * The data used to create many pile_contactpeople.
     */
    data: Enumerable<pile_contactpersonCreateManyInput>
  }


  /**
   * pile_contactperson update
   */
  export type pile_contactpersonUpdateArgs = {
    /**
     * Select specific fields to fetch from the pile_contactperson
     */
    select?: pile_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_contactpersonInclude | null
    /**
     * The data needed to update a pile_contactperson.
     */
    data: XOR<pile_contactpersonUpdateInput, pile_contactpersonUncheckedUpdateInput>
    /**
     * Choose, which pile_contactperson to update.
     */
    where: pile_contactpersonWhereUniqueInput
  }


  /**
   * pile_contactperson updateMany
   */
  export type pile_contactpersonUpdateManyArgs = {
    /**
     * The data used to update pile_contactpeople.
     */
    data: XOR<pile_contactpersonUpdateManyMutationInput, pile_contactpersonUncheckedUpdateManyInput>
    /**
     * Filter which pile_contactpeople to update
     */
    where?: pile_contactpersonWhereInput
  }


  /**
   * pile_contactperson upsert
   */
  export type pile_contactpersonUpsertArgs = {
    /**
     * Select specific fields to fetch from the pile_contactperson
     */
    select?: pile_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_contactpersonInclude | null
    /**
     * The filter to search for the pile_contactperson to update in case it exists.
     */
    where: pile_contactpersonWhereUniqueInput
    /**
     * In case the pile_contactperson found by the `where` argument doesn't exist, create a new pile_contactperson with this data.
     */
    create: XOR<pile_contactpersonCreateInput, pile_contactpersonUncheckedCreateInput>
    /**
     * In case the pile_contactperson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pile_contactpersonUpdateInput, pile_contactpersonUncheckedUpdateInput>
  }


  /**
   * pile_contactperson delete
   */
  export type pile_contactpersonDeleteArgs = {
    /**
     * Select specific fields to fetch from the pile_contactperson
     */
    select?: pile_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_contactpersonInclude | null
    /**
     * Filter which pile_contactperson to delete.
     */
    where: pile_contactpersonWhereUniqueInput
  }


  /**
   * pile_contactperson deleteMany
   */
  export type pile_contactpersonDeleteManyArgs = {
    /**
     * Filter which pile_contactpeople to delete
     */
    where?: pile_contactpersonWhereInput
  }


  /**
   * pile_contactperson findRaw
   */
  export type pile_contactpersonFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_contactperson aggregateRaw
   */
  export type pile_contactpersonAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_contactperson without action
   */
  export type pile_contactpersonArgs = {
    /**
     * Select specific fields to fetch from the pile_contactperson
     */
    select?: pile_contactpersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_contactpersonInclude | null
  }



  /**
   * Model pile_intermediatestorages
   */


  export type AggregatePile_intermediatestorages = {
    _count: Pile_intermediatestoragesCountAggregateOutputType | null
    _avg: Pile_intermediatestoragesAvgAggregateOutputType | null
    _sum: Pile_intermediatestoragesSumAggregateOutputType | null
    _min: Pile_intermediatestoragesMinAggregateOutputType | null
    _max: Pile_intermediatestoragesMaxAggregateOutputType | null
  }

  export type Pile_intermediatestoragesAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type Pile_intermediatestoragesSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type Pile_intermediatestoragesMinAggregateOutputType = {
    id: string | null
    city: string | null
    designation: string | null
    district: string | null
    id_: string | null
    latitude: number | null
    longitude: number | null
    parcel: string | null
    partnerId: string | null
    state: string | null
  }

  export type Pile_intermediatestoragesMaxAggregateOutputType = {
    id: string | null
    city: string | null
    designation: string | null
    district: string | null
    id_: string | null
    latitude: number | null
    longitude: number | null
    parcel: string | null
    partnerId: string | null
    state: string | null
  }

  export type Pile_intermediatestoragesCountAggregateOutputType = {
    id: number
    city: number
    designation: number
    district: number
    id_: number
    latitude: number
    longitude: number
    parcel: number
    partnerId: number
    state: number
    _all: number
  }


  export type Pile_intermediatestoragesAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type Pile_intermediatestoragesSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type Pile_intermediatestoragesMinAggregateInputType = {
    id?: true
    city?: true
    designation?: true
    district?: true
    id_?: true
    latitude?: true
    longitude?: true
    parcel?: true
    partnerId?: true
    state?: true
  }

  export type Pile_intermediatestoragesMaxAggregateInputType = {
    id?: true
    city?: true
    designation?: true
    district?: true
    id_?: true
    latitude?: true
    longitude?: true
    parcel?: true
    partnerId?: true
    state?: true
  }

  export type Pile_intermediatestoragesCountAggregateInputType = {
    id?: true
    city?: true
    designation?: true
    district?: true
    id_?: true
    latitude?: true
    longitude?: true
    parcel?: true
    partnerId?: true
    state?: true
    _all?: true
  }

  export type Pile_intermediatestoragesAggregateArgs = {
    /**
     * Filter which pile_intermediatestorages to aggregate.
     */
    where?: pile_intermediatestoragesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_intermediatestorages to fetch.
     */
    orderBy?: Enumerable<pile_intermediatestoragesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pile_intermediatestoragesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_intermediatestorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_intermediatestorages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pile_intermediatestorages
    **/
    _count?: true | Pile_intermediatestoragesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pile_intermediatestoragesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pile_intermediatestoragesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pile_intermediatestoragesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pile_intermediatestoragesMaxAggregateInputType
  }

  export type GetPile_intermediatestoragesAggregateType<T extends Pile_intermediatestoragesAggregateArgs> = {
        [P in keyof T & keyof AggregatePile_intermediatestorages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePile_intermediatestorages[P]>
      : GetScalarType<T[P], AggregatePile_intermediatestorages[P]>
  }




  export type Pile_intermediatestoragesGroupByArgs = {
    where?: pile_intermediatestoragesWhereInput
    orderBy?: Enumerable<pile_intermediatestoragesOrderByWithAggregationInput>
    by: Pile_intermediatestoragesScalarFieldEnum[]
    having?: pile_intermediatestoragesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pile_intermediatestoragesCountAggregateInputType | true
    _avg?: Pile_intermediatestoragesAvgAggregateInputType
    _sum?: Pile_intermediatestoragesSumAggregateInputType
    _min?: Pile_intermediatestoragesMinAggregateInputType
    _max?: Pile_intermediatestoragesMaxAggregateInputType
  }


  export type Pile_intermediatestoragesGroupByOutputType = {
    id: string
    city: string | null
    designation: string | null
    district: string | null
    id_: string
    latitude: number
    longitude: number
    parcel: string | null
    partnerId: string
    state: string | null
    _count: Pile_intermediatestoragesCountAggregateOutputType | null
    _avg: Pile_intermediatestoragesAvgAggregateOutputType | null
    _sum: Pile_intermediatestoragesSumAggregateOutputType | null
    _min: Pile_intermediatestoragesMinAggregateOutputType | null
    _max: Pile_intermediatestoragesMaxAggregateOutputType | null
  }

  type GetPile_intermediatestoragesGroupByPayload<T extends Pile_intermediatestoragesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Pile_intermediatestoragesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pile_intermediatestoragesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pile_intermediatestoragesGroupByOutputType[P]>
            : GetScalarType<T[P], Pile_intermediatestoragesGroupByOutputType[P]>
        }
      >
    >


  export type pile_intermediatestoragesSelect = {
    id?: boolean
    city?: boolean
    designation?: boolean
    district?: boolean
    id_?: boolean
    latitude?: boolean
    longitude?: boolean
    parcel?: boolean
    partnerId?: boolean
    state?: boolean
  }


  export type pile_intermediatestoragesGetPayload<S extends boolean | null | undefined | pile_intermediatestoragesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pile_intermediatestorages :
    S extends undefined ? never :
    S extends { include: any } & (pile_intermediatestoragesArgs | pile_intermediatestoragesFindManyArgs)
    ? pile_intermediatestorages 
    : S extends { select: any } & (pile_intermediatestoragesArgs | pile_intermediatestoragesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof pile_intermediatestorages ? pile_intermediatestorages[P] : never
  } 
      : pile_intermediatestorages


  type pile_intermediatestoragesCountArgs = 
    Omit<pile_intermediatestoragesFindManyArgs, 'select' | 'include'> & {
      select?: Pile_intermediatestoragesCountAggregateInputType | true
    }

  export interface pile_intermediatestoragesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pile_intermediatestorages that matches the filter.
     * @param {pile_intermediatestoragesFindUniqueArgs} args - Arguments to find a Pile_intermediatestorages
     * @example
     * // Get one Pile_intermediatestorages
     * const pile_intermediatestorages = await prisma.pile_intermediatestorages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pile_intermediatestoragesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pile_intermediatestoragesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pile_intermediatestorages'> extends True ? Prisma__pile_intermediatestoragesClient<pile_intermediatestoragesGetPayload<T>> : Prisma__pile_intermediatestoragesClient<pile_intermediatestoragesGetPayload<T> | null, null>

    /**
     * Find one Pile_intermediatestorages that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pile_intermediatestoragesFindUniqueOrThrowArgs} args - Arguments to find a Pile_intermediatestorages
     * @example
     * // Get one Pile_intermediatestorages
     * const pile_intermediatestorages = await prisma.pile_intermediatestorages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pile_intermediatestoragesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, pile_intermediatestoragesFindUniqueOrThrowArgs>
    ): Prisma__pile_intermediatestoragesClient<pile_intermediatestoragesGetPayload<T>>

    /**
     * Find the first Pile_intermediatestorages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_intermediatestoragesFindFirstArgs} args - Arguments to find a Pile_intermediatestorages
     * @example
     * // Get one Pile_intermediatestorages
     * const pile_intermediatestorages = await prisma.pile_intermediatestorages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pile_intermediatestoragesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pile_intermediatestoragesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pile_intermediatestorages'> extends True ? Prisma__pile_intermediatestoragesClient<pile_intermediatestoragesGetPayload<T>> : Prisma__pile_intermediatestoragesClient<pile_intermediatestoragesGetPayload<T> | null, null>

    /**
     * Find the first Pile_intermediatestorages that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_intermediatestoragesFindFirstOrThrowArgs} args - Arguments to find a Pile_intermediatestorages
     * @example
     * // Get one Pile_intermediatestorages
     * const pile_intermediatestorages = await prisma.pile_intermediatestorages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pile_intermediatestoragesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, pile_intermediatestoragesFindFirstOrThrowArgs>
    ): Prisma__pile_intermediatestoragesClient<pile_intermediatestoragesGetPayload<T>>

    /**
     * Find zero or more Pile_intermediatestorages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_intermediatestoragesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pile_intermediatestorages
     * const pile_intermediatestorages = await prisma.pile_intermediatestorages.findMany()
     * 
     * // Get first 10 Pile_intermediatestorages
     * const pile_intermediatestorages = await prisma.pile_intermediatestorages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pile_intermediatestoragesWithIdOnly = await prisma.pile_intermediatestorages.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends pile_intermediatestoragesFindManyArgs>(
      args?: SelectSubset<T, pile_intermediatestoragesFindManyArgs>
    ): PrismaPromise<Array<pile_intermediatestoragesGetPayload<T>>>

    /**
     * Create a Pile_intermediatestorages.
     * @param {pile_intermediatestoragesCreateArgs} args - Arguments to create a Pile_intermediatestorages.
     * @example
     * // Create one Pile_intermediatestorages
     * const Pile_intermediatestorages = await prisma.pile_intermediatestorages.create({
     *   data: {
     *     // ... data to create a Pile_intermediatestorages
     *   }
     * })
     * 
    **/
    create<T extends pile_intermediatestoragesCreateArgs>(
      args: SelectSubset<T, pile_intermediatestoragesCreateArgs>
    ): Prisma__pile_intermediatestoragesClient<pile_intermediatestoragesGetPayload<T>>

    /**
     * Create many Pile_intermediatestorages.
     *     @param {pile_intermediatestoragesCreateManyArgs} args - Arguments to create many Pile_intermediatestorages.
     *     @example
     *     // Create many Pile_intermediatestorages
     *     const pile_intermediatestorages = await prisma.pile_intermediatestorages.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pile_intermediatestoragesCreateManyArgs>(
      args?: SelectSubset<T, pile_intermediatestoragesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Pile_intermediatestorages.
     * @param {pile_intermediatestoragesDeleteArgs} args - Arguments to delete one Pile_intermediatestorages.
     * @example
     * // Delete one Pile_intermediatestorages
     * const Pile_intermediatestorages = await prisma.pile_intermediatestorages.delete({
     *   where: {
     *     // ... filter to delete one Pile_intermediatestorages
     *   }
     * })
     * 
    **/
    delete<T extends pile_intermediatestoragesDeleteArgs>(
      args: SelectSubset<T, pile_intermediatestoragesDeleteArgs>
    ): Prisma__pile_intermediatestoragesClient<pile_intermediatestoragesGetPayload<T>>

    /**
     * Update one Pile_intermediatestorages.
     * @param {pile_intermediatestoragesUpdateArgs} args - Arguments to update one Pile_intermediatestorages.
     * @example
     * // Update one Pile_intermediatestorages
     * const pile_intermediatestorages = await prisma.pile_intermediatestorages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pile_intermediatestoragesUpdateArgs>(
      args: SelectSubset<T, pile_intermediatestoragesUpdateArgs>
    ): Prisma__pile_intermediatestoragesClient<pile_intermediatestoragesGetPayload<T>>

    /**
     * Delete zero or more Pile_intermediatestorages.
     * @param {pile_intermediatestoragesDeleteManyArgs} args - Arguments to filter Pile_intermediatestorages to delete.
     * @example
     * // Delete a few Pile_intermediatestorages
     * const { count } = await prisma.pile_intermediatestorages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pile_intermediatestoragesDeleteManyArgs>(
      args?: SelectSubset<T, pile_intermediatestoragesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pile_intermediatestorages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_intermediatestoragesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pile_intermediatestorages
     * const pile_intermediatestorages = await prisma.pile_intermediatestorages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pile_intermediatestoragesUpdateManyArgs>(
      args: SelectSubset<T, pile_intermediatestoragesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pile_intermediatestorages.
     * @param {pile_intermediatestoragesUpsertArgs} args - Arguments to update or create a Pile_intermediatestorages.
     * @example
     * // Update or create a Pile_intermediatestorages
     * const pile_intermediatestorages = await prisma.pile_intermediatestorages.upsert({
     *   create: {
     *     // ... data to create a Pile_intermediatestorages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pile_intermediatestorages we want to update
     *   }
     * })
    **/
    upsert<T extends pile_intermediatestoragesUpsertArgs>(
      args: SelectSubset<T, pile_intermediatestoragesUpsertArgs>
    ): Prisma__pile_intermediatestoragesClient<pile_intermediatestoragesGetPayload<T>>

    /**
     * Find zero or more Pile_intermediatestorages that matches the filter.
     * @param {pile_intermediatestoragesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pile_intermediatestorages = await prisma.pile_intermediatestorages.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: pile_intermediatestoragesFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pile_intermediatestorages.
     * @param {pile_intermediatestoragesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pile_intermediatestorages = await prisma.pile_intermediatestorages.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: pile_intermediatestoragesAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Pile_intermediatestorages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_intermediatestoragesCountArgs} args - Arguments to filter Pile_intermediatestorages to count.
     * @example
     * // Count the number of Pile_intermediatestorages
     * const count = await prisma.pile_intermediatestorages.count({
     *   where: {
     *     // ... the filter for the Pile_intermediatestorages we want to count
     *   }
     * })
    **/
    count<T extends pile_intermediatestoragesCountArgs>(
      args?: Subset<T, pile_intermediatestoragesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pile_intermediatestoragesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pile_intermediatestorages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_intermediatestoragesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pile_intermediatestoragesAggregateArgs>(args: Subset<T, Pile_intermediatestoragesAggregateArgs>): PrismaPromise<GetPile_intermediatestoragesAggregateType<T>>

    /**
     * Group by Pile_intermediatestorages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_intermediatestoragesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Pile_intermediatestoragesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pile_intermediatestoragesGroupByArgs['orderBy'] }
        : { orderBy?: Pile_intermediatestoragesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Pile_intermediatestoragesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPile_intermediatestoragesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pile_intermediatestorages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pile_intermediatestoragesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pile_intermediatestorages base type for findUnique actions
   */
  export type pile_intermediatestoragesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the pile_intermediatestorages
     */
    select?: pile_intermediatestoragesSelect | null
    /**
     * Filter, which pile_intermediatestorages to fetch.
     */
    where: pile_intermediatestoragesWhereUniqueInput
  }

  /**
   * pile_intermediatestorages findUnique
   */
  export interface pile_intermediatestoragesFindUniqueArgs extends pile_intermediatestoragesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_intermediatestorages findUniqueOrThrow
   */
  export type pile_intermediatestoragesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_intermediatestorages
     */
    select?: pile_intermediatestoragesSelect | null
    /**
     * Filter, which pile_intermediatestorages to fetch.
     */
    where: pile_intermediatestoragesWhereUniqueInput
  }


  /**
   * pile_intermediatestorages base type for findFirst actions
   */
  export type pile_intermediatestoragesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the pile_intermediatestorages
     */
    select?: pile_intermediatestoragesSelect | null
    /**
     * Filter, which pile_intermediatestorages to fetch.
     */
    where?: pile_intermediatestoragesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_intermediatestorages to fetch.
     */
    orderBy?: Enumerable<pile_intermediatestoragesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_intermediatestorages.
     */
    cursor?: pile_intermediatestoragesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_intermediatestorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_intermediatestorages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_intermediatestorages.
     */
    distinct?: Enumerable<Pile_intermediatestoragesScalarFieldEnum>
  }

  /**
   * pile_intermediatestorages findFirst
   */
  export interface pile_intermediatestoragesFindFirstArgs extends pile_intermediatestoragesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_intermediatestorages findFirstOrThrow
   */
  export type pile_intermediatestoragesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_intermediatestorages
     */
    select?: pile_intermediatestoragesSelect | null
    /**
     * Filter, which pile_intermediatestorages to fetch.
     */
    where?: pile_intermediatestoragesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_intermediatestorages to fetch.
     */
    orderBy?: Enumerable<pile_intermediatestoragesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_intermediatestorages.
     */
    cursor?: pile_intermediatestoragesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_intermediatestorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_intermediatestorages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_intermediatestorages.
     */
    distinct?: Enumerable<Pile_intermediatestoragesScalarFieldEnum>
  }


  /**
   * pile_intermediatestorages findMany
   */
  export type pile_intermediatestoragesFindManyArgs = {
    /**
     * Select specific fields to fetch from the pile_intermediatestorages
     */
    select?: pile_intermediatestoragesSelect | null
    /**
     * Filter, which pile_intermediatestorages to fetch.
     */
    where?: pile_intermediatestoragesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_intermediatestorages to fetch.
     */
    orderBy?: Enumerable<pile_intermediatestoragesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pile_intermediatestorages.
     */
    cursor?: pile_intermediatestoragesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_intermediatestorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_intermediatestorages.
     */
    skip?: number
    distinct?: Enumerable<Pile_intermediatestoragesScalarFieldEnum>
  }


  /**
   * pile_intermediatestorages create
   */
  export type pile_intermediatestoragesCreateArgs = {
    /**
     * Select specific fields to fetch from the pile_intermediatestorages
     */
    select?: pile_intermediatestoragesSelect | null
    /**
     * The data needed to create a pile_intermediatestorages.
     */
    data: XOR<pile_intermediatestoragesCreateInput, pile_intermediatestoragesUncheckedCreateInput>
  }


  /**
   * pile_intermediatestorages createMany
   */
  export type pile_intermediatestoragesCreateManyArgs = {
    /**
     * The data used to create many pile_intermediatestorages.
     */
    data: Enumerable<pile_intermediatestoragesCreateManyInput>
  }


  /**
   * pile_intermediatestorages update
   */
  export type pile_intermediatestoragesUpdateArgs = {
    /**
     * Select specific fields to fetch from the pile_intermediatestorages
     */
    select?: pile_intermediatestoragesSelect | null
    /**
     * The data needed to update a pile_intermediatestorages.
     */
    data: XOR<pile_intermediatestoragesUpdateInput, pile_intermediatestoragesUncheckedUpdateInput>
    /**
     * Choose, which pile_intermediatestorages to update.
     */
    where: pile_intermediatestoragesWhereUniqueInput
  }


  /**
   * pile_intermediatestorages updateMany
   */
  export type pile_intermediatestoragesUpdateManyArgs = {
    /**
     * The data used to update pile_intermediatestorages.
     */
    data: XOR<pile_intermediatestoragesUpdateManyMutationInput, pile_intermediatestoragesUncheckedUpdateManyInput>
    /**
     * Filter which pile_intermediatestorages to update
     */
    where?: pile_intermediatestoragesWhereInput
  }


  /**
   * pile_intermediatestorages upsert
   */
  export type pile_intermediatestoragesUpsertArgs = {
    /**
     * Select specific fields to fetch from the pile_intermediatestorages
     */
    select?: pile_intermediatestoragesSelect | null
    /**
     * The filter to search for the pile_intermediatestorages to update in case it exists.
     */
    where: pile_intermediatestoragesWhereUniqueInput
    /**
     * In case the pile_intermediatestorages found by the `where` argument doesn't exist, create a new pile_intermediatestorages with this data.
     */
    create: XOR<pile_intermediatestoragesCreateInput, pile_intermediatestoragesUncheckedCreateInput>
    /**
     * In case the pile_intermediatestorages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pile_intermediatestoragesUpdateInput, pile_intermediatestoragesUncheckedUpdateInput>
  }


  /**
   * pile_intermediatestorages delete
   */
  export type pile_intermediatestoragesDeleteArgs = {
    /**
     * Select specific fields to fetch from the pile_intermediatestorages
     */
    select?: pile_intermediatestoragesSelect | null
    /**
     * Filter which pile_intermediatestorages to delete.
     */
    where: pile_intermediatestoragesWhereUniqueInput
  }


  /**
   * pile_intermediatestorages deleteMany
   */
  export type pile_intermediatestoragesDeleteManyArgs = {
    /**
     * Filter which pile_intermediatestorages to delete
     */
    where?: pile_intermediatestoragesWhereInput
  }


  /**
   * pile_intermediatestorages findRaw
   */
  export type pile_intermediatestoragesFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_intermediatestorages aggregateRaw
   */
  export type pile_intermediatestoragesAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_intermediatestorages without action
   */
  export type pile_intermediatestoragesArgs = {
    /**
     * Select specific fields to fetch from the pile_intermediatestorages
     */
    select?: pile_intermediatestoragesSelect | null
  }



  /**
   * Model pile_inventory
   */


  export type AggregatePile_inventory = {
    _count: Pile_inventoryCountAggregateOutputType | null
    _avg: Pile_inventoryAvgAggregateOutputType | null
    _sum: Pile_inventorySumAggregateOutputType | null
    _min: Pile_inventoryMinAggregateOutputType | null
    _max: Pile_inventoryMaxAggregateOutputType | null
  }

  export type Pile_inventoryAvgAggregateOutputType = {
    createdDate: number | null
    inventoryAmountRm: number | null
    statusDate: number | null
  }

  export type Pile_inventorySumAggregateOutputType = {
    createdDate: bigint | null
    inventoryAmountRm: number | null
    statusDate: bigint | null
  }

  export type Pile_inventoryMinAggregateOutputType = {
    id: string | null
    buyingUnit: string | null
    comment: string | null
    correction: boolean | null
    createdDate: bigint | null
    createdUserId: string | null
    faultyInventory: boolean | null
    inventoryAmountRm: number | null
    pileId: string | null
    status: string | null
    statusDate: bigint | null
    statusUserId: string | null
  }

  export type Pile_inventoryMaxAggregateOutputType = {
    id: string | null
    buyingUnit: string | null
    comment: string | null
    correction: boolean | null
    createdDate: bigint | null
    createdUserId: string | null
    faultyInventory: boolean | null
    inventoryAmountRm: number | null
    pileId: string | null
    status: string | null
    statusDate: bigint | null
    statusUserId: string | null
  }

  export type Pile_inventoryCountAggregateOutputType = {
    id: number
    buyingUnit: number
    comment: number
    correction: number
    createdDate: number
    createdUserId: number
    faultyInventory: number
    inventoryAmountRm: number
    pileId: number
    status: number
    statusDate: number
    statusUserId: number
    _all: number
  }


  export type Pile_inventoryAvgAggregateInputType = {
    createdDate?: true
    inventoryAmountRm?: true
    statusDate?: true
  }

  export type Pile_inventorySumAggregateInputType = {
    createdDate?: true
    inventoryAmountRm?: true
    statusDate?: true
  }

  export type Pile_inventoryMinAggregateInputType = {
    id?: true
    buyingUnit?: true
    comment?: true
    correction?: true
    createdDate?: true
    createdUserId?: true
    faultyInventory?: true
    inventoryAmountRm?: true
    pileId?: true
    status?: true
    statusDate?: true
    statusUserId?: true
  }

  export type Pile_inventoryMaxAggregateInputType = {
    id?: true
    buyingUnit?: true
    comment?: true
    correction?: true
    createdDate?: true
    createdUserId?: true
    faultyInventory?: true
    inventoryAmountRm?: true
    pileId?: true
    status?: true
    statusDate?: true
    statusUserId?: true
  }

  export type Pile_inventoryCountAggregateInputType = {
    id?: true
    buyingUnit?: true
    comment?: true
    correction?: true
    createdDate?: true
    createdUserId?: true
    faultyInventory?: true
    inventoryAmountRm?: true
    pileId?: true
    status?: true
    statusDate?: true
    statusUserId?: true
    _all?: true
  }

  export type Pile_inventoryAggregateArgs = {
    /**
     * Filter which pile_inventory to aggregate.
     */
    where?: pile_inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_inventories to fetch.
     */
    orderBy?: Enumerable<pile_inventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pile_inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pile_inventories
    **/
    _count?: true | Pile_inventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pile_inventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pile_inventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pile_inventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pile_inventoryMaxAggregateInputType
  }

  export type GetPile_inventoryAggregateType<T extends Pile_inventoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePile_inventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePile_inventory[P]>
      : GetScalarType<T[P], AggregatePile_inventory[P]>
  }




  export type Pile_inventoryGroupByArgs = {
    where?: pile_inventoryWhereInput
    orderBy?: Enumerable<pile_inventoryOrderByWithAggregationInput>
    by: Pile_inventoryScalarFieldEnum[]
    having?: pile_inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pile_inventoryCountAggregateInputType | true
    _avg?: Pile_inventoryAvgAggregateInputType
    _sum?: Pile_inventorySumAggregateInputType
    _min?: Pile_inventoryMinAggregateInputType
    _max?: Pile_inventoryMaxAggregateInputType
  }


  export type Pile_inventoryGroupByOutputType = {
    id: string
    buyingUnit: string
    comment: string
    correction: boolean
    createdDate: bigint
    createdUserId: string
    faultyInventory: boolean
    inventoryAmountRm: number
    pileId: string
    status: string
    statusDate: bigint
    statusUserId: string
    _count: Pile_inventoryCountAggregateOutputType | null
    _avg: Pile_inventoryAvgAggregateOutputType | null
    _sum: Pile_inventorySumAggregateOutputType | null
    _min: Pile_inventoryMinAggregateOutputType | null
    _max: Pile_inventoryMaxAggregateOutputType | null
  }

  type GetPile_inventoryGroupByPayload<T extends Pile_inventoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Pile_inventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pile_inventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pile_inventoryGroupByOutputType[P]>
            : GetScalarType<T[P], Pile_inventoryGroupByOutputType[P]>
        }
      >
    >


  export type pile_inventorySelect = {
    id?: boolean
    buyingUnit?: boolean
    comment?: boolean
    correction?: boolean
    createdDate?: boolean
    createdUserId?: boolean
    faultyInventory?: boolean
    inventoryAmountRm?: boolean
    pileId?: boolean
    status?: boolean
    statusDate?: boolean
    statusUserId?: boolean
  }


  export type pile_inventoryGetPayload<S extends boolean | null | undefined | pile_inventoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pile_inventory :
    S extends undefined ? never :
    S extends { include: any } & (pile_inventoryArgs | pile_inventoryFindManyArgs)
    ? pile_inventory 
    : S extends { select: any } & (pile_inventoryArgs | pile_inventoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof pile_inventory ? pile_inventory[P] : never
  } 
      : pile_inventory


  type pile_inventoryCountArgs = 
    Omit<pile_inventoryFindManyArgs, 'select' | 'include'> & {
      select?: Pile_inventoryCountAggregateInputType | true
    }

  export interface pile_inventoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pile_inventory that matches the filter.
     * @param {pile_inventoryFindUniqueArgs} args - Arguments to find a Pile_inventory
     * @example
     * // Get one Pile_inventory
     * const pile_inventory = await prisma.pile_inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pile_inventoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pile_inventoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pile_inventory'> extends True ? Prisma__pile_inventoryClient<pile_inventoryGetPayload<T>> : Prisma__pile_inventoryClient<pile_inventoryGetPayload<T> | null, null>

    /**
     * Find one Pile_inventory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pile_inventoryFindUniqueOrThrowArgs} args - Arguments to find a Pile_inventory
     * @example
     * // Get one Pile_inventory
     * const pile_inventory = await prisma.pile_inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pile_inventoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, pile_inventoryFindUniqueOrThrowArgs>
    ): Prisma__pile_inventoryClient<pile_inventoryGetPayload<T>>

    /**
     * Find the first Pile_inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_inventoryFindFirstArgs} args - Arguments to find a Pile_inventory
     * @example
     * // Get one Pile_inventory
     * const pile_inventory = await prisma.pile_inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pile_inventoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pile_inventoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pile_inventory'> extends True ? Prisma__pile_inventoryClient<pile_inventoryGetPayload<T>> : Prisma__pile_inventoryClient<pile_inventoryGetPayload<T> | null, null>

    /**
     * Find the first Pile_inventory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_inventoryFindFirstOrThrowArgs} args - Arguments to find a Pile_inventory
     * @example
     * // Get one Pile_inventory
     * const pile_inventory = await prisma.pile_inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pile_inventoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, pile_inventoryFindFirstOrThrowArgs>
    ): Prisma__pile_inventoryClient<pile_inventoryGetPayload<T>>

    /**
     * Find zero or more Pile_inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_inventoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pile_inventories
     * const pile_inventories = await prisma.pile_inventory.findMany()
     * 
     * // Get first 10 Pile_inventories
     * const pile_inventories = await prisma.pile_inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pile_inventoryWithIdOnly = await prisma.pile_inventory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends pile_inventoryFindManyArgs>(
      args?: SelectSubset<T, pile_inventoryFindManyArgs>
    ): PrismaPromise<Array<pile_inventoryGetPayload<T>>>

    /**
     * Create a Pile_inventory.
     * @param {pile_inventoryCreateArgs} args - Arguments to create a Pile_inventory.
     * @example
     * // Create one Pile_inventory
     * const Pile_inventory = await prisma.pile_inventory.create({
     *   data: {
     *     // ... data to create a Pile_inventory
     *   }
     * })
     * 
    **/
    create<T extends pile_inventoryCreateArgs>(
      args: SelectSubset<T, pile_inventoryCreateArgs>
    ): Prisma__pile_inventoryClient<pile_inventoryGetPayload<T>>

    /**
     * Create many Pile_inventories.
     *     @param {pile_inventoryCreateManyArgs} args - Arguments to create many Pile_inventories.
     *     @example
     *     // Create many Pile_inventories
     *     const pile_inventory = await prisma.pile_inventory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pile_inventoryCreateManyArgs>(
      args?: SelectSubset<T, pile_inventoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Pile_inventory.
     * @param {pile_inventoryDeleteArgs} args - Arguments to delete one Pile_inventory.
     * @example
     * // Delete one Pile_inventory
     * const Pile_inventory = await prisma.pile_inventory.delete({
     *   where: {
     *     // ... filter to delete one Pile_inventory
     *   }
     * })
     * 
    **/
    delete<T extends pile_inventoryDeleteArgs>(
      args: SelectSubset<T, pile_inventoryDeleteArgs>
    ): Prisma__pile_inventoryClient<pile_inventoryGetPayload<T>>

    /**
     * Update one Pile_inventory.
     * @param {pile_inventoryUpdateArgs} args - Arguments to update one Pile_inventory.
     * @example
     * // Update one Pile_inventory
     * const pile_inventory = await prisma.pile_inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pile_inventoryUpdateArgs>(
      args: SelectSubset<T, pile_inventoryUpdateArgs>
    ): Prisma__pile_inventoryClient<pile_inventoryGetPayload<T>>

    /**
     * Delete zero or more Pile_inventories.
     * @param {pile_inventoryDeleteManyArgs} args - Arguments to filter Pile_inventories to delete.
     * @example
     * // Delete a few Pile_inventories
     * const { count } = await prisma.pile_inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pile_inventoryDeleteManyArgs>(
      args?: SelectSubset<T, pile_inventoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pile_inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pile_inventories
     * const pile_inventory = await prisma.pile_inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pile_inventoryUpdateManyArgs>(
      args: SelectSubset<T, pile_inventoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pile_inventory.
     * @param {pile_inventoryUpsertArgs} args - Arguments to update or create a Pile_inventory.
     * @example
     * // Update or create a Pile_inventory
     * const pile_inventory = await prisma.pile_inventory.upsert({
     *   create: {
     *     // ... data to create a Pile_inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pile_inventory we want to update
     *   }
     * })
    **/
    upsert<T extends pile_inventoryUpsertArgs>(
      args: SelectSubset<T, pile_inventoryUpsertArgs>
    ): Prisma__pile_inventoryClient<pile_inventoryGetPayload<T>>

    /**
     * Find zero or more Pile_inventories that matches the filter.
     * @param {pile_inventoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pile_inventory = await prisma.pile_inventory.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: pile_inventoryFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pile_inventory.
     * @param {pile_inventoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pile_inventory = await prisma.pile_inventory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: pile_inventoryAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Pile_inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_inventoryCountArgs} args - Arguments to filter Pile_inventories to count.
     * @example
     * // Count the number of Pile_inventories
     * const count = await prisma.pile_inventory.count({
     *   where: {
     *     // ... the filter for the Pile_inventories we want to count
     *   }
     * })
    **/
    count<T extends pile_inventoryCountArgs>(
      args?: Subset<T, pile_inventoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pile_inventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pile_inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_inventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pile_inventoryAggregateArgs>(args: Subset<T, Pile_inventoryAggregateArgs>): PrismaPromise<GetPile_inventoryAggregateType<T>>

    /**
     * Group by Pile_inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Pile_inventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pile_inventoryGroupByArgs['orderBy'] }
        : { orderBy?: Pile_inventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Pile_inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPile_inventoryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pile_inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pile_inventoryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pile_inventory base type for findUnique actions
   */
  export type pile_inventoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the pile_inventory
     */
    select?: pile_inventorySelect | null
    /**
     * Filter, which pile_inventory to fetch.
     */
    where: pile_inventoryWhereUniqueInput
  }

  /**
   * pile_inventory findUnique
   */
  export interface pile_inventoryFindUniqueArgs extends pile_inventoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_inventory findUniqueOrThrow
   */
  export type pile_inventoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_inventory
     */
    select?: pile_inventorySelect | null
    /**
     * Filter, which pile_inventory to fetch.
     */
    where: pile_inventoryWhereUniqueInput
  }


  /**
   * pile_inventory base type for findFirst actions
   */
  export type pile_inventoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the pile_inventory
     */
    select?: pile_inventorySelect | null
    /**
     * Filter, which pile_inventory to fetch.
     */
    where?: pile_inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_inventories to fetch.
     */
    orderBy?: Enumerable<pile_inventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_inventories.
     */
    cursor?: pile_inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_inventories.
     */
    distinct?: Enumerable<Pile_inventoryScalarFieldEnum>
  }

  /**
   * pile_inventory findFirst
   */
  export interface pile_inventoryFindFirstArgs extends pile_inventoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_inventory findFirstOrThrow
   */
  export type pile_inventoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_inventory
     */
    select?: pile_inventorySelect | null
    /**
     * Filter, which pile_inventory to fetch.
     */
    where?: pile_inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_inventories to fetch.
     */
    orderBy?: Enumerable<pile_inventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_inventories.
     */
    cursor?: pile_inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_inventories.
     */
    distinct?: Enumerable<Pile_inventoryScalarFieldEnum>
  }


  /**
   * pile_inventory findMany
   */
  export type pile_inventoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the pile_inventory
     */
    select?: pile_inventorySelect | null
    /**
     * Filter, which pile_inventories to fetch.
     */
    where?: pile_inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_inventories to fetch.
     */
    orderBy?: Enumerable<pile_inventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pile_inventories.
     */
    cursor?: pile_inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_inventories.
     */
    skip?: number
    distinct?: Enumerable<Pile_inventoryScalarFieldEnum>
  }


  /**
   * pile_inventory create
   */
  export type pile_inventoryCreateArgs = {
    /**
     * Select specific fields to fetch from the pile_inventory
     */
    select?: pile_inventorySelect | null
    /**
     * The data needed to create a pile_inventory.
     */
    data: XOR<pile_inventoryCreateInput, pile_inventoryUncheckedCreateInput>
  }


  /**
   * pile_inventory createMany
   */
  export type pile_inventoryCreateManyArgs = {
    /**
     * The data used to create many pile_inventories.
     */
    data: Enumerable<pile_inventoryCreateManyInput>
  }


  /**
   * pile_inventory update
   */
  export type pile_inventoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the pile_inventory
     */
    select?: pile_inventorySelect | null
    /**
     * The data needed to update a pile_inventory.
     */
    data: XOR<pile_inventoryUpdateInput, pile_inventoryUncheckedUpdateInput>
    /**
     * Choose, which pile_inventory to update.
     */
    where: pile_inventoryWhereUniqueInput
  }


  /**
   * pile_inventory updateMany
   */
  export type pile_inventoryUpdateManyArgs = {
    /**
     * The data used to update pile_inventories.
     */
    data: XOR<pile_inventoryUpdateManyMutationInput, pile_inventoryUncheckedUpdateManyInput>
    /**
     * Filter which pile_inventories to update
     */
    where?: pile_inventoryWhereInput
  }


  /**
   * pile_inventory upsert
   */
  export type pile_inventoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the pile_inventory
     */
    select?: pile_inventorySelect | null
    /**
     * The filter to search for the pile_inventory to update in case it exists.
     */
    where: pile_inventoryWhereUniqueInput
    /**
     * In case the pile_inventory found by the `where` argument doesn't exist, create a new pile_inventory with this data.
     */
    create: XOR<pile_inventoryCreateInput, pile_inventoryUncheckedCreateInput>
    /**
     * In case the pile_inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pile_inventoryUpdateInput, pile_inventoryUncheckedUpdateInput>
  }


  /**
   * pile_inventory delete
   */
  export type pile_inventoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the pile_inventory
     */
    select?: pile_inventorySelect | null
    /**
     * Filter which pile_inventory to delete.
     */
    where: pile_inventoryWhereUniqueInput
  }


  /**
   * pile_inventory deleteMany
   */
  export type pile_inventoryDeleteManyArgs = {
    /**
     * Filter which pile_inventories to delete
     */
    where?: pile_inventoryWhereInput
  }


  /**
   * pile_inventory findRaw
   */
  export type pile_inventoryFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_inventory aggregateRaw
   */
  export type pile_inventoryAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_inventory without action
   */
  export type pile_inventoryArgs = {
    /**
     * Select specific fields to fetch from the pile_inventory
     */
    select?: pile_inventorySelect | null
  }



  /**
   * Model pile_map
   */


  export type AggregatePile_map = {
    _count: Pile_mapCountAggregateOutputType | null
    _avg: Pile_mapAvgAggregateOutputType | null
    _sum: Pile_mapSumAggregateOutputType | null
    _min: Pile_mapMinAggregateOutputType | null
    _max: Pile_mapMaxAggregateOutputType | null
  }

  export type Pile_mapAvgAggregateOutputType = {
    actualAmount: number | null
    amountRm: number | null
    avgLengthM: number | null
    hasRemoval: number | null
    inventoryAmountRm: number | null
    latitude: number | null
    longitude: number | null
    registrationDate: number | null
    remainingAmountRm: number | null
    statusDate: number | null
  }

  export type Pile_mapSumAggregateOutputType = {
    actualAmount: number | null
    amountRm: number | null
    avgLengthM: number | null
    hasRemoval: number | null
    inventoryAmountRm: number | null
    latitude: number | null
    longitude: number | null
    registrationDate: bigint | null
    remainingAmountRm: number | null
    statusDate: bigint | null
  }

  export type Pile_mapMinAggregateOutputType = {
    id: string | null
    actualAmount: number | null
    amountRm: number | null
    avgLengthM: number | null
    buyingUnit: string | null
    forestOwnerId: string | null
    forestOwnerPileNumber: string | null
    forestOwnerPileStatus: string | null
    hasRemoval: number | null
    id_: string | null
    inventoryAmountRm: number | null
    latitude: number | null
    logisticStatus: string | null
    longitude: number | null
    pileNumber: string | null
    registrationDate: bigint | null
    remainingAmountRm: number | null
    status: string | null
    statusDate: bigint | null
    woodBuyerId: string | null
  }

  export type Pile_mapMaxAggregateOutputType = {
    id: string | null
    actualAmount: number | null
    amountRm: number | null
    avgLengthM: number | null
    buyingUnit: string | null
    forestOwnerId: string | null
    forestOwnerPileNumber: string | null
    forestOwnerPileStatus: string | null
    hasRemoval: number | null
    id_: string | null
    inventoryAmountRm: number | null
    latitude: number | null
    logisticStatus: string | null
    longitude: number | null
    pileNumber: string | null
    registrationDate: bigint | null
    remainingAmountRm: number | null
    status: string | null
    statusDate: bigint | null
    woodBuyerId: string | null
  }

  export type Pile_mapCountAggregateOutputType = {
    id: number
    actualAmount: number
    amountRm: number
    avgLengthM: number
    buyingUnit: number
    forestOwnerId: number
    forestOwnerPileNumber: number
    forestOwnerPileStatus: number
    hasRemoval: number
    id_: number
    inventoryAmountRm: number
    latitude: number
    logisticStatus: number
    longitude: number
    pileNumber: number
    registrationDate: number
    remainingAmountRm: number
    status: number
    statusDate: number
    woodBuyerId: number
    _all: number
  }


  export type Pile_mapAvgAggregateInputType = {
    actualAmount?: true
    amountRm?: true
    avgLengthM?: true
    hasRemoval?: true
    inventoryAmountRm?: true
    latitude?: true
    longitude?: true
    registrationDate?: true
    remainingAmountRm?: true
    statusDate?: true
  }

  export type Pile_mapSumAggregateInputType = {
    actualAmount?: true
    amountRm?: true
    avgLengthM?: true
    hasRemoval?: true
    inventoryAmountRm?: true
    latitude?: true
    longitude?: true
    registrationDate?: true
    remainingAmountRm?: true
    statusDate?: true
  }

  export type Pile_mapMinAggregateInputType = {
    id?: true
    actualAmount?: true
    amountRm?: true
    avgLengthM?: true
    buyingUnit?: true
    forestOwnerId?: true
    forestOwnerPileNumber?: true
    forestOwnerPileStatus?: true
    hasRemoval?: true
    id_?: true
    inventoryAmountRm?: true
    latitude?: true
    logisticStatus?: true
    longitude?: true
    pileNumber?: true
    registrationDate?: true
    remainingAmountRm?: true
    status?: true
    statusDate?: true
    woodBuyerId?: true
  }

  export type Pile_mapMaxAggregateInputType = {
    id?: true
    actualAmount?: true
    amountRm?: true
    avgLengthM?: true
    buyingUnit?: true
    forestOwnerId?: true
    forestOwnerPileNumber?: true
    forestOwnerPileStatus?: true
    hasRemoval?: true
    id_?: true
    inventoryAmountRm?: true
    latitude?: true
    logisticStatus?: true
    longitude?: true
    pileNumber?: true
    registrationDate?: true
    remainingAmountRm?: true
    status?: true
    statusDate?: true
    woodBuyerId?: true
  }

  export type Pile_mapCountAggregateInputType = {
    id?: true
    actualAmount?: true
    amountRm?: true
    avgLengthM?: true
    buyingUnit?: true
    forestOwnerId?: true
    forestOwnerPileNumber?: true
    forestOwnerPileStatus?: true
    hasRemoval?: true
    id_?: true
    inventoryAmountRm?: true
    latitude?: true
    logisticStatus?: true
    longitude?: true
    pileNumber?: true
    registrationDate?: true
    remainingAmountRm?: true
    status?: true
    statusDate?: true
    woodBuyerId?: true
    _all?: true
  }

  export type Pile_mapAggregateArgs = {
    /**
     * Filter which pile_map to aggregate.
     */
    where?: pile_mapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_maps to fetch.
     */
    orderBy?: Enumerable<pile_mapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pile_mapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pile_maps
    **/
    _count?: true | Pile_mapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pile_mapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pile_mapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pile_mapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pile_mapMaxAggregateInputType
  }

  export type GetPile_mapAggregateType<T extends Pile_mapAggregateArgs> = {
        [P in keyof T & keyof AggregatePile_map]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePile_map[P]>
      : GetScalarType<T[P], AggregatePile_map[P]>
  }




  export type Pile_mapGroupByArgs = {
    where?: pile_mapWhereInput
    orderBy?: Enumerable<pile_mapOrderByWithAggregationInput>
    by: Pile_mapScalarFieldEnum[]
    having?: pile_mapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pile_mapCountAggregateInputType | true
    _avg?: Pile_mapAvgAggregateInputType
    _sum?: Pile_mapSumAggregateInputType
    _min?: Pile_mapMinAggregateInputType
    _max?: Pile_mapMaxAggregateInputType
  }


  export type Pile_mapGroupByOutputType = {
    id: string
    actualAmount: number
    amountRm: number
    avgLengthM: number
    buyingUnit: string
    forestOwnerId: string
    forestOwnerPileNumber: string | null
    forestOwnerPileStatus: string | null
    hasRemoval: number
    id_: string
    inventoryAmountRm: number
    latitude: number
    logisticStatus: string
    longitude: number
    pileNumber: string
    registrationDate: bigint
    remainingAmountRm: number
    status: string
    statusDate: bigint
    woodBuyerId: string
    _count: Pile_mapCountAggregateOutputType | null
    _avg: Pile_mapAvgAggregateOutputType | null
    _sum: Pile_mapSumAggregateOutputType | null
    _min: Pile_mapMinAggregateOutputType | null
    _max: Pile_mapMaxAggregateOutputType | null
  }

  type GetPile_mapGroupByPayload<T extends Pile_mapGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Pile_mapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pile_mapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pile_mapGroupByOutputType[P]>
            : GetScalarType<T[P], Pile_mapGroupByOutputType[P]>
        }
      >
    >


  export type pile_mapSelect = {
    id?: boolean
    actualAmount?: boolean
    amountRm?: boolean
    avgLengthM?: boolean
    buyingUnit?: boolean
    forestOwnerId?: boolean
    forestOwnerPileNumber?: boolean
    forestOwnerPileStatus?: boolean
    hasRemoval?: boolean
    id_?: boolean
    inventoryAmountRm?: boolean
    latitude?: boolean
    logisticStatus?: boolean
    longitude?: boolean
    pileNumber?: boolean
    registrationDate?: boolean
    remainingAmountRm?: boolean
    status?: boolean
    statusDate?: boolean
    treeSpecies?: boolean | Pile_mapTreeSpeciesArgs
    woodBuyerId?: boolean
    woodSpecies?: boolean | Pile_mapWoodSpeciesArgs
  }


  export type pile_mapInclude = {}

  export type pile_mapGetPayload<S extends boolean | null | undefined | pile_mapArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pile_map :
    S extends undefined ? never :
    S extends { include: any } & (pile_mapArgs | pile_mapFindManyArgs)
    ? pile_map 
    : S extends { select: any } & (pile_mapArgs | pile_mapFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'treeSpecies' ? Array < Pile_mapTreeSpeciesGetPayload<S['select'][P]>>  :
        P extends 'woodSpecies' ? Pile_mapWoodSpeciesGetPayload<S['select'][P]> | null :  P extends keyof pile_map ? pile_map[P] : never
  } 
      : pile_map


  type pile_mapCountArgs = 
    Omit<pile_mapFindManyArgs, 'select' | 'include'> & {
      select?: Pile_mapCountAggregateInputType | true
    }

  export interface pile_mapDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pile_map that matches the filter.
     * @param {pile_mapFindUniqueArgs} args - Arguments to find a Pile_map
     * @example
     * // Get one Pile_map
     * const pile_map = await prisma.pile_map.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pile_mapFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pile_mapFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pile_map'> extends True ? Prisma__pile_mapClient<pile_mapGetPayload<T>> : Prisma__pile_mapClient<pile_mapGetPayload<T> | null, null>

    /**
     * Find one Pile_map that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pile_mapFindUniqueOrThrowArgs} args - Arguments to find a Pile_map
     * @example
     * // Get one Pile_map
     * const pile_map = await prisma.pile_map.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pile_mapFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, pile_mapFindUniqueOrThrowArgs>
    ): Prisma__pile_mapClient<pile_mapGetPayload<T>>

    /**
     * Find the first Pile_map that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_mapFindFirstArgs} args - Arguments to find a Pile_map
     * @example
     * // Get one Pile_map
     * const pile_map = await prisma.pile_map.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pile_mapFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pile_mapFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pile_map'> extends True ? Prisma__pile_mapClient<pile_mapGetPayload<T>> : Prisma__pile_mapClient<pile_mapGetPayload<T> | null, null>

    /**
     * Find the first Pile_map that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_mapFindFirstOrThrowArgs} args - Arguments to find a Pile_map
     * @example
     * // Get one Pile_map
     * const pile_map = await prisma.pile_map.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pile_mapFindFirstOrThrowArgs>(
      args?: SelectSubset<T, pile_mapFindFirstOrThrowArgs>
    ): Prisma__pile_mapClient<pile_mapGetPayload<T>>

    /**
     * Find zero or more Pile_maps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_mapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pile_maps
     * const pile_maps = await prisma.pile_map.findMany()
     * 
     * // Get first 10 Pile_maps
     * const pile_maps = await prisma.pile_map.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pile_mapWithIdOnly = await prisma.pile_map.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends pile_mapFindManyArgs>(
      args?: SelectSubset<T, pile_mapFindManyArgs>
    ): PrismaPromise<Array<pile_mapGetPayload<T>>>

    /**
     * Create a Pile_map.
     * @param {pile_mapCreateArgs} args - Arguments to create a Pile_map.
     * @example
     * // Create one Pile_map
     * const Pile_map = await prisma.pile_map.create({
     *   data: {
     *     // ... data to create a Pile_map
     *   }
     * })
     * 
    **/
    create<T extends pile_mapCreateArgs>(
      args: SelectSubset<T, pile_mapCreateArgs>
    ): Prisma__pile_mapClient<pile_mapGetPayload<T>>

    /**
     * Create many Pile_maps.
     *     @param {pile_mapCreateManyArgs} args - Arguments to create many Pile_maps.
     *     @example
     *     // Create many Pile_maps
     *     const pile_map = await prisma.pile_map.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pile_mapCreateManyArgs>(
      args?: SelectSubset<T, pile_mapCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Pile_map.
     * @param {pile_mapDeleteArgs} args - Arguments to delete one Pile_map.
     * @example
     * // Delete one Pile_map
     * const Pile_map = await prisma.pile_map.delete({
     *   where: {
     *     // ... filter to delete one Pile_map
     *   }
     * })
     * 
    **/
    delete<T extends pile_mapDeleteArgs>(
      args: SelectSubset<T, pile_mapDeleteArgs>
    ): Prisma__pile_mapClient<pile_mapGetPayload<T>>

    /**
     * Update one Pile_map.
     * @param {pile_mapUpdateArgs} args - Arguments to update one Pile_map.
     * @example
     * // Update one Pile_map
     * const pile_map = await prisma.pile_map.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pile_mapUpdateArgs>(
      args: SelectSubset<T, pile_mapUpdateArgs>
    ): Prisma__pile_mapClient<pile_mapGetPayload<T>>

    /**
     * Delete zero or more Pile_maps.
     * @param {pile_mapDeleteManyArgs} args - Arguments to filter Pile_maps to delete.
     * @example
     * // Delete a few Pile_maps
     * const { count } = await prisma.pile_map.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pile_mapDeleteManyArgs>(
      args?: SelectSubset<T, pile_mapDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pile_maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_mapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pile_maps
     * const pile_map = await prisma.pile_map.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pile_mapUpdateManyArgs>(
      args: SelectSubset<T, pile_mapUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pile_map.
     * @param {pile_mapUpsertArgs} args - Arguments to update or create a Pile_map.
     * @example
     * // Update or create a Pile_map
     * const pile_map = await prisma.pile_map.upsert({
     *   create: {
     *     // ... data to create a Pile_map
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pile_map we want to update
     *   }
     * })
    **/
    upsert<T extends pile_mapUpsertArgs>(
      args: SelectSubset<T, pile_mapUpsertArgs>
    ): Prisma__pile_mapClient<pile_mapGetPayload<T>>

    /**
     * Find zero or more Pile_maps that matches the filter.
     * @param {pile_mapFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pile_map = await prisma.pile_map.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: pile_mapFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pile_map.
     * @param {pile_mapAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pile_map = await prisma.pile_map.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: pile_mapAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Pile_maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_mapCountArgs} args - Arguments to filter Pile_maps to count.
     * @example
     * // Count the number of Pile_maps
     * const count = await prisma.pile_map.count({
     *   where: {
     *     // ... the filter for the Pile_maps we want to count
     *   }
     * })
    **/
    count<T extends pile_mapCountArgs>(
      args?: Subset<T, pile_mapCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pile_mapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pile_map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_mapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pile_mapAggregateArgs>(args: Subset<T, Pile_mapAggregateArgs>): PrismaPromise<GetPile_mapAggregateType<T>>

    /**
     * Group by Pile_map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_mapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Pile_mapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pile_mapGroupByArgs['orderBy'] }
        : { orderBy?: Pile_mapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Pile_mapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPile_mapGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pile_map.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pile_mapClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    treeSpecies<T extends Pile_mapTreeSpeciesArgs= {}>(args?: Subset<T, Pile_mapTreeSpeciesArgs>): PrismaPromise<Array<Pile_mapTreeSpeciesGetPayload<T>>| Null>;

    woodSpecies<T extends Pile_mapWoodSpeciesArgs= {}>(args?: Subset<T, Pile_mapWoodSpeciesArgs>): Prisma__Pile_mapWoodSpeciesClient<Pile_mapWoodSpeciesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pile_map base type for findUnique actions
   */
  export type pile_mapFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the pile_map
     */
    select?: pile_mapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_mapInclude | null
    /**
     * Filter, which pile_map to fetch.
     */
    where: pile_mapWhereUniqueInput
  }

  /**
   * pile_map findUnique
   */
  export interface pile_mapFindUniqueArgs extends pile_mapFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_map findUniqueOrThrow
   */
  export type pile_mapFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_map
     */
    select?: pile_mapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_mapInclude | null
    /**
     * Filter, which pile_map to fetch.
     */
    where: pile_mapWhereUniqueInput
  }


  /**
   * pile_map base type for findFirst actions
   */
  export type pile_mapFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the pile_map
     */
    select?: pile_mapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_mapInclude | null
    /**
     * Filter, which pile_map to fetch.
     */
    where?: pile_mapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_maps to fetch.
     */
    orderBy?: Enumerable<pile_mapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_maps.
     */
    cursor?: pile_mapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_maps.
     */
    distinct?: Enumerable<Pile_mapScalarFieldEnum>
  }

  /**
   * pile_map findFirst
   */
  export interface pile_mapFindFirstArgs extends pile_mapFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_map findFirstOrThrow
   */
  export type pile_mapFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_map
     */
    select?: pile_mapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_mapInclude | null
    /**
     * Filter, which pile_map to fetch.
     */
    where?: pile_mapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_maps to fetch.
     */
    orderBy?: Enumerable<pile_mapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_maps.
     */
    cursor?: pile_mapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_maps.
     */
    distinct?: Enumerable<Pile_mapScalarFieldEnum>
  }


  /**
   * pile_map findMany
   */
  export type pile_mapFindManyArgs = {
    /**
     * Select specific fields to fetch from the pile_map
     */
    select?: pile_mapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_mapInclude | null
    /**
     * Filter, which pile_maps to fetch.
     */
    where?: pile_mapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_maps to fetch.
     */
    orderBy?: Enumerable<pile_mapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pile_maps.
     */
    cursor?: pile_mapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_maps.
     */
    skip?: number
    distinct?: Enumerable<Pile_mapScalarFieldEnum>
  }


  /**
   * pile_map create
   */
  export type pile_mapCreateArgs = {
    /**
     * Select specific fields to fetch from the pile_map
     */
    select?: pile_mapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_mapInclude | null
    /**
     * The data needed to create a pile_map.
     */
    data: XOR<pile_mapCreateInput, pile_mapUncheckedCreateInput>
  }


  /**
   * pile_map createMany
   */
  export type pile_mapCreateManyArgs = {
    /**
     * The data used to create many pile_maps.
     */
    data: Enumerable<pile_mapCreateManyInput>
  }


  /**
   * pile_map update
   */
  export type pile_mapUpdateArgs = {
    /**
     * Select specific fields to fetch from the pile_map
     */
    select?: pile_mapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_mapInclude | null
    /**
     * The data needed to update a pile_map.
     */
    data: XOR<pile_mapUpdateInput, pile_mapUncheckedUpdateInput>
    /**
     * Choose, which pile_map to update.
     */
    where: pile_mapWhereUniqueInput
  }


  /**
   * pile_map updateMany
   */
  export type pile_mapUpdateManyArgs = {
    /**
     * The data used to update pile_maps.
     */
    data: XOR<pile_mapUpdateManyMutationInput, pile_mapUncheckedUpdateManyInput>
    /**
     * Filter which pile_maps to update
     */
    where?: pile_mapWhereInput
  }


  /**
   * pile_map upsert
   */
  export type pile_mapUpsertArgs = {
    /**
     * Select specific fields to fetch from the pile_map
     */
    select?: pile_mapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_mapInclude | null
    /**
     * The filter to search for the pile_map to update in case it exists.
     */
    where: pile_mapWhereUniqueInput
    /**
     * In case the pile_map found by the `where` argument doesn't exist, create a new pile_map with this data.
     */
    create: XOR<pile_mapCreateInput, pile_mapUncheckedCreateInput>
    /**
     * In case the pile_map was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pile_mapUpdateInput, pile_mapUncheckedUpdateInput>
  }


  /**
   * pile_map delete
   */
  export type pile_mapDeleteArgs = {
    /**
     * Select specific fields to fetch from the pile_map
     */
    select?: pile_mapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_mapInclude | null
    /**
     * Filter which pile_map to delete.
     */
    where: pile_mapWhereUniqueInput
  }


  /**
   * pile_map deleteMany
   */
  export type pile_mapDeleteManyArgs = {
    /**
     * Filter which pile_maps to delete
     */
    where?: pile_mapWhereInput
  }


  /**
   * pile_map findRaw
   */
  export type pile_mapFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_map aggregateRaw
   */
  export type pile_mapAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_map without action
   */
  export type pile_mapArgs = {
    /**
     * Select specific fields to fetch from the pile_map
     */
    select?: pile_mapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_mapInclude | null
  }



  /**
   * Model pile_partner
   */


  export type AggregatePile_partner = {
    _count: Pile_partnerCountAggregateOutputType | null
    _avg: Pile_partnerAvgAggregateOutputType | null
    _sum: Pile_partnerSumAggregateOutputType | null
    _min: Pile_partnerMinAggregateOutputType | null
    _max: Pile_partnerMaxAggregateOutputType | null
  }

  export type Pile_partnerAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type Pile_partnerSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type Pile_partnerMinAggregateOutputType = {
    id: string | null
    accountingContactPersonId: string | null
    address: string | null
    city: string | null
    company: string | null
    contactName: string | null
    country: string | null
    deactivated: boolean | null
    id_: string | null
    latitude: number | null
    longitude: number | null
    partnerNumber: string | null
    partnerType: string | null
    pileNumberPrefix: string | null
    postcode: string | null
  }

  export type Pile_partnerMaxAggregateOutputType = {
    id: string | null
    accountingContactPersonId: string | null
    address: string | null
    city: string | null
    company: string | null
    contactName: string | null
    country: string | null
    deactivated: boolean | null
    id_: string | null
    latitude: number | null
    longitude: number | null
    partnerNumber: string | null
    partnerType: string | null
    pileNumberPrefix: string | null
    postcode: string | null
  }

  export type Pile_partnerCountAggregateOutputType = {
    id: number
    accountingContactPersonId: number
    address: number
    associatedPartnerIdList: number
    city: number
    company: number
    contactName: number
    country: number
    deactivated: number
    forestCompanyAssociations: number
    id_: number
    latitude: number
    longitude: number
    mandatePersonIds: number
    partnerNumber: number
    partnerType: number
    pileNumberPrefix: number
    postcode: number
    _all: number
  }


  export type Pile_partnerAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type Pile_partnerSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type Pile_partnerMinAggregateInputType = {
    id?: true
    accountingContactPersonId?: true
    address?: true
    city?: true
    company?: true
    contactName?: true
    country?: true
    deactivated?: true
    id_?: true
    latitude?: true
    longitude?: true
    partnerNumber?: true
    partnerType?: true
    pileNumberPrefix?: true
    postcode?: true
  }

  export type Pile_partnerMaxAggregateInputType = {
    id?: true
    accountingContactPersonId?: true
    address?: true
    city?: true
    company?: true
    contactName?: true
    country?: true
    deactivated?: true
    id_?: true
    latitude?: true
    longitude?: true
    partnerNumber?: true
    partnerType?: true
    pileNumberPrefix?: true
    postcode?: true
  }

  export type Pile_partnerCountAggregateInputType = {
    id?: true
    accountingContactPersonId?: true
    address?: true
    associatedPartnerIdList?: true
    city?: true
    company?: true
    contactName?: true
    country?: true
    deactivated?: true
    forestCompanyAssociations?: true
    id_?: true
    latitude?: true
    longitude?: true
    mandatePersonIds?: true
    partnerNumber?: true
    partnerType?: true
    pileNumberPrefix?: true
    postcode?: true
    _all?: true
  }

  export type Pile_partnerAggregateArgs = {
    /**
     * Filter which pile_partner to aggregate.
     */
    where?: pile_partnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_partners to fetch.
     */
    orderBy?: Enumerable<pile_partnerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pile_partnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pile_partners
    **/
    _count?: true | Pile_partnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pile_partnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pile_partnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pile_partnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pile_partnerMaxAggregateInputType
  }

  export type GetPile_partnerAggregateType<T extends Pile_partnerAggregateArgs> = {
        [P in keyof T & keyof AggregatePile_partner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePile_partner[P]>
      : GetScalarType<T[P], AggregatePile_partner[P]>
  }




  export type Pile_partnerGroupByArgs = {
    where?: pile_partnerWhereInput
    orderBy?: Enumerable<pile_partnerOrderByWithAggregationInput>
    by: Pile_partnerScalarFieldEnum[]
    having?: pile_partnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pile_partnerCountAggregateInputType | true
    _avg?: Pile_partnerAvgAggregateInputType
    _sum?: Pile_partnerSumAggregateInputType
    _min?: Pile_partnerMinAggregateInputType
    _max?: Pile_partnerMaxAggregateInputType
  }


  export type Pile_partnerGroupByOutputType = {
    id: string
    accountingContactPersonId: string
    address: string | null
    associatedPartnerIdList: string[]
    city: string | null
    company: string
    contactName: string
    country: string | null
    deactivated: boolean
    forestCompanyAssociations: string[]
    id_: string
    latitude: number | null
    longitude: number | null
    mandatePersonIds: string[]
    partnerNumber: string
    partnerType: string
    pileNumberPrefix: string | null
    postcode: string | null
    _count: Pile_partnerCountAggregateOutputType | null
    _avg: Pile_partnerAvgAggregateOutputType | null
    _sum: Pile_partnerSumAggregateOutputType | null
    _min: Pile_partnerMinAggregateOutputType | null
    _max: Pile_partnerMaxAggregateOutputType | null
  }

  type GetPile_partnerGroupByPayload<T extends Pile_partnerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Pile_partnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pile_partnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pile_partnerGroupByOutputType[P]>
            : GetScalarType<T[P], Pile_partnerGroupByOutputType[P]>
        }
      >
    >


  export type pile_partnerSelect = {
    id?: boolean
    accountingContactPersonId?: boolean
    address?: boolean
    associatedPartnerIdList?: boolean
    city?: boolean
    company?: boolean
    contactName?: boolean
    country?: boolean
    deactivated?: boolean
    forestCompanyAssociations?: boolean
    id_?: boolean
    latitude?: boolean
    longitude?: boolean
    mandatePersonIds?: boolean
    partnerNumber?: boolean
    partnerType?: boolean
    pileNumberPrefix?: boolean
    postcode?: boolean
  }


  export type pile_partnerGetPayload<S extends boolean | null | undefined | pile_partnerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pile_partner :
    S extends undefined ? never :
    S extends { include: any } & (pile_partnerArgs | pile_partnerFindManyArgs)
    ? pile_partner 
    : S extends { select: any } & (pile_partnerArgs | pile_partnerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof pile_partner ? pile_partner[P] : never
  } 
      : pile_partner


  type pile_partnerCountArgs = 
    Omit<pile_partnerFindManyArgs, 'select' | 'include'> & {
      select?: Pile_partnerCountAggregateInputType | true
    }

  export interface pile_partnerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pile_partner that matches the filter.
     * @param {pile_partnerFindUniqueArgs} args - Arguments to find a Pile_partner
     * @example
     * // Get one Pile_partner
     * const pile_partner = await prisma.pile_partner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pile_partnerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pile_partnerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pile_partner'> extends True ? Prisma__pile_partnerClient<pile_partnerGetPayload<T>> : Prisma__pile_partnerClient<pile_partnerGetPayload<T> | null, null>

    /**
     * Find one Pile_partner that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pile_partnerFindUniqueOrThrowArgs} args - Arguments to find a Pile_partner
     * @example
     * // Get one Pile_partner
     * const pile_partner = await prisma.pile_partner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pile_partnerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, pile_partnerFindUniqueOrThrowArgs>
    ): Prisma__pile_partnerClient<pile_partnerGetPayload<T>>

    /**
     * Find the first Pile_partner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_partnerFindFirstArgs} args - Arguments to find a Pile_partner
     * @example
     * // Get one Pile_partner
     * const pile_partner = await prisma.pile_partner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pile_partnerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pile_partnerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pile_partner'> extends True ? Prisma__pile_partnerClient<pile_partnerGetPayload<T>> : Prisma__pile_partnerClient<pile_partnerGetPayload<T> | null, null>

    /**
     * Find the first Pile_partner that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_partnerFindFirstOrThrowArgs} args - Arguments to find a Pile_partner
     * @example
     * // Get one Pile_partner
     * const pile_partner = await prisma.pile_partner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pile_partnerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, pile_partnerFindFirstOrThrowArgs>
    ): Prisma__pile_partnerClient<pile_partnerGetPayload<T>>

    /**
     * Find zero or more Pile_partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_partnerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pile_partners
     * const pile_partners = await prisma.pile_partner.findMany()
     * 
     * // Get first 10 Pile_partners
     * const pile_partners = await prisma.pile_partner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pile_partnerWithIdOnly = await prisma.pile_partner.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends pile_partnerFindManyArgs>(
      args?: SelectSubset<T, pile_partnerFindManyArgs>
    ): PrismaPromise<Array<pile_partnerGetPayload<T>>>

    /**
     * Create a Pile_partner.
     * @param {pile_partnerCreateArgs} args - Arguments to create a Pile_partner.
     * @example
     * // Create one Pile_partner
     * const Pile_partner = await prisma.pile_partner.create({
     *   data: {
     *     // ... data to create a Pile_partner
     *   }
     * })
     * 
    **/
    create<T extends pile_partnerCreateArgs>(
      args: SelectSubset<T, pile_partnerCreateArgs>
    ): Prisma__pile_partnerClient<pile_partnerGetPayload<T>>

    /**
     * Create many Pile_partners.
     *     @param {pile_partnerCreateManyArgs} args - Arguments to create many Pile_partners.
     *     @example
     *     // Create many Pile_partners
     *     const pile_partner = await prisma.pile_partner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pile_partnerCreateManyArgs>(
      args?: SelectSubset<T, pile_partnerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Pile_partner.
     * @param {pile_partnerDeleteArgs} args - Arguments to delete one Pile_partner.
     * @example
     * // Delete one Pile_partner
     * const Pile_partner = await prisma.pile_partner.delete({
     *   where: {
     *     // ... filter to delete one Pile_partner
     *   }
     * })
     * 
    **/
    delete<T extends pile_partnerDeleteArgs>(
      args: SelectSubset<T, pile_partnerDeleteArgs>
    ): Prisma__pile_partnerClient<pile_partnerGetPayload<T>>

    /**
     * Update one Pile_partner.
     * @param {pile_partnerUpdateArgs} args - Arguments to update one Pile_partner.
     * @example
     * // Update one Pile_partner
     * const pile_partner = await prisma.pile_partner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pile_partnerUpdateArgs>(
      args: SelectSubset<T, pile_partnerUpdateArgs>
    ): Prisma__pile_partnerClient<pile_partnerGetPayload<T>>

    /**
     * Delete zero or more Pile_partners.
     * @param {pile_partnerDeleteManyArgs} args - Arguments to filter Pile_partners to delete.
     * @example
     * // Delete a few Pile_partners
     * const { count } = await prisma.pile_partner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pile_partnerDeleteManyArgs>(
      args?: SelectSubset<T, pile_partnerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pile_partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_partnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pile_partners
     * const pile_partner = await prisma.pile_partner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pile_partnerUpdateManyArgs>(
      args: SelectSubset<T, pile_partnerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pile_partner.
     * @param {pile_partnerUpsertArgs} args - Arguments to update or create a Pile_partner.
     * @example
     * // Update or create a Pile_partner
     * const pile_partner = await prisma.pile_partner.upsert({
     *   create: {
     *     // ... data to create a Pile_partner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pile_partner we want to update
     *   }
     * })
    **/
    upsert<T extends pile_partnerUpsertArgs>(
      args: SelectSubset<T, pile_partnerUpsertArgs>
    ): Prisma__pile_partnerClient<pile_partnerGetPayload<T>>

    /**
     * Find zero or more Pile_partners that matches the filter.
     * @param {pile_partnerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pile_partner = await prisma.pile_partner.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: pile_partnerFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pile_partner.
     * @param {pile_partnerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pile_partner = await prisma.pile_partner.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: pile_partnerAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Pile_partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_partnerCountArgs} args - Arguments to filter Pile_partners to count.
     * @example
     * // Count the number of Pile_partners
     * const count = await prisma.pile_partner.count({
     *   where: {
     *     // ... the filter for the Pile_partners we want to count
     *   }
     * })
    **/
    count<T extends pile_partnerCountArgs>(
      args?: Subset<T, pile_partnerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pile_partnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pile_partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_partnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pile_partnerAggregateArgs>(args: Subset<T, Pile_partnerAggregateArgs>): PrismaPromise<GetPile_partnerAggregateType<T>>

    /**
     * Group by Pile_partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_partnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Pile_partnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pile_partnerGroupByArgs['orderBy'] }
        : { orderBy?: Pile_partnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Pile_partnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPile_partnerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pile_partner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pile_partnerClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pile_partner base type for findUnique actions
   */
  export type pile_partnerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the pile_partner
     */
    select?: pile_partnerSelect | null
    /**
     * Filter, which pile_partner to fetch.
     */
    where: pile_partnerWhereUniqueInput
  }

  /**
   * pile_partner findUnique
   */
  export interface pile_partnerFindUniqueArgs extends pile_partnerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_partner findUniqueOrThrow
   */
  export type pile_partnerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_partner
     */
    select?: pile_partnerSelect | null
    /**
     * Filter, which pile_partner to fetch.
     */
    where: pile_partnerWhereUniqueInput
  }


  /**
   * pile_partner base type for findFirst actions
   */
  export type pile_partnerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the pile_partner
     */
    select?: pile_partnerSelect | null
    /**
     * Filter, which pile_partner to fetch.
     */
    where?: pile_partnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_partners to fetch.
     */
    orderBy?: Enumerable<pile_partnerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_partners.
     */
    cursor?: pile_partnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_partners.
     */
    distinct?: Enumerable<Pile_partnerScalarFieldEnum>
  }

  /**
   * pile_partner findFirst
   */
  export interface pile_partnerFindFirstArgs extends pile_partnerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_partner findFirstOrThrow
   */
  export type pile_partnerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_partner
     */
    select?: pile_partnerSelect | null
    /**
     * Filter, which pile_partner to fetch.
     */
    where?: pile_partnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_partners to fetch.
     */
    orderBy?: Enumerable<pile_partnerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_partners.
     */
    cursor?: pile_partnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_partners.
     */
    distinct?: Enumerable<Pile_partnerScalarFieldEnum>
  }


  /**
   * pile_partner findMany
   */
  export type pile_partnerFindManyArgs = {
    /**
     * Select specific fields to fetch from the pile_partner
     */
    select?: pile_partnerSelect | null
    /**
     * Filter, which pile_partners to fetch.
     */
    where?: pile_partnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_partners to fetch.
     */
    orderBy?: Enumerable<pile_partnerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pile_partners.
     */
    cursor?: pile_partnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_partners.
     */
    skip?: number
    distinct?: Enumerable<Pile_partnerScalarFieldEnum>
  }


  /**
   * pile_partner create
   */
  export type pile_partnerCreateArgs = {
    /**
     * Select specific fields to fetch from the pile_partner
     */
    select?: pile_partnerSelect | null
    /**
     * The data needed to create a pile_partner.
     */
    data: XOR<pile_partnerCreateInput, pile_partnerUncheckedCreateInput>
  }


  /**
   * pile_partner createMany
   */
  export type pile_partnerCreateManyArgs = {
    /**
     * The data used to create many pile_partners.
     */
    data: Enumerable<pile_partnerCreateManyInput>
  }


  /**
   * pile_partner update
   */
  export type pile_partnerUpdateArgs = {
    /**
     * Select specific fields to fetch from the pile_partner
     */
    select?: pile_partnerSelect | null
    /**
     * The data needed to update a pile_partner.
     */
    data: XOR<pile_partnerUpdateInput, pile_partnerUncheckedUpdateInput>
    /**
     * Choose, which pile_partner to update.
     */
    where: pile_partnerWhereUniqueInput
  }


  /**
   * pile_partner updateMany
   */
  export type pile_partnerUpdateManyArgs = {
    /**
     * The data used to update pile_partners.
     */
    data: XOR<pile_partnerUpdateManyMutationInput, pile_partnerUncheckedUpdateManyInput>
    /**
     * Filter which pile_partners to update
     */
    where?: pile_partnerWhereInput
  }


  /**
   * pile_partner upsert
   */
  export type pile_partnerUpsertArgs = {
    /**
     * Select specific fields to fetch from the pile_partner
     */
    select?: pile_partnerSelect | null
    /**
     * The filter to search for the pile_partner to update in case it exists.
     */
    where: pile_partnerWhereUniqueInput
    /**
     * In case the pile_partner found by the `where` argument doesn't exist, create a new pile_partner with this data.
     */
    create: XOR<pile_partnerCreateInput, pile_partnerUncheckedCreateInput>
    /**
     * In case the pile_partner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pile_partnerUpdateInput, pile_partnerUncheckedUpdateInput>
  }


  /**
   * pile_partner delete
   */
  export type pile_partnerDeleteArgs = {
    /**
     * Select specific fields to fetch from the pile_partner
     */
    select?: pile_partnerSelect | null
    /**
     * Filter which pile_partner to delete.
     */
    where: pile_partnerWhereUniqueInput
  }


  /**
   * pile_partner deleteMany
   */
  export type pile_partnerDeleteManyArgs = {
    /**
     * Filter which pile_partners to delete
     */
    where?: pile_partnerWhereInput
  }


  /**
   * pile_partner findRaw
   */
  export type pile_partnerFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_partner aggregateRaw
   */
  export type pile_partnerAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_partner without action
   */
  export type pile_partnerArgs = {
    /**
     * Select specific fields to fetch from the pile_partner
     */
    select?: pile_partnerSelect | null
  }



  /**
   * Model pile_table_preferences
   */


  export type AggregatePile_table_preferences = {
    _count: Pile_table_preferencesCountAggregateOutputType | null
    _min: Pile_table_preferencesMinAggregateOutputType | null
    _max: Pile_table_preferencesMaxAggregateOutputType | null
  }

  export type Pile_table_preferencesMinAggregateOutputType = {
    id: string | null
    contactPersonId: string | null
    id_: string | null
    preferenceName: string | null
  }

  export type Pile_table_preferencesMaxAggregateOutputType = {
    id: string | null
    contactPersonId: string | null
    id_: string | null
    preferenceName: string | null
  }

  export type Pile_table_preferencesCountAggregateOutputType = {
    id: number
    contactPersonId: number
    id_: number
    preferenceName: number
    _all: number
  }


  export type Pile_table_preferencesMinAggregateInputType = {
    id?: true
    contactPersonId?: true
    id_?: true
    preferenceName?: true
  }

  export type Pile_table_preferencesMaxAggregateInputType = {
    id?: true
    contactPersonId?: true
    id_?: true
    preferenceName?: true
  }

  export type Pile_table_preferencesCountAggregateInputType = {
    id?: true
    contactPersonId?: true
    id_?: true
    preferenceName?: true
    _all?: true
  }

  export type Pile_table_preferencesAggregateArgs = {
    /**
     * Filter which pile_table_preferences to aggregate.
     */
    where?: pile_table_preferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_table_preferences to fetch.
     */
    orderBy?: Enumerable<pile_table_preferencesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pile_table_preferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_table_preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_table_preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pile_table_preferences
    **/
    _count?: true | Pile_table_preferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pile_table_preferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pile_table_preferencesMaxAggregateInputType
  }

  export type GetPile_table_preferencesAggregateType<T extends Pile_table_preferencesAggregateArgs> = {
        [P in keyof T & keyof AggregatePile_table_preferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePile_table_preferences[P]>
      : GetScalarType<T[P], AggregatePile_table_preferences[P]>
  }




  export type Pile_table_preferencesGroupByArgs = {
    where?: pile_table_preferencesWhereInput
    orderBy?: Enumerable<pile_table_preferencesOrderByWithAggregationInput>
    by: Pile_table_preferencesScalarFieldEnum[]
    having?: pile_table_preferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pile_table_preferencesCountAggregateInputType | true
    _min?: Pile_table_preferencesMinAggregateInputType
    _max?: Pile_table_preferencesMaxAggregateInputType
  }


  export type Pile_table_preferencesGroupByOutputType = {
    id: string
    contactPersonId: string
    id_: string
    preferenceName: string
    _count: Pile_table_preferencesCountAggregateOutputType | null
    _min: Pile_table_preferencesMinAggregateOutputType | null
    _max: Pile_table_preferencesMaxAggregateOutputType | null
  }

  type GetPile_table_preferencesGroupByPayload<T extends Pile_table_preferencesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Pile_table_preferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pile_table_preferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pile_table_preferencesGroupByOutputType[P]>
            : GetScalarType<T[P], Pile_table_preferencesGroupByOutputType[P]>
        }
      >
    >


  export type pile_table_preferencesSelect = {
    id?: boolean
    columns?: boolean | pile_table_preferencesColumnsArgs
    contactPersonId?: boolean
    id_?: boolean
    preferenceName?: boolean
  }


  export type pile_table_preferencesInclude = {}

  export type pile_table_preferencesGetPayload<S extends boolean | null | undefined | pile_table_preferencesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pile_table_preferences :
    S extends undefined ? never :
    S extends { include: any } & (pile_table_preferencesArgs | pile_table_preferencesFindManyArgs)
    ? pile_table_preferences 
    : S extends { select: any } & (pile_table_preferencesArgs | pile_table_preferencesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'columns' ? Array < pile_table_preferencesColumnsGetPayload<S['select'][P]>>  :  P extends keyof pile_table_preferences ? pile_table_preferences[P] : never
  } 
      : pile_table_preferences


  type pile_table_preferencesCountArgs = 
    Omit<pile_table_preferencesFindManyArgs, 'select' | 'include'> & {
      select?: Pile_table_preferencesCountAggregateInputType | true
    }

  export interface pile_table_preferencesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pile_table_preferences that matches the filter.
     * @param {pile_table_preferencesFindUniqueArgs} args - Arguments to find a Pile_table_preferences
     * @example
     * // Get one Pile_table_preferences
     * const pile_table_preferences = await prisma.pile_table_preferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pile_table_preferencesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pile_table_preferencesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pile_table_preferences'> extends True ? Prisma__pile_table_preferencesClient<pile_table_preferencesGetPayload<T>> : Prisma__pile_table_preferencesClient<pile_table_preferencesGetPayload<T> | null, null>

    /**
     * Find one Pile_table_preferences that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pile_table_preferencesFindUniqueOrThrowArgs} args - Arguments to find a Pile_table_preferences
     * @example
     * // Get one Pile_table_preferences
     * const pile_table_preferences = await prisma.pile_table_preferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pile_table_preferencesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, pile_table_preferencesFindUniqueOrThrowArgs>
    ): Prisma__pile_table_preferencesClient<pile_table_preferencesGetPayload<T>>

    /**
     * Find the first Pile_table_preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_table_preferencesFindFirstArgs} args - Arguments to find a Pile_table_preferences
     * @example
     * // Get one Pile_table_preferences
     * const pile_table_preferences = await prisma.pile_table_preferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pile_table_preferencesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pile_table_preferencesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pile_table_preferences'> extends True ? Prisma__pile_table_preferencesClient<pile_table_preferencesGetPayload<T>> : Prisma__pile_table_preferencesClient<pile_table_preferencesGetPayload<T> | null, null>

    /**
     * Find the first Pile_table_preferences that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_table_preferencesFindFirstOrThrowArgs} args - Arguments to find a Pile_table_preferences
     * @example
     * // Get one Pile_table_preferences
     * const pile_table_preferences = await prisma.pile_table_preferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pile_table_preferencesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, pile_table_preferencesFindFirstOrThrowArgs>
    ): Prisma__pile_table_preferencesClient<pile_table_preferencesGetPayload<T>>

    /**
     * Find zero or more Pile_table_preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_table_preferencesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pile_table_preferences
     * const pile_table_preferences = await prisma.pile_table_preferences.findMany()
     * 
     * // Get first 10 Pile_table_preferences
     * const pile_table_preferences = await prisma.pile_table_preferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pile_table_preferencesWithIdOnly = await prisma.pile_table_preferences.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends pile_table_preferencesFindManyArgs>(
      args?: SelectSubset<T, pile_table_preferencesFindManyArgs>
    ): PrismaPromise<Array<pile_table_preferencesGetPayload<T>>>

    /**
     * Create a Pile_table_preferences.
     * @param {pile_table_preferencesCreateArgs} args - Arguments to create a Pile_table_preferences.
     * @example
     * // Create one Pile_table_preferences
     * const Pile_table_preferences = await prisma.pile_table_preferences.create({
     *   data: {
     *     // ... data to create a Pile_table_preferences
     *   }
     * })
     * 
    **/
    create<T extends pile_table_preferencesCreateArgs>(
      args: SelectSubset<T, pile_table_preferencesCreateArgs>
    ): Prisma__pile_table_preferencesClient<pile_table_preferencesGetPayload<T>>

    /**
     * Create many Pile_table_preferences.
     *     @param {pile_table_preferencesCreateManyArgs} args - Arguments to create many Pile_table_preferences.
     *     @example
     *     // Create many Pile_table_preferences
     *     const pile_table_preferences = await prisma.pile_table_preferences.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pile_table_preferencesCreateManyArgs>(
      args?: SelectSubset<T, pile_table_preferencesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Pile_table_preferences.
     * @param {pile_table_preferencesDeleteArgs} args - Arguments to delete one Pile_table_preferences.
     * @example
     * // Delete one Pile_table_preferences
     * const Pile_table_preferences = await prisma.pile_table_preferences.delete({
     *   where: {
     *     // ... filter to delete one Pile_table_preferences
     *   }
     * })
     * 
    **/
    delete<T extends pile_table_preferencesDeleteArgs>(
      args: SelectSubset<T, pile_table_preferencesDeleteArgs>
    ): Prisma__pile_table_preferencesClient<pile_table_preferencesGetPayload<T>>

    /**
     * Update one Pile_table_preferences.
     * @param {pile_table_preferencesUpdateArgs} args - Arguments to update one Pile_table_preferences.
     * @example
     * // Update one Pile_table_preferences
     * const pile_table_preferences = await prisma.pile_table_preferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pile_table_preferencesUpdateArgs>(
      args: SelectSubset<T, pile_table_preferencesUpdateArgs>
    ): Prisma__pile_table_preferencesClient<pile_table_preferencesGetPayload<T>>

    /**
     * Delete zero or more Pile_table_preferences.
     * @param {pile_table_preferencesDeleteManyArgs} args - Arguments to filter Pile_table_preferences to delete.
     * @example
     * // Delete a few Pile_table_preferences
     * const { count } = await prisma.pile_table_preferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pile_table_preferencesDeleteManyArgs>(
      args?: SelectSubset<T, pile_table_preferencesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pile_table_preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_table_preferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pile_table_preferences
     * const pile_table_preferences = await prisma.pile_table_preferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pile_table_preferencesUpdateManyArgs>(
      args: SelectSubset<T, pile_table_preferencesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pile_table_preferences.
     * @param {pile_table_preferencesUpsertArgs} args - Arguments to update or create a Pile_table_preferences.
     * @example
     * // Update or create a Pile_table_preferences
     * const pile_table_preferences = await prisma.pile_table_preferences.upsert({
     *   create: {
     *     // ... data to create a Pile_table_preferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pile_table_preferences we want to update
     *   }
     * })
    **/
    upsert<T extends pile_table_preferencesUpsertArgs>(
      args: SelectSubset<T, pile_table_preferencesUpsertArgs>
    ): Prisma__pile_table_preferencesClient<pile_table_preferencesGetPayload<T>>

    /**
     * Find zero or more Pile_table_preferences that matches the filter.
     * @param {pile_table_preferencesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pile_table_preferences = await prisma.pile_table_preferences.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: pile_table_preferencesFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pile_table_preferences.
     * @param {pile_table_preferencesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pile_table_preferences = await prisma.pile_table_preferences.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: pile_table_preferencesAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Pile_table_preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_table_preferencesCountArgs} args - Arguments to filter Pile_table_preferences to count.
     * @example
     * // Count the number of Pile_table_preferences
     * const count = await prisma.pile_table_preferences.count({
     *   where: {
     *     // ... the filter for the Pile_table_preferences we want to count
     *   }
     * })
    **/
    count<T extends pile_table_preferencesCountArgs>(
      args?: Subset<T, pile_table_preferencesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pile_table_preferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pile_table_preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_table_preferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pile_table_preferencesAggregateArgs>(args: Subset<T, Pile_table_preferencesAggregateArgs>): PrismaPromise<GetPile_table_preferencesAggregateType<T>>

    /**
     * Group by Pile_table_preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_table_preferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Pile_table_preferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pile_table_preferencesGroupByArgs['orderBy'] }
        : { orderBy?: Pile_table_preferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Pile_table_preferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPile_table_preferencesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pile_table_preferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pile_table_preferencesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    columns<T extends pile_table_preferencesColumnsArgs= {}>(args?: Subset<T, pile_table_preferencesColumnsArgs>): PrismaPromise<Array<pile_table_preferencesColumnsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pile_table_preferences base type for findUnique actions
   */
  export type pile_table_preferencesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the pile_table_preferences
     */
    select?: pile_table_preferencesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_table_preferencesInclude | null
    /**
     * Filter, which pile_table_preferences to fetch.
     */
    where: pile_table_preferencesWhereUniqueInput
  }

  /**
   * pile_table_preferences findUnique
   */
  export interface pile_table_preferencesFindUniqueArgs extends pile_table_preferencesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_table_preferences findUniqueOrThrow
   */
  export type pile_table_preferencesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_table_preferences
     */
    select?: pile_table_preferencesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_table_preferencesInclude | null
    /**
     * Filter, which pile_table_preferences to fetch.
     */
    where: pile_table_preferencesWhereUniqueInput
  }


  /**
   * pile_table_preferences base type for findFirst actions
   */
  export type pile_table_preferencesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the pile_table_preferences
     */
    select?: pile_table_preferencesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_table_preferencesInclude | null
    /**
     * Filter, which pile_table_preferences to fetch.
     */
    where?: pile_table_preferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_table_preferences to fetch.
     */
    orderBy?: Enumerable<pile_table_preferencesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_table_preferences.
     */
    cursor?: pile_table_preferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_table_preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_table_preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_table_preferences.
     */
    distinct?: Enumerable<Pile_table_preferencesScalarFieldEnum>
  }

  /**
   * pile_table_preferences findFirst
   */
  export interface pile_table_preferencesFindFirstArgs extends pile_table_preferencesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_table_preferences findFirstOrThrow
   */
  export type pile_table_preferencesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_table_preferences
     */
    select?: pile_table_preferencesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_table_preferencesInclude | null
    /**
     * Filter, which pile_table_preferences to fetch.
     */
    where?: pile_table_preferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_table_preferences to fetch.
     */
    orderBy?: Enumerable<pile_table_preferencesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_table_preferences.
     */
    cursor?: pile_table_preferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_table_preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_table_preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_table_preferences.
     */
    distinct?: Enumerable<Pile_table_preferencesScalarFieldEnum>
  }


  /**
   * pile_table_preferences findMany
   */
  export type pile_table_preferencesFindManyArgs = {
    /**
     * Select specific fields to fetch from the pile_table_preferences
     */
    select?: pile_table_preferencesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_table_preferencesInclude | null
    /**
     * Filter, which pile_table_preferences to fetch.
     */
    where?: pile_table_preferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_table_preferences to fetch.
     */
    orderBy?: Enumerable<pile_table_preferencesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pile_table_preferences.
     */
    cursor?: pile_table_preferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_table_preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_table_preferences.
     */
    skip?: number
    distinct?: Enumerable<Pile_table_preferencesScalarFieldEnum>
  }


  /**
   * pile_table_preferences create
   */
  export type pile_table_preferencesCreateArgs = {
    /**
     * Select specific fields to fetch from the pile_table_preferences
     */
    select?: pile_table_preferencesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_table_preferencesInclude | null
    /**
     * The data needed to create a pile_table_preferences.
     */
    data: XOR<pile_table_preferencesCreateInput, pile_table_preferencesUncheckedCreateInput>
  }


  /**
   * pile_table_preferences createMany
   */
  export type pile_table_preferencesCreateManyArgs = {
    /**
     * The data used to create many pile_table_preferences.
     */
    data: Enumerable<pile_table_preferencesCreateManyInput>
  }


  /**
   * pile_table_preferences update
   */
  export type pile_table_preferencesUpdateArgs = {
    /**
     * Select specific fields to fetch from the pile_table_preferences
     */
    select?: pile_table_preferencesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_table_preferencesInclude | null
    /**
     * The data needed to update a pile_table_preferences.
     */
    data: XOR<pile_table_preferencesUpdateInput, pile_table_preferencesUncheckedUpdateInput>
    /**
     * Choose, which pile_table_preferences to update.
     */
    where: pile_table_preferencesWhereUniqueInput
  }


  /**
   * pile_table_preferences updateMany
   */
  export type pile_table_preferencesUpdateManyArgs = {
    /**
     * The data used to update pile_table_preferences.
     */
    data: XOR<pile_table_preferencesUpdateManyMutationInput, pile_table_preferencesUncheckedUpdateManyInput>
    /**
     * Filter which pile_table_preferences to update
     */
    where?: pile_table_preferencesWhereInput
  }


  /**
   * pile_table_preferences upsert
   */
  export type pile_table_preferencesUpsertArgs = {
    /**
     * Select specific fields to fetch from the pile_table_preferences
     */
    select?: pile_table_preferencesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_table_preferencesInclude | null
    /**
     * The filter to search for the pile_table_preferences to update in case it exists.
     */
    where: pile_table_preferencesWhereUniqueInput
    /**
     * In case the pile_table_preferences found by the `where` argument doesn't exist, create a new pile_table_preferences with this data.
     */
    create: XOR<pile_table_preferencesCreateInput, pile_table_preferencesUncheckedCreateInput>
    /**
     * In case the pile_table_preferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pile_table_preferencesUpdateInput, pile_table_preferencesUncheckedUpdateInput>
  }


  /**
   * pile_table_preferences delete
   */
  export type pile_table_preferencesDeleteArgs = {
    /**
     * Select specific fields to fetch from the pile_table_preferences
     */
    select?: pile_table_preferencesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_table_preferencesInclude | null
    /**
     * Filter which pile_table_preferences to delete.
     */
    where: pile_table_preferencesWhereUniqueInput
  }


  /**
   * pile_table_preferences deleteMany
   */
  export type pile_table_preferencesDeleteManyArgs = {
    /**
     * Filter which pile_table_preferences to delete
     */
    where?: pile_table_preferencesWhereInput
  }


  /**
   * pile_table_preferences findRaw
   */
  export type pile_table_preferencesFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_table_preferences aggregateRaw
   */
  export type pile_table_preferencesAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_table_preferences without action
   */
  export type pile_table_preferencesArgs = {
    /**
     * Select specific fields to fetch from the pile_table_preferences
     */
    select?: pile_table_preferencesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_table_preferencesInclude | null
  }



  /**
   * Model pile_user_config
   */


  export type AggregatePile_user_config = {
    _count: Pile_user_configCountAggregateOutputType | null
    _min: Pile_user_configMinAggregateOutputType | null
    _max: Pile_user_configMaxAggregateOutputType | null
  }

  export type Pile_user_configMinAggregateOutputType = {
    id: string | null
    contactPersonId: string | null
  }

  export type Pile_user_configMaxAggregateOutputType = {
    id: string | null
    contactPersonId: string | null
  }

  export type Pile_user_configCountAggregateOutputType = {
    id: number
    contactPersonId: number
    _all: number
  }


  export type Pile_user_configMinAggregateInputType = {
    id?: true
    contactPersonId?: true
  }

  export type Pile_user_configMaxAggregateInputType = {
    id?: true
    contactPersonId?: true
  }

  export type Pile_user_configCountAggregateInputType = {
    id?: true
    contactPersonId?: true
    _all?: true
  }

  export type Pile_user_configAggregateArgs = {
    /**
     * Filter which pile_user_config to aggregate.
     */
    where?: pile_user_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_user_configs to fetch.
     */
    orderBy?: Enumerable<pile_user_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pile_user_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_user_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_user_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pile_user_configs
    **/
    _count?: true | Pile_user_configCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pile_user_configMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pile_user_configMaxAggregateInputType
  }

  export type GetPile_user_configAggregateType<T extends Pile_user_configAggregateArgs> = {
        [P in keyof T & keyof AggregatePile_user_config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePile_user_config[P]>
      : GetScalarType<T[P], AggregatePile_user_config[P]>
  }




  export type Pile_user_configGroupByArgs = {
    where?: pile_user_configWhereInput
    orderBy?: Enumerable<pile_user_configOrderByWithAggregationInput>
    by: Pile_user_configScalarFieldEnum[]
    having?: pile_user_configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pile_user_configCountAggregateInputType | true
    _min?: Pile_user_configMinAggregateInputType
    _max?: Pile_user_configMaxAggregateInputType
  }


  export type Pile_user_configGroupByOutputType = {
    id: string
    contactPersonId: string
    _count: Pile_user_configCountAggregateOutputType | null
    _min: Pile_user_configMinAggregateOutputType | null
    _max: Pile_user_configMaxAggregateOutputType | null
  }

  type GetPile_user_configGroupByPayload<T extends Pile_user_configGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Pile_user_configGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pile_user_configGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pile_user_configGroupByOutputType[P]>
            : GetScalarType<T[P], Pile_user_configGroupByOutputType[P]>
        }
      >
    >


  export type pile_user_configSelect = {
    id?: boolean
    contactPersonId?: boolean
    copyConfig?: boolean | pile_user_configCopyConfigArgs
  }


  export type pile_user_configInclude = {}

  export type pile_user_configGetPayload<S extends boolean | null | undefined | pile_user_configArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pile_user_config :
    S extends undefined ? never :
    S extends { include: any } & (pile_user_configArgs | pile_user_configFindManyArgs)
    ? pile_user_config 
    : S extends { select: any } & (pile_user_configArgs | pile_user_configFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'copyConfig' ? pile_user_configCopyConfigGetPayload<S['select'][P]> :  P extends keyof pile_user_config ? pile_user_config[P] : never
  } 
      : pile_user_config


  type pile_user_configCountArgs = 
    Omit<pile_user_configFindManyArgs, 'select' | 'include'> & {
      select?: Pile_user_configCountAggregateInputType | true
    }

  export interface pile_user_configDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pile_user_config that matches the filter.
     * @param {pile_user_configFindUniqueArgs} args - Arguments to find a Pile_user_config
     * @example
     * // Get one Pile_user_config
     * const pile_user_config = await prisma.pile_user_config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pile_user_configFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pile_user_configFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pile_user_config'> extends True ? Prisma__pile_user_configClient<pile_user_configGetPayload<T>> : Prisma__pile_user_configClient<pile_user_configGetPayload<T> | null, null>

    /**
     * Find one Pile_user_config that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pile_user_configFindUniqueOrThrowArgs} args - Arguments to find a Pile_user_config
     * @example
     * // Get one Pile_user_config
     * const pile_user_config = await prisma.pile_user_config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pile_user_configFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, pile_user_configFindUniqueOrThrowArgs>
    ): Prisma__pile_user_configClient<pile_user_configGetPayload<T>>

    /**
     * Find the first Pile_user_config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_user_configFindFirstArgs} args - Arguments to find a Pile_user_config
     * @example
     * // Get one Pile_user_config
     * const pile_user_config = await prisma.pile_user_config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pile_user_configFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pile_user_configFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pile_user_config'> extends True ? Prisma__pile_user_configClient<pile_user_configGetPayload<T>> : Prisma__pile_user_configClient<pile_user_configGetPayload<T> | null, null>

    /**
     * Find the first Pile_user_config that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_user_configFindFirstOrThrowArgs} args - Arguments to find a Pile_user_config
     * @example
     * // Get one Pile_user_config
     * const pile_user_config = await prisma.pile_user_config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pile_user_configFindFirstOrThrowArgs>(
      args?: SelectSubset<T, pile_user_configFindFirstOrThrowArgs>
    ): Prisma__pile_user_configClient<pile_user_configGetPayload<T>>

    /**
     * Find zero or more Pile_user_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_user_configFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pile_user_configs
     * const pile_user_configs = await prisma.pile_user_config.findMany()
     * 
     * // Get first 10 Pile_user_configs
     * const pile_user_configs = await prisma.pile_user_config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pile_user_configWithIdOnly = await prisma.pile_user_config.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends pile_user_configFindManyArgs>(
      args?: SelectSubset<T, pile_user_configFindManyArgs>
    ): PrismaPromise<Array<pile_user_configGetPayload<T>>>

    /**
     * Create a Pile_user_config.
     * @param {pile_user_configCreateArgs} args - Arguments to create a Pile_user_config.
     * @example
     * // Create one Pile_user_config
     * const Pile_user_config = await prisma.pile_user_config.create({
     *   data: {
     *     // ... data to create a Pile_user_config
     *   }
     * })
     * 
    **/
    create<T extends pile_user_configCreateArgs>(
      args: SelectSubset<T, pile_user_configCreateArgs>
    ): Prisma__pile_user_configClient<pile_user_configGetPayload<T>>

    /**
     * Create many Pile_user_configs.
     *     @param {pile_user_configCreateManyArgs} args - Arguments to create many Pile_user_configs.
     *     @example
     *     // Create many Pile_user_configs
     *     const pile_user_config = await prisma.pile_user_config.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pile_user_configCreateManyArgs>(
      args?: SelectSubset<T, pile_user_configCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Pile_user_config.
     * @param {pile_user_configDeleteArgs} args - Arguments to delete one Pile_user_config.
     * @example
     * // Delete one Pile_user_config
     * const Pile_user_config = await prisma.pile_user_config.delete({
     *   where: {
     *     // ... filter to delete one Pile_user_config
     *   }
     * })
     * 
    **/
    delete<T extends pile_user_configDeleteArgs>(
      args: SelectSubset<T, pile_user_configDeleteArgs>
    ): Prisma__pile_user_configClient<pile_user_configGetPayload<T>>

    /**
     * Update one Pile_user_config.
     * @param {pile_user_configUpdateArgs} args - Arguments to update one Pile_user_config.
     * @example
     * // Update one Pile_user_config
     * const pile_user_config = await prisma.pile_user_config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pile_user_configUpdateArgs>(
      args: SelectSubset<T, pile_user_configUpdateArgs>
    ): Prisma__pile_user_configClient<pile_user_configGetPayload<T>>

    /**
     * Delete zero or more Pile_user_configs.
     * @param {pile_user_configDeleteManyArgs} args - Arguments to filter Pile_user_configs to delete.
     * @example
     * // Delete a few Pile_user_configs
     * const { count } = await prisma.pile_user_config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pile_user_configDeleteManyArgs>(
      args?: SelectSubset<T, pile_user_configDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pile_user_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_user_configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pile_user_configs
     * const pile_user_config = await prisma.pile_user_config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pile_user_configUpdateManyArgs>(
      args: SelectSubset<T, pile_user_configUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pile_user_config.
     * @param {pile_user_configUpsertArgs} args - Arguments to update or create a Pile_user_config.
     * @example
     * // Update or create a Pile_user_config
     * const pile_user_config = await prisma.pile_user_config.upsert({
     *   create: {
     *     // ... data to create a Pile_user_config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pile_user_config we want to update
     *   }
     * })
    **/
    upsert<T extends pile_user_configUpsertArgs>(
      args: SelectSubset<T, pile_user_configUpsertArgs>
    ): Prisma__pile_user_configClient<pile_user_configGetPayload<T>>

    /**
     * Find zero or more Pile_user_configs that matches the filter.
     * @param {pile_user_configFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pile_user_config = await prisma.pile_user_config.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: pile_user_configFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pile_user_config.
     * @param {pile_user_configAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pile_user_config = await prisma.pile_user_config.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: pile_user_configAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Pile_user_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pile_user_configCountArgs} args - Arguments to filter Pile_user_configs to count.
     * @example
     * // Count the number of Pile_user_configs
     * const count = await prisma.pile_user_config.count({
     *   where: {
     *     // ... the filter for the Pile_user_configs we want to count
     *   }
     * })
    **/
    count<T extends pile_user_configCountArgs>(
      args?: Subset<T, pile_user_configCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pile_user_configCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pile_user_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_user_configAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pile_user_configAggregateArgs>(args: Subset<T, Pile_user_configAggregateArgs>): PrismaPromise<GetPile_user_configAggregateType<T>>

    /**
     * Group by Pile_user_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pile_user_configGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Pile_user_configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pile_user_configGroupByArgs['orderBy'] }
        : { orderBy?: Pile_user_configGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Pile_user_configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPile_user_configGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pile_user_config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pile_user_configClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    copyConfig<T extends pile_user_configCopyConfigArgs= {}>(args?: Subset<T, pile_user_configCopyConfigArgs>): Prisma__pile_user_configCopyConfigClient<pile_user_configCopyConfigGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pile_user_config base type for findUnique actions
   */
  export type pile_user_configFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the pile_user_config
     */
    select?: pile_user_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_user_configInclude | null
    /**
     * Filter, which pile_user_config to fetch.
     */
    where: pile_user_configWhereUniqueInput
  }

  /**
   * pile_user_config findUnique
   */
  export interface pile_user_configFindUniqueArgs extends pile_user_configFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_user_config findUniqueOrThrow
   */
  export type pile_user_configFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_user_config
     */
    select?: pile_user_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_user_configInclude | null
    /**
     * Filter, which pile_user_config to fetch.
     */
    where: pile_user_configWhereUniqueInput
  }


  /**
   * pile_user_config base type for findFirst actions
   */
  export type pile_user_configFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the pile_user_config
     */
    select?: pile_user_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_user_configInclude | null
    /**
     * Filter, which pile_user_config to fetch.
     */
    where?: pile_user_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_user_configs to fetch.
     */
    orderBy?: Enumerable<pile_user_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_user_configs.
     */
    cursor?: pile_user_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_user_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_user_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_user_configs.
     */
    distinct?: Enumerable<Pile_user_configScalarFieldEnum>
  }

  /**
   * pile_user_config findFirst
   */
  export interface pile_user_configFindFirstArgs extends pile_user_configFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pile_user_config findFirstOrThrow
   */
  export type pile_user_configFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pile_user_config
     */
    select?: pile_user_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_user_configInclude | null
    /**
     * Filter, which pile_user_config to fetch.
     */
    where?: pile_user_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_user_configs to fetch.
     */
    orderBy?: Enumerable<pile_user_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pile_user_configs.
     */
    cursor?: pile_user_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_user_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_user_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pile_user_configs.
     */
    distinct?: Enumerable<Pile_user_configScalarFieldEnum>
  }


  /**
   * pile_user_config findMany
   */
  export type pile_user_configFindManyArgs = {
    /**
     * Select specific fields to fetch from the pile_user_config
     */
    select?: pile_user_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_user_configInclude | null
    /**
     * Filter, which pile_user_configs to fetch.
     */
    where?: pile_user_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pile_user_configs to fetch.
     */
    orderBy?: Enumerable<pile_user_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pile_user_configs.
     */
    cursor?: pile_user_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pile_user_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pile_user_configs.
     */
    skip?: number
    distinct?: Enumerable<Pile_user_configScalarFieldEnum>
  }


  /**
   * pile_user_config create
   */
  export type pile_user_configCreateArgs = {
    /**
     * Select specific fields to fetch from the pile_user_config
     */
    select?: pile_user_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_user_configInclude | null
    /**
     * The data needed to create a pile_user_config.
     */
    data: XOR<pile_user_configCreateInput, pile_user_configUncheckedCreateInput>
  }


  /**
   * pile_user_config createMany
   */
  export type pile_user_configCreateManyArgs = {
    /**
     * The data used to create many pile_user_configs.
     */
    data: Enumerable<pile_user_configCreateManyInput>
  }


  /**
   * pile_user_config update
   */
  export type pile_user_configUpdateArgs = {
    /**
     * Select specific fields to fetch from the pile_user_config
     */
    select?: pile_user_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_user_configInclude | null
    /**
     * The data needed to update a pile_user_config.
     */
    data: XOR<pile_user_configUpdateInput, pile_user_configUncheckedUpdateInput>
    /**
     * Choose, which pile_user_config to update.
     */
    where: pile_user_configWhereUniqueInput
  }


  /**
   * pile_user_config updateMany
   */
  export type pile_user_configUpdateManyArgs = {
    /**
     * The data used to update pile_user_configs.
     */
    data: XOR<pile_user_configUpdateManyMutationInput, pile_user_configUncheckedUpdateManyInput>
    /**
     * Filter which pile_user_configs to update
     */
    where?: pile_user_configWhereInput
  }


  /**
   * pile_user_config upsert
   */
  export type pile_user_configUpsertArgs = {
    /**
     * Select specific fields to fetch from the pile_user_config
     */
    select?: pile_user_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_user_configInclude | null
    /**
     * The filter to search for the pile_user_config to update in case it exists.
     */
    where: pile_user_configWhereUniqueInput
    /**
     * In case the pile_user_config found by the `where` argument doesn't exist, create a new pile_user_config with this data.
     */
    create: XOR<pile_user_configCreateInput, pile_user_configUncheckedCreateInput>
    /**
     * In case the pile_user_config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pile_user_configUpdateInput, pile_user_configUncheckedUpdateInput>
  }


  /**
   * pile_user_config delete
   */
  export type pile_user_configDeleteArgs = {
    /**
     * Select specific fields to fetch from the pile_user_config
     */
    select?: pile_user_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_user_configInclude | null
    /**
     * Filter which pile_user_config to delete.
     */
    where: pile_user_configWhereUniqueInput
  }


  /**
   * pile_user_config deleteMany
   */
  export type pile_user_configDeleteManyArgs = {
    /**
     * Filter which pile_user_configs to delete
     */
    where?: pile_user_configWhereInput
  }


  /**
   * pile_user_config findRaw
   */
  export type pile_user_configFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_user_config aggregateRaw
   */
  export type pile_user_configAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * pile_user_config without action
   */
  export type pile_user_configArgs = {
    /**
     * Select specific fields to fetch from the pile_user_config
     */
    select?: pile_user_configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pile_user_configInclude | null
  }



  /**
   * Model report_generated
   */


  export type AggregateReport_generated = {
    _count: Report_generatedCountAggregateOutputType | null
    _avg: Report_generatedAvgAggregateOutputType | null
    _sum: Report_generatedSumAggregateOutputType | null
    _min: Report_generatedMinAggregateOutputType | null
    _max: Report_generatedMaxAggregateOutputType | null
  }

  export type Report_generatedAvgAggregateOutputType = {
    generatedAt: number | null
    reportData: number | null
  }

  export type Report_generatedSumAggregateOutputType = {
    generatedAt: bigint | null
    reportData: number[] | null
  }

  export type Report_generatedMinAggregateOutputType = {
    id: string | null
    generatedAt: bigint | null
    locale: string | null
    reportDescription: string | null
    reportFormat: string | null
    reportId: string | null
    reportName: string | null
    reportTitle: string | null
    success: boolean | null
    userId: string | null
    username: string | null
  }

  export type Report_generatedMaxAggregateOutputType = {
    id: string | null
    generatedAt: bigint | null
    locale: string | null
    reportDescription: string | null
    reportFormat: string | null
    reportId: string | null
    reportName: string | null
    reportTitle: string | null
    success: boolean | null
    userId: string | null
    username: string | null
  }

  export type Report_generatedCountAggregateOutputType = {
    id: number
    generatedAt: number
    locale: number
    reportData: number
    reportDescription: number
    reportFormat: number
    reportId: number
    reportName: number
    reportTitle: number
    success: number
    userId: number
    username: number
    _all: number
  }


  export type Report_generatedAvgAggregateInputType = {
    generatedAt?: true
    reportData?: true
  }

  export type Report_generatedSumAggregateInputType = {
    generatedAt?: true
    reportData?: true
  }

  export type Report_generatedMinAggregateInputType = {
    id?: true
    generatedAt?: true
    locale?: true
    reportDescription?: true
    reportFormat?: true
    reportId?: true
    reportName?: true
    reportTitle?: true
    success?: true
    userId?: true
    username?: true
  }

  export type Report_generatedMaxAggregateInputType = {
    id?: true
    generatedAt?: true
    locale?: true
    reportDescription?: true
    reportFormat?: true
    reportId?: true
    reportName?: true
    reportTitle?: true
    success?: true
    userId?: true
    username?: true
  }

  export type Report_generatedCountAggregateInputType = {
    id?: true
    generatedAt?: true
    locale?: true
    reportData?: true
    reportDescription?: true
    reportFormat?: true
    reportId?: true
    reportName?: true
    reportTitle?: true
    success?: true
    userId?: true
    username?: true
    _all?: true
  }

  export type Report_generatedAggregateArgs = {
    /**
     * Filter which report_generated to aggregate.
     */
    where?: report_generatedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_generateds to fetch.
     */
    orderBy?: Enumerable<report_generatedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: report_generatedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_generateds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_generateds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned report_generateds
    **/
    _count?: true | Report_generatedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Report_generatedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Report_generatedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Report_generatedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Report_generatedMaxAggregateInputType
  }

  export type GetReport_generatedAggregateType<T extends Report_generatedAggregateArgs> = {
        [P in keyof T & keyof AggregateReport_generated]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport_generated[P]>
      : GetScalarType<T[P], AggregateReport_generated[P]>
  }




  export type Report_generatedGroupByArgs = {
    where?: report_generatedWhereInput
    orderBy?: Enumerable<report_generatedOrderByWithAggregationInput>
    by: Report_generatedScalarFieldEnum[]
    having?: report_generatedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Report_generatedCountAggregateInputType | true
    _avg?: Report_generatedAvgAggregateInputType
    _sum?: Report_generatedSumAggregateInputType
    _min?: Report_generatedMinAggregateInputType
    _max?: Report_generatedMaxAggregateInputType
  }


  export type Report_generatedGroupByOutputType = {
    id: string
    generatedAt: bigint
    locale: string
    reportData: number[]
    reportDescription: string
    reportFormat: string
    reportId: string
    reportName: string
    reportTitle: string
    success: boolean
    userId: string
    username: string
    _count: Report_generatedCountAggregateOutputType | null
    _avg: Report_generatedAvgAggregateOutputType | null
    _sum: Report_generatedSumAggregateOutputType | null
    _min: Report_generatedMinAggregateOutputType | null
    _max: Report_generatedMaxAggregateOutputType | null
  }

  type GetReport_generatedGroupByPayload<T extends Report_generatedGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Report_generatedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Report_generatedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Report_generatedGroupByOutputType[P]>
            : GetScalarType<T[P], Report_generatedGroupByOutputType[P]>
        }
      >
    >


  export type report_generatedSelect = {
    id?: boolean
    generatedAt?: boolean
    locale?: boolean
    reportData?: boolean
    reportDescription?: boolean
    reportFormat?: boolean
    reportId?: boolean
    reportName?: boolean
    reportTitle?: boolean
    success?: boolean
    userId?: boolean
    username?: boolean
  }


  export type report_generatedGetPayload<S extends boolean | null | undefined | report_generatedArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? report_generated :
    S extends undefined ? never :
    S extends { include: any } & (report_generatedArgs | report_generatedFindManyArgs)
    ? report_generated 
    : S extends { select: any } & (report_generatedArgs | report_generatedFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof report_generated ? report_generated[P] : never
  } 
      : report_generated


  type report_generatedCountArgs = 
    Omit<report_generatedFindManyArgs, 'select' | 'include'> & {
      select?: Report_generatedCountAggregateInputType | true
    }

  export interface report_generatedDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Report_generated that matches the filter.
     * @param {report_generatedFindUniqueArgs} args - Arguments to find a Report_generated
     * @example
     * // Get one Report_generated
     * const report_generated = await prisma.report_generated.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends report_generatedFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, report_generatedFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'report_generated'> extends True ? Prisma__report_generatedClient<report_generatedGetPayload<T>> : Prisma__report_generatedClient<report_generatedGetPayload<T> | null, null>

    /**
     * Find one Report_generated that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {report_generatedFindUniqueOrThrowArgs} args - Arguments to find a Report_generated
     * @example
     * // Get one Report_generated
     * const report_generated = await prisma.report_generated.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends report_generatedFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, report_generatedFindUniqueOrThrowArgs>
    ): Prisma__report_generatedClient<report_generatedGetPayload<T>>

    /**
     * Find the first Report_generated that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_generatedFindFirstArgs} args - Arguments to find a Report_generated
     * @example
     * // Get one Report_generated
     * const report_generated = await prisma.report_generated.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends report_generatedFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, report_generatedFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'report_generated'> extends True ? Prisma__report_generatedClient<report_generatedGetPayload<T>> : Prisma__report_generatedClient<report_generatedGetPayload<T> | null, null>

    /**
     * Find the first Report_generated that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_generatedFindFirstOrThrowArgs} args - Arguments to find a Report_generated
     * @example
     * // Get one Report_generated
     * const report_generated = await prisma.report_generated.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends report_generatedFindFirstOrThrowArgs>(
      args?: SelectSubset<T, report_generatedFindFirstOrThrowArgs>
    ): Prisma__report_generatedClient<report_generatedGetPayload<T>>

    /**
     * Find zero or more Report_generateds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_generatedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Report_generateds
     * const report_generateds = await prisma.report_generated.findMany()
     * 
     * // Get first 10 Report_generateds
     * const report_generateds = await prisma.report_generated.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const report_generatedWithIdOnly = await prisma.report_generated.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends report_generatedFindManyArgs>(
      args?: SelectSubset<T, report_generatedFindManyArgs>
    ): PrismaPromise<Array<report_generatedGetPayload<T>>>

    /**
     * Create a Report_generated.
     * @param {report_generatedCreateArgs} args - Arguments to create a Report_generated.
     * @example
     * // Create one Report_generated
     * const Report_generated = await prisma.report_generated.create({
     *   data: {
     *     // ... data to create a Report_generated
     *   }
     * })
     * 
    **/
    create<T extends report_generatedCreateArgs>(
      args: SelectSubset<T, report_generatedCreateArgs>
    ): Prisma__report_generatedClient<report_generatedGetPayload<T>>

    /**
     * Create many Report_generateds.
     *     @param {report_generatedCreateManyArgs} args - Arguments to create many Report_generateds.
     *     @example
     *     // Create many Report_generateds
     *     const report_generated = await prisma.report_generated.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends report_generatedCreateManyArgs>(
      args?: SelectSubset<T, report_generatedCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Report_generated.
     * @param {report_generatedDeleteArgs} args - Arguments to delete one Report_generated.
     * @example
     * // Delete one Report_generated
     * const Report_generated = await prisma.report_generated.delete({
     *   where: {
     *     // ... filter to delete one Report_generated
     *   }
     * })
     * 
    **/
    delete<T extends report_generatedDeleteArgs>(
      args: SelectSubset<T, report_generatedDeleteArgs>
    ): Prisma__report_generatedClient<report_generatedGetPayload<T>>

    /**
     * Update one Report_generated.
     * @param {report_generatedUpdateArgs} args - Arguments to update one Report_generated.
     * @example
     * // Update one Report_generated
     * const report_generated = await prisma.report_generated.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends report_generatedUpdateArgs>(
      args: SelectSubset<T, report_generatedUpdateArgs>
    ): Prisma__report_generatedClient<report_generatedGetPayload<T>>

    /**
     * Delete zero or more Report_generateds.
     * @param {report_generatedDeleteManyArgs} args - Arguments to filter Report_generateds to delete.
     * @example
     * // Delete a few Report_generateds
     * const { count } = await prisma.report_generated.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends report_generatedDeleteManyArgs>(
      args?: SelectSubset<T, report_generatedDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Report_generateds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_generatedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Report_generateds
     * const report_generated = await prisma.report_generated.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends report_generatedUpdateManyArgs>(
      args: SelectSubset<T, report_generatedUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Report_generated.
     * @param {report_generatedUpsertArgs} args - Arguments to update or create a Report_generated.
     * @example
     * // Update or create a Report_generated
     * const report_generated = await prisma.report_generated.upsert({
     *   create: {
     *     // ... data to create a Report_generated
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report_generated we want to update
     *   }
     * })
    **/
    upsert<T extends report_generatedUpsertArgs>(
      args: SelectSubset<T, report_generatedUpsertArgs>
    ): Prisma__report_generatedClient<report_generatedGetPayload<T>>

    /**
     * Find zero or more Report_generateds that matches the filter.
     * @param {report_generatedFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const report_generated = await prisma.report_generated.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: report_generatedFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Report_generated.
     * @param {report_generatedAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const report_generated = await prisma.report_generated.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: report_generatedAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Report_generateds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_generatedCountArgs} args - Arguments to filter Report_generateds to count.
     * @example
     * // Count the number of Report_generateds
     * const count = await prisma.report_generated.count({
     *   where: {
     *     // ... the filter for the Report_generateds we want to count
     *   }
     * })
    **/
    count<T extends report_generatedCountArgs>(
      args?: Subset<T, report_generatedCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Report_generatedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report_generated.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_generatedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Report_generatedAggregateArgs>(args: Subset<T, Report_generatedAggregateArgs>): PrismaPromise<GetReport_generatedAggregateType<T>>

    /**
     * Group by Report_generated.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_generatedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Report_generatedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Report_generatedGroupByArgs['orderBy'] }
        : { orderBy?: Report_generatedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Report_generatedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReport_generatedGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for report_generated.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__report_generatedClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * report_generated base type for findUnique actions
   */
  export type report_generatedFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the report_generated
     */
    select?: report_generatedSelect | null
    /**
     * Filter, which report_generated to fetch.
     */
    where: report_generatedWhereUniqueInput
  }

  /**
   * report_generated findUnique
   */
  export interface report_generatedFindUniqueArgs extends report_generatedFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * report_generated findUniqueOrThrow
   */
  export type report_generatedFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the report_generated
     */
    select?: report_generatedSelect | null
    /**
     * Filter, which report_generated to fetch.
     */
    where: report_generatedWhereUniqueInput
  }


  /**
   * report_generated base type for findFirst actions
   */
  export type report_generatedFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the report_generated
     */
    select?: report_generatedSelect | null
    /**
     * Filter, which report_generated to fetch.
     */
    where?: report_generatedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_generateds to fetch.
     */
    orderBy?: Enumerable<report_generatedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for report_generateds.
     */
    cursor?: report_generatedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_generateds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_generateds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of report_generateds.
     */
    distinct?: Enumerable<Report_generatedScalarFieldEnum>
  }

  /**
   * report_generated findFirst
   */
  export interface report_generatedFindFirstArgs extends report_generatedFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * report_generated findFirstOrThrow
   */
  export type report_generatedFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the report_generated
     */
    select?: report_generatedSelect | null
    /**
     * Filter, which report_generated to fetch.
     */
    where?: report_generatedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_generateds to fetch.
     */
    orderBy?: Enumerable<report_generatedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for report_generateds.
     */
    cursor?: report_generatedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_generateds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_generateds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of report_generateds.
     */
    distinct?: Enumerable<Report_generatedScalarFieldEnum>
  }


  /**
   * report_generated findMany
   */
  export type report_generatedFindManyArgs = {
    /**
     * Select specific fields to fetch from the report_generated
     */
    select?: report_generatedSelect | null
    /**
     * Filter, which report_generateds to fetch.
     */
    where?: report_generatedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_generateds to fetch.
     */
    orderBy?: Enumerable<report_generatedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing report_generateds.
     */
    cursor?: report_generatedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_generateds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_generateds.
     */
    skip?: number
    distinct?: Enumerable<Report_generatedScalarFieldEnum>
  }


  /**
   * report_generated create
   */
  export type report_generatedCreateArgs = {
    /**
     * Select specific fields to fetch from the report_generated
     */
    select?: report_generatedSelect | null
    /**
     * The data needed to create a report_generated.
     */
    data: XOR<report_generatedCreateInput, report_generatedUncheckedCreateInput>
  }


  /**
   * report_generated createMany
   */
  export type report_generatedCreateManyArgs = {
    /**
     * The data used to create many report_generateds.
     */
    data: Enumerable<report_generatedCreateManyInput>
  }


  /**
   * report_generated update
   */
  export type report_generatedUpdateArgs = {
    /**
     * Select specific fields to fetch from the report_generated
     */
    select?: report_generatedSelect | null
    /**
     * The data needed to update a report_generated.
     */
    data: XOR<report_generatedUpdateInput, report_generatedUncheckedUpdateInput>
    /**
     * Choose, which report_generated to update.
     */
    where: report_generatedWhereUniqueInput
  }


  /**
   * report_generated updateMany
   */
  export type report_generatedUpdateManyArgs = {
    /**
     * The data used to update report_generateds.
     */
    data: XOR<report_generatedUpdateManyMutationInput, report_generatedUncheckedUpdateManyInput>
    /**
     * Filter which report_generateds to update
     */
    where?: report_generatedWhereInput
  }


  /**
   * report_generated upsert
   */
  export type report_generatedUpsertArgs = {
    /**
     * Select specific fields to fetch from the report_generated
     */
    select?: report_generatedSelect | null
    /**
     * The filter to search for the report_generated to update in case it exists.
     */
    where: report_generatedWhereUniqueInput
    /**
     * In case the report_generated found by the `where` argument doesn't exist, create a new report_generated with this data.
     */
    create: XOR<report_generatedCreateInput, report_generatedUncheckedCreateInput>
    /**
     * In case the report_generated was found with the provided `where` argument, update it with this data.
     */
    update: XOR<report_generatedUpdateInput, report_generatedUncheckedUpdateInput>
  }


  /**
   * report_generated delete
   */
  export type report_generatedDeleteArgs = {
    /**
     * Select specific fields to fetch from the report_generated
     */
    select?: report_generatedSelect | null
    /**
     * Filter which report_generated to delete.
     */
    where: report_generatedWhereUniqueInput
  }


  /**
   * report_generated deleteMany
   */
  export type report_generatedDeleteManyArgs = {
    /**
     * Filter which report_generateds to delete
     */
    where?: report_generatedWhereInput
  }


  /**
   * report_generated findRaw
   */
  export type report_generatedFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * report_generated aggregateRaw
   */
  export type report_generatedAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * report_generated without action
   */
  export type report_generatedArgs = {
    /**
     * Select specific fields to fetch from the report_generated
     */
    select?: report_generatedSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Forest_management_contactpersonScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    id_: 'id_',
    lastName: 'lastName',
    locale: 'locale',
    mandatePartnerIds: 'mandatePartnerIds',
    partnerId: 'partnerId',
    roles: 'roles'
  };

  export type Forest_management_contactpersonScalarFieldEnum = (typeof Forest_management_contactpersonScalarFieldEnum)[keyof typeof Forest_management_contactpersonScalarFieldEnum]


  export const Forest_management_partnerScalarFieldEnum: {
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
  };

  export type Forest_management_partnerScalarFieldEnum = (typeof Forest_management_partnerScalarFieldEnum)[keyof typeof Forest_management_partnerScalarFieldEnum]


  export const Map_configScalarFieldEnum: {
    id: 'id',
    contactPersonId: 'contactPersonId',
    mapStartAtHomePosition: 'mapStartAtHomePosition',
    pileColoringStrategy: 'pileColoringStrategy'
  };

  export type Map_configScalarFieldEnum = (typeof Map_configScalarFieldEnum)[keyof typeof Map_configScalarFieldEnum]


  export const Pile_certificatesScalarFieldEnum: {
    id: 'id',
    expiryDate: 'expiryDate',
    id_: 'id_',
    licenseNumber: 'licenseNumber',
    number: 'number',
    partnerId: 'partnerId',
    type: 'type'
  };

  export type Pile_certificatesScalarFieldEnum = (typeof Pile_certificatesScalarFieldEnum)[keyof typeof Pile_certificatesScalarFieldEnum]


  export const Pile_contactpersonScalarFieldEnum: {
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
  };

  export type Pile_contactpersonScalarFieldEnum = (typeof Pile_contactpersonScalarFieldEnum)[keyof typeof Pile_contactpersonScalarFieldEnum]


  export const Pile_intermediatestoragesScalarFieldEnum: {
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
  };

  export type Pile_intermediatestoragesScalarFieldEnum = (typeof Pile_intermediatestoragesScalarFieldEnum)[keyof typeof Pile_intermediatestoragesScalarFieldEnum]


  export const Pile_inventoryScalarFieldEnum: {
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
  };

  export type Pile_inventoryScalarFieldEnum = (typeof Pile_inventoryScalarFieldEnum)[keyof typeof Pile_inventoryScalarFieldEnum]


  export const Pile_mapScalarFieldEnum: {
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
  };

  export type Pile_mapScalarFieldEnum = (typeof Pile_mapScalarFieldEnum)[keyof typeof Pile_mapScalarFieldEnum]


  export const Pile_partnerScalarFieldEnum: {
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
  };

  export type Pile_partnerScalarFieldEnum = (typeof Pile_partnerScalarFieldEnum)[keyof typeof Pile_partnerScalarFieldEnum]


  export const Pile_table_preferencesScalarFieldEnum: {
    id: 'id',
    contactPersonId: 'contactPersonId',
    id_: 'id_',
    preferenceName: 'preferenceName'
  };

  export type Pile_table_preferencesScalarFieldEnum = (typeof Pile_table_preferencesScalarFieldEnum)[keyof typeof Pile_table_preferencesScalarFieldEnum]


  export const Pile_user_configScalarFieldEnum: {
    id: 'id',
    contactPersonId: 'contactPersonId'
  };

  export type Pile_user_configScalarFieldEnum = (typeof Pile_user_configScalarFieldEnum)[keyof typeof Pile_user_configScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const Report_generatedScalarFieldEnum: {
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
  };

  export type Report_generatedScalarFieldEnum = (typeof Report_generatedScalarFieldEnum)[keyof typeof Report_generatedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type forest_management_contactpersonWhereInput = {
    AND?: Enumerable<forest_management_contactpersonWhereInput>
    OR?: Enumerable<forest_management_contactpersonWhereInput>
    NOT?: Enumerable<forest_management_contactpersonWhereInput>
    id?: StringFilter | string
    accessRights?: XOR<ForestManagement_contactpersonAccessRightsCompositeListFilter, Enumerable<ForestManagement_contactpersonAccessRightsObjectEqualityInput>>
    email?: StringNullableFilter | string | null
    firstName?: StringFilter | string
    id_?: StringFilter | string
    lastName?: StringFilter | string
    locale?: StringNullableFilter | string | null
    mandatePartnerIds?: StringNullableListFilter
    partnerId?: StringFilter | string
    roles?: StringNullableListFilter
  }

  export type forest_management_contactpersonOrderByWithRelationInput = {
    id?: SortOrder
    accessRights?: ForestManagement_contactpersonAccessRightsOrderByCompositeAggregateInput
    email?: SortOrder
    firstName?: SortOrder
    id_?: SortOrder
    lastName?: SortOrder
    locale?: SortOrder
    mandatePartnerIds?: SortOrder
    partnerId?: SortOrder
    roles?: SortOrder
  }

  export type forest_management_contactpersonWhereUniqueInput = {
    id?: string
  }

  export type forest_management_contactpersonOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id_?: SortOrder
    lastName?: SortOrder
    locale?: SortOrder
    mandatePartnerIds?: SortOrder
    partnerId?: SortOrder
    roles?: SortOrder
    _count?: forest_management_contactpersonCountOrderByAggregateInput
    _max?: forest_management_contactpersonMaxOrderByAggregateInput
    _min?: forest_management_contactpersonMinOrderByAggregateInput
  }

  export type forest_management_contactpersonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<forest_management_contactpersonScalarWhereWithAggregatesInput>
    OR?: Enumerable<forest_management_contactpersonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<forest_management_contactpersonScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    firstName?: StringWithAggregatesFilter | string
    id_?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    locale?: StringNullableWithAggregatesFilter | string | null
    mandatePartnerIds?: StringNullableListFilter
    partnerId?: StringWithAggregatesFilter | string
    roles?: StringNullableListFilter
  }

  export type forest_management_partnerWhereInput = {
    AND?: Enumerable<forest_management_partnerWhereInput>
    OR?: Enumerable<forest_management_partnerWhereInput>
    NOT?: Enumerable<forest_management_partnerWhereInput>
    id?: StringFilter | string
    associatedPartnerIdList?: StringNullableListFilter
    company?: StringFilter | string
    contactName?: StringFilter | string
    deactivated?: BoolFilter | boolean
    forestCompanyAssociations?: StringNullableListFilter
    id_?: StringFilter | string
    latitude?: FloatNullableFilter | number | null
    longitude?: FloatNullableFilter | number | null
    mandatePersonIds?: StringNullableListFilter
    partnerNumber?: StringFilter | string
  }

  export type forest_management_partnerOrderByWithRelationInput = {
    id?: SortOrder
    associatedPartnerIdList?: SortOrder
    company?: SortOrder
    contactName?: SortOrder
    deactivated?: SortOrder
    forestCompanyAssociations?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    mandatePersonIds?: SortOrder
    partnerNumber?: SortOrder
  }

  export type forest_management_partnerWhereUniqueInput = {
    id?: string
  }

  export type forest_management_partnerOrderByWithAggregationInput = {
    id?: SortOrder
    associatedPartnerIdList?: SortOrder
    company?: SortOrder
    contactName?: SortOrder
    deactivated?: SortOrder
    forestCompanyAssociations?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    mandatePersonIds?: SortOrder
    partnerNumber?: SortOrder
    _count?: forest_management_partnerCountOrderByAggregateInput
    _avg?: forest_management_partnerAvgOrderByAggregateInput
    _max?: forest_management_partnerMaxOrderByAggregateInput
    _min?: forest_management_partnerMinOrderByAggregateInput
    _sum?: forest_management_partnerSumOrderByAggregateInput
  }

  export type forest_management_partnerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<forest_management_partnerScalarWhereWithAggregatesInput>
    OR?: Enumerable<forest_management_partnerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<forest_management_partnerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    associatedPartnerIdList?: StringNullableListFilter
    company?: StringWithAggregatesFilter | string
    contactName?: StringWithAggregatesFilter | string
    deactivated?: BoolWithAggregatesFilter | boolean
    forestCompanyAssociations?: StringNullableListFilter
    id_?: StringWithAggregatesFilter | string
    latitude?: FloatNullableWithAggregatesFilter | number | null
    longitude?: FloatNullableWithAggregatesFilter | number | null
    mandatePersonIds?: StringNullableListFilter
    partnerNumber?: StringWithAggregatesFilter | string
  }

  export type map_configWhereInput = {
    AND?: Enumerable<map_configWhereInput>
    OR?: Enumerable<map_configWhereInput>
    NOT?: Enumerable<map_configWhereInput>
    id?: StringFilter | string
    contactPersonId?: StringFilter | string
    layers?: XOR<Map_configLayersCompositeListFilter, Enumerable<Map_configLayersObjectEqualityInput>>
    mapStartAtHomePosition?: BoolFilter | boolean
    pileColoringStrategy?: StringFilter | string
  }

  export type map_configOrderByWithRelationInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
    layers?: Map_configLayersOrderByCompositeAggregateInput
    mapStartAtHomePosition?: SortOrder
    pileColoringStrategy?: SortOrder
  }

  export type map_configWhereUniqueInput = {
    id?: string
  }

  export type map_configOrderByWithAggregationInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
    mapStartAtHomePosition?: SortOrder
    pileColoringStrategy?: SortOrder
    _count?: map_configCountOrderByAggregateInput
    _max?: map_configMaxOrderByAggregateInput
    _min?: map_configMinOrderByAggregateInput
  }

  export type map_configScalarWhereWithAggregatesInput = {
    AND?: Enumerable<map_configScalarWhereWithAggregatesInput>
    OR?: Enumerable<map_configScalarWhereWithAggregatesInput>
    NOT?: Enumerable<map_configScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    contactPersonId?: StringWithAggregatesFilter | string
    mapStartAtHomePosition?: BoolWithAggregatesFilter | boolean
    pileColoringStrategy?: StringWithAggregatesFilter | string
  }

  export type pile_certificatesWhereInput = {
    AND?: Enumerable<pile_certificatesWhereInput>
    OR?: Enumerable<pile_certificatesWhereInput>
    NOT?: Enumerable<pile_certificatesWhereInput>
    id?: StringFilter | string
    expiryDate?: StringFilter | string
    id_?: StringFilter | string
    licenseNumber?: StringNullableFilter | string | null
    number?: StringFilter | string
    partnerId?: StringFilter | string
    type?: StringFilter | string
  }

  export type pile_certificatesOrderByWithRelationInput = {
    id?: SortOrder
    expiryDate?: SortOrder
    id_?: SortOrder
    licenseNumber?: SortOrder
    number?: SortOrder
    partnerId?: SortOrder
    type?: SortOrder
  }

  export type pile_certificatesWhereUniqueInput = {
    id?: string
  }

  export type pile_certificatesOrderByWithAggregationInput = {
    id?: SortOrder
    expiryDate?: SortOrder
    id_?: SortOrder
    licenseNumber?: SortOrder
    number?: SortOrder
    partnerId?: SortOrder
    type?: SortOrder
    _count?: pile_certificatesCountOrderByAggregateInput
    _max?: pile_certificatesMaxOrderByAggregateInput
    _min?: pile_certificatesMinOrderByAggregateInput
  }

  export type pile_certificatesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<pile_certificatesScalarWhereWithAggregatesInput>
    OR?: Enumerable<pile_certificatesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<pile_certificatesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    expiryDate?: StringWithAggregatesFilter | string
    id_?: StringWithAggregatesFilter | string
    licenseNumber?: StringNullableWithAggregatesFilter | string | null
    number?: StringWithAggregatesFilter | string
    partnerId?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
  }

  export type pile_contactpersonWhereInput = {
    AND?: Enumerable<pile_contactpersonWhereInput>
    OR?: Enumerable<pile_contactpersonWhereInput>
    NOT?: Enumerable<pile_contactpersonWhereInput>
    id?: StringFilter | string
    accessRights?: XOR<Pile_contactpersonAccessRightsCompositeListFilter, Enumerable<Pile_contactpersonAccessRightsObjectEqualityInput>>
    email?: StringNullableFilter | string | null
    firstName?: StringFilter | string
    id_?: StringFilter | string
    landlineNumber?: StringNullableFilter | string | null
    lastName?: StringFilter | string
    locale?: StringNullableFilter | string | null
    mandatePartnerIds?: StringNullableListFilter
    partnerId?: StringFilter | string
    pileNumberRangeIndex?: IntNullableFilter | number | null
    roles?: StringNullableListFilter
    salutation?: StringNullableFilter | string | null
  }

  export type pile_contactpersonOrderByWithRelationInput = {
    id?: SortOrder
    accessRights?: Pile_contactpersonAccessRightsOrderByCompositeAggregateInput
    email?: SortOrder
    firstName?: SortOrder
    id_?: SortOrder
    landlineNumber?: SortOrder
    lastName?: SortOrder
    locale?: SortOrder
    mandatePartnerIds?: SortOrder
    partnerId?: SortOrder
    pileNumberRangeIndex?: SortOrder
    roles?: SortOrder
    salutation?: SortOrder
  }

  export type pile_contactpersonWhereUniqueInput = {
    id?: string
  }

  export type pile_contactpersonOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id_?: SortOrder
    landlineNumber?: SortOrder
    lastName?: SortOrder
    locale?: SortOrder
    mandatePartnerIds?: SortOrder
    partnerId?: SortOrder
    pileNumberRangeIndex?: SortOrder
    roles?: SortOrder
    salutation?: SortOrder
    _count?: pile_contactpersonCountOrderByAggregateInput
    _avg?: pile_contactpersonAvgOrderByAggregateInput
    _max?: pile_contactpersonMaxOrderByAggregateInput
    _min?: pile_contactpersonMinOrderByAggregateInput
    _sum?: pile_contactpersonSumOrderByAggregateInput
  }

  export type pile_contactpersonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<pile_contactpersonScalarWhereWithAggregatesInput>
    OR?: Enumerable<pile_contactpersonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<pile_contactpersonScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    firstName?: StringWithAggregatesFilter | string
    id_?: StringWithAggregatesFilter | string
    landlineNumber?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringWithAggregatesFilter | string
    locale?: StringNullableWithAggregatesFilter | string | null
    mandatePartnerIds?: StringNullableListFilter
    partnerId?: StringWithAggregatesFilter | string
    pileNumberRangeIndex?: IntNullableWithAggregatesFilter | number | null
    roles?: StringNullableListFilter
    salutation?: StringNullableWithAggregatesFilter | string | null
  }

  export type pile_intermediatestoragesWhereInput = {
    AND?: Enumerable<pile_intermediatestoragesWhereInput>
    OR?: Enumerable<pile_intermediatestoragesWhereInput>
    NOT?: Enumerable<pile_intermediatestoragesWhereInput>
    id?: StringFilter | string
    city?: StringNullableFilter | string | null
    designation?: StringNullableFilter | string | null
    district?: StringNullableFilter | string | null
    id_?: StringFilter | string
    latitude?: FloatFilter | number
    longitude?: FloatFilter | number
    parcel?: StringNullableFilter | string | null
    partnerId?: StringFilter | string
    state?: StringNullableFilter | string | null
  }

  export type pile_intermediatestoragesOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    designation?: SortOrder
    district?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    parcel?: SortOrder
    partnerId?: SortOrder
    state?: SortOrder
  }

  export type pile_intermediatestoragesWhereUniqueInput = {
    id?: string
  }

  export type pile_intermediatestoragesOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    designation?: SortOrder
    district?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    parcel?: SortOrder
    partnerId?: SortOrder
    state?: SortOrder
    _count?: pile_intermediatestoragesCountOrderByAggregateInput
    _avg?: pile_intermediatestoragesAvgOrderByAggregateInput
    _max?: pile_intermediatestoragesMaxOrderByAggregateInput
    _min?: pile_intermediatestoragesMinOrderByAggregateInput
    _sum?: pile_intermediatestoragesSumOrderByAggregateInput
  }

  export type pile_intermediatestoragesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<pile_intermediatestoragesScalarWhereWithAggregatesInput>
    OR?: Enumerable<pile_intermediatestoragesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<pile_intermediatestoragesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    city?: StringNullableWithAggregatesFilter | string | null
    designation?: StringNullableWithAggregatesFilter | string | null
    district?: StringNullableWithAggregatesFilter | string | null
    id_?: StringWithAggregatesFilter | string
    latitude?: FloatWithAggregatesFilter | number
    longitude?: FloatWithAggregatesFilter | number
    parcel?: StringNullableWithAggregatesFilter | string | null
    partnerId?: StringWithAggregatesFilter | string
    state?: StringNullableWithAggregatesFilter | string | null
  }

  export type pile_inventoryWhereInput = {
    AND?: Enumerable<pile_inventoryWhereInput>
    OR?: Enumerable<pile_inventoryWhereInput>
    NOT?: Enumerable<pile_inventoryWhereInput>
    id?: StringFilter | string
    buyingUnit?: StringFilter | string
    comment?: StringFilter | string
    correction?: BoolFilter | boolean
    createdDate?: BigIntFilter | bigint | number
    createdUserId?: StringFilter | string
    faultyInventory?: BoolFilter | boolean
    inventoryAmountRm?: FloatFilter | number
    pileId?: StringFilter | string
    status?: StringFilter | string
    statusDate?: BigIntFilter | bigint | number
    statusUserId?: StringFilter | string
  }

  export type pile_inventoryOrderByWithRelationInput = {
    id?: SortOrder
    buyingUnit?: SortOrder
    comment?: SortOrder
    correction?: SortOrder
    createdDate?: SortOrder
    createdUserId?: SortOrder
    faultyInventory?: SortOrder
    inventoryAmountRm?: SortOrder
    pileId?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    statusUserId?: SortOrder
  }

  export type pile_inventoryWhereUniqueInput = {
    id?: string
  }

  export type pile_inventoryOrderByWithAggregationInput = {
    id?: SortOrder
    buyingUnit?: SortOrder
    comment?: SortOrder
    correction?: SortOrder
    createdDate?: SortOrder
    createdUserId?: SortOrder
    faultyInventory?: SortOrder
    inventoryAmountRm?: SortOrder
    pileId?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    statusUserId?: SortOrder
    _count?: pile_inventoryCountOrderByAggregateInput
    _avg?: pile_inventoryAvgOrderByAggregateInput
    _max?: pile_inventoryMaxOrderByAggregateInput
    _min?: pile_inventoryMinOrderByAggregateInput
    _sum?: pile_inventorySumOrderByAggregateInput
  }

  export type pile_inventoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<pile_inventoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<pile_inventoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<pile_inventoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    buyingUnit?: StringWithAggregatesFilter | string
    comment?: StringWithAggregatesFilter | string
    correction?: BoolWithAggregatesFilter | boolean
    createdDate?: BigIntWithAggregatesFilter | bigint | number
    createdUserId?: StringWithAggregatesFilter | string
    faultyInventory?: BoolWithAggregatesFilter | boolean
    inventoryAmountRm?: FloatWithAggregatesFilter | number
    pileId?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    statusDate?: BigIntWithAggregatesFilter | bigint | number
    statusUserId?: StringWithAggregatesFilter | string
  }

  export type pile_mapWhereInput = {
    AND?: Enumerable<pile_mapWhereInput>
    OR?: Enumerable<pile_mapWhereInput>
    NOT?: Enumerable<pile_mapWhereInput>
    id?: StringFilter | string
    actualAmount?: FloatFilter | number
    amountRm?: FloatFilter | number
    avgLengthM?: FloatFilter | number
    buyingUnit?: StringFilter | string
    forestOwnerId?: StringFilter | string
    forestOwnerPileNumber?: StringNullableFilter | string | null
    forestOwnerPileStatus?: StringNullableFilter | string | null
    hasRemoval?: IntFilter | number
    id_?: StringFilter | string
    inventoryAmountRm?: FloatFilter | number
    latitude?: FloatFilter | number
    logisticStatus?: StringFilter | string
    longitude?: FloatFilter | number
    pileNumber?: StringFilter | string
    registrationDate?: BigIntFilter | bigint | number
    remainingAmountRm?: FloatFilter | number
    status?: StringFilter | string
    statusDate?: BigIntFilter | bigint | number
    treeSpecies?: XOR<Pile_mapTreeSpeciesCompositeListFilter, Enumerable<Pile_mapTreeSpeciesObjectEqualityInput>>
    woodBuyerId?: StringFilter | string
    woodSpecies?: XOR<Pile_mapWoodSpeciesNullableCompositeFilter, Pile_mapWoodSpeciesObjectEqualityInput> | null
  }

  export type pile_mapOrderByWithRelationInput = {
    id?: SortOrder
    actualAmount?: SortOrder
    amountRm?: SortOrder
    avgLengthM?: SortOrder
    buyingUnit?: SortOrder
    forestOwnerId?: SortOrder
    forestOwnerPileNumber?: SortOrder
    forestOwnerPileStatus?: SortOrder
    hasRemoval?: SortOrder
    id_?: SortOrder
    inventoryAmountRm?: SortOrder
    latitude?: SortOrder
    logisticStatus?: SortOrder
    longitude?: SortOrder
    pileNumber?: SortOrder
    registrationDate?: SortOrder
    remainingAmountRm?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    treeSpecies?: Pile_mapTreeSpeciesOrderByCompositeAggregateInput
    woodBuyerId?: SortOrder
    woodSpecies?: Pile_mapWoodSpeciesOrderByInput
  }

  export type pile_mapWhereUniqueInput = {
    id?: string
  }

  export type pile_mapOrderByWithAggregationInput = {
    id?: SortOrder
    actualAmount?: SortOrder
    amountRm?: SortOrder
    avgLengthM?: SortOrder
    buyingUnit?: SortOrder
    forestOwnerId?: SortOrder
    forestOwnerPileNumber?: SortOrder
    forestOwnerPileStatus?: SortOrder
    hasRemoval?: SortOrder
    id_?: SortOrder
    inventoryAmountRm?: SortOrder
    latitude?: SortOrder
    logisticStatus?: SortOrder
    longitude?: SortOrder
    pileNumber?: SortOrder
    registrationDate?: SortOrder
    remainingAmountRm?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    woodBuyerId?: SortOrder
    _count?: pile_mapCountOrderByAggregateInput
    _avg?: pile_mapAvgOrderByAggregateInput
    _max?: pile_mapMaxOrderByAggregateInput
    _min?: pile_mapMinOrderByAggregateInput
    _sum?: pile_mapSumOrderByAggregateInput
  }

  export type pile_mapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<pile_mapScalarWhereWithAggregatesInput>
    OR?: Enumerable<pile_mapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<pile_mapScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    actualAmount?: FloatWithAggregatesFilter | number
    amountRm?: FloatWithAggregatesFilter | number
    avgLengthM?: FloatWithAggregatesFilter | number
    buyingUnit?: StringWithAggregatesFilter | string
    forestOwnerId?: StringWithAggregatesFilter | string
    forestOwnerPileNumber?: StringNullableWithAggregatesFilter | string | null
    forestOwnerPileStatus?: StringNullableWithAggregatesFilter | string | null
    hasRemoval?: IntWithAggregatesFilter | number
    id_?: StringWithAggregatesFilter | string
    inventoryAmountRm?: FloatWithAggregatesFilter | number
    latitude?: FloatWithAggregatesFilter | number
    logisticStatus?: StringWithAggregatesFilter | string
    longitude?: FloatWithAggregatesFilter | number
    pileNumber?: StringWithAggregatesFilter | string
    registrationDate?: BigIntWithAggregatesFilter | bigint | number
    remainingAmountRm?: FloatWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    statusDate?: BigIntWithAggregatesFilter | bigint | number
    woodBuyerId?: StringWithAggregatesFilter | string
  }

  export type pile_partnerWhereInput = {
    AND?: Enumerable<pile_partnerWhereInput>
    OR?: Enumerable<pile_partnerWhereInput>
    NOT?: Enumerable<pile_partnerWhereInput>
    id?: StringFilter | string
    accountingContactPersonId?: StringFilter | string
    address?: StringNullableFilter | string | null
    associatedPartnerIdList?: StringNullableListFilter
    city?: StringNullableFilter | string | null
    company?: StringFilter | string
    contactName?: StringFilter | string
    country?: StringNullableFilter | string | null
    deactivated?: BoolFilter | boolean
    forestCompanyAssociations?: StringNullableListFilter
    id_?: StringFilter | string
    latitude?: FloatNullableFilter | number | null
    longitude?: FloatNullableFilter | number | null
    mandatePersonIds?: StringNullableListFilter
    partnerNumber?: StringFilter | string
    partnerType?: StringFilter | string
    pileNumberPrefix?: StringNullableFilter | string | null
    postcode?: StringNullableFilter | string | null
  }

  export type pile_partnerOrderByWithRelationInput = {
    id?: SortOrder
    accountingContactPersonId?: SortOrder
    address?: SortOrder
    associatedPartnerIdList?: SortOrder
    city?: SortOrder
    company?: SortOrder
    contactName?: SortOrder
    country?: SortOrder
    deactivated?: SortOrder
    forestCompanyAssociations?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    mandatePersonIds?: SortOrder
    partnerNumber?: SortOrder
    partnerType?: SortOrder
    pileNumberPrefix?: SortOrder
    postcode?: SortOrder
  }

  export type pile_partnerWhereUniqueInput = {
    id?: string
  }

  export type pile_partnerOrderByWithAggregationInput = {
    id?: SortOrder
    accountingContactPersonId?: SortOrder
    address?: SortOrder
    associatedPartnerIdList?: SortOrder
    city?: SortOrder
    company?: SortOrder
    contactName?: SortOrder
    country?: SortOrder
    deactivated?: SortOrder
    forestCompanyAssociations?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    mandatePersonIds?: SortOrder
    partnerNumber?: SortOrder
    partnerType?: SortOrder
    pileNumberPrefix?: SortOrder
    postcode?: SortOrder
    _count?: pile_partnerCountOrderByAggregateInput
    _avg?: pile_partnerAvgOrderByAggregateInput
    _max?: pile_partnerMaxOrderByAggregateInput
    _min?: pile_partnerMinOrderByAggregateInput
    _sum?: pile_partnerSumOrderByAggregateInput
  }

  export type pile_partnerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<pile_partnerScalarWhereWithAggregatesInput>
    OR?: Enumerable<pile_partnerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<pile_partnerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    accountingContactPersonId?: StringWithAggregatesFilter | string
    address?: StringNullableWithAggregatesFilter | string | null
    associatedPartnerIdList?: StringNullableListFilter
    city?: StringNullableWithAggregatesFilter | string | null
    company?: StringWithAggregatesFilter | string
    contactName?: StringWithAggregatesFilter | string
    country?: StringNullableWithAggregatesFilter | string | null
    deactivated?: BoolWithAggregatesFilter | boolean
    forestCompanyAssociations?: StringNullableListFilter
    id_?: StringWithAggregatesFilter | string
    latitude?: FloatNullableWithAggregatesFilter | number | null
    longitude?: FloatNullableWithAggregatesFilter | number | null
    mandatePersonIds?: StringNullableListFilter
    partnerNumber?: StringWithAggregatesFilter | string
    partnerType?: StringWithAggregatesFilter | string
    pileNumberPrefix?: StringNullableWithAggregatesFilter | string | null
    postcode?: StringNullableWithAggregatesFilter | string | null
  }

  export type pile_table_preferencesWhereInput = {
    AND?: Enumerable<pile_table_preferencesWhereInput>
    OR?: Enumerable<pile_table_preferencesWhereInput>
    NOT?: Enumerable<pile_table_preferencesWhereInput>
    id?: StringFilter | string
    columns?: XOR<Pile_table_preferencesColumnsCompositeListFilter, Enumerable<pile_table_preferencesColumnsObjectEqualityInput>>
    contactPersonId?: StringFilter | string
    id_?: StringFilter | string
    preferenceName?: StringFilter | string
  }

  export type pile_table_preferencesOrderByWithRelationInput = {
    id?: SortOrder
    columns?: pile_table_preferencesColumnsOrderByCompositeAggregateInput
    contactPersonId?: SortOrder
    id_?: SortOrder
    preferenceName?: SortOrder
  }

  export type pile_table_preferencesWhereUniqueInput = {
    id?: string
  }

  export type pile_table_preferencesOrderByWithAggregationInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
    id_?: SortOrder
    preferenceName?: SortOrder
    _count?: pile_table_preferencesCountOrderByAggregateInput
    _max?: pile_table_preferencesMaxOrderByAggregateInput
    _min?: pile_table_preferencesMinOrderByAggregateInput
  }

  export type pile_table_preferencesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<pile_table_preferencesScalarWhereWithAggregatesInput>
    OR?: Enumerable<pile_table_preferencesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<pile_table_preferencesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    contactPersonId?: StringWithAggregatesFilter | string
    id_?: StringWithAggregatesFilter | string
    preferenceName?: StringWithAggregatesFilter | string
  }

  export type pile_user_configWhereInput = {
    AND?: Enumerable<pile_user_configWhereInput>
    OR?: Enumerable<pile_user_configWhereInput>
    NOT?: Enumerable<pile_user_configWhereInput>
    id?: StringFilter | string
    contactPersonId?: StringFilter | string
    copyConfig?: XOR<Pile_user_configCopyConfigCompositeFilter, pile_user_configCopyConfigObjectEqualityInput>
  }

  export type pile_user_configOrderByWithRelationInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
    copyConfig?: pile_user_configCopyConfigOrderByInput
  }

  export type pile_user_configWhereUniqueInput = {
    id?: string
  }

  export type pile_user_configOrderByWithAggregationInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
    _count?: pile_user_configCountOrderByAggregateInput
    _max?: pile_user_configMaxOrderByAggregateInput
    _min?: pile_user_configMinOrderByAggregateInput
  }

  export type pile_user_configScalarWhereWithAggregatesInput = {
    AND?: Enumerable<pile_user_configScalarWhereWithAggregatesInput>
    OR?: Enumerable<pile_user_configScalarWhereWithAggregatesInput>
    NOT?: Enumerable<pile_user_configScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    contactPersonId?: StringWithAggregatesFilter | string
  }

  export type report_generatedWhereInput = {
    AND?: Enumerable<report_generatedWhereInput>
    OR?: Enumerable<report_generatedWhereInput>
    NOT?: Enumerable<report_generatedWhereInput>
    id?: StringFilter | string
    generatedAt?: BigIntFilter | bigint | number
    locale?: StringFilter | string
    reportData?: IntNullableListFilter
    reportDescription?: StringFilter | string
    reportFormat?: StringFilter | string
    reportId?: StringFilter | string
    reportName?: StringFilter | string
    reportTitle?: StringFilter | string
    success?: BoolFilter | boolean
    userId?: StringFilter | string
    username?: StringFilter | string
  }

  export type report_generatedOrderByWithRelationInput = {
    id?: SortOrder
    generatedAt?: SortOrder
    locale?: SortOrder
    reportData?: SortOrder
    reportDescription?: SortOrder
    reportFormat?: SortOrder
    reportId?: SortOrder
    reportName?: SortOrder
    reportTitle?: SortOrder
    success?: SortOrder
    userId?: SortOrder
    username?: SortOrder
  }

  export type report_generatedWhereUniqueInput = {
    id?: string
  }

  export type report_generatedOrderByWithAggregationInput = {
    id?: SortOrder
    generatedAt?: SortOrder
    locale?: SortOrder
    reportData?: SortOrder
    reportDescription?: SortOrder
    reportFormat?: SortOrder
    reportId?: SortOrder
    reportName?: SortOrder
    reportTitle?: SortOrder
    success?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    _count?: report_generatedCountOrderByAggregateInput
    _avg?: report_generatedAvgOrderByAggregateInput
    _max?: report_generatedMaxOrderByAggregateInput
    _min?: report_generatedMinOrderByAggregateInput
    _sum?: report_generatedSumOrderByAggregateInput
  }

  export type report_generatedScalarWhereWithAggregatesInput = {
    AND?: Enumerable<report_generatedScalarWhereWithAggregatesInput>
    OR?: Enumerable<report_generatedScalarWhereWithAggregatesInput>
    NOT?: Enumerable<report_generatedScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    generatedAt?: BigIntWithAggregatesFilter | bigint | number
    locale?: StringWithAggregatesFilter | string
    reportData?: IntNullableListFilter
    reportDescription?: StringWithAggregatesFilter | string
    reportFormat?: StringWithAggregatesFilter | string
    reportId?: StringWithAggregatesFilter | string
    reportName?: StringWithAggregatesFilter | string
    reportTitle?: StringWithAggregatesFilter | string
    success?: BoolWithAggregatesFilter | boolean
    userId?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
  }

  export type forest_management_contactpersonCreateInput = {
    id?: string
    accessRights?: XOR<ForestManagement_contactpersonAccessRightsListCreateEnvelopeInput, Enumerable<ForestManagement_contactpersonAccessRightsCreateInput>>
    email?: string | null
    firstName: string
    id_: string
    lastName: string
    locale?: string | null
    mandatePartnerIds?: forest_management_contactpersonCreatemandatePartnerIdsInput | Enumerable<string>
    partnerId: string
    roles?: forest_management_contactpersonCreaterolesInput | Enumerable<string>
  }

  export type forest_management_contactpersonUncheckedCreateInput = {
    id?: string
    accessRights?: XOR<ForestManagement_contactpersonAccessRightsListCreateEnvelopeInput, Enumerable<ForestManagement_contactpersonAccessRightsCreateInput>>
    email?: string | null
    firstName: string
    id_: string
    lastName: string
    locale?: string | null
    mandatePartnerIds?: forest_management_contactpersonCreatemandatePartnerIdsInput | Enumerable<string>
    partnerId: string
    roles?: forest_management_contactpersonCreaterolesInput | Enumerable<string>
  }

  export type forest_management_contactpersonUpdateInput = {
    accessRights?: XOR<ForestManagement_contactpersonAccessRightsListUpdateEnvelopeInput, Enumerable<ForestManagement_contactpersonAccessRightsCreateInput>>
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    mandatePartnerIds?: forest_management_contactpersonUpdatemandatePartnerIdsInput | Enumerable<string>
    partnerId?: StringFieldUpdateOperationsInput | string
    roles?: forest_management_contactpersonUpdaterolesInput | Enumerable<string>
  }

  export type forest_management_contactpersonUncheckedUpdateInput = {
    accessRights?: XOR<ForestManagement_contactpersonAccessRightsListUpdateEnvelopeInput, Enumerable<ForestManagement_contactpersonAccessRightsCreateInput>>
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    mandatePartnerIds?: forest_management_contactpersonUpdatemandatePartnerIdsInput | Enumerable<string>
    partnerId?: StringFieldUpdateOperationsInput | string
    roles?: forest_management_contactpersonUpdaterolesInput | Enumerable<string>
  }

  export type forest_management_contactpersonCreateManyInput = {
    id?: string
    accessRights?: XOR<ForestManagement_contactpersonAccessRightsListCreateEnvelopeInput, Enumerable<ForestManagement_contactpersonAccessRightsCreateInput>>
    email?: string | null
    firstName: string
    id_: string
    lastName: string
    locale?: string | null
    mandatePartnerIds?: forest_management_contactpersonCreatemandatePartnerIdsInput | Enumerable<string>
    partnerId: string
    roles?: forest_management_contactpersonCreaterolesInput | Enumerable<string>
  }

  export type forest_management_contactpersonUpdateManyMutationInput = {
    accessRights?: XOR<ForestManagement_contactpersonAccessRightsListUpdateEnvelopeInput, Enumerable<ForestManagement_contactpersonAccessRightsCreateInput>>
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    mandatePartnerIds?: forest_management_contactpersonUpdatemandatePartnerIdsInput | Enumerable<string>
    partnerId?: StringFieldUpdateOperationsInput | string
    roles?: forest_management_contactpersonUpdaterolesInput | Enumerable<string>
  }

  export type forest_management_contactpersonUncheckedUpdateManyInput = {
    accessRights?: XOR<ForestManagement_contactpersonAccessRightsListUpdateEnvelopeInput, Enumerable<ForestManagement_contactpersonAccessRightsCreateInput>>
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    mandatePartnerIds?: forest_management_contactpersonUpdatemandatePartnerIdsInput | Enumerable<string>
    partnerId?: StringFieldUpdateOperationsInput | string
    roles?: forest_management_contactpersonUpdaterolesInput | Enumerable<string>
  }

  export type forest_management_partnerCreateInput = {
    id?: string
    associatedPartnerIdList?: forest_management_partnerCreateassociatedPartnerIdListInput | Enumerable<string>
    company: string
    contactName: string
    deactivated: boolean
    forestCompanyAssociations?: forest_management_partnerCreateforestCompanyAssociationsInput | Enumerable<string>
    id_: string
    latitude?: number | null
    longitude?: number | null
    mandatePersonIds?: forest_management_partnerCreatemandatePersonIdsInput | Enumerable<string>
    partnerNumber: string
  }

  export type forest_management_partnerUncheckedCreateInput = {
    id?: string
    associatedPartnerIdList?: forest_management_partnerCreateassociatedPartnerIdListInput | Enumerable<string>
    company: string
    contactName: string
    deactivated: boolean
    forestCompanyAssociations?: forest_management_partnerCreateforestCompanyAssociationsInput | Enumerable<string>
    id_: string
    latitude?: number | null
    longitude?: number | null
    mandatePersonIds?: forest_management_partnerCreatemandatePersonIdsInput | Enumerable<string>
    partnerNumber: string
  }

  export type forest_management_partnerUpdateInput = {
    associatedPartnerIdList?: forest_management_partnerUpdateassociatedPartnerIdListInput | Enumerable<string>
    company?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    forestCompanyAssociations?: forest_management_partnerUpdateforestCompanyAssociationsInput | Enumerable<string>
    id_?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mandatePersonIds?: forest_management_partnerUpdatemandatePersonIdsInput | Enumerable<string>
    partnerNumber?: StringFieldUpdateOperationsInput | string
  }

  export type forest_management_partnerUncheckedUpdateInput = {
    associatedPartnerIdList?: forest_management_partnerUpdateassociatedPartnerIdListInput | Enumerable<string>
    company?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    forestCompanyAssociations?: forest_management_partnerUpdateforestCompanyAssociationsInput | Enumerable<string>
    id_?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mandatePersonIds?: forest_management_partnerUpdatemandatePersonIdsInput | Enumerable<string>
    partnerNumber?: StringFieldUpdateOperationsInput | string
  }

  export type forest_management_partnerCreateManyInput = {
    id?: string
    associatedPartnerIdList?: forest_management_partnerCreateassociatedPartnerIdListInput | Enumerable<string>
    company: string
    contactName: string
    deactivated: boolean
    forestCompanyAssociations?: forest_management_partnerCreateforestCompanyAssociationsInput | Enumerable<string>
    id_: string
    latitude?: number | null
    longitude?: number | null
    mandatePersonIds?: forest_management_partnerCreatemandatePersonIdsInput | Enumerable<string>
    partnerNumber: string
  }

  export type forest_management_partnerUpdateManyMutationInput = {
    associatedPartnerIdList?: forest_management_partnerUpdateassociatedPartnerIdListInput | Enumerable<string>
    company?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    forestCompanyAssociations?: forest_management_partnerUpdateforestCompanyAssociationsInput | Enumerable<string>
    id_?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mandatePersonIds?: forest_management_partnerUpdatemandatePersonIdsInput | Enumerable<string>
    partnerNumber?: StringFieldUpdateOperationsInput | string
  }

  export type forest_management_partnerUncheckedUpdateManyInput = {
    associatedPartnerIdList?: forest_management_partnerUpdateassociatedPartnerIdListInput | Enumerable<string>
    company?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    forestCompanyAssociations?: forest_management_partnerUpdateforestCompanyAssociationsInput | Enumerable<string>
    id_?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mandatePersonIds?: forest_management_partnerUpdatemandatePersonIdsInput | Enumerable<string>
    partnerNumber?: StringFieldUpdateOperationsInput | string
  }

  export type map_configCreateInput = {
    id?: string
    contactPersonId: string
    layers?: XOR<Map_configLayersListCreateEnvelopeInput, Enumerable<Map_configLayersCreateInput>>
    mapStartAtHomePosition: boolean
    pileColoringStrategy: string
  }

  export type map_configUncheckedCreateInput = {
    id?: string
    contactPersonId: string
    layers?: XOR<Map_configLayersListCreateEnvelopeInput, Enumerable<Map_configLayersCreateInput>>
    mapStartAtHomePosition: boolean
    pileColoringStrategy: string
  }

  export type map_configUpdateInput = {
    contactPersonId?: StringFieldUpdateOperationsInput | string
    layers?: XOR<Map_configLayersListUpdateEnvelopeInput, Enumerable<Map_configLayersCreateInput>>
    mapStartAtHomePosition?: BoolFieldUpdateOperationsInput | boolean
    pileColoringStrategy?: StringFieldUpdateOperationsInput | string
  }

  export type map_configUncheckedUpdateInput = {
    contactPersonId?: StringFieldUpdateOperationsInput | string
    layers?: XOR<Map_configLayersListUpdateEnvelopeInput, Enumerable<Map_configLayersCreateInput>>
    mapStartAtHomePosition?: BoolFieldUpdateOperationsInput | boolean
    pileColoringStrategy?: StringFieldUpdateOperationsInput | string
  }

  export type map_configCreateManyInput = {
    id?: string
    contactPersonId: string
    layers?: XOR<Map_configLayersListCreateEnvelopeInput, Enumerable<Map_configLayersCreateInput>>
    mapStartAtHomePosition: boolean
    pileColoringStrategy: string
  }

  export type map_configUpdateManyMutationInput = {
    contactPersonId?: StringFieldUpdateOperationsInput | string
    layers?: XOR<Map_configLayersListUpdateEnvelopeInput, Enumerable<Map_configLayersCreateInput>>
    mapStartAtHomePosition?: BoolFieldUpdateOperationsInput | boolean
    pileColoringStrategy?: StringFieldUpdateOperationsInput | string
  }

  export type map_configUncheckedUpdateManyInput = {
    contactPersonId?: StringFieldUpdateOperationsInput | string
    layers?: XOR<Map_configLayersListUpdateEnvelopeInput, Enumerable<Map_configLayersCreateInput>>
    mapStartAtHomePosition?: BoolFieldUpdateOperationsInput | boolean
    pileColoringStrategy?: StringFieldUpdateOperationsInput | string
  }

  export type pile_certificatesCreateInput = {
    id?: string
    expiryDate: string
    id_: string
    licenseNumber?: string | null
    number: string
    partnerId: string
    type: string
  }

  export type pile_certificatesUncheckedCreateInput = {
    id?: string
    expiryDate: string
    id_: string
    licenseNumber?: string | null
    number: string
    partnerId: string
    type: string
  }

  export type pile_certificatesUpdateInput = {
    expiryDate?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type pile_certificatesUncheckedUpdateInput = {
    expiryDate?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type pile_certificatesCreateManyInput = {
    id?: string
    expiryDate: string
    id_: string
    licenseNumber?: string | null
    number: string
    partnerId: string
    type: string
  }

  export type pile_certificatesUpdateManyMutationInput = {
    expiryDate?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type pile_certificatesUncheckedUpdateManyInput = {
    expiryDate?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type pile_contactpersonCreateInput = {
    id?: string
    accessRights?: XOR<Pile_contactpersonAccessRightsListCreateEnvelopeInput, Enumerable<Pile_contactpersonAccessRightsCreateInput>>
    email?: string | null
    firstName: string
    id_: string
    landlineNumber?: string | null
    lastName: string
    locale?: string | null
    mandatePartnerIds?: pile_contactpersonCreatemandatePartnerIdsInput | Enumerable<string>
    partnerId: string
    pileNumberRangeIndex?: number | null
    roles?: pile_contactpersonCreaterolesInput | Enumerable<string>
    salutation?: string | null
  }

  export type pile_contactpersonUncheckedCreateInput = {
    id?: string
    accessRights?: XOR<Pile_contactpersonAccessRightsListCreateEnvelopeInput, Enumerable<Pile_contactpersonAccessRightsCreateInput>>
    email?: string | null
    firstName: string
    id_: string
    landlineNumber?: string | null
    lastName: string
    locale?: string | null
    mandatePartnerIds?: pile_contactpersonCreatemandatePartnerIdsInput | Enumerable<string>
    partnerId: string
    pileNumberRangeIndex?: number | null
    roles?: pile_contactpersonCreaterolesInput | Enumerable<string>
    salutation?: string | null
  }

  export type pile_contactpersonUpdateInput = {
    accessRights?: XOR<Pile_contactpersonAccessRightsListUpdateEnvelopeInput, Enumerable<Pile_contactpersonAccessRightsCreateInput>>
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    mandatePartnerIds?: pile_contactpersonUpdatemandatePartnerIdsInput | Enumerable<string>
    partnerId?: StringFieldUpdateOperationsInput | string
    pileNumberRangeIndex?: NullableIntFieldUpdateOperationsInput | number | null
    roles?: pile_contactpersonUpdaterolesInput | Enumerable<string>
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pile_contactpersonUncheckedUpdateInput = {
    accessRights?: XOR<Pile_contactpersonAccessRightsListUpdateEnvelopeInput, Enumerable<Pile_contactpersonAccessRightsCreateInput>>
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    mandatePartnerIds?: pile_contactpersonUpdatemandatePartnerIdsInput | Enumerable<string>
    partnerId?: StringFieldUpdateOperationsInput | string
    pileNumberRangeIndex?: NullableIntFieldUpdateOperationsInput | number | null
    roles?: pile_contactpersonUpdaterolesInput | Enumerable<string>
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pile_contactpersonCreateManyInput = {
    id?: string
    accessRights?: XOR<Pile_contactpersonAccessRightsListCreateEnvelopeInput, Enumerable<Pile_contactpersonAccessRightsCreateInput>>
    email?: string | null
    firstName: string
    id_: string
    landlineNumber?: string | null
    lastName: string
    locale?: string | null
    mandatePartnerIds?: pile_contactpersonCreatemandatePartnerIdsInput | Enumerable<string>
    partnerId: string
    pileNumberRangeIndex?: number | null
    roles?: pile_contactpersonCreaterolesInput | Enumerable<string>
    salutation?: string | null
  }

  export type pile_contactpersonUpdateManyMutationInput = {
    accessRights?: XOR<Pile_contactpersonAccessRightsListUpdateEnvelopeInput, Enumerable<Pile_contactpersonAccessRightsCreateInput>>
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    mandatePartnerIds?: pile_contactpersonUpdatemandatePartnerIdsInput | Enumerable<string>
    partnerId?: StringFieldUpdateOperationsInput | string
    pileNumberRangeIndex?: NullableIntFieldUpdateOperationsInput | number | null
    roles?: pile_contactpersonUpdaterolesInput | Enumerable<string>
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pile_contactpersonUncheckedUpdateManyInput = {
    accessRights?: XOR<Pile_contactpersonAccessRightsListUpdateEnvelopeInput, Enumerable<Pile_contactpersonAccessRightsCreateInput>>
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    mandatePartnerIds?: pile_contactpersonUpdatemandatePartnerIdsInput | Enumerable<string>
    partnerId?: StringFieldUpdateOperationsInput | string
    pileNumberRangeIndex?: NullableIntFieldUpdateOperationsInput | number | null
    roles?: pile_contactpersonUpdaterolesInput | Enumerable<string>
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pile_intermediatestoragesCreateInput = {
    id?: string
    city?: string | null
    designation?: string | null
    district?: string | null
    id_: string
    latitude: number
    longitude: number
    parcel?: string | null
    partnerId: string
    state?: string | null
  }

  export type pile_intermediatestoragesUncheckedCreateInput = {
    id?: string
    city?: string | null
    designation?: string | null
    district?: string | null
    id_: string
    latitude: number
    longitude: number
    parcel?: string | null
    partnerId: string
    state?: string | null
  }

  export type pile_intermediatestoragesUpdateInput = {
    city?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    id_?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    parcel?: NullableStringFieldUpdateOperationsInput | string | null
    partnerId?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pile_intermediatestoragesUncheckedUpdateInput = {
    city?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    id_?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    parcel?: NullableStringFieldUpdateOperationsInput | string | null
    partnerId?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pile_intermediatestoragesCreateManyInput = {
    id?: string
    city?: string | null
    designation?: string | null
    district?: string | null
    id_: string
    latitude: number
    longitude: number
    parcel?: string | null
    partnerId: string
    state?: string | null
  }

  export type pile_intermediatestoragesUpdateManyMutationInput = {
    city?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    id_?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    parcel?: NullableStringFieldUpdateOperationsInput | string | null
    partnerId?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pile_intermediatestoragesUncheckedUpdateManyInput = {
    city?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    id_?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    parcel?: NullableStringFieldUpdateOperationsInput | string | null
    partnerId?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pile_inventoryCreateInput = {
    id?: string
    buyingUnit: string
    comment: string
    correction: boolean
    createdDate: bigint | number
    createdUserId: string
    faultyInventory: boolean
    inventoryAmountRm: number
    pileId: string
    status: string
    statusDate: bigint | number
    statusUserId: string
  }

  export type pile_inventoryUncheckedCreateInput = {
    id?: string
    buyingUnit: string
    comment: string
    correction: boolean
    createdDate: bigint | number
    createdUserId: string
    faultyInventory: boolean
    inventoryAmountRm: number
    pileId: string
    status: string
    statusDate: bigint | number
    statusUserId: string
  }

  export type pile_inventoryUpdateInput = {
    buyingUnit?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    correction?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: BigIntFieldUpdateOperationsInput | bigint | number
    createdUserId?: StringFieldUpdateOperationsInput | string
    faultyInventory?: BoolFieldUpdateOperationsInput | boolean
    inventoryAmountRm?: FloatFieldUpdateOperationsInput | number
    pileId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusDate?: BigIntFieldUpdateOperationsInput | bigint | number
    statusUserId?: StringFieldUpdateOperationsInput | string
  }

  export type pile_inventoryUncheckedUpdateInput = {
    buyingUnit?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    correction?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: BigIntFieldUpdateOperationsInput | bigint | number
    createdUserId?: StringFieldUpdateOperationsInput | string
    faultyInventory?: BoolFieldUpdateOperationsInput | boolean
    inventoryAmountRm?: FloatFieldUpdateOperationsInput | number
    pileId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusDate?: BigIntFieldUpdateOperationsInput | bigint | number
    statusUserId?: StringFieldUpdateOperationsInput | string
  }

  export type pile_inventoryCreateManyInput = {
    id?: string
    buyingUnit: string
    comment: string
    correction: boolean
    createdDate: bigint | number
    createdUserId: string
    faultyInventory: boolean
    inventoryAmountRm: number
    pileId: string
    status: string
    statusDate: bigint | number
    statusUserId: string
  }

  export type pile_inventoryUpdateManyMutationInput = {
    buyingUnit?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    correction?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: BigIntFieldUpdateOperationsInput | bigint | number
    createdUserId?: StringFieldUpdateOperationsInput | string
    faultyInventory?: BoolFieldUpdateOperationsInput | boolean
    inventoryAmountRm?: FloatFieldUpdateOperationsInput | number
    pileId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusDate?: BigIntFieldUpdateOperationsInput | bigint | number
    statusUserId?: StringFieldUpdateOperationsInput | string
  }

  export type pile_inventoryUncheckedUpdateManyInput = {
    buyingUnit?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    correction?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: BigIntFieldUpdateOperationsInput | bigint | number
    createdUserId?: StringFieldUpdateOperationsInput | string
    faultyInventory?: BoolFieldUpdateOperationsInput | boolean
    inventoryAmountRm?: FloatFieldUpdateOperationsInput | number
    pileId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusDate?: BigIntFieldUpdateOperationsInput | bigint | number
    statusUserId?: StringFieldUpdateOperationsInput | string
  }

  export type pile_mapCreateInput = {
    id?: string
    actualAmount: number
    amountRm: number
    avgLengthM: number
    buyingUnit: string
    forestOwnerId: string
    forestOwnerPileNumber?: string | null
    forestOwnerPileStatus?: string | null
    hasRemoval: number
    id_: string
    inventoryAmountRm: number
    latitude: number
    logisticStatus: string
    longitude: number
    pileNumber: string
    registrationDate: bigint | number
    remainingAmountRm: number
    status: string
    statusDate: bigint | number
    treeSpecies?: XOR<Pile_mapTreeSpeciesListCreateEnvelopeInput, Enumerable<Pile_mapTreeSpeciesCreateInput>>
    woodBuyerId: string
    woodSpecies?: XOR<Pile_mapWoodSpeciesNullableCreateEnvelopeInput, Pile_mapWoodSpeciesCreateInput> | null
  }

  export type pile_mapUncheckedCreateInput = {
    id?: string
    actualAmount: number
    amountRm: number
    avgLengthM: number
    buyingUnit: string
    forestOwnerId: string
    forestOwnerPileNumber?: string | null
    forestOwnerPileStatus?: string | null
    hasRemoval: number
    id_: string
    inventoryAmountRm: number
    latitude: number
    logisticStatus: string
    longitude: number
    pileNumber: string
    registrationDate: bigint | number
    remainingAmountRm: number
    status: string
    statusDate: bigint | number
    treeSpecies?: XOR<Pile_mapTreeSpeciesListCreateEnvelopeInput, Enumerable<Pile_mapTreeSpeciesCreateInput>>
    woodBuyerId: string
    woodSpecies?: XOR<Pile_mapWoodSpeciesNullableCreateEnvelopeInput, Pile_mapWoodSpeciesCreateInput> | null
  }

  export type pile_mapUpdateInput = {
    actualAmount?: FloatFieldUpdateOperationsInput | number
    amountRm?: FloatFieldUpdateOperationsInput | number
    avgLengthM?: FloatFieldUpdateOperationsInput | number
    buyingUnit?: StringFieldUpdateOperationsInput | string
    forestOwnerId?: StringFieldUpdateOperationsInput | string
    forestOwnerPileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    forestOwnerPileStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasRemoval?: IntFieldUpdateOperationsInput | number
    id_?: StringFieldUpdateOperationsInput | string
    inventoryAmountRm?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    logisticStatus?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    pileNumber?: StringFieldUpdateOperationsInput | string
    registrationDate?: BigIntFieldUpdateOperationsInput | bigint | number
    remainingAmountRm?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    statusDate?: BigIntFieldUpdateOperationsInput | bigint | number
    treeSpecies?: XOR<Pile_mapTreeSpeciesListUpdateEnvelopeInput, Enumerable<Pile_mapTreeSpeciesCreateInput>>
    woodBuyerId?: StringFieldUpdateOperationsInput | string
    woodSpecies?: XOR<Pile_mapWoodSpeciesNullableUpdateEnvelopeInput, Pile_mapWoodSpeciesCreateInput> | null
  }

  export type pile_mapUncheckedUpdateInput = {
    actualAmount?: FloatFieldUpdateOperationsInput | number
    amountRm?: FloatFieldUpdateOperationsInput | number
    avgLengthM?: FloatFieldUpdateOperationsInput | number
    buyingUnit?: StringFieldUpdateOperationsInput | string
    forestOwnerId?: StringFieldUpdateOperationsInput | string
    forestOwnerPileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    forestOwnerPileStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasRemoval?: IntFieldUpdateOperationsInput | number
    id_?: StringFieldUpdateOperationsInput | string
    inventoryAmountRm?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    logisticStatus?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    pileNumber?: StringFieldUpdateOperationsInput | string
    registrationDate?: BigIntFieldUpdateOperationsInput | bigint | number
    remainingAmountRm?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    statusDate?: BigIntFieldUpdateOperationsInput | bigint | number
    treeSpecies?: XOR<Pile_mapTreeSpeciesListUpdateEnvelopeInput, Enumerable<Pile_mapTreeSpeciesCreateInput>>
    woodBuyerId?: StringFieldUpdateOperationsInput | string
    woodSpecies?: XOR<Pile_mapWoodSpeciesNullableUpdateEnvelopeInput, Pile_mapWoodSpeciesCreateInput> | null
  }

  export type pile_mapCreateManyInput = {
    id?: string
    actualAmount: number
    amountRm: number
    avgLengthM: number
    buyingUnit: string
    forestOwnerId: string
    forestOwnerPileNumber?: string | null
    forestOwnerPileStatus?: string | null
    hasRemoval: number
    id_: string
    inventoryAmountRm: number
    latitude: number
    logisticStatus: string
    longitude: number
    pileNumber: string
    registrationDate: bigint | number
    remainingAmountRm: number
    status: string
    statusDate: bigint | number
    treeSpecies?: XOR<Pile_mapTreeSpeciesListCreateEnvelopeInput, Enumerable<Pile_mapTreeSpeciesCreateInput>>
    woodBuyerId: string
    woodSpecies?: XOR<Pile_mapWoodSpeciesNullableCreateEnvelopeInput, Pile_mapWoodSpeciesCreateInput> | null
  }

  export type pile_mapUpdateManyMutationInput = {
    actualAmount?: FloatFieldUpdateOperationsInput | number
    amountRm?: FloatFieldUpdateOperationsInput | number
    avgLengthM?: FloatFieldUpdateOperationsInput | number
    buyingUnit?: StringFieldUpdateOperationsInput | string
    forestOwnerId?: StringFieldUpdateOperationsInput | string
    forestOwnerPileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    forestOwnerPileStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasRemoval?: IntFieldUpdateOperationsInput | number
    id_?: StringFieldUpdateOperationsInput | string
    inventoryAmountRm?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    logisticStatus?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    pileNumber?: StringFieldUpdateOperationsInput | string
    registrationDate?: BigIntFieldUpdateOperationsInput | bigint | number
    remainingAmountRm?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    statusDate?: BigIntFieldUpdateOperationsInput | bigint | number
    treeSpecies?: XOR<Pile_mapTreeSpeciesListUpdateEnvelopeInput, Enumerable<Pile_mapTreeSpeciesCreateInput>>
    woodBuyerId?: StringFieldUpdateOperationsInput | string
    woodSpecies?: XOR<Pile_mapWoodSpeciesNullableUpdateEnvelopeInput, Pile_mapWoodSpeciesCreateInput> | null
  }

  export type pile_mapUncheckedUpdateManyInput = {
    actualAmount?: FloatFieldUpdateOperationsInput | number
    amountRm?: FloatFieldUpdateOperationsInput | number
    avgLengthM?: FloatFieldUpdateOperationsInput | number
    buyingUnit?: StringFieldUpdateOperationsInput | string
    forestOwnerId?: StringFieldUpdateOperationsInput | string
    forestOwnerPileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    forestOwnerPileStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasRemoval?: IntFieldUpdateOperationsInput | number
    id_?: StringFieldUpdateOperationsInput | string
    inventoryAmountRm?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    logisticStatus?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    pileNumber?: StringFieldUpdateOperationsInput | string
    registrationDate?: BigIntFieldUpdateOperationsInput | bigint | number
    remainingAmountRm?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    statusDate?: BigIntFieldUpdateOperationsInput | bigint | number
    treeSpecies?: XOR<Pile_mapTreeSpeciesListUpdateEnvelopeInput, Enumerable<Pile_mapTreeSpeciesCreateInput>>
    woodBuyerId?: StringFieldUpdateOperationsInput | string
    woodSpecies?: XOR<Pile_mapWoodSpeciesNullableUpdateEnvelopeInput, Pile_mapWoodSpeciesCreateInput> | null
  }

  export type pile_partnerCreateInput = {
    id?: string
    accountingContactPersonId: string
    address?: string | null
    associatedPartnerIdList?: pile_partnerCreateassociatedPartnerIdListInput | Enumerable<string>
    city?: string | null
    company: string
    contactName: string
    country?: string | null
    deactivated: boolean
    forestCompanyAssociations?: pile_partnerCreateforestCompanyAssociationsInput | Enumerable<string>
    id_: string
    latitude?: number | null
    longitude?: number | null
    mandatePersonIds?: pile_partnerCreatemandatePersonIdsInput | Enumerable<string>
    partnerNumber: string
    partnerType: string
    pileNumberPrefix?: string | null
    postcode?: string | null
  }

  export type pile_partnerUncheckedCreateInput = {
    id?: string
    accountingContactPersonId: string
    address?: string | null
    associatedPartnerIdList?: pile_partnerCreateassociatedPartnerIdListInput | Enumerable<string>
    city?: string | null
    company: string
    contactName: string
    country?: string | null
    deactivated: boolean
    forestCompanyAssociations?: pile_partnerCreateforestCompanyAssociationsInput | Enumerable<string>
    id_: string
    latitude?: number | null
    longitude?: number | null
    mandatePersonIds?: pile_partnerCreatemandatePersonIdsInput | Enumerable<string>
    partnerNumber: string
    partnerType: string
    pileNumberPrefix?: string | null
    postcode?: string | null
  }

  export type pile_partnerUpdateInput = {
    accountingContactPersonId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    associatedPartnerIdList?: pile_partnerUpdateassociatedPartnerIdListInput | Enumerable<string>
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    forestCompanyAssociations?: pile_partnerUpdateforestCompanyAssociationsInput | Enumerable<string>
    id_?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mandatePersonIds?: pile_partnerUpdatemandatePersonIdsInput | Enumerable<string>
    partnerNumber?: StringFieldUpdateOperationsInput | string
    partnerType?: StringFieldUpdateOperationsInput | string
    pileNumberPrefix?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pile_partnerUncheckedUpdateInput = {
    accountingContactPersonId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    associatedPartnerIdList?: pile_partnerUpdateassociatedPartnerIdListInput | Enumerable<string>
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    forestCompanyAssociations?: pile_partnerUpdateforestCompanyAssociationsInput | Enumerable<string>
    id_?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mandatePersonIds?: pile_partnerUpdatemandatePersonIdsInput | Enumerable<string>
    partnerNumber?: StringFieldUpdateOperationsInput | string
    partnerType?: StringFieldUpdateOperationsInput | string
    pileNumberPrefix?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pile_partnerCreateManyInput = {
    id?: string
    accountingContactPersonId: string
    address?: string | null
    associatedPartnerIdList?: pile_partnerCreateassociatedPartnerIdListInput | Enumerable<string>
    city?: string | null
    company: string
    contactName: string
    country?: string | null
    deactivated: boolean
    forestCompanyAssociations?: pile_partnerCreateforestCompanyAssociationsInput | Enumerable<string>
    id_: string
    latitude?: number | null
    longitude?: number | null
    mandatePersonIds?: pile_partnerCreatemandatePersonIdsInput | Enumerable<string>
    partnerNumber: string
    partnerType: string
    pileNumberPrefix?: string | null
    postcode?: string | null
  }

  export type pile_partnerUpdateManyMutationInput = {
    accountingContactPersonId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    associatedPartnerIdList?: pile_partnerUpdateassociatedPartnerIdListInput | Enumerable<string>
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    forestCompanyAssociations?: pile_partnerUpdateforestCompanyAssociationsInput | Enumerable<string>
    id_?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mandatePersonIds?: pile_partnerUpdatemandatePersonIdsInput | Enumerable<string>
    partnerNumber?: StringFieldUpdateOperationsInput | string
    partnerType?: StringFieldUpdateOperationsInput | string
    pileNumberPrefix?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pile_partnerUncheckedUpdateManyInput = {
    accountingContactPersonId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    associatedPartnerIdList?: pile_partnerUpdateassociatedPartnerIdListInput | Enumerable<string>
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    forestCompanyAssociations?: pile_partnerUpdateforestCompanyAssociationsInput | Enumerable<string>
    id_?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mandatePersonIds?: pile_partnerUpdatemandatePersonIdsInput | Enumerable<string>
    partnerNumber?: StringFieldUpdateOperationsInput | string
    partnerType?: StringFieldUpdateOperationsInput | string
    pileNumberPrefix?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pile_table_preferencesCreateInput = {
    id?: string
    columns?: XOR<pile_table_preferencesColumnsListCreateEnvelopeInput, Enumerable<pile_table_preferencesColumnsCreateInput>>
    contactPersonId: string
    id_: string
    preferenceName: string
  }

  export type pile_table_preferencesUncheckedCreateInput = {
    id?: string
    columns?: XOR<pile_table_preferencesColumnsListCreateEnvelopeInput, Enumerable<pile_table_preferencesColumnsCreateInput>>
    contactPersonId: string
    id_: string
    preferenceName: string
  }

  export type pile_table_preferencesUpdateInput = {
    columns?: XOR<pile_table_preferencesColumnsListUpdateEnvelopeInput, Enumerable<pile_table_preferencesColumnsCreateInput>>
    contactPersonId?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    preferenceName?: StringFieldUpdateOperationsInput | string
  }

  export type pile_table_preferencesUncheckedUpdateInput = {
    columns?: XOR<pile_table_preferencesColumnsListUpdateEnvelopeInput, Enumerable<pile_table_preferencesColumnsCreateInput>>
    contactPersonId?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    preferenceName?: StringFieldUpdateOperationsInput | string
  }

  export type pile_table_preferencesCreateManyInput = {
    id?: string
    columns?: XOR<pile_table_preferencesColumnsListCreateEnvelopeInput, Enumerable<pile_table_preferencesColumnsCreateInput>>
    contactPersonId: string
    id_: string
    preferenceName: string
  }

  export type pile_table_preferencesUpdateManyMutationInput = {
    columns?: XOR<pile_table_preferencesColumnsListUpdateEnvelopeInput, Enumerable<pile_table_preferencesColumnsCreateInput>>
    contactPersonId?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    preferenceName?: StringFieldUpdateOperationsInput | string
  }

  export type pile_table_preferencesUncheckedUpdateManyInput = {
    columns?: XOR<pile_table_preferencesColumnsListUpdateEnvelopeInput, Enumerable<pile_table_preferencesColumnsCreateInput>>
    contactPersonId?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    preferenceName?: StringFieldUpdateOperationsInput | string
  }

  export type pile_user_configCreateInput = {
    id?: string
    contactPersonId: string
    copyConfig: XOR<pile_user_configCopyConfigCreateEnvelopeInput, pile_user_configCopyConfigCreateInput>
  }

  export type pile_user_configUncheckedCreateInput = {
    id?: string
    contactPersonId: string
    copyConfig: XOR<pile_user_configCopyConfigCreateEnvelopeInput, pile_user_configCopyConfigCreateInput>
  }

  export type pile_user_configUpdateInput = {
    contactPersonId?: StringFieldUpdateOperationsInput | string
    copyConfig?: XOR<pile_user_configCopyConfigUpdateEnvelopeInput, pile_user_configCopyConfigCreateInput>
  }

  export type pile_user_configUncheckedUpdateInput = {
    contactPersonId?: StringFieldUpdateOperationsInput | string
    copyConfig?: XOR<pile_user_configCopyConfigUpdateEnvelopeInput, pile_user_configCopyConfigCreateInput>
  }

  export type pile_user_configCreateManyInput = {
    id?: string
    contactPersonId: string
    copyConfig: XOR<pile_user_configCopyConfigCreateEnvelopeInput, pile_user_configCopyConfigCreateInput>
  }

  export type pile_user_configUpdateManyMutationInput = {
    contactPersonId?: StringFieldUpdateOperationsInput | string
    copyConfig?: XOR<pile_user_configCopyConfigUpdateEnvelopeInput, pile_user_configCopyConfigCreateInput>
  }

  export type pile_user_configUncheckedUpdateManyInput = {
    contactPersonId?: StringFieldUpdateOperationsInput | string
    copyConfig?: XOR<pile_user_configCopyConfigUpdateEnvelopeInput, pile_user_configCopyConfigCreateInput>
  }

  export type report_generatedCreateInput = {
    id?: string
    generatedAt: bigint | number
    locale: string
    reportData?: report_generatedCreatereportDataInput | Enumerable<number>
    reportDescription: string
    reportFormat: string
    reportId: string
    reportName: string
    reportTitle: string
    success: boolean
    userId: string
    username: string
  }

  export type report_generatedUncheckedCreateInput = {
    id?: string
    generatedAt: bigint | number
    locale: string
    reportData?: report_generatedCreatereportDataInput | Enumerable<number>
    reportDescription: string
    reportFormat: string
    reportId: string
    reportName: string
    reportTitle: string
    success: boolean
    userId: string
    username: string
  }

  export type report_generatedUpdateInput = {
    generatedAt?: BigIntFieldUpdateOperationsInput | bigint | number
    locale?: StringFieldUpdateOperationsInput | string
    reportData?: report_generatedUpdatereportDataInput | Enumerable<number>
    reportDescription?: StringFieldUpdateOperationsInput | string
    reportFormat?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportTitle?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type report_generatedUncheckedUpdateInput = {
    generatedAt?: BigIntFieldUpdateOperationsInput | bigint | number
    locale?: StringFieldUpdateOperationsInput | string
    reportData?: report_generatedUpdatereportDataInput | Enumerable<number>
    reportDescription?: StringFieldUpdateOperationsInput | string
    reportFormat?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportTitle?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type report_generatedCreateManyInput = {
    id?: string
    generatedAt: bigint | number
    locale: string
    reportData?: report_generatedCreatereportDataInput | Enumerable<number>
    reportDescription: string
    reportFormat: string
    reportId: string
    reportName: string
    reportTitle: string
    success: boolean
    userId: string
    username: string
  }

  export type report_generatedUpdateManyMutationInput = {
    generatedAt?: BigIntFieldUpdateOperationsInput | bigint | number
    locale?: StringFieldUpdateOperationsInput | string
    reportData?: report_generatedUpdatereportDataInput | Enumerable<number>
    reportDescription?: StringFieldUpdateOperationsInput | string
    reportFormat?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportTitle?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type report_generatedUncheckedUpdateManyInput = {
    generatedAt?: BigIntFieldUpdateOperationsInput | bigint | number
    locale?: StringFieldUpdateOperationsInput | string
    reportData?: report_generatedUpdatereportDataInput | Enumerable<number>
    reportDescription?: StringFieldUpdateOperationsInput | string
    reportFormat?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportTitle?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type ForestManagement_contactpersonAccessRightsCompositeListFilter = {
    equals?: Enumerable<ForestManagement_contactpersonAccessRightsObjectEqualityInput>
    every?: ForestManagement_contactpersonAccessRightsWhereInput
    some?: ForestManagement_contactpersonAccessRightsWhereInput
    none?: ForestManagement_contactpersonAccessRightsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ForestManagement_contactpersonAccessRightsObjectEqualityInput = {
    partnerId: string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type ForestManagement_contactpersonAccessRightsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type forest_management_contactpersonCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id_?: SortOrder
    lastName?: SortOrder
    locale?: SortOrder
    mandatePartnerIds?: SortOrder
    partnerId?: SortOrder
    roles?: SortOrder
  }

  export type forest_management_contactpersonMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id_?: SortOrder
    lastName?: SortOrder
    locale?: SortOrder
    partnerId?: SortOrder
  }

  export type forest_management_contactpersonMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id_?: SortOrder
    lastName?: SortOrder
    locale?: SortOrder
    partnerId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type forest_management_partnerCountOrderByAggregateInput = {
    id?: SortOrder
    associatedPartnerIdList?: SortOrder
    company?: SortOrder
    contactName?: SortOrder
    deactivated?: SortOrder
    forestCompanyAssociations?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    mandatePersonIds?: SortOrder
    partnerNumber?: SortOrder
  }

  export type forest_management_partnerAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type forest_management_partnerMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    contactName?: SortOrder
    deactivated?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    partnerNumber?: SortOrder
  }

  export type forest_management_partnerMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    contactName?: SortOrder
    deactivated?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    partnerNumber?: SortOrder
  }

  export type forest_management_partnerSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
    isSet?: boolean
  }

  export type Map_configLayersCompositeListFilter = {
    equals?: Enumerable<Map_configLayersObjectEqualityInput>
    every?: Map_configLayersWhereInput
    some?: Map_configLayersWhereInput
    none?: Map_configLayersWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type Map_configLayersObjectEqualityInput = {
    name: string
    options?: Enumerable<Map_configLayersOptionsObjectEqualityInput>
  }

  export type Map_configLayersOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type map_configCountOrderByAggregateInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
    mapStartAtHomePosition?: SortOrder
    pileColoringStrategy?: SortOrder
  }

  export type map_configMaxOrderByAggregateInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
    mapStartAtHomePosition?: SortOrder
    pileColoringStrategy?: SortOrder
  }

  export type map_configMinOrderByAggregateInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
    mapStartAtHomePosition?: SortOrder
    pileColoringStrategy?: SortOrder
  }

  export type pile_certificatesCountOrderByAggregateInput = {
    id?: SortOrder
    expiryDate?: SortOrder
    id_?: SortOrder
    licenseNumber?: SortOrder
    number?: SortOrder
    partnerId?: SortOrder
    type?: SortOrder
  }

  export type pile_certificatesMaxOrderByAggregateInput = {
    id?: SortOrder
    expiryDate?: SortOrder
    id_?: SortOrder
    licenseNumber?: SortOrder
    number?: SortOrder
    partnerId?: SortOrder
    type?: SortOrder
  }

  export type pile_certificatesMinOrderByAggregateInput = {
    id?: SortOrder
    expiryDate?: SortOrder
    id_?: SortOrder
    licenseNumber?: SortOrder
    number?: SortOrder
    partnerId?: SortOrder
    type?: SortOrder
  }

  export type Pile_contactpersonAccessRightsCompositeListFilter = {
    equals?: Enumerable<Pile_contactpersonAccessRightsObjectEqualityInput>
    every?: Pile_contactpersonAccessRightsWhereInput
    some?: Pile_contactpersonAccessRightsWhereInput
    none?: Pile_contactpersonAccessRightsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type Pile_contactpersonAccessRightsObjectEqualityInput = {
    partnerId: string
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type Pile_contactpersonAccessRightsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type pile_contactpersonCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id_?: SortOrder
    landlineNumber?: SortOrder
    lastName?: SortOrder
    locale?: SortOrder
    mandatePartnerIds?: SortOrder
    partnerId?: SortOrder
    pileNumberRangeIndex?: SortOrder
    roles?: SortOrder
    salutation?: SortOrder
  }

  export type pile_contactpersonAvgOrderByAggregateInput = {
    pileNumberRangeIndex?: SortOrder
  }

  export type pile_contactpersonMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id_?: SortOrder
    landlineNumber?: SortOrder
    lastName?: SortOrder
    locale?: SortOrder
    partnerId?: SortOrder
    pileNumberRangeIndex?: SortOrder
    salutation?: SortOrder
  }

  export type pile_contactpersonMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id_?: SortOrder
    landlineNumber?: SortOrder
    lastName?: SortOrder
    locale?: SortOrder
    partnerId?: SortOrder
    pileNumberRangeIndex?: SortOrder
    salutation?: SortOrder
  }

  export type pile_contactpersonSumOrderByAggregateInput = {
    pileNumberRangeIndex?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type pile_intermediatestoragesCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    designation?: SortOrder
    district?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    parcel?: SortOrder
    partnerId?: SortOrder
    state?: SortOrder
  }

  export type pile_intermediatestoragesAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type pile_intermediatestoragesMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    designation?: SortOrder
    district?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    parcel?: SortOrder
    partnerId?: SortOrder
    state?: SortOrder
  }

  export type pile_intermediatestoragesMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    designation?: SortOrder
    district?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    parcel?: SortOrder
    partnerId?: SortOrder
    state?: SortOrder
  }

  export type pile_intermediatestoragesSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type pile_inventoryCountOrderByAggregateInput = {
    id?: SortOrder
    buyingUnit?: SortOrder
    comment?: SortOrder
    correction?: SortOrder
    createdDate?: SortOrder
    createdUserId?: SortOrder
    faultyInventory?: SortOrder
    inventoryAmountRm?: SortOrder
    pileId?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    statusUserId?: SortOrder
  }

  export type pile_inventoryAvgOrderByAggregateInput = {
    createdDate?: SortOrder
    inventoryAmountRm?: SortOrder
    statusDate?: SortOrder
  }

  export type pile_inventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    buyingUnit?: SortOrder
    comment?: SortOrder
    correction?: SortOrder
    createdDate?: SortOrder
    createdUserId?: SortOrder
    faultyInventory?: SortOrder
    inventoryAmountRm?: SortOrder
    pileId?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    statusUserId?: SortOrder
  }

  export type pile_inventoryMinOrderByAggregateInput = {
    id?: SortOrder
    buyingUnit?: SortOrder
    comment?: SortOrder
    correction?: SortOrder
    createdDate?: SortOrder
    createdUserId?: SortOrder
    faultyInventory?: SortOrder
    inventoryAmountRm?: SortOrder
    pileId?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    statusUserId?: SortOrder
  }

  export type pile_inventorySumOrderByAggregateInput = {
    createdDate?: SortOrder
    inventoryAmountRm?: SortOrder
    statusDate?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type Pile_mapTreeSpeciesCompositeListFilter = {
    equals?: Enumerable<Pile_mapTreeSpeciesObjectEqualityInput>
    every?: Pile_mapTreeSpeciesWhereInput
    some?: Pile_mapTreeSpeciesWhereInput
    none?: Pile_mapTreeSpeciesWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type Pile_mapTreeSpeciesObjectEqualityInput = {
    amountPercentage: number
    woodKind: string
    woodQuality: string
    woodType: string
  }

  export type Pile_mapWoodSpeciesNullableCompositeFilter = {
    equals?: Pile_mapWoodSpeciesObjectEqualityInput | null
    is?: Pile_mapWoodSpeciesWhereInput | null
    isNot?: Pile_mapWoodSpeciesWhereInput | null
    isSet?: boolean
  }

  export type Pile_mapWoodSpeciesObjectEqualityInput = {
    woodKinds?: Enumerable<string>
    woodQualities?: Enumerable<string>
    woodTypes: InputJsonValue
  }

  export type Pile_mapTreeSpeciesOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type Pile_mapWoodSpeciesOrderByInput = {
    woodKinds?: SortOrder
    woodQualities?: SortOrder
    woodTypes?: SortOrder
  }

  export type pile_mapCountOrderByAggregateInput = {
    id?: SortOrder
    actualAmount?: SortOrder
    amountRm?: SortOrder
    avgLengthM?: SortOrder
    buyingUnit?: SortOrder
    forestOwnerId?: SortOrder
    forestOwnerPileNumber?: SortOrder
    forestOwnerPileStatus?: SortOrder
    hasRemoval?: SortOrder
    id_?: SortOrder
    inventoryAmountRm?: SortOrder
    latitude?: SortOrder
    logisticStatus?: SortOrder
    longitude?: SortOrder
    pileNumber?: SortOrder
    registrationDate?: SortOrder
    remainingAmountRm?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    woodBuyerId?: SortOrder
  }

  export type pile_mapAvgOrderByAggregateInput = {
    actualAmount?: SortOrder
    amountRm?: SortOrder
    avgLengthM?: SortOrder
    hasRemoval?: SortOrder
    inventoryAmountRm?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    registrationDate?: SortOrder
    remainingAmountRm?: SortOrder
    statusDate?: SortOrder
  }

  export type pile_mapMaxOrderByAggregateInput = {
    id?: SortOrder
    actualAmount?: SortOrder
    amountRm?: SortOrder
    avgLengthM?: SortOrder
    buyingUnit?: SortOrder
    forestOwnerId?: SortOrder
    forestOwnerPileNumber?: SortOrder
    forestOwnerPileStatus?: SortOrder
    hasRemoval?: SortOrder
    id_?: SortOrder
    inventoryAmountRm?: SortOrder
    latitude?: SortOrder
    logisticStatus?: SortOrder
    longitude?: SortOrder
    pileNumber?: SortOrder
    registrationDate?: SortOrder
    remainingAmountRm?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    woodBuyerId?: SortOrder
  }

  export type pile_mapMinOrderByAggregateInput = {
    id?: SortOrder
    actualAmount?: SortOrder
    amountRm?: SortOrder
    avgLengthM?: SortOrder
    buyingUnit?: SortOrder
    forestOwnerId?: SortOrder
    forestOwnerPileNumber?: SortOrder
    forestOwnerPileStatus?: SortOrder
    hasRemoval?: SortOrder
    id_?: SortOrder
    inventoryAmountRm?: SortOrder
    latitude?: SortOrder
    logisticStatus?: SortOrder
    longitude?: SortOrder
    pileNumber?: SortOrder
    registrationDate?: SortOrder
    remainingAmountRm?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    woodBuyerId?: SortOrder
  }

  export type pile_mapSumOrderByAggregateInput = {
    actualAmount?: SortOrder
    amountRm?: SortOrder
    avgLengthM?: SortOrder
    hasRemoval?: SortOrder
    inventoryAmountRm?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    registrationDate?: SortOrder
    remainingAmountRm?: SortOrder
    statusDate?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type pile_partnerCountOrderByAggregateInput = {
    id?: SortOrder
    accountingContactPersonId?: SortOrder
    address?: SortOrder
    associatedPartnerIdList?: SortOrder
    city?: SortOrder
    company?: SortOrder
    contactName?: SortOrder
    country?: SortOrder
    deactivated?: SortOrder
    forestCompanyAssociations?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    mandatePersonIds?: SortOrder
    partnerNumber?: SortOrder
    partnerType?: SortOrder
    pileNumberPrefix?: SortOrder
    postcode?: SortOrder
  }

  export type pile_partnerAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type pile_partnerMaxOrderByAggregateInput = {
    id?: SortOrder
    accountingContactPersonId?: SortOrder
    address?: SortOrder
    city?: SortOrder
    company?: SortOrder
    contactName?: SortOrder
    country?: SortOrder
    deactivated?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    partnerNumber?: SortOrder
    partnerType?: SortOrder
    pileNumberPrefix?: SortOrder
    postcode?: SortOrder
  }

  export type pile_partnerMinOrderByAggregateInput = {
    id?: SortOrder
    accountingContactPersonId?: SortOrder
    address?: SortOrder
    city?: SortOrder
    company?: SortOrder
    contactName?: SortOrder
    country?: SortOrder
    deactivated?: SortOrder
    id_?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    partnerNumber?: SortOrder
    partnerType?: SortOrder
    pileNumberPrefix?: SortOrder
    postcode?: SortOrder
  }

  export type pile_partnerSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type Pile_table_preferencesColumnsCompositeListFilter = {
    equals?: Enumerable<pile_table_preferencesColumnsObjectEqualityInput>
    every?: pile_table_preferencesColumnsWhereInput
    some?: pile_table_preferencesColumnsWhereInput
    none?: pile_table_preferencesColumnsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type pile_table_preferencesColumnsObjectEqualityInput = {
    id: string
    name: string
    width: number
  }

  export type pile_table_preferencesColumnsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type pile_table_preferencesCountOrderByAggregateInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
    id_?: SortOrder
    preferenceName?: SortOrder
  }

  export type pile_table_preferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
    id_?: SortOrder
    preferenceName?: SortOrder
  }

  export type pile_table_preferencesMinOrderByAggregateInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
    id_?: SortOrder
    preferenceName?: SortOrder
  }

  export type Pile_user_configCopyConfigCompositeFilter = {
    equals?: pile_user_configCopyConfigObjectEqualityInput
    is?: pile_user_configCopyConfigWhereInput
    isNot?: pile_user_configCopyConfigWhereInput
  }

  export type pile_user_configCopyConfigObjectEqualityInput = {
    avgDiameter: boolean
    avgLength: boolean
    comments: boolean
    contract: boolean
    district: boolean
    forestArea: boolean
    forestDepartment: boolean
    forestEntrance: boolean
    forestOwner: boolean
    forestOwnerCertificate: boolean
    forestOwnerContactPerson: boolean
    intendedCustomer: boolean
    kind: boolean
    list: boolean
    logisticReadyStatus: boolean
    maxDiameter: boolean
    minDiameter: boolean
    nearestCity: boolean
    parcel: boolean
    pileDamage: boolean
    pilePosition: boolean
    project: boolean
    quality: boolean
    roadConditionComment: boolean
    roadDrivingPossibility: boolean
    roadLoadingPossibility: boolean
    roadSurfaceCondition: boolean
    salesType: boolean
    services: boolean
    sharedAccess: boolean
    state: boolean
    techSupportAccess: boolean
    timberTradeAccess: boolean
    transferOwnership: boolean
    treeAge: boolean
    treeSpecies: boolean
  }

  export type pile_user_configCopyConfigOrderByInput = {
    avgDiameter?: SortOrder
    avgLength?: SortOrder
    comments?: SortOrder
    contract?: SortOrder
    district?: SortOrder
    forestArea?: SortOrder
    forestDepartment?: SortOrder
    forestEntrance?: SortOrder
    forestOwner?: SortOrder
    forestOwnerCertificate?: SortOrder
    forestOwnerContactPerson?: SortOrder
    intendedCustomer?: SortOrder
    kind?: SortOrder
    list?: SortOrder
    logisticReadyStatus?: SortOrder
    maxDiameter?: SortOrder
    minDiameter?: SortOrder
    nearestCity?: SortOrder
    parcel?: SortOrder
    pileDamage?: SortOrder
    pilePosition?: SortOrder
    project?: SortOrder
    quality?: SortOrder
    roadConditionComment?: SortOrder
    roadDrivingPossibility?: SortOrder
    roadLoadingPossibility?: SortOrder
    roadSurfaceCondition?: SortOrder
    salesType?: SortOrder
    services?: SortOrder
    sharedAccess?: SortOrder
    state?: SortOrder
    techSupportAccess?: SortOrder
    timberTradeAccess?: SortOrder
    transferOwnership?: SortOrder
    treeAge?: SortOrder
    treeSpecies?: SortOrder
  }

  export type pile_user_configCountOrderByAggregateInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
  }

  export type pile_user_configMaxOrderByAggregateInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
  }

  export type pile_user_configMinOrderByAggregateInput = {
    id?: SortOrder
    contactPersonId?: SortOrder
  }

  export type IntNullableListFilter = {
    equals?: Enumerable<number> | null
    has?: number | null
    hasEvery?: Enumerable<number>
    hasSome?: Enumerable<number>
    isEmpty?: boolean
  }

  export type report_generatedCountOrderByAggregateInput = {
    id?: SortOrder
    generatedAt?: SortOrder
    locale?: SortOrder
    reportData?: SortOrder
    reportDescription?: SortOrder
    reportFormat?: SortOrder
    reportId?: SortOrder
    reportName?: SortOrder
    reportTitle?: SortOrder
    success?: SortOrder
    userId?: SortOrder
    username?: SortOrder
  }

  export type report_generatedAvgOrderByAggregateInput = {
    generatedAt?: SortOrder
    reportData?: SortOrder
  }

  export type report_generatedMaxOrderByAggregateInput = {
    id?: SortOrder
    generatedAt?: SortOrder
    locale?: SortOrder
    reportDescription?: SortOrder
    reportFormat?: SortOrder
    reportId?: SortOrder
    reportName?: SortOrder
    reportTitle?: SortOrder
    success?: SortOrder
    userId?: SortOrder
    username?: SortOrder
  }

  export type report_generatedMinOrderByAggregateInput = {
    id?: SortOrder
    generatedAt?: SortOrder
    locale?: SortOrder
    reportDescription?: SortOrder
    reportFormat?: SortOrder
    reportId?: SortOrder
    reportName?: SortOrder
    reportTitle?: SortOrder
    success?: SortOrder
    userId?: SortOrder
    username?: SortOrder
  }

  export type report_generatedSumOrderByAggregateInput = {
    generatedAt?: SortOrder
    reportData?: SortOrder
  }

  export type ForestManagement_contactpersonAccessRightsListCreateEnvelopeInput = {
    set?: Enumerable<ForestManagement_contactpersonAccessRightsCreateInput>
  }

  export type ForestManagement_contactpersonAccessRightsCreateInput = {
    partnerId: string
  }

  export type forest_management_contactpersonCreatemandatePartnerIdsInput = {
    set: Enumerable<string>
  }

  export type forest_management_contactpersonCreaterolesInput = {
    set: Enumerable<string>
  }

  export type ForestManagement_contactpersonAccessRightsListUpdateEnvelopeInput = {
    set?: Enumerable<ForestManagement_contactpersonAccessRightsCreateInput>
    push?: Enumerable<ForestManagement_contactpersonAccessRightsCreateInput>
    updateMany?: ForestManagement_contactpersonAccessRightsUpdateManyInput
    deleteMany?: ForestManagement_contactpersonAccessRightsDeleteManyInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type forest_management_contactpersonUpdatemandatePartnerIdsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type forest_management_contactpersonUpdaterolesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type forest_management_partnerCreateassociatedPartnerIdListInput = {
    set: Enumerable<string>
  }

  export type forest_management_partnerCreateforestCompanyAssociationsInput = {
    set: Enumerable<string>
  }

  export type forest_management_partnerCreatemandatePersonIdsInput = {
    set: Enumerable<string>
  }

  export type forest_management_partnerUpdateassociatedPartnerIdListInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type forest_management_partnerUpdateforestCompanyAssociationsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type forest_management_partnerUpdatemandatePersonIdsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type Map_configLayersListCreateEnvelopeInput = {
    set?: Enumerable<Map_configLayersCreateInput>
  }

  export type Map_configLayersCreateInput = {
    name: string
    options?: Enumerable<Map_configLayersOptionsCreateInput>
  }

  export type Map_configLayersListUpdateEnvelopeInput = {
    set?: Enumerable<Map_configLayersCreateInput>
    push?: Enumerable<Map_configLayersCreateInput>
    updateMany?: Map_configLayersUpdateManyInput
    deleteMany?: Map_configLayersDeleteManyInput
  }

  export type Pile_contactpersonAccessRightsListCreateEnvelopeInput = {
    set?: Enumerable<Pile_contactpersonAccessRightsCreateInput>
  }

  export type Pile_contactpersonAccessRightsCreateInput = {
    partnerId: string
  }

  export type pile_contactpersonCreatemandatePartnerIdsInput = {
    set: Enumerable<string>
  }

  export type pile_contactpersonCreaterolesInput = {
    set: Enumerable<string>
  }

  export type Pile_contactpersonAccessRightsListUpdateEnvelopeInput = {
    set?: Enumerable<Pile_contactpersonAccessRightsCreateInput>
    push?: Enumerable<Pile_contactpersonAccessRightsCreateInput>
    updateMany?: Pile_contactpersonAccessRightsUpdateManyInput
    deleteMany?: Pile_contactpersonAccessRightsDeleteManyInput
  }

  export type pile_contactpersonUpdatemandatePartnerIdsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type pile_contactpersonUpdaterolesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type Pile_mapTreeSpeciesListCreateEnvelopeInput = {
    set?: Enumerable<Pile_mapTreeSpeciesCreateInput>
  }

  export type Pile_mapTreeSpeciesCreateInput = {
    amountPercentage: number
    woodKind: string
    woodQuality: string
    woodType: string
  }

  export type Pile_mapWoodSpeciesNullableCreateEnvelopeInput = {
    set?: Pile_mapWoodSpeciesCreateInput | null
  }

  export type Pile_mapWoodSpeciesCreateInput = {
    woodKinds?: Pile_mapWoodSpeciesCreatewoodKindsInput | Enumerable<string>
    woodQualities?: Pile_mapWoodSpeciesCreatewoodQualitiesInput | Enumerable<string>
    woodTypes: InputJsonValue
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Pile_mapTreeSpeciesListUpdateEnvelopeInput = {
    set?: Enumerable<Pile_mapTreeSpeciesCreateInput>
    push?: Enumerable<Pile_mapTreeSpeciesCreateInput>
    updateMany?: Pile_mapTreeSpeciesUpdateManyInput
    deleteMany?: Pile_mapTreeSpeciesDeleteManyInput
  }

  export type Pile_mapWoodSpeciesNullableUpdateEnvelopeInput = {
    set?: Pile_mapWoodSpeciesCreateInput | null
    upsert?: Pile_mapWoodSpeciesUpsertInput
    unset?: boolean
  }

  export type pile_partnerCreateassociatedPartnerIdListInput = {
    set: Enumerable<string>
  }

  export type pile_partnerCreateforestCompanyAssociationsInput = {
    set: Enumerable<string>
  }

  export type pile_partnerCreatemandatePersonIdsInput = {
    set: Enumerable<string>
  }

  export type pile_partnerUpdateassociatedPartnerIdListInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type pile_partnerUpdateforestCompanyAssociationsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type pile_partnerUpdatemandatePersonIdsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type pile_table_preferencesColumnsListCreateEnvelopeInput = {
    set?: Enumerable<pile_table_preferencesColumnsCreateInput>
  }

  export type pile_table_preferencesColumnsCreateInput = {
    id: string
    name: string
    width: number
  }

  export type pile_table_preferencesColumnsListUpdateEnvelopeInput = {
    set?: Enumerable<pile_table_preferencesColumnsCreateInput>
    push?: Enumerable<pile_table_preferencesColumnsCreateInput>
    updateMany?: pile_table_preferencesColumnsUpdateManyInput
    deleteMany?: pile_table_preferencesColumnsDeleteManyInput
  }

  export type pile_user_configCopyConfigCreateEnvelopeInput = {
    set?: pile_user_configCopyConfigCreateInput
  }

  export type pile_user_configCopyConfigCreateInput = {
    avgDiameter: boolean
    avgLength: boolean
    comments: boolean
    contract: boolean
    district: boolean
    forestArea: boolean
    forestDepartment: boolean
    forestEntrance: boolean
    forestOwner: boolean
    forestOwnerCertificate: boolean
    forestOwnerContactPerson: boolean
    intendedCustomer: boolean
    kind: boolean
    list: boolean
    logisticReadyStatus: boolean
    maxDiameter: boolean
    minDiameter: boolean
    nearestCity: boolean
    parcel: boolean
    pileDamage: boolean
    pilePosition: boolean
    project: boolean
    quality: boolean
    roadConditionComment: boolean
    roadDrivingPossibility: boolean
    roadLoadingPossibility: boolean
    roadSurfaceCondition: boolean
    salesType: boolean
    services: boolean
    sharedAccess: boolean
    state: boolean
    techSupportAccess: boolean
    timberTradeAccess: boolean
    transferOwnership: boolean
    treeAge: boolean
    treeSpecies: boolean
  }

  export type pile_user_configCopyConfigUpdateEnvelopeInput = {
    set?: pile_user_configCopyConfigCreateInput
    update?: pile_user_configCopyConfigUpdateInput
  }

  export type report_generatedCreatereportDataInput = {
    set: Enumerable<number>
  }

  export type report_generatedUpdatereportDataInput = {
    set?: Enumerable<number>
    push?: number | Enumerable<number>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type ForestManagement_contactpersonAccessRightsWhereInput = {
    AND?: Enumerable<ForestManagement_contactpersonAccessRightsWhereInput>
    OR?: Enumerable<ForestManagement_contactpersonAccessRightsWhereInput>
    NOT?: Enumerable<ForestManagement_contactpersonAccessRightsWhereInput>
    partnerId?: StringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
    isSet?: boolean
  }

  export type Map_configLayersWhereInput = {
    AND?: Enumerable<Map_configLayersWhereInput>
    OR?: Enumerable<Map_configLayersWhereInput>
    NOT?: Enumerable<Map_configLayersWhereInput>
    name?: StringFilter | string
    options?: XOR<Map_configLayersOptionsCompositeListFilter, Enumerable<Map_configLayersOptionsObjectEqualityInput>>
  }

  export type Map_configLayersOptionsObjectEqualityInput = {
    id: string
    value: boolean
  }

  export type Pile_contactpersonAccessRightsWhereInput = {
    AND?: Enumerable<Pile_contactpersonAccessRightsWhereInput>
    OR?: Enumerable<Pile_contactpersonAccessRightsWhereInput>
    NOT?: Enumerable<Pile_contactpersonAccessRightsWhereInput>
    partnerId?: StringFilter | string
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type Pile_mapTreeSpeciesWhereInput = {
    AND?: Enumerable<Pile_mapTreeSpeciesWhereInput>
    OR?: Enumerable<Pile_mapTreeSpeciesWhereInput>
    NOT?: Enumerable<Pile_mapTreeSpeciesWhereInput>
    amountPercentage?: FloatFilter | number
    woodKind?: StringFilter | string
    woodQuality?: StringFilter | string
    woodType?: StringFilter | string
  }

  export type Pile_mapWoodSpeciesWhereInput = {
    AND?: Enumerable<Pile_mapWoodSpeciesWhereInput>
    OR?: Enumerable<Pile_mapWoodSpeciesWhereInput>
    NOT?: Enumerable<Pile_mapWoodSpeciesWhereInput>
    woodKinds?: StringNullableListFilter
    woodQualities?: StringNullableListFilter
    woodTypes?: JsonFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type pile_table_preferencesColumnsWhereInput = {
    AND?: Enumerable<pile_table_preferencesColumnsWhereInput>
    OR?: Enumerable<pile_table_preferencesColumnsWhereInput>
    NOT?: Enumerable<pile_table_preferencesColumnsWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    width?: FloatFilter | number
  }

  export type pile_user_configCopyConfigWhereInput = {
    AND?: Enumerable<pile_user_configCopyConfigWhereInput>
    OR?: Enumerable<pile_user_configCopyConfigWhereInput>
    NOT?: Enumerable<pile_user_configCopyConfigWhereInput>
    avgDiameter?: BoolFilter | boolean
    avgLength?: BoolFilter | boolean
    comments?: BoolFilter | boolean
    contract?: BoolFilter | boolean
    district?: BoolFilter | boolean
    forestArea?: BoolFilter | boolean
    forestDepartment?: BoolFilter | boolean
    forestEntrance?: BoolFilter | boolean
    forestOwner?: BoolFilter | boolean
    forestOwnerCertificate?: BoolFilter | boolean
    forestOwnerContactPerson?: BoolFilter | boolean
    intendedCustomer?: BoolFilter | boolean
    kind?: BoolFilter | boolean
    list?: BoolFilter | boolean
    logisticReadyStatus?: BoolFilter | boolean
    maxDiameter?: BoolFilter | boolean
    minDiameter?: BoolFilter | boolean
    nearestCity?: BoolFilter | boolean
    parcel?: BoolFilter | boolean
    pileDamage?: BoolFilter | boolean
    pilePosition?: BoolFilter | boolean
    project?: BoolFilter | boolean
    quality?: BoolFilter | boolean
    roadConditionComment?: BoolFilter | boolean
    roadDrivingPossibility?: BoolFilter | boolean
    roadLoadingPossibility?: BoolFilter | boolean
    roadSurfaceCondition?: BoolFilter | boolean
    salesType?: BoolFilter | boolean
    services?: BoolFilter | boolean
    sharedAccess?: BoolFilter | boolean
    state?: BoolFilter | boolean
    techSupportAccess?: BoolFilter | boolean
    timberTradeAccess?: BoolFilter | boolean
    transferOwnership?: BoolFilter | boolean
    treeAge?: BoolFilter | boolean
    treeSpecies?: BoolFilter | boolean
  }

  export type ForestManagement_contactpersonAccessRightsUpdateManyInput = {
    where: ForestManagement_contactpersonAccessRightsWhereInput
    data: ForestManagement_contactpersonAccessRightsUpdateInput
  }

  export type ForestManagement_contactpersonAccessRightsDeleteManyInput = {
    where: ForestManagement_contactpersonAccessRightsWhereInput
  }

  export type Map_configLayersOptionsCreateInput = {
    id: string
    value: boolean
  }

  export type Map_configLayersUpdateManyInput = {
    where: Map_configLayersWhereInput
    data: Map_configLayersUpdateInput
  }

  export type Map_configLayersDeleteManyInput = {
    where: Map_configLayersWhereInput
  }

  export type Pile_contactpersonAccessRightsUpdateManyInput = {
    where: Pile_contactpersonAccessRightsWhereInput
    data: Pile_contactpersonAccessRightsUpdateInput
  }

  export type Pile_contactpersonAccessRightsDeleteManyInput = {
    where: Pile_contactpersonAccessRightsWhereInput
  }

  export type Pile_mapWoodSpeciesCreatewoodKindsInput = {
    set: Enumerable<string>
  }

  export type Pile_mapWoodSpeciesCreatewoodQualitiesInput = {
    set: Enumerable<string>
  }

  export type Pile_mapTreeSpeciesUpdateManyInput = {
    where: Pile_mapTreeSpeciesWhereInput
    data: Pile_mapTreeSpeciesUpdateInput
  }

  export type Pile_mapTreeSpeciesDeleteManyInput = {
    where: Pile_mapTreeSpeciesWhereInput
  }

  export type Pile_mapWoodSpeciesUpsertInput = {
    set: Pile_mapWoodSpeciesCreateInput | null
    update: Pile_mapWoodSpeciesUpdateInput
  }

  export type pile_table_preferencesColumnsUpdateManyInput = {
    where: pile_table_preferencesColumnsWhereInput
    data: pile_table_preferencesColumnsUpdateInput
  }

  export type pile_table_preferencesColumnsDeleteManyInput = {
    where: pile_table_preferencesColumnsWhereInput
  }

  export type pile_user_configCopyConfigUpdateInput = {
    avgDiameter?: BoolFieldUpdateOperationsInput | boolean
    avgLength?: BoolFieldUpdateOperationsInput | boolean
    comments?: BoolFieldUpdateOperationsInput | boolean
    contract?: BoolFieldUpdateOperationsInput | boolean
    district?: BoolFieldUpdateOperationsInput | boolean
    forestArea?: BoolFieldUpdateOperationsInput | boolean
    forestDepartment?: BoolFieldUpdateOperationsInput | boolean
    forestEntrance?: BoolFieldUpdateOperationsInput | boolean
    forestOwner?: BoolFieldUpdateOperationsInput | boolean
    forestOwnerCertificate?: BoolFieldUpdateOperationsInput | boolean
    forestOwnerContactPerson?: BoolFieldUpdateOperationsInput | boolean
    intendedCustomer?: BoolFieldUpdateOperationsInput | boolean
    kind?: BoolFieldUpdateOperationsInput | boolean
    list?: BoolFieldUpdateOperationsInput | boolean
    logisticReadyStatus?: BoolFieldUpdateOperationsInput | boolean
    maxDiameter?: BoolFieldUpdateOperationsInput | boolean
    minDiameter?: BoolFieldUpdateOperationsInput | boolean
    nearestCity?: BoolFieldUpdateOperationsInput | boolean
    parcel?: BoolFieldUpdateOperationsInput | boolean
    pileDamage?: BoolFieldUpdateOperationsInput | boolean
    pilePosition?: BoolFieldUpdateOperationsInput | boolean
    project?: BoolFieldUpdateOperationsInput | boolean
    quality?: BoolFieldUpdateOperationsInput | boolean
    roadConditionComment?: BoolFieldUpdateOperationsInput | boolean
    roadDrivingPossibility?: BoolFieldUpdateOperationsInput | boolean
    roadLoadingPossibility?: BoolFieldUpdateOperationsInput | boolean
    roadSurfaceCondition?: BoolFieldUpdateOperationsInput | boolean
    salesType?: BoolFieldUpdateOperationsInput | boolean
    services?: BoolFieldUpdateOperationsInput | boolean
    sharedAccess?: BoolFieldUpdateOperationsInput | boolean
    state?: BoolFieldUpdateOperationsInput | boolean
    techSupportAccess?: BoolFieldUpdateOperationsInput | boolean
    timberTradeAccess?: BoolFieldUpdateOperationsInput | boolean
    transferOwnership?: BoolFieldUpdateOperationsInput | boolean
    treeAge?: BoolFieldUpdateOperationsInput | boolean
    treeSpecies?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Map_configLayersOptionsCompositeListFilter = {
    equals?: Enumerable<Map_configLayersOptionsObjectEqualityInput>
    every?: Map_configLayersOptionsWhereInput
    some?: Map_configLayersOptionsWhereInput
    none?: Map_configLayersOptionsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type ForestManagement_contactpersonAccessRightsUpdateInput = {
    partnerId?: StringFieldUpdateOperationsInput | string
  }

  export type Map_configLayersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    options?: XOR<Map_configLayersOptionsListUpdateEnvelopeInput, Enumerable<Map_configLayersOptionsCreateInput>>
  }

  export type Pile_contactpersonAccessRightsUpdateInput = {
    partnerId?: StringFieldUpdateOperationsInput | string
  }

  export type Pile_mapTreeSpeciesUpdateInput = {
    amountPercentage?: FloatFieldUpdateOperationsInput | number
    woodKind?: StringFieldUpdateOperationsInput | string
    woodQuality?: StringFieldUpdateOperationsInput | string
    woodType?: StringFieldUpdateOperationsInput | string
  }

  export type Pile_mapWoodSpeciesUpdateInput = {
    woodKinds?: Pile_mapWoodSpeciesUpdatewoodKindsInput | Enumerable<string>
    woodQualities?: Pile_mapWoodSpeciesUpdatewoodQualitiesInput | Enumerable<string>
    woodTypes?: InputJsonValue | InputJsonValue
  }

  export type pile_table_preferencesColumnsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
  }

  export type Map_configLayersOptionsWhereInput = {
    AND?: Enumerable<Map_configLayersOptionsWhereInput>
    OR?: Enumerable<Map_configLayersOptionsWhereInput>
    NOT?: Enumerable<Map_configLayersOptionsWhereInput>
    id?: StringFilter | string
    value?: BoolFilter | boolean
  }

  export type Map_configLayersOptionsListUpdateEnvelopeInput = {
    set?: Enumerable<Map_configLayersOptionsCreateInput>
    push?: Enumerable<Map_configLayersOptionsCreateInput>
    updateMany?: Map_configLayersOptionsUpdateManyInput
    deleteMany?: Map_configLayersOptionsDeleteManyInput
  }

  export type Pile_mapWoodSpeciesUpdatewoodKindsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type Pile_mapWoodSpeciesUpdatewoodQualitiesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type Map_configLayersOptionsUpdateManyInput = {
    where: Map_configLayersOptionsWhereInput
    data: Map_configLayersOptionsUpdateInput
  }

  export type Map_configLayersOptionsDeleteManyInput = {
    where: Map_configLayersOptionsWhereInput
  }

  export type Map_configLayersOptionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}