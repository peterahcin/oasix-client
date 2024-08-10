import styled from "@emotion/styled";
import { ReactComponent as ArrowDownIcon } from "../../icons/arrow-down.svg";
import { ReactComponent as DeleteSimpleIconIcons } from "../../../icons/trash-can-with-cover-svgrepo-com.svg";
import { Colors } from "../../../styles/colors";
import { FontSize } from "../../../styles/fontSize";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TableAndPaginateContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  min-width: 100%;
  border-bottom: 1px dotted ${Colors.black25};
`;

export const Table = styled.table`
  border-radius: 8px;
  max-height: calc(100vh - 250px);
  border-collapse: collapse;
  display: table;
  min-width: 100%;
`;

export const Body = styled.tbody`
  & > tr {
    border-bottom: 1px solid ${Colors.black10};
  }
`;

export const Header = styled.thead`
  border-radius: 8px;
`;

export const HeaderRow = styled.tr<{
  listOfLongestHeaderWords: number[];
}>`
  background-image: radial-gradient(
      at 30% 0%,
      hsl(162, 77%, 40%) 0,
      transparent 100%
    ),
    radial-gradient(at 82% 65%, hsl(198, 100%, 50%) 0, transparent 55%);
  /* display: grid;
  grid-template-columns: ${({ listOfLongestHeaderWords }) => {
    const columnWidths = listOfLongestHeaderWords.map(
      (wordLength) => `minmax(${wordLength * 20}px, auto)`
    );
    return [`minmax(35px, 35px)`, ...columnWidths].join(" ");
  }}; */
  display: flex;
  padding: 0 8px;
  border-radius: 8px;
`;

export const HeaderCell = styled.th`
  padding: 7.5px 0px; //this makes the header an even 40px high
  font-size: ${FontSize.xs};
  color: ${Colors.black};
  font-family: "Inter";
  letter-spacing: 0.2px;
  display: flex;
  justify-content: left;
  white-space: normal;
`;

export const Row = styled.tr<{
  listOfLongestHeaderWords: number[];
}>`
  display: flex;
  align-items: center;
  /* display: grid; */
  /* grid-template-columns: ${({ listOfLongestHeaderWords }) => {
    const columnWidths = listOfLongestHeaderWords.map(
      (wordLength) => `minmax(${wordLength * 20}px, auto)`
    );
    return [`minmax(35px, 35px)`, ...columnWidths].join(" ");
  }}; */
  padding: 0 8px;
  border-radius: 8px;

  :hover {
    cursor: pointer;
    background-color: #98e5d4;
    font-weight: 600;
  }
`;

export const Cell = styled.td`
  cursor: pointer;
  /* margin: auto; */
  font-size: ${FontSize.xs};
  color: ${Colors.black};
  font-family: "Inter";
  letter-spacing: 0.2px;
  text-align: left;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const EmptyList = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  color: ${Colors.black25};
  opacity: 0.7;
  font-family: "Inter";
  font-size: ${FontSize.sm};
  font-weight: 600;
  text-transform: uppercase;
`;

export const DeleteSimpleIcon = styled(DeleteSimpleIconIcons)`
  fill: ${Colors.black75};
  width: 16px;
  height: 16px;
`;
