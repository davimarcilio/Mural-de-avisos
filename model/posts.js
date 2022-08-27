module.exports = {
    posts: [
        {
            id: "fmdwa",
            title: 'teste do mural',
            description: 'Descrição do teste do mural',
        }, {
            id: "fmdwa222",
            title: 'teste do mural2',
            description: 'Descrição do teste do mural2',
        },
    ],

    getAll() {
        return this.posts;
    },
    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description });
    },

}
function generateID() {
    return Math.random().toString(36).substring(2, 9)
}