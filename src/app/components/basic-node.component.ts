import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseNodeComponent} from "@visuallyjs/browser-ui-angular";
import { getNodeLabel } from "../node-types";

@Component({
  template: `
  <div class="vjs-callflow-node" data-vjs-target="true">
    <div class="vjs-callflow-delete" (click)="removeNode()"></div>
    <div class="vjs-callflow-label">
      <div class="vjs-callflow-node-icon"></div>
      {{ label }}
    </div>
    @if(data['text']) {
        <div class="vjs-callflow-node-text">{{ data['text'] }}</div>
    }
    <div class="vjs-callflow-connect" data-vjs-source="true"></div>
  </div>
  `,
  standalone: true
})
export class BasicNodeComponent extends BaseNodeComponent {
  get label() {
    return getNodeLabel(this.getNode().type);
  }
}
