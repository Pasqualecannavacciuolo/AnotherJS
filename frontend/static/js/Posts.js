export let items = [];

export const postsFunctions = {
    listen: () => {
        console.log("Posts initialized");
        items = postsFunctions.getItems();
    },
    getItems: () => ['Item 1', 'Item 2', 'Item 3'],
};
