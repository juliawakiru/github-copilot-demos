import { v4 as uuidv4 } from 'uuid';
import { Event, Registration } from '../types';

export const events: Event[] = [
  {
    id: '1a2b3c4d-0001',
    title: 'MUT Inter-University Tech Day 2026',
    slug: 'mut-inter-university-tech-day-2026',
    shortDescription:
      'The first ever MUT Inter-University Tech Day — bringing together students and industry professionals for real insights, powerful networking, and career-shifting conversations.',
    description: `MUT Inter-University Tech Day brings together some of the brightest students and industry professionals for conversations that go far beyond the classroom.

Students from Murang'a University of Technology, Kirinyaga University, Dedan Kimathi University of Technology, Strathmore University, and Embu University will converge at MUT Maina Campus for a full day of talks covering Data Science, AI & Machine Learning, Cybersecurity, and how to interview for software engineering roles.

Expect real insights. Expect powerful networking. Expect the kind of advice that can completely shift how you see your future in tech.

With 200 seats secured, this is not just another event — it's a room full of ambition, opportunity, and forward thinkers. Come ready to learn, ready to connect, and ready to grow.

Organised by MUT Tech Community with support from Microsoft, Dr. John Ndia (Dean of School of Computing and Information Technology), Dr. Wanjiru Njuki (Innovations Coordinator of SCIT), and Mr. John Nduhiyu.

For more info contact: Max (+254-708-762-945) or Steven (+254-768-216-484). #MUTTECHDAY`,
    category: 'conference',
    status: 'upcoming',
    date: '2026-02-21T04:30:00Z',
    endDate: '2026-02-21T14:00:00Z',
    location: 'Assembly Hall, Murang\'a University of Technology',
    address: 'Murang\'a University of Technology, Maina Campus, Murang\'a, Kenya',
    isVirtual: false,
    capacity: 200,
    registeredCount: 187,
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1620829813573-7c9e1877706f?w=800&q=80',
    tags: ['Data Science', 'AI', 'Machine Learning', 'Cybersecurity', 'Interviews', 'Cloud', 'Microsoft'],
    speakers: [
      {
        name: 'Julia Muiruri',
        title: 'Cloud Advocate',
        company: 'Microsoft',
        bio: 'Julia is a Cloud Advocate at Microsoft, passionate about empowering developers across Africa with cloud technologies and AI tools.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=JuliaMuiruri&skinColor=9e5622&flip=true',
      },
      {
        name: 'Joylynn Kirui',
        title: 'Cybersecurity Expert',
        company: '',
        bio: 'Joylynn is a cybersecurity specialist with deep expertise in threat analysis, ethical hacking, and building secure systems.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=JoylynnKirui&skinColor=76422e',
      },
      {
        name: 'Mark Gatere',
        title: 'Software Engineer',
        company: '',
        bio: 'Mark is a software engineer building scalable web applications. He is passionate about mentoring young developers in the Kenyan tech ecosystem.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=MarkGatere&skinColor=c68642',
      },
      {
        name: 'Stephen Karanja',
        title: 'Software Engineer',
        company: 'Microsoft',
        bio: 'Stephen is a Software Engineer at Microsoft, working on developer tools and cloud infrastructure. He is an active mentor in the Kenyan developer community.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=StephenKaranja&skinColor=9e5622',
      },
      {
        name: 'Bethany Jepchumba',
        title: 'AI Cloud Advocate',
        company: 'Microsoft',
        bio: 'Bethany is an AI Cloud Advocate at Microsoft, focused on making artificial intelligence accessible to developers and students across Africa.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=BethanyJepchumba&skinColor=76422e&flip=true',
      },
    ],
    schedule: [
      { time: '07:30', title: 'Registration & Arrival', duration: 30 },
      { time: '08:00', title: 'Opening Remarks — Dean, School of Computing & IT', duration: 20 },
      { time: '08:20', title: 'Cloud Computing & Developer Opportunities', speaker: 'Julia Muiruri', duration: 45 },
      { time: '09:05', title: 'AI & Machine Learning for Students', speaker: 'Bethany Jepchumba', duration: 45 },
      { time: '09:50', title: 'Tea Break & Networking', duration: 20 },
      { time: '10:10', title: 'Cybersecurity in the Modern World', speaker: 'Joylynn Kirui', duration: 45 },
      { time: '10:55', title: 'Building Scalable Software — Lessons from the Field', speaker: 'Mark Gatere', duration: 45 },
      { time: '11:40', title: 'How to Interview for Software Engineering Roles', speaker: 'Stephen Karanja', duration: 45 },
      { time: '12:25', title: 'Lunch Break', duration: 60 },
      { time: '13:25', title: 'Panel Discussion: Navigating Your Tech Career', speaker: 'Julia Muiruri, Joylynn Kirui, Mark Gatere, Stephen Karanja, Bethany Jepchumba', duration: 45 },
      { time: '14:10', title: 'Q&A, Networking & Closing Remarks', duration: 50 },
    ],
    createdAt: '2026-01-10T10:00:00Z',
  },
  {
    id: '1a2b3c4d-0002',
    title: 'Nairobi Women in Tech Summit 2026',
    slug: 'nairobi-women-in-tech-summit-2026',
    shortDescription:
      'A one-day summit celebrating women driving innovation in Kenya\'s tech industry — featuring keynotes, mentorship circles, and career workshops.',
    description: `The Nairobi Women in Tech Summit brings together trailblazing women in technology from across East Africa for an inspiring day of keynotes, panels, and hands-on workshops.

From mobile money engineers to AI researchers, hear firsthand how Kenyan women are shaping the future of technology on the continent. Sessions cover leadership in tech, building products for African markets, fundraising for startups, and navigating career pivots.

The summit includes dedicated mentorship circles where attendees are paired with senior industry leaders for 30-minute guided conversations. Whether you're a student, early-career professional, or seasoned engineer — this is your space.

Hosted at the iHub Nairobi, the birthplace of Kenya's tech ecosystem, with support from Safaricom, Andela, and the Kenya ICT Authority.

Lunch and refreshments provided. Limited childcare available on request.`,
    category: 'conference',
    status: 'upcoming',
    date: '2026-03-08T06:00:00Z',
    endDate: '2026-03-08T15:00:00Z',
    location: 'iHub Nairobi',
    address: '6th Floor, Senteu Plaza, Galana Road, Kilimani, Nairobi, Kenya',
    isVirtual: false,
    capacity: 300,
    registeredCount: 142,
    price: 500,
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    tags: ['Women in Tech', 'Leadership', 'Mentorship', 'Startups', 'Career Growth'],
    speakers: [
      {
        name: 'Dr. Catherine Nyaki',
        title: 'Director of Innovation',
        company: 'Kenya ICT Authority',
        bio: 'Dr. Nyaki leads national digital innovation programmes and champions policies that increase women\'s participation in STEM across Kenya.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=CatherineNyaki&skinColor=9e5622&flip=true',
      },
      {
        name: 'Linda Kamau',
        title: 'Co-founder & CTO',
        company: 'AkiraChix',
        bio: 'Linda co-founded AkiraChix, a non-profit that has trained hundreds of young women in software development and entrepreneurship.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=LindaKamau&skinColor=76422e&flip=true',
      },
      {
        name: 'Hilda Moraa',
        title: 'CEO',
        company: 'Pezesha Africa',
        bio: 'Hilda is the founder and CEO of Pezesha, a fintech platform enabling access to credit for small businesses across Africa.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=HildaMoraa&skinColor=c68642&flip=true',
      },
    ],
    schedule: [
      { time: '09:00', title: 'Registration & Breakfast Networking', duration: 30 },
      { time: '09:30', title: 'Opening Keynote — Women Powering Kenya\'s Digital Future', speaker: 'Dr. Catherine Nyaki', duration: 40 },
      { time: '10:10', title: 'Training the Next Generation of Women Engineers', speaker: 'Linda Kamau', duration: 40 },
      { time: '10:50', title: 'Tea Break', duration: 20 },
      { time: '11:10', title: 'Building Fintech Products for African Markets', speaker: 'Hilda Moraa', duration: 40 },
      { time: '11:50', title: 'Mentorship Circles (Round 1)', duration: 30 },
      { time: '12:20', title: 'Mentorship Circles (Round 2)', duration: 30 },
      { time: '12:50', title: 'Lunch', duration: 60 },
      { time: '13:50', title: 'Panel: Navigating Career Pivots in Tech', speaker: 'All Speakers', duration: 45 },
      { time: '14:35', title: 'Workshop: Personal Branding & Portfolio Building', duration: 50 },
      { time: '15:25', title: 'Closing & Networking', duration: 35 },
    ],
    createdAt: '2026-01-20T08:00:00Z',
  },
  {
    id: '1a2b3c4d-0003',
    title: 'Nakuru DevFest: Mobile & Cloud',
    slug: 'nakuru-devfest-mobile-cloud-2026',
    shortDescription:
      'A community-driven developer festival in the heart of the Rift Valley, focused on mobile development, cloud infrastructure, and open source.',
    description: `Nakuru DevFest is a full-day developer festival organised by GDG Nakuru, bringing the latest in mobile and cloud technologies to developers in the Rift Valley region.

Sessions cover Flutter, Kotlin Multiplatform, Firebase, Google Cloud, and contributing to open-source projects. Whether you\'re building your first app or architecting cloud-native systems, there\'s something here for you.

Hands-on codelabs will run in parallel so attendees can build and deploy real projects during the event. Bring your laptop!

Held at Egerton University\'s Njoro Campus, the event is free and open to all developers, students, and tech enthusiasts in Nakuru County and beyond.

Swag, lunch, and chai included. Free shuttle from Nakuru Town CBD.`,
    category: 'conference',
    status: 'upcoming',
    date: '2026-04-11T06:00:00Z',
    endDate: '2026-04-11T15:00:00Z',
    location: 'Egerton University, Njoro Campus',
    address: 'Egerton University, Njoro, Nakuru County, Kenya',
    isVirtual: false,
    capacity: 250,
    registeredCount: 78,
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    tags: ['Flutter', 'Kotlin', 'Firebase', 'Google Cloud', 'Open Source', 'Mobile Development'],
    speakers: [
      {
        name: 'Dennis Kiplangat',
        title: 'GDE in Flutter',
        company: 'Independent',
        bio: 'Dennis is a Google Developer Expert in Flutter and organiser of GDG Nakuru. He has built mobile apps used by over 100,000 farmers in the Rift Valley.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=DennisKiplangat&skinColor=c68642',
      },
      {
        name: 'Mercy Chelangat',
        title: 'Cloud Engineer',
        company: 'Twiga Foods',
        bio: 'Mercy builds cloud infrastructure powering B2B food distribution across Kenya. She is an advocate for rural tech communities.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=MercyChelangat&skinColor=9e5622&flip=true',
      },
    ],
    schedule: [
      { time: '09:00', title: 'Arrival & Registration', duration: 30 },
      { time: '09:30', title: 'Welcome & Community Updates', duration: 15 },
      { time: '09:45', title: 'Building Cross-Platform Apps with Flutter', speaker: 'Dennis Kiplangat', duration: 50 },
      { time: '10:35', title: 'Codelab: Your First Flutter App', duration: 45 },
      { time: '11:20', title: 'Tea Break', duration: 15 },
      { time: '11:35', title: 'Scaling with Google Cloud & Firebase', speaker: 'Mercy Chelangat', duration: 50 },
      { time: '12:25', title: 'Lunch', duration: 60 },
      { time: '13:25', title: 'Codelab: Deploy to Cloud Run', duration: 50 },
      { time: '14:15', title: 'Open Source Contribution Workshop', duration: 45 },
      { time: '15:00', title: 'Closing, Swag & Group Photo', duration: 30 },
    ],
    createdAt: '2026-02-05T12:00:00Z',
  },
  {
    id: '1a2b3c4d-0004',
    title: 'Mombasa Cybersecurity Bootcamp',
    slug: 'mombasa-cybersecurity-bootcamp-2026',
    shortDescription:
      'A 2-day intensive cybersecurity bootcamp at the Coast, covering ethical hacking, incident response, and securing web applications.',
    description: `The Mombasa Cybersecurity Bootcamp is a hands-on, two-day training programme designed for developers, IT professionals, and students who want to build practical cybersecurity skills.

Day 1 covers threat modelling, penetration testing with Kali Linux, and network security fundamentals. Day 2 dives into web application security (OWASP Top 10), incident response planning, and a live Capture The Flag (CTF) competition.

Participants will work in teams and use real-world scenarios drawn from Kenyan organisations. Certificates of completion will be issued to all participants.

Organised by the Pwani Tech Community in partnership with Serianu and the Technical University of Mombasa. Held at the TUM Main Campus auditorium.

Accommodation recommendations for out-of-town participants available on request. Lunch provided both days.`,
    category: 'workshop',
    status: 'upcoming',
    date: '2026-05-16T06:00:00Z',
    endDate: '2026-05-17T14:00:00Z',
    location: 'Technical University of Mombasa',
    address: 'Tudor, Tom Mboya Street, Mombasa, Kenya',
    isVirtual: false,
    capacity: 100,
    registeredCount: 34,
    price: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    tags: ['Cybersecurity', 'Ethical Hacking', 'Penetration Testing', 'CTF', 'Web Security'],
    speakers: [
      {
        name: 'Ali Mwakio',
        title: 'Security Analyst',
        company: 'Serianu',
        bio: 'Ali is a certified ethical hacker and security analyst at Serianu, specialising in threat intelligence for East African financial institutions.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=AliMwakio&skinColor=c68642',
      },
      {
        name: 'Fatma Abdalla',
        title: 'Lecturer, Computer Science',
        company: 'Technical University of Mombasa',
        bio: 'Fatma teaches cybersecurity and networking at TUM and runs the university\'s annual CTF competition for coastal region universities.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=FatmaAbdalla&skinColor=76422e&flip=true',
      },
    ],
    schedule: [
      { time: '09:00', title: 'Day 1: Registration & Setup', duration: 30 },
      { time: '09:30', title: 'Threat Modelling & Risk Assessment', speaker: 'Ali Mwakio', duration: 60 },
      { time: '10:30', title: 'Break', duration: 15 },
      { time: '10:45', title: 'Hands-on: Penetration Testing with Kali Linux', speaker: 'Ali Mwakio', duration: 90 },
      { time: '12:15', title: 'Lunch', duration: 60 },
      { time: '13:15', title: 'Network Security Fundamentals', speaker: 'Fatma Abdalla', duration: 60 },
      { time: '14:15', title: 'Lab: Securing a Network', duration: 75 },
      { time: '15:30', title: 'Day 1 Wrap-up', duration: 15 },
      { time: '09:00', title: 'Day 2: Web Application Security (OWASP Top 10)', speaker: 'Ali Mwakio', duration: 90 },
      { time: '10:30', title: 'Break', duration: 15 },
      { time: '10:45', title: 'Incident Response Planning', speaker: 'Fatma Abdalla', duration: 60 },
      { time: '11:45', title: 'Lunch', duration: 60 },
      { time: '12:45', title: 'Capture The Flag Competition', duration: 120 },
      { time: '14:45', title: 'Awards, Certificates & Closing', duration: 30 },
    ],
    createdAt: '2026-02-12T09:00:00Z',
  },
  {
    id: '1a2b3c4d-0005',
    title: 'Kisumu Data Science Meetup',
    slug: 'kisumu-data-science-meetup-march-2026',
    shortDescription:
      'A lakeside evening meetup exploring how data science is transforming agriculture, healthcare, and fishing communities around Lake Victoria.',
    description: `Join the Kisumu Data Science Community for an evening of talks and demos showcasing real-world data science applications in western Kenya.

Speakers will present projects using data to improve fish catch forecasting on Lake Victoria, predict crop disease outbreaks in Nyanza, and optimise maternal health clinic scheduling in Kisumu County.

This meetup is perfect for data analysts, researchers, students, and anyone curious about how data can improve lives in local communities. No prior data science experience required — come learn and ask questions!

Held at Lakehub, Kisumu\'s premier innovation space, with a view of the lake. Light bites and drinks provided.

Part of a monthly series. Connect with us on Twitter @KisumuData to stay in the loop.`,
    category: 'meetup',
    status: 'upcoming',
    date: '2026-03-20T14:00:00Z',
    endDate: '2026-03-20T17:00:00Z',
    location: 'Lakehub Innovation Space',
    address: 'Lakehub, Obote Road, Milimani, Kisumu, Kenya',
    isVirtual: false,
    capacity: 60,
    registeredCount: 22,
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Data Science', 'Python', 'Agriculture', 'Healthcare', 'Community'],
    speakers: [
      {
        name: 'Dr. Otieno Onyango',
        title: 'Research Fellow',
        company: 'KEMRI / Maseno University',
        bio: 'Dr. Onyango applies machine learning to public health challenges in the Lake Victoria basin, with a focus on malaria and maternal health.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=OtienoOnyango&skinColor=9e5622',
      },
      {
        name: 'Achieng Odhiambo',
        title: 'Data Analyst',
        company: 'Lake Victoria Fisheries Organisation',
        bio: 'Achieng uses satellite data and statistical models to support sustainable fishing practices across the Lake Victoria region.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=AchiengOdhiambo&skinColor=76422e&flip=true',
      },
    ],
    schedule: [
      { time: '17:00', title: 'Arrival & Networking', duration: 30 },
      { time: '17:30', title: 'Data-Driven Fish Catch Forecasting', speaker: 'Achieng Odhiambo', duration: 30 },
      { time: '18:00', title: 'ML for Maternal Health in Kisumu County', speaker: 'Dr. Otieno Onyango', duration: 30 },
      { time: '18:30', title: 'Break & Snacks', duration: 15 },
      { time: '18:45', title: 'Open Mic: Show Your Data Project', duration: 30 },
      { time: '19:15', title: 'Networking & Close', duration: 45 },
    ],
    createdAt: '2026-02-15T11:00:00Z',
  },
  {
    id: '1a2b3c4d-0006',
    title: 'Eldoret Startup Pitch Night',
    slug: 'eldoret-startup-pitch-night-2026',
    shortDescription:
      'An electrifying evening where Rift Valley founders pitch their startups to investors, mentors, and the North Rift tech community.',
    description: `Eldoret Startup Pitch Night is back! Organised by the Uasin Gishu Innovation Hub, this event gives early-stage founders from the North Rift region a platform to pitch their ideas to a panel of investors and mentors.

Six pre-selected startups will each have 7 minutes to pitch followed by 5 minutes of Q&A from the judges. Startups span agri-tech, ed-tech, health-tech, and logistics — all solving problems relevant to communities in the Rift Valley and beyond.

The audience will also vote for their favourite pitch — the People\'s Choice winner receives KES 50,000 in cloud credits and a 3-month mentorship package.

Judges include investors from Chandaria Business Innovation & Incubation Centre, Viktoria Ventures, and the Kenya Climate Innovation Centre.

Doors open at 5:30 PM. Nyama choma and drinks available. Come support local founders!`,
    category: 'meetup',
    status: 'upcoming',
    date: '2026-04-03T14:30:00Z',
    endDate: '2026-04-03T18:00:00Z',
    location: 'Uasin Gishu Innovation Hub',
    address: 'Moi University Annex, Eldoret, Uasin Gishu County, Kenya',
    isVirtual: false,
    capacity: 150,
    registeredCount: 63,
    price: 200,
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    tags: ['Startups', 'Pitching', 'Investors', 'Agri-tech', 'Entrepreneurship'],
    speakers: [
      {
        name: 'Dr. Sammy Keter',
        title: 'Director',
        company: 'Chandaria BIIC, Moi University',
        bio: 'Dr. Keter oversees Moi University\'s incubation centre and has mentored over 200 startups from the North Rift region.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=SammyKeter&skinColor=c68642',
      },
      {
        name: 'Winnie Chebet',
        title: 'Investment Associate',
        company: 'Viktoria Ventures',
        bio: 'Winnie evaluates early-stage deals across East Africa with a focus on agri-tech and climate-smart ventures.',
        avatarUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=WinnieChebet&skinColor=9e5622&flip=true',
      },
    ],
    schedule: [
      { time: '17:30', title: 'Doors Open & Networking', duration: 30 },
      { time: '18:00', title: 'Welcome & Judge Introductions', duration: 10 },
      { time: '18:10', title: 'Pitch 1: FarmConnect (Agri-tech)', duration: 12 },
      { time: '18:22', title: 'Pitch 2: Soma360 (Ed-tech)', duration: 12 },
      { time: '18:34', title: 'Pitch 3: AfyaLink (Health-tech)', duration: 12 },
      { time: '18:46', title: 'Break', duration: 15 },
      { time: '19:01', title: 'Pitch 4: ShipRift (Logistics)', duration: 12 },
      { time: '19:13', title: 'Pitch 5: MaziwaFresh (Dairy-tech)', duration: 12 },
      { time: '19:25', title: 'Pitch 6: EcoStove (Clean Energy)', duration: 12 },
      { time: '19:37', title: 'Audience Voting & Judge Deliberation', duration: 15 },
      { time: '19:52', title: 'Winners Announced & Closing', duration: 20 },
      { time: '20:12', title: 'Nyama Choma & Networking', duration: 48 },
    ],
    createdAt: '2026-02-18T14:00:00Z',
  },
];

