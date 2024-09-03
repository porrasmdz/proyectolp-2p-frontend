import {
  Admin,
  Resource,
  ShowGuesser
} from "react-admin";
import customProvider from "./dataProvider";
import { ScraperCreate } from "./ScraperCreate";
import { ScraperList } from "./ScraperList";
import { ScraperEdit } from "./ScraperEdit";

export const App = () => (
  //@ts-ignore
  <Admin dataProvider={customProvider}>
    <Resource
      name="scrapers"
      list={ScraperList}
      edit={ScraperEdit}
      show={ShowGuesser}
      create={ScraperCreate}
    />  
</Admin>
);