"use client";

import { Question, X } from "@phosphor-icons/react";

interface QuestionModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function QuestionModal({ setOpen }: QuestionModalProps) {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-black/30 fixed top-0 left-0 z-10">
      <div className="bg-white w-[600px] aspect-video rounded-2xl">
        <div className="w-full flex justify-between p-5">
          <h1 className="font-semibold">Cara Vote</h1>
          <X
            size={24}
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          />
        </div>
        <div className="p-5 self-center h-full items-center justify-center flex">
          <h1>Click kartu pada salah satu kandidat untuk melakukan voting</h1>
        </div>
      </div>
    </main>
  );
}
