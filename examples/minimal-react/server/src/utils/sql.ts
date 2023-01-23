export enum OrderByDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface SqlParams {
  selects: Set<string>;
  from: string;
  join?: Set<string>;
  where?: string[];
  groupBy?: string;
  orderBy?: string[];
  orderByDirection?: OrderByDirection;
  having?: string[];
  limit?: string;
}

export function getSqlString({
  selects,
  from,
  join,
  where,
  groupBy,
  orderBy,
  orderByDirection,
  having,
  limit,
}: SqlParams) {
  return `SELECT ${Array.from(selects)} FROM ${from} ${
    join && join.size > 0 ? Array.from(join).join(' ') : ''
  } ${where && where.length > 0 ? `WHERE ${where.join(' AND ')}` : ''} ${
    groupBy ? `GROUP BY ${groupBy}` : ''
  } ${having && having.length > 0 ? `HAVING ${having.join(' AND ')}` : ''} ${
    orderBy && orderByDirection && orderBy.length > 0
      ? `ORDER BY ${orderBy.join(',')} ${orderByDirection}`
      : ''
  } ${limit ? `LIMIT ${limit}` : ''}`;
}
