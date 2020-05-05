export default  class Service {

    constructor(url = 'http://localhost:3001/myTodoList', id) {
        this.url = url;
        this.id = id;
    }

     getData = async () => {
        const response = await fetch(this.url);
        return await response.json();
    }

     deleteData = async (id) => {
        await fetch(`${this.url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        });
        // .then(() => console.log('фетч на удаление отработал; удалился елемент с id', id))
    }

    async changeData(flag, id) {
      await fetch(`${this.url}/${id}`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
              checked: flag
          })
      });
    }

}
