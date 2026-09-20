export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Comfortable With',
    skills: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'Git', 'GitHub', 'C#', '.NET']
  },
  {
    title: 'Working Knowledge',
    skills: ['Flask', 'Django', 'React', 'Next.js', 'Flutter', 'REST APIs', 'PostgreSQL', 'SQLite']
  },
  {
    title: 'Currently Learning',
    skills: [
      'Java',
      'Computer Networks',
      'System Architecture',
      'Cybersecurity',
      'Defensive Security',
      'Operating System Fundamentals'
    ]
  }
];
