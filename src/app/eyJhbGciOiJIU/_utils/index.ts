import { GetProp, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export const beforeUpload = (file: FileType) => {
  // @ts-ignore
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    // @ts-ignore
    message.error('You can only upload JPG/PNG file!');
  }
  // @ts-ignore
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    // @ts-ignore
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
