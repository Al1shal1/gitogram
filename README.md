# Gitogram

A GitHub-powered Vue.js application for exploring repositories, starred projects, and GitHub trending. Auth via **GitHub OAuth App**.

## 🔗 Live Demo

[https://gitogram-three.vercel.app](https://gitogram-three.vercel.app)

## 🧩 Features

- 🔐 GitHub token-based authentication
- 📁 View your repositories and starred projects
- 🚀 Explore GitHub trending repositories
- 📦 Centralized state management with Vuex
- ⚙️ Routing with Vue Router (SPA / hash mode)
- 💡 Local caching of user data
- 🧪 Unit testing with `vue-test-utils`
- 🌐 Deployment on Vercel with custom build pipeline

## 🛠 Tech Stack

- **Vue.js 2** with Vue CLI
- **Vue Router** – hash mode SPA
- **Vuex** – state management
- **GitHub REST API**
- **SASS** – custom styling
- **Vercel** – deployment
- **Jest** / `vue-test-utils` – unit testing

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Al1shal1/gitogram.git
cd gitogram

# Install dependencies
npm install

# Add your GitHub personal access token to .env.local (see below)

# Run in dev mode
npm run serve
```

## 🔑 GitHub OAuth Credentials

To run the app locally, you need to create a GitHub OAuth App:

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new **OAuth App**
3. Set the following:
   - **Homepage URL**: `http://localhost:8080`
   - **Authorization callback URL**: `http://localhost:8080`
4. After creating the app, copy the **Client ID** and **Client Secret**

Add them to a `.env.local` file:

```ini
VUE_APP_CLIENT_ID=your_github_client_id
VUE_APP_CLIENT_SECRET=your_github_client_secret
```

## 📦 Build for production
```bash
npm run build
```

