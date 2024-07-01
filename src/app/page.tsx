import Image from "next/image";
import CandidateCard from "./components/CandidateCard";
import { Candidate, Student } from "@/services/types";

export default function Home() {
  const candidates: Candidate[] = [
    {
      id: "1",
      chairman: {
        nim: "123456",
        name: "Liza",
      },
      deputyChairman: {
        nim: "123456",
        name: "Lizzie",
      },
      votes: 100000,
      vision: "Vision",
      mission: "Mission",
      image:
        "https://images.unsplash.com/photo-1573496130141-209d200cebd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHdvJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: "1",
      chairman: {
        nim: "123456",
        name: "Bren",
      },
      deputyChairman: {
        nim: "123456",
        name: "Calvin",
      },
      votes: 20000,
      vision: "Vision",
      mission: "Mission",
      image:
        "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHdvJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          id={candidate.id}
          chairman={candidate.chairman}
          deputyChairman={candidate.deputyChairman}
          vision={candidate.vision}
          mission={candidate.mission}
          image={candidate.image}
          votes={candidate.votes}
        />
      ))}
    </main>
  );
}
