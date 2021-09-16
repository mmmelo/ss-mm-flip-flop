import {Component, OnInit, ViewChild} from '@angular/core';
import {PortfoliosService} from '../portfolios/portfolios.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

    @ViewChild('createNgPortfolioForm') createNgPortfolioForm: NgForm;

    createPortfolioForm: FormGroup;

    constructor(
        private _portfolioService: PortfoliosService,
        private _formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {

        // Create Form
        this.createPortfolioForm = this._formBuilder.group({
            description: ['', Validators.required]
        });
    }

    create(): void
    {
        if (this.createPortfolioForm.invalid){
            return;
        }

        this.createPortfolioForm.disable();

        this._portfolioService.create(this.createPortfolioForm.value)
            .subscribe(
                (response) => {
                    console.info( response);
                },
                ( error ) => {
                    console.info( error);
                }
            );
    }

}
