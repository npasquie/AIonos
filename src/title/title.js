import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

export class Title extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: block;
          color : white;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
    }
    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'title'
            }
        };
    }

    ready(){
        super.ready();
    }
}

window.customElements.define('title-el', Title);