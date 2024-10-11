import { ChangeEvent } from "react";

export interface IImageInput {
    handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}