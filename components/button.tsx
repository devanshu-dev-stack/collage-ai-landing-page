import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "gradient" | "secondary" | "inverse";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  showArrow?: boolean;
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
  gradient:
    "bg-btn-gradient text-white shadow-soft hover:opacity-90 active:opacity-80",
  secondary:
    "bg-white text-primary border border-primary-highlight/30 shadow-soft hover:bg-primary-bg",
  inverse:
    "bg-inverse-text text-primary hover:bg-white",
};

export function Button({
  variant = "gradient",
  showArrow = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3",
    "font-ui text-button font-medium transition-[opacity,background-color] duration-200",
    "disabled:cursor-not-allowed disabled:opacity-60",
    VARIANT_CLASSES[variant],
    className,
  ].join(" ");

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
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
