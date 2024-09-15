export interface ErrorProps {
  error: Error & { digest?: string };
  text: string;
  reset: () => void;
}
