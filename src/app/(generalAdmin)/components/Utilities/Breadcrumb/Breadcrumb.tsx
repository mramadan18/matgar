type Props = {
  children: React.ReactNode;
};

const Breadcrumb = ({ children }: Props) => {
  return <div className="flex items-center gap-1 text-lg">{children}</div>;
};

export default Breadcrumb;
