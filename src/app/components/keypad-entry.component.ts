import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseNodeComponent } from "@visuallyjs/browser-ui-angular";
import { ALL_KEYS } from "../constants";

@Component({
  template: `
  <div class="vjs-callflow-node" data-vjs-target="true">
    <div class="vjs-callflow-delete" (click)="removeNode()"></div>
    <div class="vjs-callflow-label">
      <div class="vjs-callflow-node-icon"></div>
      Keypad Entry
    </div>
    <div class="vjs-callflow-keypad">
      @for(k of ALL_KEYS; track k) {
          <div class="vjs-callflow-keypad-key" [attr.data-vjs-port]="k">
            <span>{{ k }}</span>
            <div class="vjs-callflow-connect" data-vjs-source="true"></div>
          </div>
      }
    </div>
  </div>
  `,
  standalone: true
})
export class KeypadEntryComponent extends BaseNodeComponent {
  ALL_KEYS = ALL_KEYS;
}
