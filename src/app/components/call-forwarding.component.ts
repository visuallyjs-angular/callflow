import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseNodeComponent} from "@visuallyjs/browser-ui-angular";

@Component({
  template: `
  <div class="vjs-callflow-node" data-vjs-target="true">
    <div class="vjs-callflow-delete" (click)="removeNode()"></div>
    <div class="vjs-callflow-label">
      <div class="vjs-callflow-node-icon"></div>
      Forward to Phone
    </div>
    @if(data['number'] != null) {
        <div class="vjs-callflow-node-text">
          {{ data['number'] }}
        </div>
    }
    <div class="vjs-callflow-condition" data-vjs-port="success">
      Success
      <div class="vjs-callflow-connect" data-vjs-source="true"></div>
    </div>
    <div class="vjs-callflow-condition" data-vjs-port="no-answer">
      No Answer
      <div class="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true"></div>
    </div>
    <div class="vjs-callflow-condition" data-vjs-port="busy">
      Busy
      <div class="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true"></div>
    </div>
    <div class="vjs-callflow-condition" data-vjs-port="decline">
      Decline
      <div class="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true"></div>
    </div>
    <div class="vjs-callflow-condition" data-vjs-port="error">
      Error
      <div class="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true"></div>
    </div>
  </div>
  `,
  standalone: true
})
export class CallForwardingComponent extends BaseNodeComponent {
}
