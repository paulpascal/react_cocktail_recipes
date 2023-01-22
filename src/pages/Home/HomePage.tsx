import useAppContext from "../../hooks/useAppContext/useAppContext";
import { suggestCocktailsByName } from "../../services/calls";
import { MainSearch, MainFilter } from "../../components";

import s from "./HomePage.module.css";

function HomePage() {
  const { theme } = useAppContext();
  const style = theme === "dark" ? s.outerDark : s.outerLight;

  return (
    <div className={style}>
      <h2>Welcome to YourCocktail!</h2>
      <p>Search for a cocktail:</p>
      <MainSearch getSuggestionsAsync={suggestCocktailsByName} />
      <MainFilter />
    </div>
  );
}

export default HomePage;
