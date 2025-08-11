# CCTV Dashboard React App

A modern, responsive React dashboard for CCTV monitoring and management systems. Built with React 18, Tailwind CSS, and Lucide React icons.

## ✨ Features

- **Real-time Dashboard**: Live monitoring of CCTV cameras and system status
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Camera Management**: View camera status, locations, and recording information
- **Motion Detection**: Track and display motion detection events
- **Alert System**: Real-time alerts and notifications
- **System Analytics**: Comprehensive system statistics and health monitoring
- **Modern UI**: Clean, professional interface with smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone and navigate to the project**
   ```bash
   cd react-cctv-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

The build files will be created in the `build/` directory.

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Choose your team/account
   - Confirm deployment settings

### Option 2: GitHub Integration

1. **Push your code to GitHub**
2. **Go to [vercel.com](https://vercel.com)**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Deploy automatically**

### Option 3: Drag & Drop

1. **Build your project**: `npm run build`
2. **Go to [vercel.com](https://vercel.com)**
3. **Drag the `build` folder to deploy**

## 📁 Project Structure

```
react-cctv-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.js          # Main dashboard component
│   │   ├── Header.js             # Top navigation header
│   │   ├── Sidebar.js            # Left navigation sidebar
│   │   ├── StatsCards.js         # Statistics cards grid
│   │   ├── CameraGrid.js         # Camera display grid
│   │   ├── SystemStatus.js       # System health status
│   │   ├── RecentDetections.js   # Motion detection list
│   │   └── AlertsPanel.js        # Alerts and notifications
│   ├── context/
│   │   ├── CameraContext.js      # Camera state management
│   │   └── DetectionContext.js   # Detection data management
│   ├── App.js                    # Main app component
│   ├── index.js                  # App entry point
│   └── index.css                 # Global styles + Tailwind
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md
```

## 🎨 Customization

### Colors and Themes

Edit `tailwind.config.js` to customize:
- Color schemes
- Typography
- Spacing
- Animations

### Components

All components are modular and can be easily customized:
- Modify component logic in individual `.js` files
- Update styling using Tailwind classes
- Add new features by extending existing components

### Data Sources

Currently uses mock data. To connect real APIs:
1. Update context files (`CameraContext.js`, `DetectionContext.js`)
2. Replace mock data with API calls
3. Add error handling and loading states

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:
```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_WEBSOCKET_URL=ws://localhost:8000/ws
```

### Vercel Environment Variables

Set in Vercel dashboard:
- `REACT_APP_API_URL`: Your backend API endpoint
- `REACT_APP_WEBSOCKET_URL`: WebSocket connection URL

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (two column layout)
- **Desktop**: > 1024px (full three column layout)

## 🎯 Performance Features

- **Lazy Loading**: Components load only when needed
- **Optimized Images**: Placeholder images with lazy loading
- **Smooth Animations**: CSS transitions and hover effects
- **Efficient State Management**: React Context for global state
- **Minimal Re-renders**: Optimized component updates

## 🚨 Troubleshooting

### Common Issues

1. **Build fails on Vercel**
   - Check Node.js version compatibility
   - Verify all dependencies are in `package.json`
   - Check build script in `package.json`

2. **Styling not working**
   - Ensure Tailwind CSS is properly imported
   - Check `tailwind.config.js` content paths
   - Verify PostCSS configuration

3. **Component not rendering**
   - Check browser console for errors
   - Verify component imports and exports
   - Check React DevTools for component tree

### Development Tips

- Use React DevTools for debugging
- Check browser console for errors
- Verify all imports are correct
- Test responsive design on different screen sizes

## 🔒 Security Considerations

- **Environment Variables**: Never commit sensitive data
- **API Keys**: Store securely in Vercel environment variables
- **HTTPS**: Always use HTTPS in production
- **Input Validation**: Validate all user inputs
- **CORS**: Configure CORS properly for API calls

## 📈 Future Enhancements

- **Real-time Video Streaming**: WebRTC integration
- **User Authentication**: Login and role-based access
- **Database Integration**: Persistent data storage
- **Push Notifications**: Browser and mobile notifications
- **Advanced Analytics**: Charts and reporting
- **Mobile App**: React Native companion app

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the troubleshooting section
- Review the component documentation

---

**Built with ❤️ using React, Tailwind CSS, and Vercel**
