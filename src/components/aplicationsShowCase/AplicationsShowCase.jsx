import { Card, CardBody, CardHeader, Chip, Tabs, Tab } from "@nextui-org/react";
import AplicationsShowCaseCard from "./AplicationsShowCaseCard";

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
              <Tab key="0" title="Music">
                <div className="flex flex-wrap gap-4 justify-center">
                  <AplicationsShowCaseCard />
                  <AplicationsShowCaseCard />
                  <AplicationsShowCaseCard />
                </div>
              </Tab>
              <Tab key="1" title="Music">
                <div className="flex gap-4 justify-center">
                  <AplicationsShowCaseCard />
                  <AplicationsShowCaseCard />
                  <AplicationsShowCaseCard />
                </div>
              </Tab>
              <Tab key="2" title="Music">
                <div className="flex gap-4 justify-center">
                  <AplicationsShowCaseCard />
                  <AplicationsShowCaseCard />
                  <AplicationsShowCaseCard />
                </div>
              </Tab>
              <Tab key="3" title="Music">
                <div className="flex gap-4 justify-center">
                  <AplicationsShowCaseCard />
                  <AplicationsShowCaseCard />
                  <AplicationsShowCaseCard />
                </div>
              </Tab>
            </Tabs>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default AplicationsShowCase;
