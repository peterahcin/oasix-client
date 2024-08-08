import { Modal } from "@mui/material";
import IconBtn from "./IconBtn";
import { Data, DataObject } from "../../../types/data";
import * as S from "./ConfirmationModal.styled";

const DeleteDataConfirmationModal = ({
  open,
  data,
  toggleDeleteDataModal,
  handleDeleteData,
  handleSelectedEntry,
}: {
  open: boolean;
  data: null | DataObject;
  toggleDeleteDataModal: () => void;
  handleDeleteData: (id: Data) => void;
  handleSelectedEntry: (entry: DataObject | null) => void;
}) => {
  return (
    <>
      {data && (
        <Modal
          sx={{ zIndex: "10000" }}
          open={open}
          onClose={() => {
            toggleDeleteDataModal();
            handleSelectedEntry(null);
          }}
        >
          <S.ModalWrapper>
            <S.Modal>
              <S.ModalButtonWrapper>
                <IconBtn
                  onClick={() => {
                    toggleDeleteDataModal();
                    handleSelectedEntry(null);
                  }}
                >
                  <S.CrossSimpleIcon />
                </IconBtn>
              </S.ModalButtonWrapper>
              <S.Container>
                <S.Text>test</S.Text>

                <S.ButtonContainer>
                  <S.Button
                    small={true}
                    create={true}
                    onClick={() => {
                      handleDeleteData(data.id);
                      toggleDeleteDataModal();
                    }}
                  >
                    Potrdi
                  </S.Button>
                  <S.Button
                    small={true}
                    cancel={true}
                    onClick={() => toggleDeleteDataModal()}
                  >
                    Prekliči
                  </S.Button>
                </S.ButtonContainer>
              </S.Container>
            </S.Modal>
          </S.ModalWrapper>
        </Modal>
      )}
    </>
  );
};
export default DeleteDataConfirmationModal;
