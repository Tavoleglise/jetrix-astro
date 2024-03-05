import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const AplicationsShowCaseCard = () => {
  return (
    <Card>
      <CardBody
        isFooterBlurred
        className="w-full h-[350px] col-span-12 sm:col-span-5 overflow-hidden"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-2xl">Acme camera</h4>
        </CardHeader>
        <Image
          removeWrapper
          src="/assets/images/aplications/Accesorios-anilox.png"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        />
      </CardBody>
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AplicationsShowCaseCard;
