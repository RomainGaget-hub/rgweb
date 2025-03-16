// This file now re-exports the Sanity client instead of Prisma
// It's kept for backward compatibility with existing imports
import { sanityClient } from './sanity';

export default sanityClient;
