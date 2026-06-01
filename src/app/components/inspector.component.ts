import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InspectorComponent, VisuallyJsModule, VisuallyJsService} from "@visuallyjs/browser-ui-angular";
import { Base, isNode, isPort, Vertex } from "@visuallyjs/browser-ui"
import {
  PROPERTY_TEXT, PROPERTY_URL, TYPE_CONDITIONS, PROPERTY_NUMBER, TYPE_CALL_FORWARD, TYPE_PLAY_AUDIO, TYPE_REQUEST, TYPE_SET_VARIABLES
} from "../constants";
import { SetVariablesInspectorComponent } from "./set-variables-inspector.component";

@Component({
  selector: 'app-inspector',
  template: `
    <div class="vjs-callflow-inspector">
        @if(currentType === TYPE_PLAY_AUDIO) {
          <span>Text:</span>
          <textarea rows="10" cols="10" [attr.vjs-att]="PROPERTY_TEXT" vjs-focus="true" placeholder="enter text to speak..."></textarea>
        }

        @if(currentType === TYPE_REQUEST) {
          <span>URL:</span>
          <input type="text" [attr.vjs-att]="PROPERTY_URL" vjs-focus="true" placeholder="enter request URL..." />
        }

        @if(currentType === TYPE_CALL_FORWARD) {
          <span>Phone Number:</span>
          <input type="text" [attr.vjs-att]="PROPERTY_NUMBER" vjs-focus="true" placeholder="enter phone number..." />
        }

        @if(currentType === TYPE_SET_VARIABLES && currentObj) {
          <app-set-variables-inspector [obj]="$any(currentObj)" (onSave)="updateVariables($event)" (onCancel)="cancel()"></app-set-variables-inspector>
        }

        @if(currentType === 'condition') {
          <span>Condition:</span>
          <input vjs-att="value" placeholder="enter condition..." vjs-focus="true" />
        }
    </div>`,
  standalone: true,
  imports: [CommonModule, VisuallyJsModule, SetVariablesInspectorComponent]
})
export class CallFlowInspectorComponent extends InspectorComponent {
  TYPE_PLAY_AUDIO = TYPE_PLAY_AUDIO;
  TYPE_REQUEST = TYPE_REQUEST;
  TYPE_CALL_FORWARD = TYPE_CALL_FORWARD;
  TYPE_SET_VARIABLES = TYPE_SET_VARIABLES;
  PROPERTY_TEXT = PROPERTY_TEXT;
  PROPERTY_URL = PROPERTY_URL;
  PROPERTY_NUMBER = PROPERTY_NUMBER;

  service = inject(VisuallyJsService)

  portTypeMap: Record<string, string> = {
    [TYPE_CONDITIONS]: "condition"
  };



  updateVariables(variables: Array<any>) {
    this.service.getModel((model) => {
      if (model && this.currentObj && isNode(this.currentObj)) {
        model.updateNode(this.currentObj as Vertex, { variables });
        model.clearSelection();
      }
    });
  }

  cancel() {
    this.service.getModel(model => model.clearSelection());
  }
}
