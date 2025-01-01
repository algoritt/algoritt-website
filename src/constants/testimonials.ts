export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  testimonial: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marvin',
    role: 'MD',
    company: 'Leading Bank, UK',
    rating: 5,
    testimonial: 'Working with Algoritt consultants for our pricing model validation and documentation requirements has been one of our most successful consulting engagements. Their consultants are true professionals and highly knowledgeable in risk management. They started with low exposure low risk models and now they are validating critical front office pricing and XVA models.',
  },
  {
    id: '2',
    name: 'Mathew',
    role: 'CEO',
    company: 'Leading Bank, Poland',
    rating: 5,
    testimonial: 'Partnering with Algoritt has been instrumental in safeguarding our business. Their comprehensive risk management solutions provide unparalleled insights, enabling us to navigate uncertainty with confidence. With their expertise, we\'re empowered to tackle challenges head-on, knowing our assets are protected. Algoritt is more than a provider – they\'re a trusted ally in our journey towards resilience and success.',
  },
  {
    id: '3',
    name: 'Jason',
    role: 'Director',
    company: 'Leading Bank, US',
    rating: 5,
    testimonial: 'We had used Algoritt for our Model Validation requirements during the last CCAR cycle. We were pleasantly surprised with the quality of their consultants. They understood the criticality of the deliverables as well as the tight timelines and went over and above the expectations. We look forward to working with them in future and would highly recommend them for risk model validation.',
  }
];
