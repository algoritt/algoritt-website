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
    description: 'At Algoritt, our mission is to empower organizations to excel in an ever-evolving business landscape. We believe that data-driven, informed decision-making is key to navigating complexities, mitigating risks, and transforming challenges into scalable opportunities. Our consulting approach integrates market intelligence with actionable insights, enabling clients to foster agility, resilience, and innovation for sustained success. \nOur consultants are strategic thinkers with deep expertise in global markets, bringing a collaborative and solutions-oriented approach to every engagement. By partnering closely with clients, we foster a culture of accountability and high performance, delivering impactful results that drive long-term success for businesses, communities, and industries alike.',
    media: {
      type: 'video',
      src: '/assets/about/mission.mp4',
      alt: 'Algoritt mission visualization'
    },
    alignment: 'left'
  },
  {
    id: 'essence',
    title: 'What We Do',
    description: 'We assist organizations in navigating market volatility, regulatory changes, and operational complexities. Leveraging deep industry expertise and advanced analytics, we develop tailored strategies that empower clients to make informed decisions, drive growth, and strengthen their market positioning. Our focus lies in simplifying complexity, optimizing business processes, and enhancing resilience through innovation.\n\nThrough our strategic advisory services, we help clients transform challenges into growth opportunities by applying a consultative approach that blends forward-thinking solutions, advanced analytics, and industry-leading methodologies. Grounded in trust and transparency, we empower organizations with the insights and perspectives needed to navigate change confidently and achieve sustainable success.',
    media: {
      type: 'video',
      src: '/assets/about/innovation.mp4',
    },
    alignment: 'right'
  },
  {
    id: 'approach',
    title: 'How We Do It',
    description: 'We operate with a structured, results-oriented methodology that aligns with our client\'s goals. Our approach is deeply rooted in data-driven insights and powered by the latest technologies to deliver scalable and sustainable outcomes. Through advanced analytics, AI-driven solutions, and real-time insights, we create actionable strategies that enhance operational efficiency, drive innovation, and reduce risk.\n\nAt every step, we prioritize transparency and collaboration. We engage clients as true partners, sharing knowledge, expertise, and resources to ensure successful execution of every initiative, and deliver measurable outcomes aligned with strategic business goals.',
    media: {
      type: 'video',
      src: '/assets/about/team.mp4',
      alt: 'Algoritt team'
    },
    alignment: 'left'
  }
];
