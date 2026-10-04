/**
 * =========================================================================
 * 🎀 BESTIE BIRTHDAY SURPRISE WEBSITE - PERSONALIZATION CONFIGURATION 🎀
 * =========================================================================
 * 
 * You can customize everything here!
 * 1. Name & Nicknames
 * 2. Photos (add/replace photos in public/images/bestie/ and public/images/us.jpg)
 * 3. Letter text
 * 4. Special moments and captions
 * =========================================================================
 */

export const BIRTHDAY_CONFIG = {
  // 🌸 1. HER DETAILS
  bestieName: "Anjali",
  bestieNickname: "Anjali 💗",
  senderName: "Hridesh",
  birthDateFormatted: "Today's Superstar ✨",

  // 🎵 2. MUSIC SETTINGS & PLAYLIST
  playlist: [
    {
      id: "haareya",
      title: "Haareya",
      movie: "Meri Pyaari Bindu",
      artist: "Arijit Singh",
      tagline: "“Main haara tujhpe... main haara tujhpe... ❤️”",
      src: "/audio/haareya.mp3",
      fallbackSrc: "/audio/bestie-song.mp3",
      icon: "🎵",
      themeColor: "#f43f5e",
    },
    {
      id: "titli",
      title: "Titli",
      movie: "Chennai Express",
      artist: "Chinmayi Sripaada",
      tagline: "“Bann ke titli dil uda uda... 🦋”",
      src: "/audio/titli.mp3",
      fallbackSrc: "/audio/titli.mp3",
      icon: "🦋",
      themeColor: "#ec4899",
    },
  ],

  // 🎀 3. HERO / BIRTHDAY REVEAL
  hero: {
    greeting: "Hey Anjali... 💗",
    subGreeting: "I made something special for you.",
    openSurpriseButton: "OPEN YOUR SURPRISE 🎁",
    headline: "HAPPY BIRTHDAY, ANJALI! 🎂💗",
    subheadline: "Today is all about you... yes, really!",
    heroImage: "/images/bestie/bestie1.jpg",
    heroCaption: "To Anjali — the girl who brings sunshine and chaotic energy everywhere she goes 🌸",
  },

  // 🎈 4. BALLOON POP GAME
  balloonGame: {
    heading: "A little challenge before your surprise... 👀",
    instruction: "Pop all the balloons! 🎈",
    words: [
      { text: "YOU", color: "#f472b6", delay: 0 },
      { text: "ARE", color: "#fb7185", delay: 0.1 },
      { text: "MY", color: "#ec4899", delay: 0.2 },
      { text: "BESTIE", color: "#db2777", delay: 0.3 },
      { text: "FOREVER ❤️", color: "#e11d48", delay: 0.4 },
    ],
    completionText: "“Okay... now you're ready for the real surprise. 🥹”",
    continueButton: "CONTINUE →",
  },

  // 📸 5. “THE GIRL BEHIND ALL THESE PHOTOS” (Scrapbook Gallery)
  gallery: {
    heading: "The Girl Behind All These Photos 🌸",
    subtitle: "A little collection of the person who makes life a hundred times brighter.",
    categories: [
      { id: "all", label: "✨ All Memories" },
      { id: "pretty", label: "🌸 Pretty Moments" },
      { id: "cute", label: "🎀 Cute Moments" },
      { id: "chaotic", label: "😂 Her Chaotic Side" },
      { id: "favorite", label: "🫶 My Favorites" },
    ],
    photos: [
      {
        id: 1,
        src: "/images/bestie/bestie1.jpg",
        title: "The Sunshine Smile 🌸",
        caption: "That radiant, effortless smile that lights up the entire room. Absolutely iconic.",
        category: "pretty",
        tag: "Pretty Moments",
        rotation: -3,
        tapeStyle: "left",
      },
      {
        id: 2,
        src: "/images/bestie/bestie2.jpg",
        title: "Hello Kitty & Braids 🎀",
        caption: "Peak cuteness overloaded! Don't let the innocent look fool you though.",
        category: "cute",
        tag: "Cute Moments",
        rotation: 3,
        tapeStyle: "center",
      },
      {
        id: 3,
        src: "/images/bestie/bestie3.jpg",
        title: "“Kuch Bhi?!” 😂",
        caption: "“Tumhara kuch bhi nahi ho sakta!” — Anjali's signature dialogue every single time I do anything dumb 🤣",
        category: "chaotic",
        tag: "Her Chaotic Side",
        rotation: -4,
        tapeStyle: "right",
      },
      {
        id: 4,
        src: "/images/bestie/bestie4.jpg",
        title: "Iconic Mirror Selfie ✨",
        caption: "10/10 fit, 10/10 pose, 100/10 bestie certified! Always serving looks.",
        category: "favorite",
        tag: "My Favorites",
        rotation: 2,
        tapeStyle: "left",
      },
    ],
  },

  // ❤️ 6. THINGS THAT MAKE YOU SPECIAL
  specialThings: {
    heading: "Things That Make You Special ❤️",
    subtitle: "Tap each heart to reveal why you mean so much to me...",
    items: [
      {
        id: 1,
        title: "Your Smile",
        icon: "❤️",
        short: "Your smile",
        detail: "The way your genuine smile instantly lifts the whole mood of everyone in the room. It's contagious in the best way possible.",
        accent: "#f43f5e",
      },
      {
        id: 2,
        title: "Your Kindness",
        icon: "🫶",
        short: "Your kindness",
        detail: "How deeply and selflessly you care for people, always listening and making everyone feel valued and safe.",
        accent: "#ec4899",
      },
      {
        id: 3,
        title: "“Kuch Bhi?!” 😂",
        icon: "😂",
        short: "“Tumhara kuch bhi nahi ho sakta!”",
        detail: "Hearing you say 'Kuch bhi!' followed by 'Tumhara kuch bhi nahi ho sakta!' is literally my favorite daily routine. No one roasts me with more love than you! 🤣",
        accent: "#d946ef",
      },
      {
        id: 4,
        title: "Your Personality",
        icon: "🌸",
        short: "Your personality",
        detail: "Completely authentic, sweet, fiercely honest, and beautifully unique. You never have to pretend around me.",
        accent: "#f472b6",
      },
      {
        id: 5,
        title: "The Happiness You Bring",
        icon: "✨",
        short: "How you make people happy",
        detail: "Any dull boring day becomes an adventure the moment you're part of it. Life is just so much brighter with you.",
        accent: "#fb7185",
      },
      {
        id: 6,
        title: "Always Listening",
        icon: "🤍",
        short: "The way you always listen",
        detail: "No matter how late or how busy life gets, knowing I can talk to you about anything without judgment is a true blessing.",
        accent: "#be185d",
      },
    ],
  },

  // 🌷 7. SOME SWEET MOMENTS (Scrapbook Timeline)
  sweetMoments: {
    heading: "Some Sweet Moments 🌷",
    subtitle: "Because some moments deserve to be remembered forever.",
    moments: [
      {
        id: 1,
        tag: "Iconic",
        quote: "“Just being you ✨”",
        description: "Unplanned, unposed, and 100% authentic perfection.",
        date: "Special Chapter",
        image: "/images/bestie/bestie1.jpg",
      },
      {
        id: 2,
        tag: "Heartwarming",
        quote: "“This smile >>>”",
        description: "The kind of smile that makes everything okay in a split second.",
        date: "Cherished Memory",
        image: "/images/bestie/bestie2.jpg",
      },
      {
        id: 3,
        tag: "Classic Anjali",
        quote: "“Tumhara kuch bhi nahi ho sakta! 🤦‍♀️”",
        description: "Her iconic line on repeat... followed by immediate laughter. Golden memories!",
        date: "Every Single Day",
        image: "/images/bestie/bestie3.jpg",
      },
      {
        id: 4,
        tag: "Vibes",
        quote: "“Another iconic moment.”",
        description: "Looking back at every snapshot and realizing how lucky I am to have you as my bestie.",
        date: "Forever Saved",
        image: "/images/bestie/bestie4.jpg",
      },
    ],
  },

  // 💌 8. THE ENVELOPE / PERSONAL LETTER
  letterSection: {
    heading: "Someone left you a letter... 💌",
    subheading: "A little note sealed with love and memories.",
    openButtonText: "OPEN IT 💌",
    closeButtonText: "Fold Back Letter 🎀",
    letterTitle: "A Message From My Heart ❤️",
    letterDate: "Happy Birthday Anjali 🎂",
    letterParagraphs: [
      "Dear Anjali,",
      "Happy Birthday to one of the most incredible, funny, and genuine people I have ever known!",
      "Even though you always shake your head and tell me “Kuch bhi!” and “Tumhara kuch bhi nahi ho sakta!”, I know deep down you wouldn't trade our crazy friendship for anything in the world.",
      "Thank you for all the endless laughs, random late-night talks, stupid inside jokes, unforgettable memories, and for always being someone I can trust with my eyes closed.",
      "I'm genuinely so lucky to have you in my life. You bring so much light and joy wherever you go.",
      "I hope this year brings you all the happiness, success, peace, and dreams that your heart wishes for. You deserve nothing less than the absolute best.",
      "Keep smiling, keep being your wonderfully crazy self, and never change the amazing person you are.",
      "Happy Birthday, Anjali! Always here for you ❤️"
    ],
  },

  // 🫂 9. OUR ONE SPECIAL PHOTO (Emotional Highlight)
  ourPhotoSection: {
    buildupText: "And then there's this one... ❤️",
    photoSrc: "/images/us.jpg",
    caption1: "Out of all the pictures I have of you...",
    caption2: "this one is my favorite.",
    caption3: "Because you're in it with me, Anjali. ❤️",
    memoryTag: "Our Favorite Chapter 📸",
  },

  // 🎁 10. “ONE LAST THING...” & FINAL BIRTHDAY REVEAL
  finalSurprise: {
    heading: "One Last Thing... 👀",
    subheading: "I saved one last surprise for you.",
    openGiftButton: "OPEN THE GIFT 🎁",
    birthdayHeadline: "HAPPY BIRTHDAY, ANJALI! 🎂❤️",
    wishes: [
      "Here's to more laughs,",
      "more memories,",
      "more “kuch bhi” moments,",
      "more random adventures,",
      "and many more birthdays together. 🫶",
    ],
    emotionalPayoff: "“I'm really lucky to have you, Anjali. ❤️”",
    signature: "— Your Bestie Hridesh 💗",
    cakeWishPrompt: "Make a wish and blow the candles! 🕯️✨",
  },
};
