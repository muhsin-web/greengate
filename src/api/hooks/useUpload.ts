import { useMutation } from '@tanstack/react-query';
import { UploadService } from '../services/upload.service';
import type { LocalFile, UploadBase64Request } from '../types/upload.types';

export function useUploadFile() {
  return useMutation({ mutationFn: (file: LocalFile) => UploadService.uploadFile(file) });
}

export function useUploadBase64() {
  return useMutation({
    mutationFn: (payload: UploadBase64Request) => UploadService.uploadBase64(payload),
  });
}
