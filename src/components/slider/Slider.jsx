import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardBody, Pagination, Image } from "@nextui-org/react";
import { sliderSections } from "../../utils/sliderUtils";
import { EmptyDot, FilledDot } from "../../assets/svgs/dots";

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
        {sliderSections.map((section, index) => {
          return (
            <motion.div
              className="slider__slide-container flex justify-center w-screen  p-4"
              key={section.id}
              animate={{ x: `${-100 * (activeSection - 1)}%` }}
            >
              <div className="flex">
                <div className="w-1/2 p-4 flex flex-wrap justify-center content-center">
                  {section.text}
                </div>
                <div className="w-1/2 p-4">
                  <Image width={800} src="/assets/images/maquina.png" />
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
