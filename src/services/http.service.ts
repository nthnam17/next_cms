import axiosInstance from './http-common';

class axiosInstanceDataService {
    get($resource: string) {
        return axiosInstance.get<any>($resource);
    }

    // get(id: string) {
    //     return axiosInstance.get<ITutorialData>(`/tutorials/${id}`);
    // }

    post(resource: string, data: any) {
        return axiosInstance.post<any>(resource, data);
    }

    put(resource: string, data: any) {
        return axiosInstance.put<any>(`/${resource}`, data);
    }

    delete(resource: string, id: number) {
        return axiosInstance.delete<any>(`/${resource}/${id}`);
    }

    lock(resource: string, id: string) {
        return axiosInstance.post<any>(`/${resource}/${id}`);
    }

    //
    // deleteAll() {
    //     return axiosInstance.delete<any>(`/tutorials`);
    // }
    //
    findById(resource: string, id: string) {
        let test = axiosInstance.get<any>(`/${resource}/${id}`);
        return test;
    }

    formData(resource: string, data: FormData) {
        return axiosInstance.post<any>(resource, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
}
const axiosDataService = new axiosInstanceDataService();
export default axiosDataService;
