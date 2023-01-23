export const INNER_JOIN_PILE_TASK =
  'INNER JOIN pile_task t ON p.id = t.pile_id';

export const INNER_JOIN_PROJECT =
  'INNER JOIN project pr ON p.project_id = pr.id';

export const LEFT_JOIN_WOOD = 'LEFT JOIN wood w ON p.id = w.pile_id';

export const LEFT_JOIN_PILE_SPECIES_ENTRY =
  'LEFT JOIN pile_species_entry e ON p.id = e.pile_id';

export const LEFT_JOIN_PILE_SPECIES_ACTUAL_ENTRY =
  'LEFT JOIN pile_species_actual_entry a ON p.id = a.pile_id';

export const INNER_JOIN_PILE_INTENDED_CUSTOMER =
  'INNER JOIN pile_intended_customer i ON p.id = i.pile_id';

export const INNER_JOIN_SALE =
  'INNER JOIN sale_entry se ON p.id = se.pile_id INNER JOIN sale s ON se.sale_id = s.id';

export const INNER_JOIN_TRANSPORT_ORDER_ENTRY =
  'INNER JOIN transport_order_entry toe ON p.id = toe.pile_id';

export const INNER_JOIN_PILE_CERTIFICATE =
  'INNER JOIN pile_certificate c ON p.id = c.pile_id';
