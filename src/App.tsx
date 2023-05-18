import { useEffect, useState } from "react";
import "./styles.css";
import Head from "./components/Head";
import { sortById, sortByIdent, sortByName } from "./util/Functions";
const colorIdents = [
  {
    ident: "un",
    props: {
      color: "red",
    },
  },
  {
    ident: "deux",
    props: {
      color: "green",
    },
  },
  {
    ident: "trois",
    props: {
      color: "blue",
    },
  },
];
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
const uid = function () {
  return "id" + Math.random().toString(16).slice(2);
};

type mainObject = {
  id: string;
  name: string;
  ident: string;
};
export default function App() {
  const [data, setData] = useState<mainObject[]>();
  const [displayedVersionOfData, setDisplayedVersionOfData] =
    useState<mainObject[]>();
  const [filter, setFilter] = useState<string>("");
  const [idFilter, setIdFilter] = useState<boolean>(false);
  const [nameFilter, setNameFilter] = useState<boolean>(false);
  const [identFilter, setIdentFilter] = useState<boolean>(false);
  const [selectedCells, setSelectedCells] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const handleClick = (id: string) => {
    const isSelected = selectedCells.includes(id);
    if (isSelected) {
      setSelectedCells(selectedCells.filter((cellId) => cellId !== id));
    } else {
      setSelectedCells([...selectedCells, id]);
    }
  };

  useEffect(() => {
    const objectCreator = () => {
      let arr: mainObject[] = [];
      for (let i = 0; i < 1000; i++) {
        const selector = colorIdents[getRandomInt(3)].ident;
        arr.push({
          id: uid(),
          name: "string" + i,
          ident: selector,
        });
      }
      return arr;
    };
    const array = objectCreator();
    setData(array);
    setDisplayedVersionOfData(array);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (data !== undefined) {
      const sortedData = sortByName(data, nameFilter);

      setDisplayedVersionOfData(sortedData);
    }
  }, [nameFilter]);

  useEffect(() => {
    if (data !== undefined) {
      const sortedData = sortByIdent(data, identFilter);

      setDisplayedVersionOfData(sortedData);
    }
  }, [identFilter]);

  useEffect(() => {
    if (data !== undefined) {
      const sortedData = sortById(data, idFilter);

      setDisplayedVersionOfData(sortedData);
    }
  }, [idFilter]);

  const handleInputValue = (e: string) => {
    const removeSpaces = e.split(" ").join("");
    setFilter(e);
    if (data !== undefined) {
      const filteredData: mainObject[] = data?.filter(
        (item) =>
          item.id.includes(removeSpaces) ||
          item.name.includes(removeSpaces) ||
          item.ident.includes(removeSpaces)
      );
      setDisplayedVersionOfData(filteredData);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (displayedVersionOfData !== undefined) {
    return (
      <div className="App">
        <p>
          {selectedCells.map((cell) => {
            return cell + "-";
          })}
        </p>
        <label>
          Database filtering :
          <input
            type="text"
            name="name"
            value={filter}
            onChange={(e) => handleInputValue(e.target.value)}
          />
        </label>
        <table>
          <Head
            idFilter={idFilter}
            setIdFilter={setIdFilter}
            setIdentFilter={setIdentFilter}
            identFilter={identFilter}
            nameFilter={nameFilter}
            setNameFilter={setNameFilter}
          />
          <tbody>
            {displayedVersionOfData.map((object, i) => {
              const { id, name, ident } = object;

              const isSelected = selectedCells.includes(id);
              const cellClassName = isSelected
                ? colorIdents.find((item) => item.ident === ident)?.props.color
                : "";
              return (
                <tr
                  key={id}
                  style={{ backgroundColor: `${cellClassName}` }}
                  onClick={() => handleClick(id)}
                >
                  <th>{id}</th>
                  <th>{name}</th>
                  <th>{ident}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <></>;
  }
}
