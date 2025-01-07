import { toast } from 'react-toastify';
import { useContributeRequestMutation } from "../api/api";

const useSendHelp = () => {
  const [contributeRequest, {error: errorContributeRequest}] = useContributeRequestMutation();

  const sendHelp = async (id: string) => {
    try {
      const response = await contributeRequest(id).unwrap();
      console.log(response);
      toast.success('Успех! Спасибо за помощь');
    } catch (error) {
      console.error(errorContributeRequest);
      if (error) {
        toast.error('Ошибка! Попробуйте еще раз');
      }
    }
  };

  return sendHelp;
};

export default useSendHelp;
