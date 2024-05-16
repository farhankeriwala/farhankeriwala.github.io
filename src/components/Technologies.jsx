import svgs from "../assets/svg";

const Technologies = () => {
  return (
    <span className="flex flex-wrap items-center justify-center gap-16 my-8 w-full">
      {[
        "java",
        "javascript",
        "python",
        "react",
        "redux",
        "css",
        "html",
        "git",
        "php",
        "docker",
        "nodeJs",
        "tailwind",
        "vite",
        "framer",
        "figma"
      ].map((item) => (
        <img key={`technology-${item}`} src={svgs[item]} className="w-14" />
      ))}
    </span>
  );
};

export default Technologies;
