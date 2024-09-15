"use client";
import CenteredLayout from "@/components/layouts/CenteredLayout/CenteredLayout";
import ErrorPage from "@/components/pages/ErrorPage/ErrorPage";
import { ErrorProps } from "@/utils/types/props/ErrorProps";

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <CenteredLayout>
      <ErrorPage
        error={error}
        reset={reset}
        text="Something went wrong with the game :(
        Please try again, your one million prize is waiting for you ;)"
      />
    </CenteredLayout>
  );
};

export default Error;
