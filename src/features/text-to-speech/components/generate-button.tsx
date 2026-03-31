import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function GenerateButton({
  size,
  className,
  disabled,
  onSubmit,
  isSubmitting,
}: {
  size?: "default" | "sm";
  disabled: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
  className?: string;
}) {
  return (
    <Button
      size={size}
      className={className}
      disabled={disabled}
      onClick={onSubmit}
    >
      {isSubmitting ? (
        <>
          <Spinner className="size-3" />
          Generating....
        </>
      ) : (
        "Generate speech"
      )}
    </Button>
  );
}
