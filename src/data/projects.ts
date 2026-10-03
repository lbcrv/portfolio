import type { ImageMetadata } from 'astro';
import interrogatorio from '../assets/shots/interrogatorio.jpg';
import laBarra from '../assets/shots/la-barra.png';
import la16 from '../assets/shots/la-16.png';

export interface Project {
  name: string;
  repo: string;
  live: string;
  summary: string;
  points: string[];
  stack: string[];
  languages: string;
  image: ImageMetadata;
  alt: string;
}

export const projects: Project[] = [
  {
    name: 'Interrogatorio',
    repo: 'interrogatorio',
    live: 'https://interrogatorio-five.vercel.app',
    summary:
      'A detective game where you question three suspects played by a language model. I built it to find out whether an LLM could run a game\'s characters without being able to break the game.',
    points: [
      'The model only plays characters. A deterministic engine owns the case, the question budget and what counts as proof, so the game stays fair and testable.',
      'Each suspect only knows their own story. The innocent ones never see the solution, so no prompt trick can make them reveal it.',
      'It runs on a free API tier with a daily question limit per visitor, so it costs nothing to keep online.',
    ],
    stack: ['Next.js', 'TypeScript', 'Groq API'],
    languages: 'English, Spanish',
    image: interrogatorio,
    alt: 'Interrogatorio mid-game: evidence cards on the left, a suspect\'s file and her typed statement record on the right.',
  },
  {
    name: 'La Barra',
    repo: 'la-barra',
    live: 'https://la-barra-seven.vercel.app',
    summary:
      'A 3D table football game set in a Honduran corner shop. You can play against a bot, with two players on one keyboard, or online with a friend using a room code.',
    points: [
      'Online play needs no game server: the two browsers connect directly and the host\'s browser runs the match, so hosting costs nothing.',
      'Real physics under the cartoon look, tuned so hard shots never pass through the ball.',
      'All art and sound are generated in code, so there are no models or audio files to download.',
    ],
    stack: ['Next.js', 'React Three Fiber', 'Rapier', 'PeerJS', 'TypeScript'],
    languages: 'English, Spanish',
    image: laBarra,
    alt: 'La Barra main menu over the 3D table football table, with difficulty, local and online options.',
  },
  {
    name: 'La 16',
    repo: 'la-16',
    live: 'https://la-16.pages.dev',
    summary:
      'Standings, fixtures and a playoff simulator for Honduras\'s top football league. Fans can enter scores for upcoming games and see how the table would change.',
    points: [
      'Results update on their own: a scheduled job checks for final scores on match days and publishes them without any manual work.',
      'Playoff odds come from simulating the rest of the season thousands of times.',
      'No framework and no build step, so it loads fast and works offline.',
    ],
    stack: ['JavaScript', 'GitHub Actions', 'Cloudflare Pages'],
    languages: 'Spanish',
    image: la16,
    alt: 'La 16 standings table for the Apertura 2026, with points, playoff odds and the last five results per team.',
  },
];
