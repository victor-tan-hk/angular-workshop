/* Provide the structure for the JSON content returned     
from a call to retrieve a single post, for e.g.  
https://jsonplaceholder.typicode.com/posts/5
*/

export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;

    constructor(userId: number, id: number, title: string, body: string) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
}