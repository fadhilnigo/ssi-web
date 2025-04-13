import { Button, Popconfirm, PopconfirmProps } from 'antd';
import { useDeleteArticle } from '../_hooks/useDeleteArticle';
import { usePopUpContext } from '../_provider/PopUpProvider';

interface IDeleteArticleButton {
  id: string;
  successCb?: VoidFunction;
}

const DeleteArticleButton = ({ id, successCb }: IDeleteArticleButton) => {
  const { mutate } = useDeleteArticle();
  const { showNotification } = usePopUpContext();

  const confirm: PopconfirmProps['onConfirm'] = () => {
    mutate({ id }, {
      onSuccess: (serverResponse) => {
        showNotification['success']({
          message: 'Update Article Success',
          description: 'Success updating article',
        });
        if (serverResponse) {
          successCb?.();
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
    <Popconfirm
      title="Delete the article"
      description="Are you sure to delete this article?"
      onConfirm={confirm}
      okText="Yes"
      cancelText="No"
    >
      <Button danger>Delete</Button>
    </Popconfirm>
  );
};

export default DeleteArticleButton;
