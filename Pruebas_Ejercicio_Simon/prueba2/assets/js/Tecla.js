
export class Tecla {
    element = null;

    constructor(element) {
        this.element = element;
    }

    powerOn(UI) {
        return new Promise(resolve => {
            UI.powerOn(this.element);

            setTimeout(() => {
                UI.powerOff(this.element);

                resolve();
            }, 1000);
        });
    }
}