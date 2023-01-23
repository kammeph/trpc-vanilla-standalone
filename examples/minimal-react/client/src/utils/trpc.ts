import { createTRPCReact } from '@trpc/react-query';
import { PileRouter } from '../../../server/src/pile/pile-router';

export const trpc = createTRPCReact<PileRouter>();
