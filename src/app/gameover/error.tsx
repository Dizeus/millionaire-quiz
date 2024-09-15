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
        text="Something went wrong with GameOver page or God don't wonna you to lose ;)
        Please try again !)"
      />
    </CenteredLayout>
  );
};

export default Error;
