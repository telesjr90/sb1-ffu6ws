export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: 'Writing' | 'Comedy' | 'Poetry' | 'Video';
  image: string;
  excerpt: string;
  content: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Behind the Scenes: Creating Fantasy Worlds',
    date: 'March 15, 2024',
    category: 'Writing',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2069',
    excerpt: 'Dive into my creative process of building immersive fantasy universes...',
    content: `
      # Behind the Scenes: Creating Fantasy Worlds

      Creating a fantasy world is like painting on an infinite canvas. Every stroke adds depth, 
      every detail breathes life into the universe we're building.

      ## The Foundation

      When I start creating a new fantasy world, I begin with these core elements:
      - Geography and climate
      - Magic systems and their limitations
      - Cultural dynamics
      - Historical timeline

      ## Building Characters

      Characters are the heart of any story. They need to feel authentic within the fantasy 
      setting while remaining relatable to readers.

      ## Bringing It All Together

      The final step is weaving all these elements into a cohesive narrative that captures 
      the imagination and transports readers to this new world.
    `,
    slug: 'creating-fantasy-worlds'
  },
  {
    id: '2',
    title: 'The Art of Comedy Writing',
    date: 'March 10, 2024',
    category: 'Comedy',
    image: 'https://images.unsplash.com/photo-1525373612132-b3e820b87cea?q=80&w=2070',
    excerpt: 'Exploring the techniques behind crafting memorable comedic moments...',
    content: `
      # The Art of Comedy Writing

      Comedy is all about timing, surprise, and relatability. Let's explore how these 
      elements come together to create laughter.

      ## Finding the Funny

      The best comedy often comes from everyday observations twisted in unexpected ways.

      ## Structuring Jokes

      A good joke needs:
      - A strong setup
      - Perfect timing
      - A surprising punchline

      ## Reading the Room

      Understanding your audience is crucial for comedy success.
    `,
    slug: 'art-of-comedy-writing'
  },
  {
    id: '3',
    title: 'Poetry in Motion: Visual Storytelling',
    date: 'March 5, 2024',
    category: 'Poetry',
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=2070',
    excerpt: 'How visual elements enhance the impact of written verse...',
    content: `
      # Poetry in Motion: Visual Storytelling

      When words and visuals dance together, they create a symphony of meaning that 
      transcends either medium alone.

      ## The Visual Element

      Poetry isn't just about words on a page. The visual presentation can enhance:
      - Rhythm and flow
      - Emotional impact
      - Symbolic meaning

      ## Creating Harmony

      The key is finding the perfect balance between written and visual elements.
    `,
    slug: 'poetry-in-motion'
  }
];