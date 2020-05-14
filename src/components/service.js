import { url as defaultUrl, headers } from './config';

export default class Service {

    constructor(url= defaultUrl, id) {
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
            headers,
        });
    }

     changeData = async (flag, id) => {
        await fetch(`${this.url}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({
                checked: flag
            })
        });
    }

    addData = async (newTask) => {
        await fetch(`${this.url}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(newTask)
        })
    }
}
