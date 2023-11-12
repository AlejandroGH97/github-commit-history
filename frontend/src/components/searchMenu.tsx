import React, { useState } from "react";
import { GitHubBranch } from "../types/branches";

interface SearchParams {
  repo: string;
  branch: string;
  author: string;
  page: number;
  limit: number;
}

interface SearchMenuProps {
  onSearch: (params: SearchParams) => void;
  branches: GitHubBranch[];
  onFetchBranches: (params: SearchParams) => void;
}

const SearchMenu: React.FC<SearchMenuProps> = ({
  onSearch,
  onFetchBranches,
  branches = [],
}) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    repo: "",
    branch: "",
    author: "",
    page: 1,
    limit: 10,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: type === "number" ? parseInt(value) || 1 : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  const handleFetchBranches = () => {
    onFetchBranches(searchParams);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 mb-5 p-4 bg-gray-700 rounded shadow-lg min-w-[500px]"
    >
      <div className="flex flex-col">
        <label htmlFor="repo" className="text-left">
          Repository:
        </label>
        <input
          required
          type="text"
          id="repo"
          name="repo"
          value={searchParams.repo}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Enter repository"
        />
      </div>
      <div className="flex space-x-2">
        <div className="flex flex-col w-1/2">
          <label htmlFor="author" className="text-left">
            Author:
          </label>
          <input
            required
            type="text"
            id="author"
            name="author"
            value={searchParams.author}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter author"
          />
        </div>
        <div className="flex flex-col w-1/4">
          <label htmlFor="limit" className="text-left">
            Limit:
          </label>
          <input
            type="number"
            id="limit"
            name="limit"
            value={searchParams.limit}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col w-1/4">
          <label htmlFor="page" className="text-left">
            Page:
          </label>
          <input
            type="number"
            id="page"
            name="page"
            value={searchParams.page}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="branch" className="text-left">
          Branch (optional):
        </label>
        <div className="flex space-x-2">
          <div className="flex w-full">
            <input
              type="text"
              id="branch"
              name="branch"
              list="branch-list"
              value={searchParams.branch}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="Enter branch"
            />
            <datalist id="branch-list">
              {branches.map((branch, index) => (
                <option key={index} value={branch.name} />
              ))}
            </datalist>
          </div>
          <div className="flex w-24">
            <button
              type="button"
              onClick={handleFetchBranches}
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Fetch
            </button>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchMenu;
