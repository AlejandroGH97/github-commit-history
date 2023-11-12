export const mockGitHubCommits = [
  {
    url: 'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
    sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
    node_id:
      'MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==',
    html_url:
      'https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e',
    comments_url:
      'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments',
    commit: {
      url: 'https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
      author: {
        name: 'Monalisa Octocat',
        email: 'support@github.com',
        date: '2011-04-14T16:00:49Z',
      },
      committer: {
        name: 'Monalisa Octocat',
        email: 'support@github.com',
        date: '2011-04-14T16:00:49Z',
      },
      message: 'Fix all the bugs',
      tree: {
        url: 'https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e',
        sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
      },
      comment_count: 0,
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null,
      },
    },
    author: {
      login: 'octocat',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url:
        'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      repos_url: 'https://api.github.com/users/octocat/repos',
      events_url: 'https://api.github.com/users/octocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: false,
    },
    committer: {
      login: 'octocat',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url:
        'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      repos_url: 'https://api.github.com/users/octocat/repos',
      events_url: 'https://api.github.com/users/octocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: false,
    },
    parents: [
      {
        url: 'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
        sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
      },
    ],
  },
];

export const mockGitHubBranches = [
  {
    name: 'dev',
    commit: {
      sha: 'ac9924b6c1372b781e4d4e3ae13bfb75597910e9',
      url: 'https://api.github.com/repos/AlejandroGH97/github-commit-history/commits/ac9924b6c1372b781e4d4e3ae13bfb75597910e9',
    },
    protected: true,
    protection: {
      enabled: true,
      required_status_checks: {
        enforcement_level: 'off',
        contexts: [],
        checks: [],
      },
    },
    protection_url:
      'https://api.github.com/repos/AlejandroGH97/github-commit-history/branches/dev/protection',
  },
  {
    name: 'feat/api-endpoints',
    commit: {
      sha: 'bf420e60ff9362e5cc585bfb078082972d3fc136',
      url: 'https://api.github.com/repos/AlejandroGH97/github-commit-history/commits/bf420e60ff9362e5cc585bfb078082972d3fc136',
    },
    protected: false,
    protection: {
      enabled: false,
      required_status_checks: {
        enforcement_level: 'off',
        contexts: [],
        checks: [],
      },
    },
    protection_url:
      'https://api.github.com/repos/AlejandroGH97/github-commit-history/branches/feat/api-endpoints/protection',
  },
  {
    name: 'feat/frontend-commits-view',
    commit: {
      sha: 'e46c59611cf27df520a6af4707024cc857ed0cf4',
      url: 'https://api.github.com/repos/AlejandroGH97/github-commit-history/commits/e46c59611cf27df520a6af4707024cc857ed0cf4',
    },
    protected: false,
    protection: {
      enabled: false,
      required_status_checks: {
        enforcement_level: 'off',
        contexts: [],
        checks: [],
      },
    },
    protection_url:
      'https://api.github.com/repos/AlejandroGH97/github-commit-history/branches/feat/frontend-commits-view/protection',
  },
  {
    name: 'main',
    commit: {
      sha: 'a47af28cddf9da0924fa3611a2208788bc4a13d3',
      url: 'https://api.github.com/repos/AlejandroGH97/github-commit-history/commits/a47af28cddf9da0924fa3611a2208788bc4a13d3',
    },
    protected: false,
    protection: {
      enabled: false,
      required_status_checks: {
        enforcement_level: 'off',
        contexts: [],
        checks: [],
      },
    },
    protection_url:
      'https://api.github.com/repos/AlejandroGH97/github-commit-history/branches/main/protection',
  },
];
