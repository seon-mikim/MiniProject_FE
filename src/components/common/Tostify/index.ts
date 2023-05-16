import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../../../styles/theme';

export const ERROR_TOAST_ID = 'ERROR_TOAST';
let toastId: string | null | number = null;

export const showToastError = (message: string) => {
  if (toastId === null || !toast.isActive(toastId)) {
    toast.clearWaitingQueue({ containerId: ERROR_TOAST_ID }); // 큐에 있는 모든 토스트 메시지를 제거합니다.
    toastId = toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 800,
      hideProgressBar: true,
      icon: true,
      style: { width: '400px', color: `${theme.color.brown}`, background: `${theme.color.lightBeige}` },
      toastId: 'ERROR_TOAST',
    });
  }
};
export const showToastSuccess = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    hideProgressBar: true,
    icon: true,
    style: { width: '400px', color: `${theme.color.brown}`, background: `${theme.color.lightBeige}` },
  });
}