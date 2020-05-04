export default  class Service {

    constructor(url = 'http://localhost:3001/myTodoList', id) {
        this.url = url;
        this.id = id;
    }

    async getData() {
        const resp = await fetch(this.url);
        return await resp.json();
    }

    async deleteData(id) {
        const resp = await fetch(`${this.url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
            .then(() => console.log('фетч на удаление отработал; удалился елемент с id', id))
    }

    async changeData(id) {
      const resp = await fetch(`${this.url}/${this.id}`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body:JSON.strigify()
      })
    }
}
