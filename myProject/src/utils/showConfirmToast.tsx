import { toast } from 'react-toastify';
import ConfirmToast from '../components/ConfirmToast';

export function showConfirmToast(onConfirm: () => void) {
  toast(
    <ConfirmToast
      onConfirm={() => {
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
