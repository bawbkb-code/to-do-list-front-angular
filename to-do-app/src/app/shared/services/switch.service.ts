import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  public _switchView = signal<boolean>(false);

  get switchViewState():Signal<boolean> {
    return this._switchView;
  }

  switch() {
    this._switchView.set(!this._switchView());
  }

}
