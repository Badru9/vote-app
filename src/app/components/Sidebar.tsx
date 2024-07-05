import { X } from "@phosphor-icons/react";

interface SidebarProps {
  open: boolean;
}

export default function Sidebar() {
  const menus = ["Home", "Tambah Kandidat", "Hasil Voting", "Mahasiswa"];

  return (
    <div
      className={`w-[300px] h-screen absolute top-0 left-0 shadow-xl`}
      // className={`w-[250px] h-screen bg-red-200 ${
      //   open ? "animate-slideIn" : "animate-slideOut"
      // }  transition-all duration-200 absolute top-0 left-0`}
    >
      <div className="w-full flex justify-end p-5">
        <X size={24} className="cursor-pointer" />
      </div>
      <div className="flex flex-col gap-5 px-10 py-5 w-full items-center">
        {menus.map((menu) => (
          <div className="w-full p-2 border-2 border-black cursor-pointer">
            <p key={menu} className="text-start">
              {menu}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
