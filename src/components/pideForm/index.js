import React, { useState } from "react";
import PideSelector from "../pideSelector/index";
import PideInput from "../textField/index";

const Index = () => {
  const [pideType, setPideType] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div>
      <PideSelector></PideSelector>
      <PideInput
        onChange={event => setName(event.target.value)}
        value={name}
        label="İsim"
      />
      <PideInput
        onChange={event => setSurname(event.target.value)}
        value={surname}
        label="Soyisim"
      />
      <PideInput
        onChange={event => setAddress(event.target.value)}
        value={address}
        label="Adres"
      />
      <PideInput
        onChange={event => setMobile(event.target.value)}
        value={mobile}
        label="GSM No"
      />
    </div>
  );
};

export default Index;
