import {Plugster} from '../shared/deps/plugster/plugster.js';
import {HelloPlugster} from './hello-plugster.js';

(async function() {
    let helloPlugster = await new HelloPlugster({
        clickMeButton: {}
    }).init();
    Plugster.plug(helloPlugster);
}());

