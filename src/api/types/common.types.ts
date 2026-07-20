/**
 * Shared / envelope types used across all Greengate API domains.
 *
 * ⚠️ ASSUMPTION: The exact response envelope (bare object vs. `{ success, data }`
 * wrapper) and pagination meta field names were NOT visible in the Swagger UI
 * (only method + path + summary rendered without expanding each operation).
 * Verify the very first successful call (e.g. `/health/live` or `/auth/login`)
 * against what's below and adjust `client.ts` / these types if needed.
 */

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface ApiErrorResponse {
  statusCode: number;
  message: string | string[];
  error?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}
