import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Brand } from 'src/app/core/models/brand.model';
import { BrandService } from 'src/app/core/services/brand.service';
import { NotificationType } from 'src/app/shared/notifications/models/notifications-type';
import { NotificationService } from 'src/app/shared/notifications/services/notification.service';
import { BrandCreateComponent } from '../brand-create/brand-create.component';
import { BrandDeleteComponent } from '../brand-delete/brand-delete.component';
import { BrandEditComponent } from '../brand-edit/brand-edit.component';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  constructor(
    private service: BrandService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private notificationService: NotificationService,
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'description', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit(): void {
    this.LoadTable();
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }


  LoadTable() {
    this.service.getAllBrands().subscribe(res => {
      this.listData = new MatTableDataSource(res);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    })
  }



  ShowCreateDialog() {
    const dialogRef = this.dialog.open(BrandCreateComponent, { width: '540px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        this.notificationService.show({
          data: {text: `La marca  ha sido creada con éxito.`},
          type: NotificationType.alertDanger
        });
        //this.LoadTable();
      }
    });
  }


  ShowEditDialog(value: Brand) {
    const dialogRef = this.dialog.open(BrandEditComponent, { width: '540px', data: value.id });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        this.LoadTable();
      }
    });
  }


  ShowDeleteDialog(value: Brand) {
    const dialogRef = this.dialog.open(BrandDeleteComponent, {
      width: '540px',
      data: value
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        this.LoadTable();
      }
    });

  }


}
