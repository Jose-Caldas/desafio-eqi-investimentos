import { createContext, ReactNode, useState, useContext } from "react";
import { GET_SIMULATORS } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { ISimulators } from "../../interfaces/ISimulators";

type InitialValuesProps = {
  graphs: ISimulators[];
  setGraphs: React.Dispatch<React.SetStateAction<never[]>>;
  getGraphs: () => void;
};

const initialValues = {
  graphs: [],
  setGraphs: () => {},
  getGraphs: () => {},
};

export const GraphContext = createContext<InitialValuesProps>(initialValues);

type ContextProps = {
  children: ReactNode;
};

export const GraphContextProvider = ({ children }: ContextProps) => {
  const [graphs, setGraphs] = useState([]);

  const { request } = useFetch();

  async function getGraphs() {
    const { url, options } = GET_SIMULATORS();
    const { response, data } = await request(url, options);
    if (response) setGraphs(data);
  }

  return (
    <GraphContext.Provider value={{ graphs, setGraphs, getGraphs }}>
      {children}
    </GraphContext.Provider>
  );
};

export const useGraphContext = () => {
  const context = useContext(GraphContext);
  return context;
};
