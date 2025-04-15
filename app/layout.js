// File: app/layout.js

// If you have a global CSS file you want to load everywhere,
// you can import it here like this (adjust the path if needed):
// import './globals.css';

// This defines the basic HTML structure for all pages
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        {/* {children} is where your actual page content will be inserted */}
        {children}
        </body>
        </html>
    );
}

// Optional: Add some basic info for the browser tab title etc.
// You can change 'My Study Tracker' later.
export const metadata = {
    title: 'My Study Tracker',
    description: 'Tracking my study progress',
};