import { useState } from "react";
import "./App.css";
import CommitList from "./components/commitList";
import SearchMenu from "./components/searchMenu";
import { fetchBranches, fetchCommits } from "./services/githubService";
import { GitHubCommit, SearchParams } from "./types/commit";
import { GitHubBranch } from "./types/branches";

function App() {
  const [commits, setCommits] = useState<GitHubCommit[]>([]);
  const [branches, setBranches] = useState<GitHubBranch[]>([]);

  const onSearchHandler = async (params: SearchParams) => {
    const commits = await fetchCommits(params);
    setCommits(commits);
  };

  const onFetchBranches = async (params: SearchParams) => {
    const branches = await fetchBranches(params);
    setBranches(branches);
  };

  return (
    <div className="flex flex-col items-center mx-auto p-4 min-w-[500px]">
      <SearchMenu
        onSearch={onSearchHandler}
        onFetchBranches={onFetchBranches}
        branches={branches}
      />
      <CommitList commits={commits} />
    </div>
  );
}

export default App;
