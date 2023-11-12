export interface GitHubCommit {
  url: string;
  sha: string;
  node_id: string;
  html_url: string;
  comments_url: string;
  commit: CommitDetails;
  author: GitHubUser;
  committer: GitHubUser;
  parents: Parent[];
}

export interface CommitDetails {
  url: string;
  author: CommitUser;
  committer: CommitUser;
  message: string;
  tree: Tree;
  comment_count: number;
  verification: Verification;
}

export interface CommitUser {
  name: string;
  email: string;
  date: string;
}

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Tree {
  url: string;
  sha: string;
}

export interface Verification {
  verified: boolean;
  reason: string;
  signature: string | null;
  payload: string | null;
}

export interface Parent {
  url: string;
  sha: string;
}

export interface GitHubBranch {
  name: string;
  commit: Commit;
  protected: boolean;
  protection?: BranchProtection;
  protection_url: string;
}

export interface Commit {
  sha: string;
  url: string;
}

export interface BranchProtection {
  required_status_checks: RequiredStatusChecks;
}

export interface RequiredStatusChecks {
  enforcement_level: string;
  contexts: string[];
}
