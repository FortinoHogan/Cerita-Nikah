import { ChangeEvent } from "react";

export interface IDropdownList {
    options: { name: string }[];
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    label: string
}