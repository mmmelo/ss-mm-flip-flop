import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-portfolios',
    templateUrl: './portfolios.component.html',
    styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {

    recentTransactionsDataSource: any;
    recentTransactionsTableColumns: string[] = ['transactionId', 'date', 'name', 'amount', 'status'];
    constructor() { }

    ngOnInit(): void {
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
