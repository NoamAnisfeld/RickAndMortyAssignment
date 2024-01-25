const STORAGE_KEY = 'Rick And Mortey';

export function retrieveState() {
    
    const storageItem = localStorage.getItem(STORAGE_KEY);
    try {
        const json = JSON.parse(storageItem || '');
        if (!json || typeof json !== 'object') {
            return {};
        }
        return json;
    } catch {
        return {};
    }
}

export function persistState<T>(state: T) {
    
    const prevState = retrieveState();
    const newState = {...prevState, ...state};
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
}