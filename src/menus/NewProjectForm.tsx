import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/context";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { DynamicFormInputControl } from "../components/forms/DynamicFormInputControl";
import { createData } from "../api/rest/data";
import { DataPayload } from "../api/models/payload/data";
import { FormEntryObject } from "../types/data";
import { FormFields } from "../types/forms";
import { fetchFormByLabel } from "../api/rest/data";
import { Form } from "../types/forms";
import AlertMessage, { AlertObj, initAlertData } from "../components/Alert";
import * as S from "../components/forms/Form.styled";

export const NewProjectForm = () => {
  const formMethods = useForm();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = formMethods;
  const navigate = useNavigate();
  const { projectId, setProjectId } = useContext(DataContext);
  const [selectedForm, setSelectedForm] = useState<null | Form>(null);
  const [isShowingAlert, setShowingAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<AlertObj>(initAlertData);

  const onSubmit = async (data: FormEntryObject) => {
    if (selectedForm) {
      console.log("form data is", data);
      const payload: DataPayload = {};

      selectedForm.fields.forEach((field: FormFields) => {
        if (data.hasOwnProperty(field.fieldName as keyof DataPayload)) {
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
        setProjectId(response.data.id);
        reset();
        navigate("/system-sizing");
      } catch (error) {
        console.error("Error creating new project", error);
        setAlertMessage({
          type: "error",
          value: "Error creating new project.",
        });
        setShowingAlert(true);
      }
    }
  };

  const fetchFormConfig = async () => {
    try {
      const formConfig = await fetchFormByLabel("project");
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
