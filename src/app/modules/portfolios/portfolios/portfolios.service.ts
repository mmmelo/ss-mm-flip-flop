import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {switchMap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PortfoliosService {

    private _portfolios;

    constructor(
        private _httpClient: HttpClient
    ) { }

    listPortfolios(): Observable<any>
    {
        return this._httpClient.get( `${environment.apiUrl}/portfolio`).pipe(
            switchMap( (response: any) => {
                this._portfolios = response;
                return of(response);
            })
        );
    }

    create(protfolio: { description: string}): Observable<any>
    {
        return this._httpClient.post( `${environment.apiUrl}/portfolio`, protfolio);
    }
}
