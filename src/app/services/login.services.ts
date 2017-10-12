import { Injectable } from '@angular/core';  
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable, Subject } from 'rxjs/Rx';  
import 'rxjs/Rx'; //get everything from Rx
@Injectable()  
export class LoginService {  
    // private jsonFileURL: string = "assets/api/limits.json";
    
    constructor(private http: Http) {}  

    
    getToken() {
        let getTokenURL: string = "http://dev-nma.smas.nednet.co.za/tokenprovider/providers/mobisignedtoken?userClaim=3000864472&ecid=121529129&did=65d804c5-a9a8-4fc7-9dfa-897092fa042e";
        // let getTokenURL: string = "http://dev-nma.smas.nednet.co.za/tokenprovider/providers/mobisignedtoken?userClaim=3046488979&ecid=125212402&did=9b3a77c6-5107-4644-b368-449f12a91b44";
        // let getTokenURL: string = "http://dev-nma.smas.nednet.co.za/tokenprovider/providers/mobisignedtoken?userClaim=3000864472&ecid=121529129&did=65d804c5-a9a8-4fc7-9dfa-897092fa042e";
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.get(getTokenURL, options).map((res: Response) => res);
    }
    
    login(data) {        
        // let updateLimitURL: string = "http://localhost:9164/v1/limits/payment";
        let loginURL: string = "assets/api/login.json";
        var headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);   
        return this.http.put(loginURL, body, options).map((res: Response) => res.json());  
    }
}  