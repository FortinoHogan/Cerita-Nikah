export interface IAuthInput {
    type: string
    placeholder: string
    value: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    image?: string
}