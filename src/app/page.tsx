"use client";

import CandidateCard from "./components/CandidateCard";
import { Candidate } from "@/services/types";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import QuestionModal from "./components/QuestionModal";
import { Question } from "@phosphor-icons/react";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);

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
      vision: {
        title: "Vision",
        description: "Lorem ipsum dolor sit amet",
      },
      mission: {
        title: "Mission",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
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
      vision: {
        title: "Vision",
        description: "Lorem ipsum dolor sit amet",
      },
      mission: {
        title: "Mission",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      image:
        "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHdvJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white relative">
      <Sidebar />

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
      <div
        className="absolute top-10 right-10 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Question size={36} />
      </div>
      {open && <QuestionModal setOpen={setOpen} />}
    </main>
  );
}
