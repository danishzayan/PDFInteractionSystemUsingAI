export interface CardContent {
  title: string;
  heading: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export const cards: CardContent[] = [
  {
    title: "Step 1",
    heading: "Sign up for an account. 🌍",
    description: "Either starting out with a free plan or choose our pro plan.",
    linkText: "Pro Plan",
    linkUrl: "/pricing",
  },
  {
    title: "Step 2",
    heading: "Upload your PDF file. 📂",
    description: "We'll process your file and make it ready for you to chat with.",
    linkText: "",
    linkUrl: "",
  },
  {
    title: "Step 3",
    heading: "Start asking questions. 📝",
    description: "It's that simple. Try out Quill today - it really takes less than a minute.",
    linkText: "",
    linkUrl: "",
  },
];
