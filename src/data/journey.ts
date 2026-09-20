export type JourneyEvent = {
  id: string;
  year: string;
  title: string;
  description: string;
};

export const journeyEvents: JourneyEvent[] = [
  {
    id: 'google-ambassador',
    year: '2026',
    title: 'Google Student Ambassador ’26',
    description: 'Selected as a Google Student Ambassador for the 2026 program, exploring opportunities to engage with technology and the student community.'
  },
  {
    id: 'odoo-hackathon',
    year: '2025',
    title: 'Odoo X KSV Hackathon — Finalist',
    description: 'Reached the final round of the Odoo X KSV Hackathon through collaborative product development and hands-on problem solving.'
  }
];
