import { DataSource } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as data from './names.json';
import { MatTableDataSource } from '@angular/material/table';
import { dataModel } from './interface/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datas: any = (data as any).default;
  nameArray = [];
  displayedColumns: string[] = ['row', 'name', 'score', 'delete'];
  dataSource = this.nameArray;
  title = 'angular-form';
  tableForm: FormGroup;
  totalSum = 0;
  disableButton: boolean;

  constructor(
    private FormBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.tableForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')])
    })
    this.tableForm.get('name').valueChanges.subscribe((x) => {
      if (this.tableForm.get('name').valid) {
        this.disableButton = false;
      } else {
        this.disableButton = true;
      }

    });
  }
  onSubmit() {
    var obj = {
      row: this.nameArray.length + 1,
      name: this.tableForm.value.name,
      score: this.scoreCalculator(this.nameArray.length + 1, this.tableForm.value.name.toUpperCase())
    }
    this.nameArray.push(obj);
    if (this.nameArray.length > 1) {
      this.nameArray = this.nameArray.sort(function(a, b) {
        if(a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
        } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
        }
      });
    }
    this.dataSource = [...this.nameArray];
    this.totalSum = this.getTotalSum(this.nameArray);
    console.log(this.totalSum)
    console.log(this.tableForm)
    this.tableForm.reset();
  }
  public scoreCalculator(row, name): any {
    let indexList = [];
    let sum: number;
    const alphabetDictionary = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                                'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i = 0; i < name.length; i++) {
      indexList.push(alphabetDictionary.indexOf(name[i]) + 1);
    }
    sum = indexList.reduce((a, b) => { return a + b });
    return sum * row;
  }

  public onDelete(row) {
    console.log(this.nameArray.indexOf(row));
    let currentIndex = this.nameArray.findIndex((x) => {
      return x.row === row;
    })
    console.log('current', currentIndex)
    this.nameArray.splice(currentIndex, 1);
    this.dataSource = [...this.nameArray];
    this.totalSum = this.getTotalSum(this.nameArray);
  }

  public getTotalSum(array) {
    var result = 0;
    if (array.length > 1) {
      result = array.reduce((a, b) => {
        return a += b.score;
      }, 0);
    } else {
      result = array[0].score;
    }
    return result;
  }
}
