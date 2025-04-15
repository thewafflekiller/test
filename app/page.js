// File: app/page.js
import Link from 'next/link';

export default function HomePage() {
    return (
        <div>
            <h1>Welcome</h1>
            {/* This link will immediately take the user to your actual page */}
            <p>
                <Link href="/main.html">Go to Study Tracker</Link>
            </p>

            {/* Optional: Add an automatic redirect after a delay or immediately */}
            {/* You could add JavaScript here later to automatically redirect */}
        </div>
    );
}

// Optional: You might want specific metadata for this temporary page
export const metadata = {
    title: 'Loading Study Tracker...',
};