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
      'A detective game where a language model plays the three suspects and deterministic code runs everything else. You have 24 questions to work out who took the saint\'s crown before the procession leaves.',
    points: [
      'Each suspect\'s prompt holds only what that person knows, so the innocent ones cannot leak the solution.',
      'The server rebuilds game state by replaying the turn log, so forged progress is rejected.',
      'Every reply is screened in code before the player sees it.',
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
      'Cartoon 3D table football set in a Honduran corner shop. Play against a bot, with two players on one keyboard, or online with a room code.',
    points: [
      'A real-size table simulated with Rapier at 480 Hz, so hard kicks never pass through the ball.',
      'Online play is peer to peer over WebRTC. The host runs the physics and streams snapshots 30 times a second.',
      'Every model, texture and sound is generated in code. There are no asset files.',
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
      'Standings, fixtures and a season simulator for the Honduran Liga Nacional. Fans type in scores for upcoming games and watch the table change.',
    points: [
      'Estimates playoff odds by simulating the rest of the season 4,000 times with a Poisson goal model.',
      'A scheduled GitHub Action pulls results on match days, and Cloudflare redeploys on each commit.',
      'Works offline through a service worker. No framework and no build dependencies.',
    ],
    stack: ['JavaScript', 'GitHub Actions', 'Cloudflare Pages'],
    languages: 'Spanish',
    image: la16,
    alt: 'La 16 standings table for the Apertura 2026, with points, playoff odds and the last five results per team.',
  },
];
