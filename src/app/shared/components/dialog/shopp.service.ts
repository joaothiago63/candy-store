import { Injectable, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShoppComponent } from './shopp/shopp.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppService {

  private _bottomSheet = inject(MatBottomSheet);

  open(): void {
    this._bottomSheet.open(ShoppComponent);
  }
}
