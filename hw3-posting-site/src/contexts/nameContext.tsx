import { createContext } from "react";

export type NameContext = {
    name: string;
    setName: (name: string) => void;
};

export const NameContext = createContext<NameContext>({} as NameContext);
