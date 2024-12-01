import axios from "axios";
import { useSelector } from "react-redux";
import { selectSetAuthUser } from "../slice/authSlice";
import { toast } from "react-toastify";
import { deleteFavoritesId, setFavoritesId } from "../slice/favoritesSlice";
import { useDispatch } from "react-redux";
import { selectFavoritesId } from "../slice/favoritesSlice";

const useFavorites = () => {
  const token = useSelector(selectSetAuthUser);
  const dispatch = useDispatch();
  const allFavoritesId = useSelector(selectFavoritesId)

  const addFavorites = async (id: string) => {
    try {
      await axios.post(
        'http://localhost:4040/api/user/favourites',
        {'requestId': id},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setFavoritesId(id));
      toast.success('Успех! Добавлено в избранное');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 500) {
        toast.error('Ошибка! Попробуйте еще раз');
      }
    }
  };

  const deleteFavorites = async (id: string) => {
    try {
      await axios.delete(
        `http://localhost:4040/api/user/favourites/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(deleteFavoritesId(id));
      toast.info('Удалено из избранного');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 500) {
        toast.error('Ошибка! Попробуйте еще раз');
      }
    }
  };

  const clickFavorites = async (id: string) => {
    if (allFavoritesId.includes(id)) {
      await deleteFavorites(id);
    } else {
      await addFavorites(id);
    }
  };

  return clickFavorites;
};

export default useFavorites;