import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-2.5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
