import React, { useState } from 'react';

interface SearchParams {
  repo: string;
  branch: string;
  author: string;
  page: number;
  limit: number;
}

interface SearchMenuProps {
  onSearch: (params: SearchParams) => void;
}

const SearchMenu: React.FC<SearchMenuProps> = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    repo: '',
    branch: '',
    author: '',
    page: 1,
    limit: 10,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: type === 'number' ? parseInt(value) || 1 : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 mb-5 p-4 bg-gray-700 rounded shadow-lg min-w-[500px]"
    >
      <div className="flex flex-col">
        <label className="text-left">Repository:</label>
        <input
          autoComplete="off"
          required
          type="text"
          name="repo"
          value={searchParams.repo}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Enter repository"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">Branch (optional):</label>
        <input
          autoComplete="off"
          type="text"
          name="branch"
          value={searchParams.branch}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Enter branch"
        />
      </div>

      <div className="flex space-x-2">
        <div className="flex flex-col w-1/4">
          <label className="text-left">Limit:</label>
          <input
            type="number"
            name="limit"
            value={searchParams.limit}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col w-1/4">
          <label className="text-left">Page:</label>
          <input
            type="number"
            name="page"
            value={searchParams.page}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-left">Author:</label>
          <input
            autoComplete="off"
            required
            type="text"
            name="author"
            value={searchParams.author}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter author"
          />
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
