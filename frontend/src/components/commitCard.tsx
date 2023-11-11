import React from 'react';
import { GitHubCommit } from '../types/commit';

interface CommitCardProps {
  commit: GitHubCommit;
}

const CommitCard: React.FC<CommitCardProps> = ({ commit }) => {
  const hasAuthorInfo = commit.author !== null;
  const authorName = hasAuthorInfo
    ? commit.author.login
    : commit.commit.author.name;
  const authorUrl = hasAuthorInfo ? commit.author.html_url : '';
  const commitDate = new Date(commit.commit.author.date);

  return (
    <div className="w-full flex flex-col justify-between bg-gray-700 hover:bg-gray-600 border border-gray-500 p-4 rounded shadow-lg mb-4 transition duration-300">
      <a
        href={commit.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-lg text-white hover:underline text-left break w-fit"
      >
        {commit.commit.message.split('\n')[0]}
      </a>
      <div className="flex flex-row items-center justify-between">
        {hasAuthorInfo ? (
          <div className="flex items-center h-10">
            <img
              src={commit.author.avatar_url}
              alt={authorName}
              className="w-8 h-8 rounded-full mr-3"
            />
            <a
              href={authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold  hover:underline`}
            >
              {authorName}
            </a>
          </div>
        ) : (
          <div className="font-bold self-center">{authorName}</div>
        )}

        <p className="text-sm text-gray-300">
          Date: {commitDate.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default CommitCard;
