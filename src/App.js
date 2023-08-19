import './App.scss'
import MyHeader from "./components/UI/Header/MyHeader";
import SearchForm from "./components/SearchForm";
import ContentBlock from "./components/ContentBlock";
import {useState} from "react";
import {useFetching} from "./hooks/useFetching";
import SearchProfileService from "./API/SearchProfileService";
import SearchLastRepositoriesService from "./API/SearchLastRepositoriesService";

function App() {

    const [user, setUser] = useState({})
    const [repos, setRepos] = useState({})

    const [fetchUserAndRepos, isLoading, error] = useFetching(async function (q) {
        const dataUser = await SearchProfileService.getProfile(q);
        const repos = await SearchLastRepositoriesService.getRepos(q);
        setRepos(repos)
        setUser({...dataUser})
    })

  return (
      <div className='App'>
          <MyHeader/>
          <div className='main__window'>
              <div className='search__block'>
                  <SearchForm fetchUserAndRepos={fetchUserAndRepos}/>
              </div>
              <ContentBlock data={user} repos={repos} error={error}/>
          </div>
      </div>
  );
}

export default App;
