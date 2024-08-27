import {
  Admin,
  Resource,
  
} from "react-admin";
import customProvider from "./dataProvider";
import { ScraperCreate } from "./ScraperCreate";

export const App = () => (
  //@ts-ignore
  <Admin dataProvider={customProvider}>
    <Resource
      name="scrapers"
    
      create={ScraperCreate}
    />
  </Admin>
);
