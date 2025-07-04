# Gaming Moments v2.0

A fullstack social media application for gamers to share their epic gaming moments! Built with modern web technologies, Gaming Moments v2.0 allows users to upload videos, interact with content, and discover amazing gaming content from the community.

## 🎮 Features

- **Video Upload & Sharing**: Upload gaming videos with captions and categorize them by gaming genres
- **Social Interactions**: Like and comment on videos from other users
- **Google OAuth Authentication**: Secure login using Google OAuth 2.0
- **User Profiles**: View user profiles showcasing uploaded videos and liked content
- **Content Discovery**: 
  - Browse videos by gaming categories (RPG, MMORPG, Competitive, Racing, etc.)
  - Search for users and videos
  - Discover suggested user accounts
- **Real-time Video Player**: Interactive video player with play/pause and mute controls
- **Responsive Design**: Optimized for desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **Next.js 12.1.6** - React framework for production
- **React 18.1.0** - JavaScript library for building user interfaces
- **TypeScript 4.8.4** - Static type checking
- **Tailwind CSS 3.2.1** - Utility-first CSS framework
- **React Icons 4.3.1** - Popular icon library

### Backend & Database
- **Sanity CMS** - Headless CMS for content management
- **Sanity Client 3.3.0** - Client for Sanity API

### State Management & Authentication
- **Zustand 4.0.0** - Lightweight state management
- **Google OAuth** - Authentication via @react-oauth/google
- **JWT Decode** - JWT token decoding

### Other Tools
- **Axios** - HTTP client for API requests
- **UUID** - Unique identifier generation

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- Google OAuth 2.0 credentials
- Sanity account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LoganHosoda/gaming-moments-v2.git
   cd gaming-moments-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Sanity backend**
   ```bash
   cd sanity-backend
   npm install
   ```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_TOKEN=your_sanity_token_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_API_TOKEN=your_google_oauth_client_id
```

### Sanity Setup

1. **Configure Sanity project**
   - The project uses Sanity project ID: `0ypgszpn`
   - Dataset: `production`
   - Update `sanity-backend/sanity.json` with your project details if needed

2. **Deploy Sanity schemas**
   ```bash
   cd sanity-backend
   npm run start
   ```

3. **Set up Sanity Studio**
   - Access your Sanity Studio at `http://localhost:3333`
   - Configure your content schemas (already included in the project)

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add your domain to authorized origins
6. Copy the client ID to your environment variables

### Running the Application

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Start Sanity Studio (in a separate terminal)**
   ```bash
   cd sanity-backend
   npm run start
   ```

3. **Access the application**
   - Frontend: `http://localhost:3000`
   - Sanity Studio: `http://localhost:3333`

## 📁 Project Structure

```
gaming-moments-v2/
├── components/           # React components
│   ├── Comments.tsx     # Comment system
│   ├── VideoCard.tsx    # Video display component
│   ├── Navbar.tsx       # Navigation bar
│   └── ...
├── pages/               # Next.js pages
│   ├── api/            # API routes
│   │   ├── auth.ts     # Authentication endpoint
│   │   ├── post/       # Video post endpoints
│   │   └── ...
│   ├── detail/         # Video detail pages
│   ├── profile/        # User profile pages
│   └── upload.tsx      # Video upload page
├── sanity-backend/     # Sanity CMS configuration
│   ├── schemas/        # Content schemas
│   │   ├── post.js     # Video post schema
│   │   ├── user.js     # User schema
│   │   └── comment.js  # Comment schema
│   └── sanity.json     # Sanity configuration
├── store/
│   └── authStore.ts    # Zustand auth store
├── styles/
│   └── globals.css     # Global styles
├── types.d.ts          # TypeScript type definitions
└── utils/
    ├── client.ts       # Sanity client configuration
    ├── constants.tsx   # App constants and categories
    └── index.ts        # Utility functions
```

## 🎯 Gaming Categories

The application supports the following gaming categories:

- **Game Development** - Development and coding content
- **Competitive** - Esports and competitive gaming
- **RPG** - Role-playing games
- **MMORPG** - Massively multiplayer online RPGs
- **Racing** - Racing and driving games
- **Farming** - Farming and simulation games
- **Dark Souls** - Souls-like games
- **Shooter** - First-person and third-person shooters
- **Funny Moments** - Comedy and entertaining content

## 🔒 Authentication

The application uses Google OAuth 2.0 for secure authentication. Users can:

- Sign in with their Google account
- Access personalized features
- Upload and manage their content
- Interact with other users' content

## 📱 API Endpoints

### Authentication
- `POST /api/auth` - Create or authenticate user

### Posts
- `GET /api/post` - Get all posts
- `GET /api/post/[id]` - Get specific post
- `POST /api/post` - Create new post

### Users
- `GET /api/users` - Get all users
- `GET /api/profile/[id]` - Get user profile

### Discovery
- `GET /api/discover/[topic]` - Get posts by topic
- `GET /api/search/[searchTerm]` - Search posts and users

### Interactions
- `PUT /api/like` - Like/unlike posts

## 🧪 Development

### Building for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

### Type Checking

The project uses TypeScript for type safety. Make sure to run type checking:

```bash
npx tsc --noEmit
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design
- Add proper error handling
- Write meaningful commit messages

## 📝 License

This project is licensed under the UNLICENSED License - see the package.json file for details.

## 👨‍💻 Author

**Logan Hosoda** - [sulsalogan@gmail.com](mailto:sulsalogan@gmail.com)

## 🔗 Links

- [Repository](https://github.com/LoganHosoda/gaming-moments-v2)
- [Sanity CMS](https://sanity.io/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)

## 🚨 Known Issues

- TypeScript build errors are currently ignored (configured in next.config.js)
- Some image domains may need to be added to Next.js config for external images

## 🔮 Future Enhancements

- Real-time notifications
- Advanced video editing features
- Mobile app development
- Enhanced search and filtering
- User following/follower system
- Video analytics and insights