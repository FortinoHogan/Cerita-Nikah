export interface IInput {
    label: string
    placeholder: string
    value: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}