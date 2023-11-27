import { AfterViewInit, Component, ElementRef, HostBinding, OnDestroy, OnInit, ViewChild, computed, signal } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../data/insuranceData';
import { DatosSeguroService } from '../datos-seguro.service';
import { ISeguros } from '../ISeguros';
import { Subscription } from "rxjs";



@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {


    public data: ISeguros[] = [];
    idSeleccionado: string = '';

    constructor(public datosSeguroService: DatosSeguroService) {

    }






    filter(): void {

        let upperCaseListFilter = this.datosSeguroService.listFilter.toUpperCase();
        console.log(upperCaseListFilter);
        this.datosSeguroService.obtenerSeguros(upperCaseListFilter).subscribe((data: ISeguros[]) => {
            console.log("LLamado");
            if ((this.datosSeguroService.selectedValue === 'Patente') && !(upperCaseListFilter === '')) {
                console.log("Patente");
                // Filter based on the 'carModel' property
                this.data = data.filter(item => item.Patente.includes(upperCaseListFilter));
                this.datosSeguroService.isFilterActive = true;
                this.datosSeguroService.cacheFiltro = this.data;
            } else if ((this.datosSeguroService.selectedValue === 'Fecha') && !(upperCaseListFilter === '')) {
                console.log("Fecha");
                // Filter based on the 'OrderDate' property
                console.log(data.filter(item => item.OrderDate.includes(upperCaseListFilter)));
                this.data = data.filter(item => item.OrderDate.includes(upperCaseListFilter));
                this.datosSeguroService.isFilterActive = true;
                this.datosSeguroService.cacheFiltro = this.data;
            } else {
                // Return the full data if no filter is provided
                this.data = data;
                this.datosSeguroService.cacheFiltro = this.data;
            }
        });
    }

    setIdSeleccionado(idSeleccionado: any) {
        this.datosSeguroService.idSeleccionado = idSeleccionado;
    }

    public ngOnInit(): void {



        this.datosSeguroService.obtenerSeguros(this.datosSeguroService.listFilter).subscribe((data: ISeguros[]) => {

            if (this.datosSeguroService.isFilterActive) {
                this.data = this.datosSeguroService.cacheFiltro;
            }
            else {
                this.data = data;
            }


        });

        /*         this.sizes = [
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
                ]; */
    }


    /*     @ViewChild('grid1', { read: IgxGridComponent, static: true })
        public grid1: IgxGridComponent | any;
    
        public data: ISeguros[] = [];
    
        public size = 'large';
        public sizes: any;
    
     */

    /*     @ViewChild('grid1', { static: false }) gridElement!: ElementRef; */


    /*     @HostBinding('style.--ig-size')
        protected get sizeStyle() {
            return `var(--ig-size-${this.size})`;
        }
    
        public selectSize(event: any) {
            this.size = this.sizes[event.index].label;
            this.grid1.reflow();
        }
    
        public formatDate(val: any) {
            if (val !== 'Select All') {
                return new Intl.DateTimeFormat('en-US').format(val);
            } else {
                return val;
            }
        }
    
        public formatCurrency(val: string) {
            return parseInt(val, 10).toFixed(2);
        } */
}
