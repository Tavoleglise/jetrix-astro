import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pagination, Image, Button } from "@nextui-org/react";
import { sliderSections } from "../../utils/constants.js";

import "./slider.sass";

const Slider = () => {
  const [activeSection, setActiveSection] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setActiveSection((prev) =>
        prev === sliderSections.length ? 1 : prev + 1
      );
    }, 7000);

    () => clearInterval();
  }, []);

  const handleclick = (activeToActive) => {
    setActiveSection(activeToActive);
  };

  return (
    <section className="py-4">
      <div
        style={{ width: `${sliderSections.length * 100}vw` }}
        className="flex"
      >
        {sliderSections.map((section) => {
          return (
            <motion.div
              className="slider__slide-container flex justify-center w-screen p-4"
              key={section.id}
              animate={{ x: `${-100 * (activeSection - 1)}%` }}
            >
              <div className="flex">
                <div className="flex flex-wrap w-1/2 p-16 flex-col justify-center items-end">
                  <div className="w-4/5">
                    <div className="flex h-8 items-center my-4">
                      <div className="bg-red-800 h-full w-4"></div>
                      <span className="ml-4">
                        {section.machineName.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-5xl font-bold my-4">
                      {section.title}
                    </div>
                    <div className="font-semibold my-4 text-3xl">
                      {section.description}
                    </div>
                    <div>
                      <Button>{section.buttonText}</Button>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-4">
                  <Image width={800} src={section.image_url} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Pagination
          total={sliderSections.length}
          color="default"
          page={activeSection}
          onChange={setActiveSection}
          size="sm"
        />
      </div>
    </section>
  );
};

export default Slider;
