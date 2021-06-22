import { Directive, HostListener, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Observable , Subscriber} from 'rxjs';
import * as XLSX from 'xlsx';

@Directive({
  selector: '[appReadExcel]',
  exportAs : 'readExcel'

})
export class ReadExcelDirective {
    excelObservable : Observable<any> = new Observable();
    @Output() eventEmitter = new EventEmitter();


  constructor() { }

  @HostListener("change", ["$event.target"])
  onChange(target: HTMLInputElement){
    if(target.files!=null){
    const file = target.files[0];

    this.excelObservable = new Observable((subscriber : Subscriber<any>) => {
      this.readFile(file, subscriber)
    }
    
    )
    this.excelObservable.subscribe(d => {
      this.eventEmitter.emit(d)
    })
  }
    

  }

  readFile(file:File, subscriber : Subscriber<any>){
    const fileReader =  new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (e) => {
      if(e.target!=null){

      
      const bufferArray = e.target.result;
      const wb : XLSX.WorkBook =  XLSX.read(bufferArray, {type :"buffer"});
      const wsname : string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, {header:1})
      subscriber.next(data);
      subscriber.complete();
      }
    }
  }
}
