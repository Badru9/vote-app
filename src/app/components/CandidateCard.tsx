import Image from "next/image";
import { Candidate } from "@/services/types";

export default function CandidateCard(props: Candidate) {
  return (
    <div className="w-[1000px] h-[350px] bg-gray-100 flex items-center p-10 rounded-3xl gap-20 cursor-pointer">
      <div className="min-w-[350px] h-[250px]">
        <Image
          src={props.image}
          alt="Candidate"
          width={500}
          height={500}
          className="rounded-3xl"
        />
      </div>
      <div className="self-start text-black mt-5">
        <div className="font-semibold text-2xl flex gap-x-3">
          <h3>{props.chairman.name}</h3>
          <span className="font-extralight">|</span>{" "}
          <h3>{props.deputyChairman.name}</h3>
        </div>
        <div className="w-full flex flex-col my-3 gap-5">
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg">{props.vision.title}</h1>
            <p className="text-black/60">{props.vision.description}</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg">{props.mission.title}</h1>
            <p className="text-black/60">{props.mission.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
