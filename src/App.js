import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import {Routes, Route} from 'react-router-dom'
import RecipePage from './Pages/RecipePage'
import SingleRecipePage from './Pages/SingleRecipePage'
import FavoritePage from "./Pages/FavoritePage";


function App() {

return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorite" element={<FavoritePage />}/>
        <Route path="/recipes" exact element={<RecipePage />}/>
        <Route path="/recipes/:recipeId" element={<SingleRecipePage />}/>
      </Routes>
  );
}

export default App;
