import { GitHubBranch } from "../types/branches";
import { GitHubCommit, SearchParams } from "../types/commit";

export const fetchCommits = async (params: SearchParams) => {
  const baseURL: string = import.meta.env.VITE_BACKEND_URL;

  const { author, repo, branch, page, limit } = params;
  if (!author || !repo) {
    return [];
  }
  const query = new URLSearchParams({
    branch,
    page: page.toString(),
    limit: limit.toString(),
  });
  const response = await fetch(
    `${baseURL}/github/repos/${author}/${repo}/commits?${query}`
  );
  if (!response.ok) {
    return [];
  }

  const commits: GitHubCommit[] = await response.json();

  return commits;
};

export const fetchBranches = async (params: SearchParams) => {
  const baseURL: string = import.meta.env.VITE_BACKEND_URL;

  const { author, repo } = params;
  if (!author || !repo) {
    return [];
  }
  const response = await fetch(
    `${baseURL}/github/repos/${author}/${repo}/branches`
  );
  if (!response.ok) {
    return [];
  }

  const branches: GitHubBranch[] = await response.json();

  return branches;
};
