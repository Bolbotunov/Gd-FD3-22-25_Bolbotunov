import { toast } from 'react-toastify';
import ConfirmToast from '../components/ToastifyCastomize';
import DeleteUserBtn from '../components/authorization/DeleteUserBtn';

export function showConfirmToast(onConfirm: () => void) {
  toast(
    <ConfirmToast
      onConfirm={async () => {
        onConfirm();
        toast.dismiss();
      }}
      onCancel={() => {
        toast.dismiss();
      }}
    />,
    {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    }
  );
}
