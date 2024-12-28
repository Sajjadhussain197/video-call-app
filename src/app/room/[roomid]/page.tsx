"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";

const Page = () => {
  const { roomId } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);

  const myMeeting = async (element: HTMLDivElement) => {
    const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");

    const appID = 645927661;
    const serverSecret = "118b7cd8e73084e535a2638812758b7f";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId?.toString() || "",
      Date.now().toString(),
      "Sajjad"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomId,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  useEffect(() => {
    if (!containerRef.current) {
      console.log("Container not found");
      return;
    }
    myMeeting(containerRef.current);
  }, [roomId]);

  return (
    <div>
      <div className="h-[100vh] w-[100vw]" ref={containerRef} />
    </div>
  );
};

export default Page;
