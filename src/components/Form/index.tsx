import { useState } from 'react';
import {
  StyledForm,
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
} from './style';

interface Field {
  name: string;
  placeholder?: string;
}

interface FormProps {
  // onSubmit: (formData: { [key: string]: string }) => void;
  fieldList?: Field[];
}

function Form({
  // onSubmit,
  fieldList = [{ name: '라벨', placeholder: '플레이스 홀더' }],
}: FormProps) {
  const initialFormState = fieldList.reduce(
    (acc, field) => {
      acc[field.name] = '';
      return acc;
    },
    {} as { [key: string]: string },
  );

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // const handleSubmit = () => {
  //   onSubmit(formData);
  // };

  return (
    // <StyledForm onSubmit={handleSubmit}>
      <StyledForm>
      {fieldList.map((field) => (
        <StyledInputWrapper key={field.name}>
          <StyledLabel htmlFor={field.name}>{field.name}</StyledLabel>
          <StyledInput
            id={field.name}
            type="text"
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        </StyledInputWrapper>
      ))}
      {/* <button type="button" onClick={handleSubmit}>
        제출
      </button> */}
    </StyledForm>
  );
}

export default Form;
