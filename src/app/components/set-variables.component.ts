import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseNodeComponent } from "@visuallyjs/browser-ui-angular";

@Component({
  template: `
  <div class="vjs-callflow-node" data-vjs-target="true">
    <div class="vjs-callflow-delete" (click)="removeNode()"></div>
    <div class="vjs-callflow-label">
      <div class="vjs-callflow-node-icon"></div>
      Set Variables
    </div>

    @for(variable of data['variables']; track variable.id) {
        <div class="vjs-callflow-variable">
          <span class="vjs-callflow-variable-name">{{ variable.name }}</span>
          =
          <span class="vjs-callflow-variable-value">{{ variable.value }}</span>
        </div>
    }

    <div class="vjs-callflow-connect" data-vjs-source="true"></div>
  </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class SetVariablesComponent extends BaseNodeComponent {
}
