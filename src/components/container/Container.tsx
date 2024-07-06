import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx(className, " max-w-[1320px] mx-auto my-8 space-y-5")}>
      {children}
    </div>
  );
};
