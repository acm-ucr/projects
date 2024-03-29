const Title = ({ title }) => {
  return (
    <div className="flex justify-start items-center">
      <title>{title}</title>
      <p className="text-2xl text-white">{title}</p>
    </div>
  );
};

export default Title;
