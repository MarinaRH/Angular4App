// servicio para compartir con el rsto de la aplicacion
import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; /*observables escuchando cambio --programacion reactiva*/

@Injectable()
export class PostService{

    constructor(private http:Http){

    }
    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res=> res.json())


        // Mi código era return this.http.get('https://jsonplaceholder.typicode.com/posts').map( res=>{res.json();});
        // Lo modifiqué a: return this.http.get('https://jsonplaceholder.typicode.com/posts').map( res=>res.json());(sin las llaves después del res=>) y por fin mostró..


    }
}