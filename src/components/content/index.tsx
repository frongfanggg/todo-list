const ContainerPage = ({
  title,
  icon,
  children,
}: {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div className="bg-[#F7F7F7] rounded-t-xl p-6">
        {icon} {title}
      </div>
      <div className="bg-white p-6">{children}</div>
    </div>
  );
};

export default ContainerPage;
