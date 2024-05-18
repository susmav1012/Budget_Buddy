import * as schema from './schema';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
const sql = neon('postgresql://neondb_owner:bm0nzP3OKUkZ@ep-patient-block-a589sjje.us-east-2.aws.neon.tech/budget-buddy?sslmode=require');
export const db = drizzle(sql,{schema});