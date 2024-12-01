import axios from "axios";
import { useSelector } from "react-redux";
import { selectSetAuthUser } from "../slice/authSlice";
import { toast } from 'react-toastify';

const useSendHelp = () => {
  const token = useSelector(selectSetAuthUser);

  const sendHelp = async (id: string) => {
    try {
      await axios.post(
        `http://localhost:4040/api/request/${id}/contribution`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('Успех! Спасибо за помощь');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 500) {
        toast.error('Ошибка! Попробуйте еще раз');
      }
    }
  }
  return sendHelp;
};

export default useSendHelp;