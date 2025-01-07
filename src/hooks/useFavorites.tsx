import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteFavoritesId, setFavoritesId } from "../slice/favoritesSlice";
import { useDispatch } from "react-redux";
import { selectFavoritesId } from "../slice/favoritesSlice";
import { useAddFavouritesMutation, useRemoveFavouritesMutation } from "../api/api";

const useFavorites = () => {
  const dispatch = useDispatch();
  const allFavoritesId = useSelector(selectFavoritesId);
  const [addToFavorites] = useAddFavouritesMutation();
  const [removeFromFavorites] = useRemoveFavouritesMutation();

  const addFavorites = async (id: string) => {
    try {
      const resp = await addToFavorites(id).unwrap();
      console.log(resp)
      dispatch(setFavoritesId(id));
      toast.success('Успех! Добавлено в избранное');
    } catch (error) {
      console.log(error);
      toast.error('Ошибка! Попробуйте еще раз');
    }
  };

  const deleteFavorites = async (id: string) => {
    try {
      await removeFromFavorites(id).unwrap();
      dispatch(deleteFavoritesId(id));
      toast.info('Удалено из избранного');
    } catch (error) {
      console.error(error);
      toast.error('Ошибка! Попробуйте еще раз');
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