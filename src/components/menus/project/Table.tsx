import React, { useState, useEffect, useContext } from "react";
import { Tooltip } from "@mui/material";
import { DataContext } from "../../../context/context";
import ReactPaginate from "react-paginate";
import IconBtn from "./IconBtn";
import DeleteDataConfirmationModal from "./DeleteDataConfirmationModal";
import AlertMessage, { AlertObj, initAlertData } from "../../Alert";
import { Form } from "../../../types/forms";
import { TableDataObject, DataObject, Data } from "../../../types/data";
import { fetchTableData, deleteData } from "../../../api/rest/data";
import "./pagination.css";
import * as S from "./Table.styled";

const itemsPerPage = 10;

interface PageChangeEvent {
  selected: number;
}

const Table = ({ selectedForm }: { selectedForm: Form | null }) => {
  const [data, setData] = useState<TableDataObject[]>([]);
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);
  const [listOfLongestHeaderWords, setListOfLongestHeaderWords] = useState<
    number[]
  >([]);
  const [fieldNames, setFieldNames] = useState<string[]>([]);
  const { projectId, setProjectId } = useContext(DataContext);
  // pageNumber is 0 indexed for paginate
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [
    deleteDataConfirmationModalOpen,
    setDeleteDataConfirmationModalOpenClose,
  ] = useState<boolean>(false);
  const [isShowingAlert, setShowingAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<AlertObj>(initAlertData);

  const handlePageClick = (event: PageChangeEvent) => {
    setPageNumber(event.selected);
    handleFetchTableData(event.selected);
  };

  const handleEditClick = (id: number) => {
    setProjectId(id);
  };

  const handleDeleteClick = async (id: Data) => {
    if (typeof id === "number" && selectedForm) {
      try {
        //this needs to be modified
        const response = await deleteData(selectedForm.label, id);
        console.log("response from delete is", response);
        if (data.length === 1) {
          handleFetchTableData(pageNumber - 1);
          handleSetProjectId(null);
        } else {
          handleFetchTableData(pageNumber);
          handleSetProjectId(null);
        }
      } catch (error) {
        console.error("Error deleting data.", error);
        setAlertMessage({
          type: "error",
          value: "Error deleting data.",
        });
        setShowingAlert(true);
      }
    }
  };

  const handleSetProjectId = (id: number | null) => {
    setProjectId(id);
  };

  const handleOpenCloseDeleteDataModal = () => {
    setDeleteDataConfirmationModalOpenClose((state) => !state);
  };

  const formatDate = (isoDateString: string): string => {
    const date = new Date(isoDateString);
    // Correctly use the type literals 'numeric', '2-digit', or 'narrow'
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const getValue = (
    item: DataObject,
    key: string | number,
    databaseValue: string | number | null
  ): string => {
    let value: string | number = "--";
    if (selectedForm) {
      const field = selectedForm.fields.find(
        (field) => field.fieldName === key
      );
      if (field && field.options) {
        const option = field.options.find(
          (option) => option.value === item[key]
        );
        if (option) {
          value = option.label;
        }
      } else if (key === "created_date" && typeof databaseValue === "string") {
        value = formatDate(databaseValue);
      } else {
        value =
          item[key] && key === "year"
            ? String(item[key])
            : item[key] !== null
            ? item[key]?.toLocaleString() ?? "--"
            : "--";
      }
    }
    return value;
  };

  //GET TABLE DATA BASED ON GROUP FORM ID, PAGE & SIZE
  const handleFetchTableData = async (whatPage: number) => {
    if (selectedForm) {
      try {
        const response = await fetchTableData({
          page: whatPage + 1,
          size: itemsPerPage,
        });
        console.log("response from fetchData is", response.data);
        setPageCount(response.data.pages);
        setPageNumber(whatPage);
        setData(response.data.items);
      } catch (error) {
        setData([]);
        console.error("Error fetching table data:", error);
        setAlertMessage({
          type: "error",
          value: "Error fetching table data.",
        });
        setShowingAlert(true);
      }
    }
  };

  //SET TABLE HEADERS BASED ON SELECTED FORM
  useEffect(() => {
    if (selectedForm) {
      // const headers = selectedForm.fields.map((field) => field.label);
      // setTableHeaders([...headers, "Created"]);
      setTableHeaders([
        "Name",
        "Description",
        "Owner",
        "Created",
        "Load Profile",
        "Hot Water",
        "Space Heating",
        "Cooling",
        "Cold Storage",
        "Hot Storage",
        "Heat Pump",
      ]);
    } else {
      setTableHeaders([]);
    }
  }, [selectedForm]);

  //SET FIELDS BASED ON SELECTED FORM
  // useEffect(() => {
  //   if (selectedForm) {
  //     const rowFields = selectedForm.fields.map((field) => field.fieldName);
  //     setFieldNames([...rowFields, "created_date"]);
  //   }
  // }, [selectedForm]);

  useEffect(() => {
    console.log("selectedForm is", selectedForm);
    if (selectedForm) {
      handleFetchTableData(0);
    }
    // eslint-disable-next-line
  }, [selectedForm]);

  useEffect(() => {
    console.log("data is", data);
  }, [data]);

  useEffect(() => {
    const returnListOfLengthsOfLongestWords = (headers: string[]) => {
      let listOfLongestWords: number[] = [];

      for (let header of headers) {
        const words = header.split(" ");
        let maxLength = 0;

        for (let word of words) {
          if (word.length > maxLength) {
            maxLength = word.length;
          }
        }
        listOfLongestWords.push(maxLength);
      }
      setListOfLongestHeaderWords(listOfLongestWords);
      console.log("list of longest header words", listOfLongestHeaderWords);
    };

    if (tableHeaders.length) {
      returnListOfLengthsOfLongestWords(tableHeaders);
    }
  }, [tableHeaders]);
  return (
    <>
      {data.length >= 1 && (
        <S.Container>
          <S.SubContainer style={{ minWidth: "100%" }}>
            <S.TableAndPaginateContainer>
              <S.TableWrapper>
                <S.Table>
                  <S.Header>
                    <S.HeaderRow
                      listOfLongestHeaderWords={listOfLongestHeaderWords}
                    >
                      {tableHeaders.length >= 1 && (
                        <>
                          <S.HeaderCell
                            style={{ minWidth: "34px", maxWidth: "34px" }}
                          />
                          <S.HeaderCell
                            style={{ minWidth: "34px", maxWidth: "34px" }}
                          />
                          <S.HeaderCell
                            style={{ minWidth: "34px", maxWidth: "34px" }}
                          />
                          {tableHeaders.map((title: string, i: number) => (
                            <Tooltip key={`${title}-${i}`} title={title}>
                              <S.HeaderCell
                                style={{
                                  minWidth: `${
                                    listOfLongestHeaderWords[i] * 24
                                  }px`,
                                  maxWidth: `${
                                    listOfLongestHeaderWords[i] * 24
                                  }px`,
                                }}
                              >
                                {title}
                              </S.HeaderCell>
                            </Tooltip>
                          ))}
                        </>
                      )}
                    </S.HeaderRow>
                  </S.Header>
                  <S.Body>
                    {data.map((item: TableDataObject, i: number) => (
                      <S.Row
                        listOfLongestHeaderWords={listOfLongestHeaderWords}
                        key={i}
                        style={
                          i === data.length - 1 ? { borderBottom: "none" } : {}
                        }
                      >
                        <Tooltip
                          title="delete entry"
                          style={{ minWidth: "34px", maxWidth: "34px" }}
                        >
                          <S.Cell>
                            <IconBtn
                              onClick={() => {
                                handleSetProjectId(item.project.id);
                                handleOpenCloseDeleteDataModal();
                              }}
                            >
                              <S.DeleteSimpleIcon />
                            </IconBtn>
                          </S.Cell>
                        </Tooltip>
                        <Tooltip
                          title="edit entry"
                          style={{ minWidth: "34px", maxWidth: "34px" }}
                        >
                          <S.Cell>
                            <IconBtn
                              onClick={() => {
                                handleSetProjectId(item.project.id);
                              }}
                            >
                              <S.EditSimpleIcon />
                            </IconBtn>
                          </S.Cell>
                        </Tooltip>
                        <Tooltip
                          title="see results"
                          style={{ minWidth: "34px", maxWidth: "34px" }}
                        >
                          <S.Cell>
                            <IconBtn
                              onClick={() => {
                                handleSetProjectId(item.project.id);
                              }}
                            >
                              <S.ViewSimpleIcon />
                            </IconBtn>
                          </S.Cell>
                        </Tooltip>
                        <Tooltip title={item.project.name}>
                          <S.Cell
                            style={{
                              minWidth: `${listOfLongestHeaderWords[0] * 24}px`,
                              maxWidth: `${listOfLongestHeaderWords[0] * 24}px`,
                            }}
                          >
                            {item.project.name}
                          </S.Cell>
                        </Tooltip>
                        <Tooltip title={item.project.description}>
                          <S.Cell
                            style={{
                              minWidth: `${listOfLongestHeaderWords[1] * 24}px`,
                              maxWidth: `${listOfLongestHeaderWords[1] * 24}px`,
                            }}
                          >
                            {item.project.description}
                          </S.Cell>
                        </Tooltip>
                        <Tooltip title={item.project.owner}>
                          <S.Cell
                            style={{
                              minWidth: `${listOfLongestHeaderWords[2] * 24}px`,
                              maxWidth: `${listOfLongestHeaderWords[2] * 24}px`,
                            }}
                          >
                            {item.project.owner}
                          </S.Cell>
                        </Tooltip>
                        <Tooltip title={formatDate(item.project.created_date)}>
                          <S.Cell
                            style={{
                              minWidth: `${listOfLongestHeaderWords[3] * 24}px`,
                              maxWidth: `${listOfLongestHeaderWords[3] * 24}px`,
                            }}
                          >
                            {formatDate(item.project.created_date)}
                          </S.Cell>
                        </Tooltip>
                        <Tooltip title={item.simulation_params.load_profile}>
                          <S.Cell
                            style={{
                              minWidth: `${listOfLongestHeaderWords[4] * 24}px`,
                              maxWidth: `${listOfLongestHeaderWords[4] * 24}px`,
                            }}
                          >
                            {item.simulation_params.load_profile}
                          </S.Cell>
                        </Tooltip>
                        <Tooltip title={item.simulation_params.hot_water}>
                          <S.Cell
                            style={{
                              minWidth: `${listOfLongestHeaderWords[5] * 24}px`,
                              maxWidth: `${listOfLongestHeaderWords[5] * 24}px`,
                            }}
                          >
                            {item.simulation_params.hot_water}
                          </S.Cell>
                        </Tooltip>
                        <Tooltip title={item.simulation_params.space_heating}>
                          <S.Cell
                            style={{
                              minWidth: `${listOfLongestHeaderWords[6] * 24}px`,
                              maxWidth: `${listOfLongestHeaderWords[6] * 24}px`,
                            }}
                          >
                            {item.simulation_params.space_heating}
                          </S.Cell>
                        </Tooltip>
                        <Tooltip title={item.simulation_params.cooling}>
                          <S.Cell
                            style={{
                              minWidth: `${listOfLongestHeaderWords[7] * 24}px`,
                              maxWidth: `${listOfLongestHeaderWords[7] * 24}px`,
                            }}
                          >
                            {item.simulation_params.cooling}
                          </S.Cell>
                        </Tooltip>
                        <Tooltip
                          title={item.system_sizing.cold_storage_capacity}
                        >
                          <S.Cell
                            style={{
                              minWidth: `${listOfLongestHeaderWords[8] * 24}px`,
                              maxWidth: `${listOfLongestHeaderWords[8] * 24}px`,
                            }}
                          >
                            {item.system_sizing.cold_storage_capacity}
                          </S.Cell>
                        </Tooltip>
                        <Tooltip
                          title={item.system_sizing.hot_storage_capacity}
                        >
                          <S.Cell
                            style={{
                              minWidth: `${listOfLongestHeaderWords[9] * 24}px`,
                              maxWidth: `${listOfLongestHeaderWords[9] * 24}px`,
                            }}
                          >
                            {item.system_sizing.hot_storage_capacity}
                          </S.Cell>
                        </Tooltip>
                        <Tooltip title={item.system_sizing.heat_pump_size}>
                          <S.Cell
                            style={{
                              minWidth: `${
                                listOfLongestHeaderWords[10] * 24
                              }px`,
                              maxWidth: `${
                                listOfLongestHeaderWords[10] * 24
                              }px`,
                            }}
                          >
                            {item.system_sizing.heat_pump_size}
                          </S.Cell>
                        </Tooltip>
                        {/* {fieldNames.map((key, i) => {
                          const itemKey = key as keyof ResponseData;

                          return (
                            <Tooltip
                              key={i}
                              title={getValue(item, itemKey, item[itemKey])}
                            >
                              <S.Cell
                                onClick={() => handleEditClick(item)}
                                style={{
                                  minWidth: `${
                                    listOfLongestHeaderWords[i] * 24
                                  }px`,
                                  maxWidth: `${
                                    listOfLongestHeaderWords[i] * 24
                                  }px`,
                                }}
                              >
                                {getValue(item, itemKey, item[itemKey])}
                              </S.Cell>
                            </Tooltip>
                          );
                        })} */}
                      </S.Row>
                    ))}
                  </S.Body>
                </S.Table>
              </S.TableWrapper>
              {data.length >= 1 && (
                <ReactPaginate
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  forcePage={pageNumber}
                  previousLabel="< previous"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item end-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item end-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              )}
            </S.TableAndPaginateContainer>
          </S.SubContainer>

          <DeleteDataConfirmationModal
            handleSetProjectId={handleSetProjectId}
            id={projectId}
            toggleDeleteDataModal={handleOpenCloseDeleteDataModal}
            handleDeleteData={handleDeleteClick}
            open={deleteDataConfirmationModalOpen}
          />
          <AlertMessage
            type={alertMessage?.type}
            text={alertMessage?.value}
            open={isShowingAlert}
            onClose={() => setShowingAlert(false)}
          ></AlertMessage>
        </S.Container>
      )}
    </>
  );
};

export default Table;
