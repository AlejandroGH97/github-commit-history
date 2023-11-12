import { GitHubCommit } from "../types/commit";
import CommitCard from "./commitCard";

interface CommitListProps {
  commits: GitHubCommit[];
}

const CommitList: React.FC<CommitListProps> = ({ commits }): JSX.Element => {
  return (
    <div className="flex flex-col items-stretch w-full min-w-[500px] max-w-[750px]">
      {commits.map((commit) => (
        <CommitCard key={commit.sha} commit={commit} />
      ))}
    </div>
  );
};

export default CommitList;
