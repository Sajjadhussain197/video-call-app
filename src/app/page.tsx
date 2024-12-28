"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Home() {
  const roomId=useRef<HTMLInputElement>(null)
  const route=useRouter();
  return (
    <div className="container py-[20%] ">
      <div className="flex gap-4 mx-auto  max-w-[500px] items-center justify-center">
        
      <Input className="border-blue-500" ref={roomId} />
       <Button onClick={()=>route.push(`/room/${roomId.current?.value}`)}>Join</Button>
      </div>
    </div>
  );
}
