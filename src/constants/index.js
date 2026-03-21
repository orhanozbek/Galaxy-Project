import { Zap, Eye, Target, Radio } from 'lucide-react';

export const ARCHETYPES = {
  supernova: {
    name: 'Supernova',
    emoji: '💥',
    Icon: Zap,
    gradient: 'from-violet-500 via-fuchsia-500 to-pink-500',
    border: 'rgba(168,85,247,0.3)',
    glow: 'rgba(168,85,247,0.2)',
    tagline: 'The Magnetic Presence',
    desc: 'Explosive energy, natural leader, life of every orbit. You activate every room you enter.',
    traits: ['Magnetic', 'Spontaneous', 'Charismatic', 'Bold'],
    compatible: 'Pulsar',
    incompatible: 'Nebula',
  },
  nebula: {
    name: 'Nebula',
    emoji: '🌌',
    Icon: Eye,
    gradient: 'from-indigo-500 via-blue-500 to-violet-600',
    border: 'rgba(99,102,241,0.3)',
    glow: 'rgba(99,102,241,0.2)',
    tagline: 'The Creative Soul',
    desc: "You're still forming — and that's your power. Deep, creative, endlessly fascinating to others.",
    traits: ['Introspective', 'Creative', 'Empathic', 'Original'],
    compatible: 'Quasar',
    incompatible: 'Supernova',
  },
  quasar: {
    name: 'Quasar',
    emoji: '✦',
    Icon: Target,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    border: 'rgba(59,130,246,0.3)',
    glow: 'rgba(59,130,246,0.2)',
    tagline: 'The Focused Visionary',
    desc: 'Intense focus and intellectual brilliance. You cut through noise and see what others miss.',
    traits: ['Focused', 'Analytical', 'Visionary', 'Direct'],
    compatible: 'Nebula',
    incompatible: 'Pulsar',
  },
  pulsar: {
    name: 'Pulsar',
    emoji: '⚡',
    Icon: Radio,
    gradient: 'from-purple-600 via-violet-500 to-indigo-500',
    border: 'rgba(124,58,237,0.3)',
    glow: 'rgba(124,58,237,0.2)',
    tagline: 'The Steady Force',
    desc: 'Reliable, warm, consistent. The heartbeat of every group — the one everyone returns to.',
    traits: ['Reliable', 'Warm', 'Grounding', 'Loyal'],
    compatible: 'Supernova',
    incompatible: 'Quasar',
  },
};

export const ARCHETYPE_LIST = Object.entries(ARCHETYPES).map(([k, v]) => ({ key: k, ...v }));

export const QUESTIONS = [
  {
    context: 'You walk into a crowded room of strangers.',
    q: 'What actually happens?',
    options: [
      { text: 'Heads turn. You own the room without trying.', value: 'supernova' },
      { text: 'You find the most interesting corner to observe from.', value: 'nebula' },
      { text: 'You immediately spot the most interesting person.', value: 'quasar' },
      { text: 'You start checking in with everyone you know.', value: 'pulsar' },
    ],
  },
  {
    context: "It's a free Saturday — no obligations.",
    q: 'Where do you actually end up?',
    options: [
      { text: 'Front row at the best event happening in the city.', value: 'supernova' },
      { text: 'Creating something alone in complete silence.', value: 'nebula' },
      { text: 'Doing a deep dive on something that\'s been consuming you.', value: 'quasar' },
      { text: 'Long dinner with the people who matter most.', value: 'pulsar' },
    ],
  },
  {
    context: 'Plans get cancelled 20 minutes before.',
    q: "What's your gut reaction?",
    options: [
      { text: 'Already have three better options lined up.', value: 'supernova' },
      { text: 'Honestly a little relieved — you needed the reset.', value: 'nebula' },
      { text: 'Reroute immediately. Nothing stops the plan.', value: 'quasar' },
      { text: 'You feel it more than you let on. You were excited.', value: 'pulsar' },
    ],
  },
  {
    context: 'Someone asks a mutual friend to describe you.',
    q: 'What do they say?',
    options: [
      { text: '"Magnetic. Everyone wants to be near them."', value: 'supernova' },
      { text: '"Different. Like, genuinely different."', value: 'nebula' },
      { text: '"Unstoppable. The smartest person in the room."', value: 'quasar' },
      { text: '"The most reliable person I know."', value: 'pulsar' },
    ],
  },
  {
    context: 'Your phone. Your social presence.',
    q: 'What does it look like?',
    options: [
      { text: 'Curated chaos. Every post is an event in itself.', value: 'supernova' },
      { text: 'Rare and poetic. People screenshot everything.', value: 'nebula' },
      { text: 'Thoughtful threads. Deep dives only.', value: 'quasar' },
      { text: 'Consistent. You celebrate everyone, always.', value: 'pulsar' },
    ],
  },
];
