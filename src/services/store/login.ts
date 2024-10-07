import HttpDataService from '@/services/http.service';

// export const fnGetLstBuilding = async (params?: Record<string, string>) => {
//     try {
//         const queryString = new URLSearchParams(params).toString();
//         return await HttpDataService.get(`/house?${queryString}`);
//     } catch (error) {
//         console.log(error);
//     }
// };

export const fnLogin = async (payload: any) => {
    try {
        const response = await HttpDataService.post('/login', payload);
        return response;
    } catch (error) {
        console.log(error);
    }
};

// export const fnUpdateBuilding = async (id: number, payload: any) => {
//     try {
//         const response = await HttpDataService.put(`house/${id}`, payload);
//         return response;
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const fnDelBuilding = async (id: number) => {
//     try {
//         const response = await HttpDataService.delete('house', id);
//         return response;
//     } catch (error) {
//         console.log(error);
//     }
// };
