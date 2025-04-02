import { toast } from 'react-toastify';
import ConfirmToast from '../components/ToastifyCastomize';

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