export const registrations: Registration[] = [
  {
    id: uuidv4(),
    eventId: '1a2b3c4d-0001',
    firstName: 'Wanjiku',
    lastName: 'Mwangi',
    email: 'wanjiku.mwangi@students.mut.ac.ke',
    company: "Murang'a University of Technology",
    jobTitle: 'BSc Computer Science — 3rd Year',
    registeredAt: '2026-02-01T09:00:00Z',
    status: 'confirmed',
  },
  {
    id: uuidv4(),
    eventId: '1a2b3c4d-0001',
    firstName: 'Brian',
    lastName: 'Ochieng',
    email: 'brian.ochieng@students.dkut.ac.ke',
    company: 'Dedan Kimathi University of Technology',
    jobTitle: 'BSc Software Engineering — 4th Year',
    registeredAt: '2026-02-03T11:30:00Z',
    status: 'confirmed',
  },
  {
    id: uuidv4(),
    eventId: '1a2b3c4d-0001',
    firstName: 'Amina',
    lastName: 'Hassan',
    email: 'amina.hassan@students.strathmore.edu',
    company: 'Strathmore University',
    jobTitle: 'BSc Informatics & Computer Science — 2nd Year',
    registeredAt: '2026-02-05T14:00:00Z',
    status: 'confirmed',
  },
  {
    id: uuidv4(),
    eventId: '1a2b3c4d-0001',
    firstName: 'Kevin',
    lastName: 'Kiprop',
    email: 'kevin.kiprop@students.kyu.ac.ke',
    company: 'Kirinyaga University',
    jobTitle: 'BSc Information Technology — 3rd Year',
    registeredAt: '2026-02-08T10:00:00Z',
    status: 'confirmed',
  },
  {
    id: uuidv4(),
    eventId: '1a2b3c4d-0001',
    firstName: 'Grace',
    lastName: 'Njeri',
    email: 'grace.njeri@students.embu.ac.ke',
    company: 'Embu University',
    jobTitle: 'BSc Computer Science — 4th Year',
    registeredAt: '2026-02-10T08:00:00Z',
    status: 'confirmed',
  },
];
