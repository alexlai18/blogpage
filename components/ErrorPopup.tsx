"use client"
import { XCircleIcon } from "lucide-react"
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert"

interface ErrorInputProps {
  message: string,
  severity: boolean,
  theme?: string
}

const ErrorPopup: React.FC<ErrorInputProps> = ({message, severity, theme}) => {
  const variant = severity ? "destructive" : null

  return (
    <Alert variant={variant} className={theme === "light" ? "mb-2 border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive" : "mb-2 bg-destructive text-foreground [&>svg]:text-foreground"}>
      <XCircleIcon className="h-4 w-4" />
      <AlertTitle>{severity}</AlertTitle>
      <AlertDescription>
        {message}
      </AlertDescription>
    </Alert>
  );
}

export default ErrorPopup;