import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";

const apiUrl = import.meta.env.VITE_SIMPLE_REST_URL;
const httpClient = (url: string, options: any = {}) => {
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider(apiUrl, httpClient);
dataProvider.supportAbortSignal = true;

const customProvider = {
  ...dataProvider,
  getList: async (resource: any) => {
    const url =
      `${apiUrl}/${resource}`

    const response = httpClient(url).then(({ json }) => {
      console.log(json)
      const filtered = json.map(obj => {
        // Crea una nueva copia del objeto sin la clave que quieres eliminar
        const { ["raw_html"]: _, ...newObj } = obj;
        return newObj;
      });
      return {
        data: filtered,
        total: json.length
      };
    });
    return response;
  },
  getManyReference: async (resource: any, params: any) => {
    const url =
      `${apiUrl}/${resource}`;
    const { json } = await httpClient(url, { signal: params.signal });

    return {
      data: json,
      total: json.length
    };
  },
  delete: async (resource: any, params: any) => {
    await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    });
    return { data: {"detail":"successful"} };
  },
  deleteMany: (resource: any, params: any) =>
    Promise.all(
        params.ids.map((id: any) =>
            httpClient(`${apiUrl}/${resource}/${id}`, {
                method: 'DELETE',
            })
        )
    ).then(responses => ({
        data: responses.map(() => "success"),
    }))
};
export default customProvider;
