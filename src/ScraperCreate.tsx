import { Create, SimpleForm, TextInput } from 'react-admin';

export const ScraperCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="url" />
        </SimpleForm>
    </Create>
);