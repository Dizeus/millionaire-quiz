"use client";
import Button from "@/components/atoms/Button/Button";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface NavigationButtonProps {
  route: string;
  children: ReactNode;
}

const NavigationButton = ({ route, children }: NavigationButtonProps) => {
  const router = useRouter();
  return <Button handleOnClick={() => router.push(route)}>{children}</Button>;
};

export default NavigationButton;
