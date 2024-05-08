import InputForm from "features/InputForm";
import { FC } from "react";

import "./InputFormPage.css"

const InputFormPage: FC = () => {
  return (
    <div className="container">
      <div className="input-group">
        <InputForm />
      </div>
    </div>
  );
};

export default InputFormPage;
