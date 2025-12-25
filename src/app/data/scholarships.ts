export interface Scholarship {
  id: number;
  title: string;
  organization: string;
  amount: number;
  deadline: string;
  description: string;
  eligibility: {
    minGPA: number;
    fieldOfStudy: string[];
    location: string[];
    academicLevel: string[];
    citizenship: string[];
  };
  applicationLink: string;
}

export const scholarships: Scholarship[] = [
  {
    id: 1,
    title: "Future Leaders Scholarship",
    organization: "Global Education Foundation",
    amount: 25000,
    deadline: "2025-05-15",
    description: "Supporting outstanding students pursuing leadership roles in their communities and careers.",
    eligibility: {
      minGPA: 3.5,
      fieldOfStudy: ["Business", "Political Science", "Economics", "Any"],
      location: ["United States", "Canada"],
      academicLevel: ["Undergraduate", "Graduate"],
      citizenship: ["US Citizen", "Permanent Resident"]
    },
    applicationLink: "#"
  },
  {
    id: 2,
    title: "STEM Excellence Award",
    organization: "Technology Innovation Institute",
    amount: 30000,
    deadline: "2025-06-01",
    description: "Empowering the next generation of scientists, engineers, and innovators.",
    eligibility: {
      minGPA: 3.7,
      fieldOfStudy: ["Computer Science", "Engineering", "Mathematics", "Physics"],
      location: ["United States", "International"],
      academicLevel: ["Undergraduate", "Graduate"],
      citizenship: ["Any"]
    },
    applicationLink: "#"
  },
  {
    id: 3,
    title: "Women in Tech Scholarship",
    organization: "Tech Sisters Foundation",
    amount: 15000,
    deadline: "2025-04-30",
    description: "Supporting women pursuing careers in technology and computer science.",
    eligibility: {
      minGPA: 3.0,
      fieldOfStudy: ["Computer Science", "Information Technology", "Engineering"],
      location: ["United States"],
      academicLevel: ["Undergraduate"],
      citizenship: ["US Citizen", "Permanent Resident"]
    },
    applicationLink: "#"
  },
  {
    id: 4,
    title: "Arts & Humanities Grant",
    organization: "Creative Minds Foundation",
    amount: 10000,
    deadline: "2025-07-15",
    description: "Celebrating creativity and supporting students in arts and humanities.",
    eligibility: {
      minGPA: 3.2,
      fieldOfStudy: ["Fine Arts", "Literature", "History", "Philosophy", "Music"],
      location: ["United States", "Canada", "International"],
      academicLevel: ["Undergraduate", "Graduate"],
      citizenship: ["Any"]
    },
    applicationLink: "#"
  },
  {
    id: 5,
    title: "Community Service Scholarship",
    organization: "Volunteer America",
    amount: 8000,
    deadline: "2025-08-01",
    description: "Recognizing students who make a difference through community service and volunteer work.",
    eligibility: {
      minGPA: 2.8,
      fieldOfStudy: ["Any"],
      location: ["United States"],
      academicLevel: ["Undergraduate", "Graduate"],
      citizenship: ["US Citizen", "Permanent Resident"]
    },
    applicationLink: "#"
  },
  {
    id: 6,
    title: "Medical Student Excellence",
    organization: "Healthcare Advancement Society",
    amount: 40000,
    deadline: "2025-03-31",
    description: "Supporting aspiring healthcare professionals committed to serving communities.",
    eligibility: {
      minGPA: 3.8,
      fieldOfStudy: ["Medicine", "Nursing", "Public Health", "Pharmacy"],
      location: ["United States"],
      academicLevel: ["Graduate"],
      citizenship: ["US Citizen"]
    },
    applicationLink: "#"
  },
  {
    id: 7,
    title: "International Student Award",
    organization: "Global Student Network",
    amount: 20000,
    deadline: "2025-05-30",
    description: "Welcoming international students to pursue their academic dreams.",
    eligibility: {
      minGPA: 3.4,
      fieldOfStudy: ["Any"],
      location: ["International"],
      academicLevel: ["Undergraduate", "Graduate"],
      citizenship: ["International Student"]
    },
    applicationLink: "#"
  },
  {
    id: 8,
    title: "Business Innovation Grant",
    organization: "Entrepreneurship Foundation",
    amount: 18000,
    deadline: "2025-06-15",
    description: "For students with entrepreneurial spirit and innovative business ideas.",
    eligibility: {
      minGPA: 3.3,
      fieldOfStudy: ["Business", "Economics", "Marketing", "Entrepreneurship"],
      location: ["United States", "Canada"],
      academicLevel: ["Undergraduate", "Graduate"],
      citizenship: ["Any"]
    },
    applicationLink: "#"
  },
  {
    id: 9,
    title: "First-Generation Student Support",
    organization: "Education Equity Alliance",
    amount: 12000,
    deadline: "2025-07-01",
    description: "Supporting first-generation college students in achieving their educational goals.",
    eligibility: {
      minGPA: 2.5,
      fieldOfStudy: ["Any"],
      location: ["United States"],
      academicLevel: ["Undergraduate"],
      citizenship: ["US Citizen", "Permanent Resident"]
    },
    applicationLink: "#"
  },
  {
    id: 10,
    title: "Environmental Science Award",
    organization: "Green Future Foundation",
    amount: 22000,
    deadline: "2025-04-15",
    description: "Supporting students dedicated to environmental conservation and sustainability.",
    eligibility: {
      minGPA: 3.6,
      fieldOfStudy: ["Environmental Science", "Biology", "Environmental Engineering"],
      location: ["United States", "Canada", "International"],
      academicLevel: ["Undergraduate", "Graduate"],
      citizenship: ["Any"]
    },
    applicationLink: "#"
  }
];

export const fieldsOfStudy = [
  "Any",
  "Business",
  "Computer Science",
  "Engineering",
  "Medicine",
  "Nursing",
  "Environmental Science",
  "Biology",
  "Fine Arts",
  "Literature",
  "History",
  "Mathematics",
  "Physics",
  "Political Science",
  "Economics",
  "Marketing",
  "Public Health",
  "Pharmacy",
  "Information Technology",
  "Music",
  "Philosophy",
  "Entrepreneurship",
  "Environmental Engineering"
].sort();

export const locations = [
  "Any",
  "United States",
  "Canada",
  "International"
].sort();

export const academicLevels = [
  "Any",
  "Undergraduate",
  "Graduate"
];

export const citizenshipOptions = [
  "Any",
  "US Citizen",
  "Permanent Resident",
  "International Student"
];
