const HireMeButton = () => {
  const handleOnClick = () => {
    window.open("https://calendly.com/farhankeriwala1208/quoteenquiry");
  };
  return (
    <button
      onClick={() => handleOnClick(0)}
      className="border flex items-center text-center justify-center border-matteBlack bg-matteBlack dark:bg-matteWhite hover:bg-matteWhite dark:hover:bg-matteBlack dark:hover:border-matteWhite text-matteWhite dark:text-matteBlack hover:text-matteBlack dark:hover:text-matteWhite transition-all duration-300 px-8 py-2 rounded-full text-md lg:text-lg"
    >
      Let&apos;s get started
    </button>
  );
};

export default HireMeButton;
