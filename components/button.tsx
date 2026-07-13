import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "dark" | "light";
type ButtonSize = "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
  dark: "bg-ink text-white hover:opacity-90",
  light: "bg-cream text-ink hover:bg-offwhite",
};

const CHIP_CLASSES: Record<ButtonVariant, string> = {
  dark: "bg-cream text-ink",
  light: "bg-ink text-cream",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: "h-[44px] pl-[18px] font-ui text-[16px]",
  lg: "h-[52px] pl-[20px] font-ui text-[18px]",
};

// Figma pill button: 52px tall, radius 40, label left, circular arrow chip
// inset 2px on the right.
export function Button({
  variant = "dark",
  size = "lg",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    "inline-flex items-center gap-3 rounded-[40px] p-[2px] pr-[2px]",
    "font-medium transition-opacity duration-200",
    "disabled:cursor-not-allowed disabled:opacity-60",
    SIZE_CLASSES[size],
    VARIANT_CLASSES[variant],
    className,
  ].join(" ");

  const content = (
    <>
      <span className="flex-1 text-center leading-none">{children}</span>
      <span
        className={`grid aspect-square h-full place-items-center rounded-full ${CHIP_CLASSES[variant]}`}
        aria-hidden="true"
      >
        <ArrowRight className="h-5 w-5" />
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
