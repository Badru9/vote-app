import Image from "next/image";
import { Candidate } from "@/services/types";

export default function CandidateCard(props: Candidate) {
  return (
    <div className="w-[1000px] h-[350px] bg-gray-100 flex items-center p-10 rounded-3xl gap-20">
      <div className="w-[350px] h-[250px]">
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
        <h1>Vision: {props.vision}</h1>
        <h1>Mission: {props.mission}</h1>
        <h1>Votes: {props.votes}</h1>
      </div>
    </div>
  );
}
