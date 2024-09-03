import { Datagrid, DateField, List, TextField } from 'react-admin';

export const ScraperList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
           
        </Datagrid>
    </List>
);