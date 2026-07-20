/**
 * upload — /api/v1/upload/*
 * ⚠️ Inferred shapes — verify against real spec.
 */

export interface UploadResponse {
  url: string;
  key?: string;
  mimeType?: string;
  size?: number;
}

export interface UploadBase64Request {
  fileName: string;
  base64: string;
  mimeType: string;
}

/** Shape expected by expo-image-picker / expo-document-picker results */
export interface LocalFile {
  uri: string;
  name: string;
  type: string;
}
