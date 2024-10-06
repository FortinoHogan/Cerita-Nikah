import { ChangeEvent } from "react"

export interface ITimeRangeInput {
    label1: string
    placeholder1: string
    label2: string
    placeholder2: string
    value1: string
    value2: string
    onChange1: (event: React.ChangeEvent<HTMLInputElement>) => void
    onChange2: (event: React.ChangeEvent<HTMLInputElement>) => void
}