import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser
} from "react-admin";
import customProvider from "./dataProvider";
import { ScraperCreate } from "./ScraperCreate";

export const App = () => (
  //@ts-ignore
  <Admin dataProvider={customProvider}>
    <Resource
      name="scrapers"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      create={ScraperCreate}
    />  
  </Admin>
);