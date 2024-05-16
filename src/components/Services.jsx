import { GoDot } from "react-icons/go";

const Services = () => {
  return (
    <span className="flex flex-col gap-3">
      <p className="font-Nunito font-normal text-gray-600 dark:text-gray-300 text-xl sm:text-2xl md:text-3xl flex items-center gap-2">
        <GoDot /> Website Design
      </p>
      <p className="font-Nunito font-normal text-gray-600 dark:text-gray-300 text-xl sm:text-2xl md:text-3xl flex items-center gap-2">
        <GoDot /> UI/UX Design
      </p>
      <p className="font-Nunito font-normal text-gray-600 dark:text-gray-300 text-xl sm:text-2xl md:text-3xl flex items-center gap-2">
        <GoDot /> Website Development
      </p>
      <p className="font-Nunito font-normal text-gray-600 dark:text-gray-300 text-xl sm:text-2xl md:text-3xl flex items-center gap-2">
        <GoDot /> Search Engine Optimisation
      </p>
      <p className="font-Nunito font-normal text-gray-600 dark:text-gray-300 text-xl sm:text-2xl md:text-3xl flex items-center gap-2">
        <GoDot /> Consultation
      </p>
    </span>
  );
};

export default Services;
