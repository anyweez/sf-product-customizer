/* jshint esnext: true, browser: true */

const toggle = require('./toggle');
const typeface = require('./typeface');

// step 3 select boxes
const frontSelection = document.getElementById('step-3__select');
const frontIconSelection = document.getElementById('step-3__select-icon');

// display area for selected icon
const frontIconDisplay = document.getElementById('step-3__icon-display');

// step 2 customization sections
const frontSelectIcon = document.getElementById('step-3__icon');
const frontCustomText = document.getElementById('step-3__custom-text');
const frontStockText = document.getElementById('step-3__stock-text');

const frontOptions = [ frontSelectIcon, frontCustomText, frontStockText ];

const options = {
    none(box) {
        toggle.options(frontOptions);

        box.customize('front_font', null);
        box.customize('front_text', null);
    },

    icon(box) { toggle.options(frontOptions, frontSelectIcon); },
    text(box) { toggle.options(frontOptions, frontCustomText); },
    stock(box) { toggle.options(frontOptions, frontStockText); },

    quote_1(box) { 
        const quote = 'Our Tea is Sweet, Words are Long, Days are Warm, And Faith is Strong';
        toggle.options(frontOptions, frontStockText); 
        frontStockText.textContent = quote; 

        box.customize('front_font', 'corsiva'); // built-in quotes default to corsiva
        box.customize('front_text', quote);
    },
    quote_2(box) { 
        const quote = 'Dads holds our hand for a little while and our hearts forever.';
        toggle.options(frontOptions, frontStockText); 
        frontStockText.textContent = quote; 

        box.customize('front_font', 'corsiva');
        box.customize('front_text', quote);
    },
    quote_3(box) { 
        const quote = 'Mom: The glue that holds everything together even when she feels like she may fall apart.';
        toggle.options(frontOptions, frontStockText); 
        frontStockText.textContent = quote; 

        box.customize('front_font', 'corsiva');
        box.customize('front_text', quote);
    },
    quote_4(box) { 
        const quote = 'Carolina Born, Carolina Raised, Carolina Proud All My Days.';
        toggle.options(frontOptions, frontStockText); 
        frontStockText.textContent = quote;

        box.customize('front_font', 'corsiva');
        box.customize('front_text', quote);
    },
    verse_1(box) { 
        const quote = '"The lazy do not roast any game, but the diligent feed on the riches of the hunt." -Proverbs 12-27';
        toggle.options(frontOptions, frontStockText); 
        frontStockText.textContent = quote; 

        box.customize('front_font', 'corsiva');
        box.customize('front_text', quote);
    },
    verse_2(box) { 
        const quote = '"Train up a child in the way he should go, even when he is old he will not depart from it." -Proverbs 22:6';
        toggle.options(frontOptions, frontStockText); 
        frontStockText.textContent = quote; 

        box.customize('front_font', 'corsiva');
        box.customize('front_text', quote);
    },
    verse_3(box) { 
        const quote = '"Yet in all these things we are more than conquerors through Him who loved us." -Romans 8:37';
        toggle.options(frontOptions, frontStockText); 
        frontStockText.textContent = quote; 

        box.customize('front_font', 'corsiva');
        box.customize('front_text', quote);
    },
    verse_4(box) { 
        const quote = 'Southern Belles are raised on Sweet Tea and a whole lotta\' Jesus.';
        toggle.options(frontOptions, frontStockText); 
        frontStockText.textContent = quote; 

        box.customize('front_font', 'corsiva');
        box.customize('front_text', quote);
    },
};

// STEP 3: Customize the front of the message box
module.exports = {
    render(box, { mode }) {
        if (options.hasOwnProperty(mode)) {
            options[mode](box);
        } else {
            console.error('Unknown mode!');
        }
    },
};