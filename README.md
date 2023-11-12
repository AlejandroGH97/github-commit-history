# GitHub Commit History


### Prerequisites

Have Node.js installed with version 18 and up and npm with version 9.6 and up. You can check your version for each with the following commands:

```bash
node -v
npm -v
```

### Installing

```bash
# Clone the repository
git clone https://github.com/AlejandroGH97/github-commit-history

# Navigate to the repository directory
cd github-commit-history

# Install dependencies for the server
cd backend
npm install

# In a sepparate terminal window, install dependencies for the client
cd frontend
npm install
```

Your app should now be running on [http://localhost:5173](http://localhost:5173).

## Environment Setup

To run this project, you will need to add the following environment variables to your `.env` files in both the frontend and backend directories.

### Backend Environment Setup

1. **GITHUB_TOKEN**: This token is used to authenticate requests to the GitHub API.

    - To generate a GitHub token, follow these steps:
        - Visit [GitHub Tokens Page](https://github.com/settings/tokens)
        - Click on `Generate new token`.
        - Give your token a name, select the scopes or permissions you want to grant this token (for fetching repositories, basic read access is sufficient).
        - Click `Generate token` at the bottom.
    - Once you have your token, create a `.env` file in the root of the backend directory and add the following line:
        ```bash
        GITHUB_TOKEN=your_github_token_here
        ```

### Frontend Environment Setup

For the frontend, create a `.env` file in the root of the frontend directory and add the following line:

```bash
VITE_BACKEND_URL=http://localhost:3000
```

This will set the URL of the backend server for the frontend to communicate with.

### Running the tests

```bash
# Backend tests
cd backend
npm run test
```

### Running the app

In sepparate terminal windows, navigate to the backend and frontend directories.

```bash
# Build the server
npm run build
# Run the backend server
npm run start:prod

# Run the frontend client
npm run dev
```

## Built With

* [React](https://reactjs.org/) - The web framework used
* [NestJS](https://nestjs.com/) - The server framework used
* [Vite](https://vitejs.dev/) - Build tool
* [Tailwind CSS](https://tailwindcss.com/) - Styling
