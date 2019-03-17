import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ItemsService} from '../core/items.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {IPerson} from '../core/iperson';
import 'rxjs/add/operator/map';
import {FormDialogComponent} from '../form-dialog/form-dialog.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements AfterViewInit {
  selectedItems: IPerson[] = [];
  selectedItem: IPerson;
  dialogRef: any;
  displayedColumns = ['id', 'checkbox', 'firstname', 'lastname', 'email'];
  tableDataSource: MatTableDataSource<IPerson>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private personsService: ItemsService, public dialog: MatDialog) {
    this.personsService.getDBItems();
    this.tableDataSource = new MatTableDataSource();

    this.personsService.$items.subscribe((data) => {
      this.tableDataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
    this.tableDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.tableDataSource.filter = filterValue;
  }

  openDialog() {
    this.dialogRef = this.dialog.open(FormDialogComponent).componentInstance;
  }

  openAddDialog() {
    this.openDialog();
    this.dialogRef.formTitle = 'ADD NEW';
    this.dialogRef.onAddItem.subscribe((newPerson) => {
      this.addDistinctItem(newPerson);
    });
  }

  openEditDialog() {
    this.openDialog();
    this.dialogRef.populateForm(this.selectedItem);
    this.dialogRef.formTitle = 'EDIT';
    this.dialogRef.onAddItem.subscribe((person) => {
      this.updateItem(person);
    });
  }

  openDeleteDialog() {
    this.openDialog();
    this.dialogRef.showForm = false;
    this.dialogRef.selectedItemsCount = this.selectedItems.length;
    this.dialogRef.onDeleteItems.subscribe((result) => {
      if (result) {
        this.deleteItems();
      }
    });
  }

  addDistinctItem(newPerson: IPerson) {
    const item = this.itemInList(newPerson);
    if (!item) {
      this.personsService.create(newPerson);
      this.dialogRef.formMsg = `person added`;
    } else {
      this.dialogRef.formMsg = `${item.firstname } already at ${item.id}`;
      this.dialogRef.isWarning = true;
    }
  }

  updateItem(selectedItem: IPerson) {
    console.log('person to edit' + JSON.stringify(selectedItem));
    const item = this.itemInList(selectedItem);
    if (!item) {
      this.personsService.update(selectedItem);
      this.dialogRef.formMsg = `person updated`;
      this.dialogRef.isWarning = false;
      this.selectedItems.length = 0;
    } else {
      this.dialogRef.formMsg = `Item is already at #${item.id}`;
      this.dialogRef.isWarning = true;

    }
    this.selectedItems.length = 0;
  }

  deleteItems() {
    this.personsService.remove(this.selectedItems);
    this.selectedItems.length = 0;
  }


  selected(e, selected: IPerson) {
    console.log('checkbox change event ...' + JSON.stringify(selected));
    if (e.checked) {
      this.selectedItem = selected;
      this.selectedItems.push(this.selectedItem);
      console.log('selected person' + JSON.stringify(this.selectedItem));
    }
    if (!e.checked) {
      const index = this.selectedItems.indexOf(selected);
      this.selectedItems.splice(index, 1);
    }
  }

  itemInList(person: IPerson) {
    let foundItem = null;
    this.personsService.$items
      .map((items => items.find(item => (
        person.firstname === item.firstname &&
        person.lastname === item.lastname &&
        person.email === item.email
      )))).subscribe(data => foundItem = data);
    return foundItem;
  }


}
