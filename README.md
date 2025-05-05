# React Face Auth

React Face Auth is a facial recognition-based authentication web application built with React and face-api.js. It provides a secure and efficient way to authenticate users by analyzing their facial features. The application features a clean, custom CSS-styled interface, replacing utility-first frameworks like Tailwind CSS for a more tailored styling approach.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Features
- **Facial Recognition Authentication**: Uses face-api.js to verify users based on facial features.
- **User Selection**: Allows selection of predefined dummy users or uploading custom user images.
- **Responsive Design**: Custom CSS ensures a consistent experience across devices.
- **Protected Routes**: Restricts access to authenticated users only.
- **Error Handling**: Displays clear error messages for failed authentications or missing profile images.

## Technologies
- **React**: Frontend JavaScript library for building user interfaces.
- **face-api.js**: Machine learning library for facial recognition in the browser.
- **Headless UI**: Unstyled, accessible UI components for radio groups and other interactions.
- **React Router**: Declarative routing for single-page applications.
- **Custom CSS**: Hand-crafted styles in `styles.css` for complete control over the UI.
- **Vite**: Build tool for fast development and production builds (assumed; adjust if using Create React App or another tool).

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/BilalGumus/react-face-auth.git
   cd react-face-auth
   ```

2. **Install Dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:
   ```bash
   npm install
   ```

3. **Set Up Models**:
   Place the face-api.js model files in the `public/models` directory. You can download them from the [face-api.js repository](https://github.com/justadudewhohacks/face-api.js/tree/master/weights) or use a CDN (update the `uri` in `Login.jsx` if using a CDN).

4. **Add Temporary Accounts**:
   Place dummy user images in the `public/temp-accounts` directory, structured as `public/temp-accounts/[user-id]/[image-name].jpg` (e.g., `public/temp-accounts/374ed1e4-481b-4074-a26e-6137657c6e35/1.jpg`).

5. **Run the Application**:
   Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the port specified by your build tool) in your browser.

## Usage
1. **Home Page**: View the welcome message and click "Log In" to proceed.
2. **User Selection**:
   - Choose a dummy user from the list or upload a custom image (PNG, JPG, or JPEG).
   - Click "Continue" to proceed to authentication.
3. **Face Authentication**:
   - Allow webcam access when prompted.
   - The app will scan your face and compare it to the selected user's image.
   - On successful recognition, you'll be redirected to the protected page after a 5-second countdown.
   - If recognition fails or no profile image is found, an error message is displayed.
4. **Protected Page**: View user details and log out to return to the home page.
5. **Footer**: Links to the creator's GitHub profile.

## Project Structure
```
react-face-auth/
├── public/
│   ├── models/                 # face-api.js model files
│   ├── temp-accounts/          # Dummy user images
│   └── ...                     # Other public assets
├── src/
│   ├── assets/
│   │   ├── auth-idle.svg       # Loading icon
│   │   └── auth-face.svg       # Face scan icon
│   ├── components/
│   │   ├── Footer.jsx          # Footer with creator credit
│   │   └── User.jsx            # User selection radio option
│   ├── Home.jsx                # Home page with app description
│   ├── Layout.jsx              # Layout with routing logic
│   ├── Login.jsx               # Face authentication page
│   ├── Protected.jsx           # Protected page for authenticated users
│   ├── UserSelect.jsx          # User selection page
│   └── ...                     # Other source files (e.g., App.jsx, main.jsx)
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the project's coding style and includes tests where applicable.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits
Created by [Sarthak Singh](https://github.com/sarthak03dot) with 💙.