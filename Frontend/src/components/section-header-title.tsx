const SectionHeaderTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-left py-6">
      <h2 className="text-3xl sm:text-6xl font-bold text-gray-900">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeaderTitle;
