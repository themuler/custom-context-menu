import {AfterViewInit, Component, Input, OnDestroy, ViewChild} from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-context-menu',
  standalone: true,
  imports: [
    MatMenuModule
  ],
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.css'
})
export class ContextMenuComponent implements AfterViewInit, OnDestroy {

  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  @Input() top!: string;
  @Input() left!: string;
  @Input() showContextMenu!: Observable<boolean>;

  showContextMenuSubscription?: Subscription;

  ngAfterViewInit() {
    this.showContextMenuSubscription = this.showContextMenu.subscribe({
      next: (show) => show && this.menuTrigger.openMenu()
    });
  }

  ngOnDestroy() {
    this.showContextMenuSubscription?.unsubscribe();
  }

}
