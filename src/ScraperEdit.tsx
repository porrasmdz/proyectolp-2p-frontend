import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const ScraperEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="url" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
        </SimpleForm>
    </Edit>
);