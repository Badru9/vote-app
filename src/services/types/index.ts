export interface Student {
  nim: string;
  name: string;
  vote?: string;
}

export interface Candidate {
  id: string;
  chairman: Student;
  deputyChairman: Student;
  votes: number;
  vision: Vision;
  mission: Vision;
  image: string;
}

export interface Vote {
  id: string;
  candidate: Candidate;
  voter: Student;
}

interface Vision {
  title: string;
  description: string;
}
