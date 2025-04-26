'use client';

import Image from 'next/image';
import parse from 'html-react-parser';
import { useParams, useRouter } from 'next/navigation';
import cx from 'classnames';

import {
  Button, Form, Input, Switch, Upload,
} from 'antd';
import { useEffect, useRef, useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Quill from 'quill';
import { useGetArticleData } from '../_hooks/useGetArticleData';
import { beforeUpload } from '../_utils';
import { usePostUploadImage } from '../_hooks/useUploadImage';
import RichTextInput from '../_components/RichTextInput';
import { usePutArticle } from '../_hooks/usePutArticle';
import { usePopUpContext } from '../_provider/PopUpProvider';
import DeleteArticleButton from '../_components/DeleteArticleButton';
import { EPaths } from '../_constants';

type FieldType = {
  isPopular: boolean;
  isInsight: boolean;
  title?: string;
  content?: string;
};

const EditArticleDetail = () => {
  const { showNotification } = usePopUpContext();
  const params = useParams<{ id: string }>();
  const { data, refetch } = useGetArticleData(params.id);

  const [imageUrl, setImageUrl] = useState<string>(data?.data.articleContent.image || '');

  const { mutate, isPending } = usePostUploadImage();

  const { mutate: updateArticleMutate } = usePutArticle();

  const quillRef = useRef<Quill>(null);

  const uploadButton = (
    <button
      style={{
        border: 0, background: 'none', width: '100%', height: '100%',
      }}
      type="button"
    >
      {isPending ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handleOnSubmit = (value: FieldType) => {
    const payload: {
      id: string;
      title: string;
      content: string;
      description: string;
      isPopular: boolean;
      isInsight: boolean;
      image?: string;
    } = {
      id: data?.data?.articleContent?.id || '',
      title: value?.title?.trim() || '',
      content: quillRef?.current?.getSemanticHTML().replaceAll('&nbsp;', ' ') || '',
      isPopular: value.isPopular,
      isInsight: value.isInsight,
      description: quillRef?.current?.getText().replace(/\s*\n\s*/g, ' ') || '',
    };

    if (imageUrl) {
      payload.image = imageUrl;
    }

    updateArticleMutate(payload, {
      onSuccess: (serverResponse) => {
        showNotification['success']({
          message: 'Update Article Success',
          description: 'Success updating article',
        });
        if (serverResponse) {
          refetch();
        }
      },
      onError: (err) => {
        showNotification['error']({
          message: 'Upload Article Failed',
          description:
            err.message,
        });
      },

    });
  };

  return (
    <>
      <Upload
        name="image"
        className="w-full mb-4 aspect-[1286/608]"
        listType="picture-card"
        showUploadList={false}
        beforeUpload={beforeUpload}
        customRequest={(opt) => {
          mutate(
            { image: opt.file },
            {
              onSuccess: (serverResponse) => {
                const { imageLink } = serverResponse.data;
                setImageUrl(imageLink);
              },
              onError: (err) => {
                showNotification['error']({
                  message: 'Upload Image Failed',
                  description:
                    err.message,
                });
              },
            },
          );
        }}
      >
        {(imageUrl && !isPending)
          ? (
            <div className="relative w-full aspect-[1286/608]">
              <Image
                src={imageUrl}
                alt={data?.data.articleContent.title || ''}
                className="rounded-lg"
                objectFit="cover"
                fill
              />
            </div>
          )
          : uploadButton}
      </Upload>
      <Form
        name="basic"
        layout="vertical"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        className="w-full"
        onFinish={handleOnSubmit}
        autoComplete="off"
        initialValues={{
          isPopular: data?.data.articleContent.isPopular,
          isInsight: data?.data.articleContent.isInsight,
          title: data?.data.articleContent.title,
        }}
      >
        <div className="flex gap-4">
          <Form.Item<FieldType>
            label="Popular Article"
            name="isPopular"
          >
            <Switch />
          </Form.Item>
          <Form.Item<FieldType>
            label="Insight Article"
            name="isInsight"
          >
            <Switch />
          </Form.Item>
        </div>
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
            defaultValue={data?.data?.articleContent?.content}
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const ArticleDetail = () => {
  const [isEdit, setIsEdit] = useState(false);

  const { showLoading, hideLoading } = usePopUpContext();

  const params = useParams<{ id: string }>();
  const router = useRouter();

  const { data, isLoading } = useGetArticleData(params.id);

  useEffect(() => {
    if (isLoading) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isLoading]);

  useEffect(() => {
    setIsEdit(false);
  }, [data]);

  if (!data || isLoading) {
    return null;
  }

  return (
    <div className="bg-white rounded-md p-4 min-h-[calc(100vh-8rem)]">
      <div className="flex justify-between mb-4">
        <p className="text-3xl font-bold">Article Details</p>
        <div className="flex gap-4">
          <DeleteArticleButton
            id={params.id}
            successCb={() => { router.push(EPaths.ADMIN); }}
          />
          <Button
            type="primary"
            htmlType="button"
            className={cx(
              { 'bg-backgroundPrimary': !isEdit },
              { 'bg-red-500': isEdit },
            )}
            onClick={() => setIsEdit((prev) => !prev)}
          >
            {isEdit ? 'Cancel' : 'Edit Article'}
          </Button>
        </div>
      </div>
      {
        isEdit ? (
          <EditArticleDetail />
        ) : (
          <>
            <div className="relative w-full aspect-[1286/608]">
              <Image
                src={data.data.articleContent.image}
                alt={data.data.articleContent.title}
                className="rounded-lg"
                objectFit="cover"
                fill
              />
            </div>
            <div className="flex gap-4 mt-4">
              <Form.Item<FieldType>
                label="Popular Article"
                name="isPopular"
                layout="vertical"
              >
                <Switch
                  disabled
                  defaultValue={data?.data.articleContent.isPopular}
                />
              </Form.Item>
              <Form.Item<FieldType>
                label="Insight Article"
                name="isInsight"
                layout="vertical"
              >
                <Switch
                  disabled
                  defaultValue={data?.data.articleContent.isInsight}
                />
              </Form.Item>
            </div>
            <p className="text-[3.125rem] font-bold">{data.data.articleContent.title}</p>

            <p className="text-xs line-clamp-1 mt-[0.375rem]">
              {data.data.articleContent.author}
              {' • '}
              {data.data.articleContent.date}
            </p>

            <div className="flex gap-[3rem]">
              <div className="html-content flex-grow">
                {parse(data.data.articleContent.content)}
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

export default ArticleDetail;
