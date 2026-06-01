import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseNodeComponent } from "@visuallyjs/browser-ui-angular";

@Component({
  selector: 'app-conditions',
  template: `
  <div class="vjs-callflow-node" data-vjs-target="true">
    <div class="vjs-callflow-delete" (click)="removeNode()"></div>
    <div class="vjs-callflow-label">
      <div class="vjs-callflow-node-icon"></div>
      Conditions
      <div class="vjs-callflow-add-condition" (click)="addCondition()">+</div>
    </div>
    @for(condition of data['conditions']; track condition.id) {
        <div class="vjs-callflow-condition" [attr.data-vjs-port]="condition.id">
          <span (click)="editCondition(condition.id)" [title]="condition.value">{{ condition.value }}</span>
          <div class="vjs-callflow-connect" data-vjs-source="true"></div>
          @if(condition.value !== 'Else') {
              <div class="vjs-edge-delete" (click)="removeCondition(condition.id)"></div>
          }
        </div>
    }
  </div>
  `,
  standalone: true
})
export class ConditionsComponent extends BaseNodeComponent {

  editCondition(id: string) {
    const port = this.getNode().getPort(id)
    if (port != null) {
      this.model.setSelection(port)
    }
  }

  removeCondition(id: string) {
    const port = this.getNode().getPort(id)
    if (port) {
      this.model.removePort(port)
    }
  }

  addCondition() {
    const order = this.data['conditions'].length
    const id = `${order}`

    this.model.addNewPort(this.getNode(), "condition", {
      id,
      order,
      value: "New Condition"
    })

    setTimeout(() => {
      const port = this.getNode().getPort(id)
      if (port) {
        this.model.setSelection(port)
      }
    })
  }
}
