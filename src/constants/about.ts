export interface AboutSection {
  id: string;
  title: string;
  description: string;
  media: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
  alignment: 'left' | 'right';
}

export const aboutSections: AboutSection[] = [
  {
    id: 'mission',
    title: 'Our Mission',
    description: 'At Algoritt, we are driven by a singular purpose: to revolutionize the digital landscape through innovative solutions. Our commitment to excellence and cutting-edge technology enables businesses to thrive in an ever-evolving digital world.',
    media: {
      type: 'video',
      src: '/assets/about/mission.mp4',
      alt: 'Algoritt mission visualization'
    },
    alignment: 'left'
  },
  {
    id: 'innovation',
    title: 'Innovation at Core',
    description: 'We believe in pushing boundaries and challenging the status quo. Our team of experts combines creativity with technical expertise to deliver solutions that not only meet current needs but anticipate future challenges.',
    media: {
      type: 'video',
      src: '/assets/about/innovation.mp4',
    },
    alignment: 'right'
  },
  {
    id: 'team',
    title: 'Our Team',
    description: 'Behind every successful project is our diverse team of passionate individuals. From developers to designers, strategists to support specialists, we work together to bring your vision to life with precision and creativity.',
    media: {
      type: 'video',
      src: '/assets/about/team.mp4',
      alt: 'Algoritt team'
    },
    alignment: 'left'
  }
];
