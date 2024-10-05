export default interface ISwitchButton {
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
    option1: string
    option2: string
}