import "./App.css";
import MovieTable from "./components/MovieTable";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <MovieTable />
    </div>
  );
}

export default App;
// http://www.omdbapi.com/?i=tt3896198&apikey=378bc469
