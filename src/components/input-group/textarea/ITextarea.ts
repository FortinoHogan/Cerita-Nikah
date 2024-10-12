import { ChangeEvent } from "react"

export interface ITextarea {
    label?: string
    placeholder: string
    value: string
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}