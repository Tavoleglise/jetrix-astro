import { Card, CardBody, CardHeader, Chip, Tabs, Tab } from "@nextui-org/react";
import AplicationsShowCaseCard from "./AplicationsShowCaseCard";
import { homeAplications } from "../../utils/constants.js";

const AplicationsShowCase = () => {
  return (
    <section>
      <Card className="p-4">
        <CardHeader className="text-5xl">
          Con nuestra tecnologa puedes hacer
        </CardHeader>
        <CardBody>
          <div className="flex flex-col flex-wrap justify-center content-center gap-4 mb-4">
            <Tabs className="flex justify-center">
              {homeAplications.map((aplicationType, index) => {
                return (
                  <Tab key={aplicationType.id} title={aplicationType.type}>
                    <div className="flex flex-wrap gap-4 justify-center">
                      {aplicationType.aplications.map((aplication, index) => {
                        return (
                          <AplicationsShowCaseCard
                            key={index}
                            image={aplication.url_image}
                            title={aplication.name}
                            type={aplicationType.type}
                          />
                        );
                      })}
                    </div>
                  </Tab>
                );
              })}
            </Tabs>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default AplicationsShowCase;
