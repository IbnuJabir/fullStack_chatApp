# Fullstack-Desktop-ChatApp

## Overview

Fullstack-Desktop-ChatApp is a full-fledged desktop chat application built using React for the frontend and Firebase for the backend. This application allows users to sign up, log in, send and receive messages in real-time. It leverages Firebase's Firestore for database management and authentication for user management. The app is designed to be responsive and user-friendly, providing a seamless chat experience.

## Features

- **User Authentication**: Sign up and log in using Firebase Authentication.
- **Real-time Messaging**: Send and receive messages instantly.
- **User Presence**: Display online/offline status of users.
- **Persistent Chat History**: Store and retrieve chat history using Firebase Firestore.
- **Profile Management**: Users can update their profile information.
- **Notifications**: Real-time notifications for new messages.

## Technologies Used

- **Frontend**: React, CSS, Material-UI
- **Backend**: Firebase Firestore, Firebase Authentication
- **Deployment**: Electron (for desktop app)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- Firebase account with a Firestore database and Authentication enabled
- Firebase configuration file

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**
   ```sh
      git clone https://github.com/IbnuJabir/fullStack_chatApp.git
   cd fullStack_chatApp
      ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. Set up Firebase
   - Go to your Firebase console and create a new project.
   - Enable Firestore and Authentication (Email/Password provider).
   - Copy your Firebase configuration and replace the contents of src/firebaseConfig.js with your configuration details.

4. **Run the application**
   ```sh
   npm start
   ```
   
5. **Package the application (for desktop)**
   ```sh
   npm run electron:build
   ```
   

## Configuration

In the src/firebaseConfig.js file, replace the placeholders with your actual Firebase project configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

export default firebaseConfig;
```

export default firebaseConfig;

## Usage

1. Sign Up: Create a new account using the sign-up form.
2. Log In: Log in using your credentials.
3. Chat: Start a new chat or continue an existing conversation. Messages are sent and received in real-time.
4. Profile Management: Update your profile information from the profile section.
5. Notifications: Receive real-time notifications for new messages.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature/your-feature).
6. Open a pull request.

## Contact

If you have any questions, feel free to reach out:

- Email: kedirjabir12@gmail.com
- GitHub: [IbnuJabir](https://github.com/IbnuJabir)

---

Thank you for using Fullstack-Desktop-ChatApp! Happy chatting!
