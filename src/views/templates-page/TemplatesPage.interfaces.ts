import { ITemplatePersonalized } from "../../interfaces/templatePersonalized.interfaces";

export interface ITemplatesPage {
    template: ITemplatePersonalized
    view?: string
    fromWebView?: boolean
}