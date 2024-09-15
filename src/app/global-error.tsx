"use client";
import { ErrorProps } from "@/utils/types/props/ErrorProps";

const GlobalError = ({ error, reset }: ErrorProps) => {
  return (
    <html>
      <body>
        <h2>OMG, something went wrong globaly!</h2>
        <h2>Global error: {error.message}</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
