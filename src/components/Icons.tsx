
import type { SVGProps } from "react";

export function SteamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.5 5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path d="m6.5 11.5 4 4" />
      <path d="m6.5 15.5 8 8" />
      <path d="m10.5 7.5 8 8" />
      <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" />
    </svg>
  );
}
