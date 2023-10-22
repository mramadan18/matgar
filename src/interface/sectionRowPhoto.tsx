import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface propsValues {
  head?: string;
  subHead?: string;
  ul?: [string];
  img: string | StaticImport;
}
