import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../data/insuranceData';
import { DatosSeguroService } from '../datos-seguro.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent | any;

    public data! : string[];

    public size = 'large';
    public sizes : any;
    //Filtro
    public selectedValue: string;

    constructor(public datosSeguroService: DatosSeguroService) {
        this.selectedValue = '';
    }
    
    public ngOnInit(): void {

        this.datosSeguroService.getJSON().subscribe(data => {
            this.data = DATA;
            console.log(data);
          });


        this.sizes = [
            {
                label: 'small',
                selected: this.size === 'small',
                togglable: true
            },
            {
                label: 'medium',
                selected: this.size === 'medium',
                togglable: true
            },
            {
                label: 'large',
                selected: this.size === 'large',
                togglable: true
            }
        ];
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event : any) {
        this.size = this.sizes[event.index].label;
        this.grid1.reflow();
    }

    public formatDate(val : any) {
        if (val !== 'Select All') {
            return new Intl.DateTimeFormat('en-US').format(val);
        } else {
            return val;
        }
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
