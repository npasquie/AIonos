import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
let titre = import("../../public/titre.html");

export class Title extends PolymerElement {
    static get template() {
        return titre;
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