export interface ITextarea {
    label: string
    placeholder: string
    value: string
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}