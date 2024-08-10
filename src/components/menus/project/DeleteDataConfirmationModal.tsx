import { Modal } from "@mui/material";
import IconBtn from "./IconBtn";
import { Data, DataObject } from "../../../types/data";
import * as S from "./ConfirmationModal.styled";

const DeleteDataConfirmationModal = ({
  open,
  id,
  toggleDeleteDataModal,
  handleDeleteData,
  handleSetProjectId,
}: {
  open: boolean;
  id: number | null;
  toggleDeleteDataModal: () => void;
  handleDeleteData: (id: Data) => void;
  handleSetProjectId: (id: number | null) => void;
}) => {
  return (
    <>
      {id && (
        <Modal
          sx={{ zIndex: "10000" }}
          open={open}
          onClose={() => {
            toggleDeleteDataModal();
            handleSetProjectId(null);
          }}
        >
          <S.ModalWrapper>
            <S.Modal>
              <S.ModalButtonWrapper>
                <IconBtn
                  onClick={() => {
                    toggleDeleteDataModal();
                    handleSetProjectId(null);
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
                      handleDeleteData(id);
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
