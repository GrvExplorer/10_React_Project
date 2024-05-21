import { Button } from "@chakra-ui/react";

function BlueButton({ icon, text }) {

  return (
    <Button className="bg-Purple hover:bg-purple-400 flex gap-2 text-White rounded-md px-3 py-1 ">
      {icon}
      {text}
    </Button>
  );
}

export default BlueButton;
