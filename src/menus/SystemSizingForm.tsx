import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { FormProvider, useForm } from "react-hook-form";
import { DynamicFormInputControl } from "../components/forms/DynamicFormInputControl";
import { createData } from "../api/rest/data";
import { fetchFormByLabel } from "../api/rest/data";
import { DataPayload } from "../api/models/payload/data";
import { FormEntryObject } from "../types/data";
import { FormFields } from "../types/forms";
import { Form } from "../types/forms";
import AlertMessage, { AlertObj, initAlertData } from "../components/Alert";
import * as S from "../components/forms/Form.styled";

export const SystemSizingForm = () => {
  const formMethods = useForm();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = formMethods;
  const navigate = useNavigate();
  const { projectId } = useContext(DataContext);
  const [selectedForm, setSelectedForm] = useState<null | Form>(null);
  const [isShowingAlert, setShowingAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<AlertObj>(initAlertData);

  const onSubmit = async (data: FormEntryObject) => {
    if (selectedForm) {
      console.log("form data is", data);
      const payload: DataPayload = { project_id: projectId };

      selectedForm.fields.forEach((field: FormFields) => {
        if (data.hasOwnProperty(field.fieldName as keyof DataPayload)) {
          console.log("data[field.fieldName", data[field.fieldName]);
          payload[field.fieldName] =
            field.inputType === "dropdown" && data[field.fieldName]
              ? Number(data[field.fieldName])
              : //this is needed to send 0 to the database
              field.inputType === "number"
              ? data[field.fieldName]
              : data[field.fieldName]
              ? data[field.fieldName]
              : null;
        }
      });
      console.log("payload is", payload);
      try {
        const response = await createData(selectedForm.label, payload);
        console.log("response from creating is", response.data);
        reset();
        navigate("/simulation-parameters");
      } catch (error) {
        console.error("Error saving system sizing", error);
        setAlertMessage({
          type: "error",
          value: "Error saving system sizing.",
        });
        setShowingAlert(true);
      }
    }
  };

  const fetchFormConfig = async () => {
    try {
      const formConfig = await fetchFormByLabel("system-sizing");
      console.log("formConfig response is", formConfig.data);
      setSelectedForm(formConfig.data);
    } catch (error) {
      console.error("Error fetching form", error);
      setAlertMessage({
        type: "error",
        value: "Error fetching form.",
      });
      setShowingAlert(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  useEffect(() => {
    reset();
    fetchFormConfig();
    // eslint-disable-next-line
  }, []);

  return (
    <S.InfoSection>
      <S.Form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
        <S.GridContainer>
          <FormProvider {...formMethods}>
            {selectedForm &&
              selectedForm.fields.map((d: FormFields, i: number) => (
                <div key={`${d.fieldName}-${i}`}>
                  <S.InfoItem>
                    <DynamicFormInputControl closed={false} {...d} />
                  </S.InfoItem>
                  <S.RedErrorMessageContainer>
                    <ErrorMessage errors={errors} name={d.fieldName} />
                  </S.RedErrorMessageContainer>
                </div>
              ))}
          </FormProvider>
        </S.GridContainer>
        <S.ButtonContainer>
          <S.Button id="right" type="submit" disabled={isSubmitting}>
            Submit
          </S.Button>
        </S.ButtonContainer>
      </S.Form>
      <AlertMessage
        type={alertMessage?.type}
        text={alertMessage?.value}
        open={isShowingAlert}
        onClose={() => setShowingAlert(false)}
      ></AlertMessage>
    </S.InfoSection>
  );
};
