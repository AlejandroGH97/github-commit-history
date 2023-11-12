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
