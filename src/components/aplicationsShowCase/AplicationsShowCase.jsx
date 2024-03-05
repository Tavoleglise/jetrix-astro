import { Card, CardBody, CardHeader, Chip, Tabs, Tab } from "@nextui-org/react";
import AplicationsShowCaseCard from "./AplicationsShowCaseCard";

const AplicationsShowCase = () => {
  return (
    <div>
      <Card className="p-4">
        <CardHeader className="text-3xl">
          Con nuestra tecnologa puedes hacer
        </CardHeader>
        <CardBody>
          <div className="flex flex-col justify-center content-center gap-4 mb-4">
            <Tabs>
              <Tab key="0" title="Music">
                <div className="flex gap-4 justify-center">
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
    </div>
  );
};

export default AplicationsShowCase;
