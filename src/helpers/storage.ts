const key = "app_storage";

const storageController = () => {
    let data = JSON.parse(window.localStorage.getItem(key) || "{}");

    const save = () => {
        window.localStorage.setItem(key, JSON.stringify(data));
    };

    return {
        get(key: string) {
            return data[key];
        },
        set(key: string, value: unknown) {
            data[key] = value;
            save();
        },
        remove(key: string) {
            delete data[key];
            save();
        },
        clear() {
            data = {};
            save();
        },
    };
};

const storage = storageController();

export default storage;
