import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(className, " max-w-[1320px] 2xl:mx-auto mx-5 space-y-5 ")}
    >
      {children}
    </div>
  );
};
