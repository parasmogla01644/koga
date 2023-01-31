import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
  deactivateMessage: string;
}

@Injectable()
export class ConfirmLeave implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {

    return component.canDeactivate() ?
      true : confirm( component.deactivateMessage || 'You are about to exit your design. Be sure to save your configuration.' );

  }

}