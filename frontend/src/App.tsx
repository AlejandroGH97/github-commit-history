import { useState } from 'react';
import './App.css';
import CommitList from './components/commitList';
import SearchMenu from './components/searchMenu';
import { fetchCommits } from './services/githubService';
import { GitHubCommit, SearchParams } from './types/commit';

function App() {
  const [commits, setCommits] = useState<GitHubCommit[]>([]);

  const onSearchHandler = async (params: SearchParams) => {
    const commits = await fetchCommits(params);
    setCommits(commits);
  };

  return (
    <div className="flex flex-col items-center mx-auto p-4 min-w-[500px]">
      <SearchMenu onSearch={onSearchHandler} />
      <CommitList commits={commits} />
    </div>
  );
}

export default App;
