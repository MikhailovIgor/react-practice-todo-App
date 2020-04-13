export default  class Service {

    constructor(url = 'http://localhost:3001/myTodoList') {
        this.url = url;
    }

    async getData() {
        const resp = await fetch(this.url);
        return await resp.json();
    }
}
