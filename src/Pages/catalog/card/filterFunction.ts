import { CardType } from "../../../interfaces/CardType";
import { useSelector } from 'react-redux';
import { selectFilter } from "../../../slice/filterSlice";
import { selectDeadlineData } from "../../../slice/deadlineDataSlice";
import { selectSearchBar } from "../../../slice/searchBarSlice";
import normalizeTitle from "../../common/normalizeTitle";

export default (allCards: CardType[]) => {
  const allFilter = useSelector(selectFilter);
  const deadline = useSelector(selectDeadlineData);
  const searchBar = useSelector(selectSearchBar);

  const filteredCards = allCards.filter((card) => {
    // Фильтрация по дедлайну
    if (deadline) {
      const endingDate = new Date(card.endingDate);
      const deadlineDate = new Date(deadline);
      if (endingDate > deadlineDate) {
        return false;
      }
    }

    // Фильтрация по активным фильтрам
    const activeFilters = allFilter.filter((el) => el.isChecked);
    if (activeFilters.length) {
      const passesFilters = activeFilters.every((filter) => {
        if (filter.subcategory) {
          const subcategoryValue = card[filter.category]?.[filter.subcategory];
          return String(subcategoryValue) === filter.key;
        } else {
          const categoryValue = card[filter.category];
          return categoryValue === filter.key;
        }
      });
      if (!passesFilters) {
        return false;
      }
    }

    // Если все фильтры пройдены
    return true;
  });

  // Фильтрация по строке поиска
  if (searchBar) {
    const searchBarNorm = searchBar.toLowerCase();
    return filteredCards.filter((card) => {
      const organizationTitleNorm = card.organization.title.toLowerCase();
      const titleNorm = normalizeTitle(card.title.toLowerCase());

      return (
        organizationTitleNorm.startsWith(searchBarNorm) ||
        titleNorm.startsWith(searchBarNorm)
      );
    });
  }

  return filteredCards;
};
