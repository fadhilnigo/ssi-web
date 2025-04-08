'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import {
  Button,
  Form,
  GetProp, Input, notification, Upload, UploadProps,
} from 'antd';

import { useRouter } from 'next/navigation';
import Quill from 'quill';
import { usePostUploadImage } from '../_hooks/useUploadImage';
import RichTextInput from '../_components/RichTextInput';
import { usePostArticle } from '../_hooks/usePostArticle';
import { ADMIN_PAGE_ROUTE } from '../_constants';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

type FieldType = {
  title?: string;
  content?: string;
};

const beforeUpload = (file: FileType) => {
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

const CreateArticlePage = () => {
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const router = useRouter();

  const { mutate } = usePostUploadImage();

  const { mutate: uploadArticleMutation } = usePostArticle();

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0, background: 'none', width: '100%', height: '100%',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const quillRef = useRef<Quill>(null);

  const handleOnSubmit = (value: FieldType) => {
    const payload: {
      title: string;
      content: string;
      description: string;
      image?: string;
    } = {
      title: value?.title?.trim() || '',
      content: quillRef?.current?.getSemanticHTML() || '',
      description: quillRef?.current?.getText().replace(/\s*\n\s*/g, ' ') || '',
    };

    if (imageUrl) {
      payload.image = imageUrl;
    }

    uploadArticleMutation(payload, {
      onSuccess: (serverResponse) => {
        api['success']({
          message: 'Upload Article Success',
          description: 'Success creating new article, will redirected to homepage',
        });
        if (serverResponse) {
          router.push(`/${ADMIN_PAGE_ROUTE}`);
        }
      },
      onError: (err) => {
        api['error']({
          message: 'Upload Article Failed',
          description:
              err.message,
        });
      },

    });
  };

  return (
    <div className="content-wrapper">
      <p className="text-[3.125rem] font-bold">Create Article</p>
      {contextHolder}
      <Upload
        name="image"
        className="w-full mb-4 aspect-[1286/608]"
        listType="picture-card"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        customRequest={(opt) => {
          mutate(
            { image: opt.file },
            {
              onSuccess: (serverResponse) => {
                const { imageLink } = serverResponse.data;
                setLoading(false);
                setImageUrl(imageLink);
              },
              onError: (err) => {
                api['error']({
                  message: 'Upload Image Failed',
                  description:
                    err.message,
                });
              },
            },
          );
        }}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', aspectRatio: '1286/608' }} /> : uploadButton}
      </Upload>
      <Form
        name="basic"
        layout="vertical"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        className="w-full"
        onFinish={handleOnSubmit}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input title!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Content"
          name="content"
        >
          <RichTextInput
            ref={quillRef}
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateArticlePage;
