const Header = () => {
  return (
    <header
      id="header"
      className="mb-10 sm:text-center md:text-center lg:text-left"
    >
      <div className="mb-2">
        <div className="flex items-center justify-center sm:justify-center md:justify-center lg:justify-start">
          <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-800">
            Choose Your Skip Size
          </h1>
        </div>
      </div>
      <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
        Select the skip size that best suits your needs
      </p>
    </header>
  );
};

export default Header;
