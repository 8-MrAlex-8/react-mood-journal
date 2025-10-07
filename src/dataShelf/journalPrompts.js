const prompts = [
    "What's on your mind today?",
    "Got something to say? Type it here!",
    "Share your thoughts…",
    "What are you thinking about right now?",
    "Start a new idea — just type below.",
    "Say something! Don't be shy.",
    "Got an insight or story to tell?",
    "Drop your thoughts — make it real.",
    "What's running through your head?",
    "Tell us what's happening!",
    "Ready to share your take?",
    "Add your voice to the conversation.",
    "Let your thoughts flow…",
    "Speak your mind — we're listening.",
    "Your turn. What do you think?",
    "Contribute your piece to the puzzle.",
    "Got an idea worth sharing?",
    "How do you feel about this?",
    "Write something — anything!",
    "Launch your thoughts into the world!"
];

const randomIndex = Math.floor(Math.random() * prompts.length);
const journalPrompt = prompts[randomIndex];

export default journalPrompt;


