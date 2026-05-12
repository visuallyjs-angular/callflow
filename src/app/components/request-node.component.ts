import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseNodeComponent } from "@visuallyjs/browser-ui-angular";

@Component({
  template: `
  <div class="vjs-callflow-node" data-vjs-target="true">
    <div class="vjs-callflow-delete" (click)="removeNode()"></div>
    <div class="vjs-callflow-label">
      <div class="vjs-callflow-node-icon"></div>
      Request
    </div>
    <div class="vjs-callflow-request-url">
      {{ data['url'] }}
    </div>
    <div class="vjs-callflow-request-port" data-vjs-port="condition">
      <span>condition</span>
      <div class="vjs-callflow-connect" data-vjs-source="true"></div>
    </div>
    <div class="vjs-callflow-request-port" data-vjs-port="else">
      <span>Else</span>
      <div class="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true"></div>
    </div>
    <div class="vjs-callflow-request-port" data-vjs-port="failure">
      <span>Failure</span>
      <div class="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true"></div>
    </div>
  </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class RequestNodeComponent extends BaseNodeComponent {
}
