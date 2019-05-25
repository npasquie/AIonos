import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class AIonosApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          margin:0;
          heigth:100%;
          background-color:black;
          /*background-image:url(/public/fond.png);*/
          /*height:100vh;*/
          /*width:100vh;*/
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
        value: 'aionos-app'
      }
    };
  }

  ready(){
    super.ready();
    this.style.height = window.innerHeight;
    this.style.width = window.innerWidth;
  }
}

window.customElements.define('aionos-app', AIonosApp);
