import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  href = "#", // Provide a default href value
  ...props
}: PaginationLinkProps & { href: string | URL }) => (
  <Link
    href={href as string | URL} // Type assertion if necessary
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "flex items-center justify-center w-full h-full border rounded-[4px] bg-white",
      isActive
        ? "text-cr8tOrange border-cr8tOrange"
        : " border-[#DFE3E8] text-[#797C7D] hover:text-cr8tOrange hover:border-cr8tOrange",
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  href = "#", // Provide default href
  ...props
}: React.ComponentProps<typeof PaginationLink> & { href: string | URL }) => (
  <PaginationLink
    href={href}
    aria-label="Go to previous page"
    size="default"
    className={cn(
      "flex items-center justify-center w-[32px] h-[32px]",
      className
    )}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" color="#C4CDD5" />
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  href = "#", // Provide default href
  ...props
}: React.ComponentProps<typeof PaginationLink> & { href: string | URL }) => (
  <PaginationLink
    href={href}
    aria-label="Go to next page"
    size="default"
    className={cn(
      "flex items-center justify-center w-[32px] h-[32px]",
      className
    )}
    {...props}
  >
    <ChevronRight className="h-4 w-4" color="#C4CDD5" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
