import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "dark" | "light";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  type?: never;
  disabled?: never;
}

interface ButtonActionProps extends ButtonBaseProps {
  href?: never;
  type?: "button" | "submit";
  disabled?: boolean;
}

type ButtonProps = ButtonLinkProps | ButtonActionProps;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  dark: "bg-ink text-offwhite hover:opacity-90",
  light: "bg-offwhite text-ink hover:bg-white",
};

const ARROW_CLASSES: Record<ButtonVariant, string> = {
  dark: "bg-offwhite text-ink",
  light: "bg-ink text-offwhite",
};

// Pill button with the circular arrow chip, as on the live site
export function Button({
  variant = "dark",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5",
    "font-ui text-button font-bold transition-opacity duration-200",
    "disabled:cursor-not-allowed disabled:opacity-60",
    VARIANT_CLASSES[variant],
    className,
  ].join(" ");

  const content = (
    <>
      {children}
      <span
        className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full ${ARROW_CLASSES[variant]}`}
        aria-hidden="true"
      >
        <ArrowRight className="h-3 w-3" />
      </span>
    </>
  );

  if ("href" in rest && rest.href !== undefined) {
    return (
      <Link href={rest.href} className={classes}>
        {content}
      </Link>
    );
  }

  const { type = "button", disabled } = rest as ButtonActionProps;
  return (
    <button type={type} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
