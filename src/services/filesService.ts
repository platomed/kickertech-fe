const BASE_URL = 'http://127.0.0.1:3000';

export const scanFilesFromAPI = async (): Promise<any> => {
    try {
        const response = await fetch(`${BASE_URL}/scan`);

        if (!response.ok) {
            throw new Error('Failed to scan files');
        }

        return await response.json();
    } catch (error) {
        throw new Error('Error scanning files');
    }
};
