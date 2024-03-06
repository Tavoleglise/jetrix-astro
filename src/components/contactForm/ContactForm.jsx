import { Input, Textarea } from "@nextui-org/react";

const ContactForm = () => {
  return (
    <div className="flex justify-center flex-col text-center content-center flex-wrap">
      <div className="text-5xl">Escribenos</div>
      <div className="text-2xl mb-16">
        Nos pondremos en contacto contigo lo antes posible
      </div>
      <form action="">
        <div>
          <Input type="email" label="Email" className="py-4" />
        </div>
        <div className="flex">
          <Input type="email" label="Email" className="py-4 mr-4" />
          <Input type="email" label="Email" className="py-4" />
        </div>
        <div className="">
          <Textarea
            label="Description"
            placeholder="Enter your description"
            className="py-4"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
