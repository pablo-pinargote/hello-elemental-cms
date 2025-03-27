import {Plugster} from '../shared/deps/plugster/plugster.js';

export class HelloPlugster extends Plugster {

    constructor(outlets) {
        super(outlets);
    }

    afterInit() {
        this._.clickMeButton.on('click',  {}, () => {
            alert(1);
        });
    }

}