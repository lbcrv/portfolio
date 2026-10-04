import type { ImageMetadata } from 'astro';
import interrogatorio from '../assets/shots/interrogatorio.jpg';
import laBarra from '../assets/shots/la-barra.png';
import la16 from '../assets/shots/la-16.png';
import cuadre from '../assets/shots/cuadre.png';

export interface Project {
  name: string;
  repo: string;
  live: string;
  status: 'Live' | 'Demo';
  // Private repos get no source link.
  code: 'public' | 'private';
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
    status: 'Live',
    code: 'public',
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
    status: 'Live',
    code: 'public',
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
    alt: 'La Barra main menu: a chalkboard with difficulty, two-player and online options beside the 3D table football table.',
  },
  {
    name: 'La 16',
    repo: 'la-16',
    live: 'https://la-16.pages.dev',
    status: 'Live',
    code: 'public',
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
  {
    name: 'Cuadre',
    repo: 'cuadre',
    live: 'https://cuadre-silk.vercel.app',
    status: 'Demo',
    code: 'private',
    summary:
      'A tool for accountants in Honduras: upload photos or PDFs of purchase invoices, check each one against the country\'s invoicing rules, and export the approved ones to the monthly purchase ledger in Excel. The demo runs on sample data; reading invoices with AI comes next.',
    points: [
      'Code decides, not AI. Fourteen tested rules based on Honduras\'s invoicing regulation check every invoice, so a misread number gets flagged instead of booked.',
      'Nothing reaches the ledger without the accountant\'s approval, and amounts are kept in whole cents so totals never drift from rounding.',
      'Locked down from the first commit: a per-request content security policy, strict headers, and CI that checks types, tests and dependencies on every push.',
    ],
    stack: ['Next.js', 'TypeScript', 'ExcelJS', 'Vitest'],
    languages: 'Spanish',
    image: cuadre,
    alt: 'Cuadre review screen: a photographed invoice on the left; on the right, two errors the rules caught: the total does not add up and the 15% sales tax is wrong.',
  },
];
