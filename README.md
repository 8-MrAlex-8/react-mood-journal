# React Mood Journal

A beautiful, interactive mood journaling application built with React and Vite. Track your emotions and thoughts with an intuitive interface that adapts to your mood.

## Features

- **Mood Selection**: Choose from 5 emotions (Happy, Sad, Angry, Anxious, Excited) with interactive buttons and emoticons
- **Dynamic UI**: Background colors and input fields change based on your selected mood
- **Journal Entries**: Create journal entries with titles and body text
- **Random Prompts**: Get inspired with randomly selected journal prompts
- **Live Date/Time**: See the current date displayed in real-time
- **Entry Management**: View all your journal entries in a sidebar with delete functionality
- **Local Storage**: All entries are automatically saved to your browser's local storage
- **Responsive Design**: Works seamlessly on both desktop and mobile devices

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-mood-journal
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
react-mood-journal/
├── src/
│   ├── components/
│   │   ├── JournalBody.jsx      # Main journaling interface
│   │   ├── JournalHeading.jsx   # Header with date display
│   │   ├── JournalList.jsx      # Sidebar with all entries
│   │   ├── LiveDateTime.jsx     # Live updating date component
│   │   ├── MoodBar.jsx          # Mood selection container
│   │   ├── MoodButton.jsx       # Individual mood button
│   │   ├── TextAreaGroup.jsx    # Form for journal entry
│   │   └── TopNav.jsx           # Navigation bar
│   ├── dataShelf/
│   │   ├── buttonData.js        # Mood button configurations
│   │   └── journalPrompts.js    # Random journal prompts
│   ├── App.jsx                  # Main app component
│   ├── JournalSection.jsx       # Journal section container
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
└── vite.config.js              # Vite configuration
```

## How It Works

1. **Select a Mood**: Click on one of the mood buttons (Happy, Sad, Angry, Anxious, or Excited)
2. **UI Adaptation**: The background color and input fields change to match your selected mood
3. **Write Your Entry**: Enter a title and write your thoughts in the text area (prompted by random journal prompts)
4. **Submit**: Click the submit button to save your entry
5. **View Entries**: All your entries appear in the sidebar on desktop, showing title, preview, date, and emotion
6. **Manage Entries**: Delete entries by clicking the delete button (with confirmation)

## Data Persistence

All journal entries are automatically saved to your browser's `localStorage` under the key `journalEntries`. Your entries persist between browser sessions but are specific to the browser and device you're using.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is private and not licensed for public use.

---

Made with ❤️ by Lanz Alexander Malto using Vite and React.
