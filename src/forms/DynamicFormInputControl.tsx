import { useState, useEffect } from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";
import { FormFields } from "../types/forms";
import * as S from "./DynamicFormInputControl.styled";

type ExtendedRegisterOptions = RegisterOptions & {
  valueAsNumber?: boolean;
};

export const DynamicControl = ({
  inputType,
  fieldName,
  label,
  defaultValue,
  options = [],
  config = {},
  closed,
  selectedEntry,
}: FormFields & {
  closed: boolean;
  selectedEntry: any;
}) => {
  const {
    register,
    setValue,
    // formState: { errors },
  } = useFormContext();

  let registerOptions: ExtendedRegisterOptions = {
    ...config,
    ...(inputType === "number" && { valueAsNumber: true }),
  };

  const initialValue =
    selectedEntry && selectedEntry[fieldName] !== null
      ? selectedEntry[fieldName]
      : defaultValue;

  const [inputValue, setInputValue] = useState<number | undefined>(
    initialValue !== null ? initialValue : undefined
  );

  const [newValueEntered, setNewValueEntered] = useState<boolean>(false);

  const handleFocus = () => {
    if (inputValue === 0 && !newValueEntered) {
      setInputValue(undefined);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string
  ) => {
    setNewValueEntered(true);
    if (e.target.value && inputType === "float") {
      setInputValue(parseFloat(e.target.value));
      setValue(fieldName, parseFloat(e.target.value));
    } else if (e.target.value && inputType === "number") {
      setInputValue(parseInt(e.target.value, 10));
      setValue(fieldName, parseInt(e.target.value, 10));
    } else {
      setInputValue(undefined);
      setValue(fieldName, undefined);
    }
  };

  const handleBlur = () => {
    if (!newValueEntered) {
      setInputValue(initialValue !== null ? initialValue : undefined);
      setValue(fieldName, initialValue !== null ? initialValue : undefined);
    } else if (inputValue === undefined) {
      setInputValue(0);
      setValue(fieldName, 0);
    }
  };

  useEffect(() => {
    // Set initial value to the form context
    if (initialValue !== undefined) {
      setValue(fieldName, initialValue);
      setInputValue(initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldName, initialValue, setValue]);

  switch (inputType) {
    case "text":
      return (
        <S.Info>
          <S.InputLabelText>{`${label}${
            config.required === "Required" ? "*" : ""
          }`}</S.InputLabelText>
          <S.Input
            disabled={closed}
            type="text"
            {...register(fieldName, registerOptions)}
            name={fieldName}
            defaultValue={
              selectedEntry ? selectedEntry[fieldName] : defaultValue
            }
          />
        </S.Info>
      );
    case "number":
      return (
        <S.Info>
          <S.InputLabelText>{`${label}${
            config.required === "Required" ? "*" : ""
          }`}</S.InputLabelText>
          <S.Input
            disabled={closed}
            type="number"
            {...register(fieldName, registerOptions)}
            name={fieldName}
            value={inputValue ?? ""}
            onFocus={handleFocus}
            onChange={(e) => handleChange(e, "number")}
            onBlur={handleBlur}
          />
        </S.Info>
      );
    case "float":
      return (
        <S.Info>
          <S.InputLabelText>{`${label}${
            config.required === "Required" ? "*" : ""
          }`}</S.InputLabelText>
          <S.Input
            disabled={closed}
            type="number"
            step={"0.1"}
            {...register(fieldName, registerOptions)}
            name={fieldName}
            value={inputValue ?? ""}
            onFocus={handleFocus}
            onChange={(e) => handleChange(e, "float")}
            onBlur={handleBlur}
          />
        </S.Info>
      );
    case "dropdown":
      return (
        <S.Info>
          <S.InputLabelText>{`${label}${
            config.required === "Required" ? "*" : ""
          }`}</S.InputLabelText>
          <S.Select
            disabled={closed}
            {...register(fieldName, registerOptions)}
            name={fieldName}
            defaultValue={
              selectedEntry
                ? options.find((o) => o.value === selectedEntry[fieldName])
                    ?.value
                : defaultValue
            }
          >
            <option value={""}>{null}</option>
            {options?.map((o, index: number) => (
              <option key={index} value={o.value}>
                {o.label}
              </option>
            ))}
          </S.Select>
        </S.Info>
      );
    default:
      return <input type="text" />;
  }
};
