require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Quote Schema (matching the one in app.js)
const QuoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  person: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Quote = mongoose.model('Quote', QuoteSchema);

// Array of 50 quotes to seed
const quotes = [
  {
    text: "Be the change you wish to see in the world",
    person: "Mahatma Gandhi"
  },
  {
    text: "Stay hungry, stay foolish",
    person: "Steve Jobs"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work",
    person: "Thomas Edison"
  },
  {
    text: "The only way to do great work is to love what you do",
    person: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower",
    person: "Steve Jobs"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams",
    person: "Eleanor Roosevelt"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts",
    person: "Winston Churchill"
  },
  {
    text: "Life is what happens when you're busy making other plans",
    person: "John Lennon"
  },
  {
    text: "The only impossible journey is the one you never begin",
    person: "Tony Robbins"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop",
    person: "Confucius"
  },
  {
    text: "Everything you've ever wanted is on the other side of fear",
    person: "George Addair"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now",
    person: "Chinese Proverb"
  },
  {
    text: "The only person you are destined to become is the person you decide to be",
    person: "Ralph Waldo Emerson"
  },
  {
    text: "We may encounter many defeats but we must not be defeated",
    person: "Maya Angelou"
  },
  {
    text: "What you do speaks so loudly that I cannot hear what you say",
    person: "Ralph Waldo Emerson"
  },
  {
    text: "Believe you can and you're halfway there",
    person: "Theodore Roosevelt"
  },
  {
    text: "Everything has beauty, but not everyone can see",
    person: "Confucius"
  },
  {
    text: "How wonderful it is that nobody need wait a single moment before starting to improve the world",
    person: "Anne Frank"
  },
  {
    text: "When I let go of what I am, I become what I might be",
    person: "Lao Tzu"
  },
  {
    text: "Do what you can, with what you have, where you are",
    person: "Theodore Roosevelt"
  },
  {
    text: "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them",
    person: "William Shakespeare"
  },
  {
    text: "The best revenge is massive success",
    person: "Frank Sinatra"
  },
  {
    text: "Whether you think you can or you think you can't, you're right",
    person: "Henry Ford"
  },
  {
    text: "I have learned over the years that when one's mind is made up, this diminishes fear",
    person: "Rosa Parks"
  },
  {
    text: "If you look at what you have in life, you'll always have more",
    person: "Oprah Winfrey"
  },
  {
    text: "The journey of a thousand miles begins with one step",
    person: "Lao Tzu"
  },
  {
    text: "The mind is everything. What you think you become",
    person: "Buddha"
  },
  {
    text: "The best dreams happen when you're awake",
    person: "Cherie Gilderbloom"
  },
  {
    text: "Once you choose hope, anything's possible",
    person: "Christopher Reeve"
  },
  {
    text: "Try not to become a person of success, but rather try to become a person of value",
    person: "Albert Einstein"
  },
  {
    text: "The only way to do great work is to love what you do",
    person: "Steve Jobs"
  },
  {
    text: "Change your thoughts and you change your world",
    person: "Norman Vincent Peale"
  },
  {
    text: "All our dreams can come true if we have the courage to pursue them",
    person: "Walt Disney"
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm",
    person: "Winston Churchill"
  },
  {
    text: "What we think, we become",
    person: "Buddha"
  },
  {
    text: "If you want to lift yourself up, lift up someone else",
    person: "Booker T. Washington"
  },
  {
    text: "You miss 100% of the shots you don't take",
    person: "Wayne Gretzky"
  },
  {
    text: "The power of imagination makes us infinite",
    person: "John Muir"
  },
  {
    text: "The harder I work, the luckier I get",
    person: "Gary Player"
  },
  {
    text: "The secret of getting ahead is getting started",
    person: "Mark Twain"
  },
  {
    text: "If you're going through hell, keep going",
    person: "Winston Churchill"
  },
  {
    text: "The future depends on what you do today",
    person: "Mahatma Gandhi"
  },
  {
    text: "No one can make you feel inferior without your consent",
    person: "Eleanor Roosevelt"
  },
  {
    text: "Life is either a daring adventure or nothing at all",
    person: "Helen Keller"
  },
  {
    text: "Those who dare to fail miserably can achieve greatly",
    person: "John F. Kennedy"
  },
  {
    text: "It is never too late to be what you might have been",
    person: "George Eliot"
  },
  {
    text: "Do not wait to strike till the iron is hot; but make it hot by striking",
    person: "William Butler Yeats"
  },
  {
    text: "The purpose of our lives is to be happy",
    person: "Dalai Lama"
  },
  {
    text: "Don't count the days, make the days count",
    person: "Muhammad Ali"
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us",
    person: "Ralph Waldo Emerson"
  },
  {
    text: "Victory has a thousand fathers, but defeat is an orphan",
    person: "John F. Kennedy"
  }
];

// Seed function
async function seedQuotes() {
  try {
    // Clear existing quotes
    await Quote.deleteMany({});
    console.log('Cleared existing quotes');

    // Insert new quotes
    const insertedQuotes = await Quote.insertMany(quotes);
    console.log(`Successfully seeded ${insertedQuotes.length} quotes`);

    // Disconnect from database
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');

  } catch (error) {
    console.error('Error seeding quotes:', error);
    await mongoose.disconnect();
  }
}

// Run the seed function
seedQuotes(); 