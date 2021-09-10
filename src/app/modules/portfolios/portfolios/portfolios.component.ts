import { Component, OnInit } from '@angular/core';
import {PortfoliosService} from './portfolios.service';
import {MatTableDataSource} from '@angular/material/table';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-portfolios',
    templateUrl: './portfolios.component.html',
    styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {

    recentTransactionsDataSource:  MatTableDataSource<any> = new MatTableDataSource();
    recentTransactionsTableColumns: string[] = ['id', 'description'];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor( private _portfolioService: PortfoliosService) { }

    ngOnInit(): void {

        this._portfolioService.listPortfolios()
            .pipe(takeUntil( this._unsubscribeAll))
            .subscribe( (data) => {
                this.recentTransactionsDataSource.data = data.data;
            })
        ;

    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }


}
