import React from "react";
import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

const CloseButton = () => {
  return (
    <Popover.Button
      title="Fechar formulário de feedback."
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100 focus:border-brand-500 focus:outline-none"
    >
      <X className="w-4 h-4" weight="bold" />
    </Popover.Button>
  );
};

export default CloseButton;
