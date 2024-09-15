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
        text="Something went wrong :(
        Please try again, or a little bit yeild at developers ;)"
      />
    </CenteredLayout>
  );
};

export default Error;
