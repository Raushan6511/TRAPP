import { ImageRequireSource } from "react-native";

export interface ICarouselData {
  // TODO:Satyam - This will handle the navigation once the enum is shared
  /** redirectType : is an optional prop and it provides the redirection type for the carousel content */
  redirectType?: string;
  /** data : is an optional prop and it provides carousel image url */
  url?: string | ImageRequireSource;
  /** id : is an optional prop and it provides carousel image id */
  id?: string;
}
export interface IDropdownOption {
  /** id: is a required prop that provides id of the dropdown option */
  id: string;
  /** label: is a required prop that provides label of the dropdown option */
  label: string;
}
