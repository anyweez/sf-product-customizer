/* jshint esnext: true, browser: true */

const toggle = require('./toggle');
const typeface = require('./typeface');

// step 3 select boxes
const lidSelection = document.getElementById('step-4__select');
const lidIconSelection = document.getElementById('step-4__select-icon');

// display area for selected icon
const lidIconDisplay = document.getElementById('step-4__icon-display');

const lidUploadImage = document.getElementById('step-4__upload-image');
// const lidSelectIcon = document.getElementById('step-4__icon');
const lidCustomText = document.getElementById('step-4__custom-text');
// const lidStockText = document.getElementById('step-4__stock-text');

const lidOptions = [ lidUploadImage, lidCustomText ];


const options = {
    none(box) {
        toggle.options(lidOptions);

        box.customize('lid_font', null);
        box.customize('lid_text', null);
    },

    text(box) { toggle.options(lidOptions, lidCustomText); },
    image(box) { toggle.options(lidOptions, lidUploadImage); },
};

// function getLidSelection() {
//     let lidOption = lidSelection.options[lidSelection.selectedIndex].value;

//     if (typeof options[lidOption] === 'undefined' || lidOption === '_') {
//         options.none();
//         lidSelection.value = '_';
//     }
//     else if (lidOption.match(/quote_[0-9]+|verse_[0-9]+/)) {
//         options.stock();
//         options[lidOption]();
//     }
//     else {
//         options[lidOption]();
//     }

//     console.log('Has the \'global\' typeface option been used? ' + typeface.isSet());
// }


// STEP 4: Customize the inside lid of the message box
module.exports = {
    render(box, { mode }) {
        if (options.hasOwnProperty(mode)) {
            options[mode](box);
        } else {
            console.error('Unknown mode!');
        }
    },
};