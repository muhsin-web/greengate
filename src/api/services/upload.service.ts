import { apiClient, unwrap } from '../client';
import type { UploadResponse, UploadBase64Request, LocalFile } from '../types/upload.types';

export const UploadService = {
  /** For files picked via expo-image-picker / expo-document-picker (multipart/form-data). */
  uploadFile: (file: LocalFile) => {
    const formData = new FormData();
    // React Native's FormData accepts this shape even though the web FormData
    // type doesn't officially declare it — the @ts-expect-error is expected here.
    // @ts-expect-error React Native FormData file part
    formData.append('file', { uri: file.uri, name: file.name, type: file.type });

    return unwrap(
      apiClient.post<UploadResponse>('/api/v1/upload/file', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    );
  },

  uploadBase64: (payload: UploadBase64Request) =>
    unwrap(apiClient.post<UploadResponse>('/api/v1/upload/base64', payload)),
};
