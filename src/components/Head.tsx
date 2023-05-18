import React from "react";
interface HeadProps {
  idFilter: boolean;
  setIdFilter: React.Dispatch<React.SetStateAction<boolean>>;
  nameFilter: boolean;
  setNameFilter: React.Dispatch<React.SetStateAction<boolean>>;
  identFilter: boolean;
  setIdentFilter: React.Dispatch<React.SetStateAction<boolean>>;
}
const Head: React.FC<HeadProps> = ({
  idFilter,
  setIdFilter,
  nameFilter,
  setNameFilter,
  identFilter,
  setIdentFilter
}) => {
  return (
    <thead className="table-head">
      <tr>
        <th onClick={() => setIdFilter(!idFilter)}>id</th>
        <th onClick={() => setNameFilter(!nameFilter)}>name</th>
        <th onClick={() => setIdentFilter(!identFilter)}>identificator</th>
      </tr>
    </thead>
  );
};
export default Head;
