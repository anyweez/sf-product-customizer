const boxes = {
    ammo: {
        name: 'Ammo Box',
        image: "https://www.dropbox.com/s/tj601wqf4sq2n5d/Dad%20Son%20Fishing%20exterior.jpg?raw=1",
        steps: [1, 2, 3, 4, 5], // the steps this box proceeds through
        price: 109.99,
        desc: 'Hand-crafted with American pride and care, the SF Ammo Box is a rustic throw-back to when Davy Crockett was still King of the Wild Frontier.',
        length: 8.25,
        width: 5.5,
        height: 4.25,
    },
    artillery: {
        name: 'Artillery Box',
        image: "https://www.dropbox.com/s/e0fg3wi7s99u3b9/Wedding%20Exterior.jpg?raw=1",
        steps: [1, 2, 3, 4, 5],
        price: 119.99,
        desc: 'The SF Artillery Box is hand-crafted with American hardwood and leather. While it looks like it might have fallen off of a pirate\'s ship, it\'s refined and regal enough to sit on your favorite buccaneer\'s mantle.',
        length: 8.25,
        width: 5.5,
        height: 4.25,
    },
    traditional: {
        name: 'Buckshot Box',
        image: "https://www.dropbox.com/s/iunuckgktfcq9mw/Ryan%20Exterior.jpg?raw=1",
        steps: [1, 2, 3, 4, 5],
        price: 115.99,
        desc: 'While they may not use it to lug around buckshot, this carefully crafted, petite box is perfect for that special Southern Bell (or Buck) in your life.',
        length: 5.75,
        width: 5.5,
        height: 4.25,
    },
    letter: {
        name: 'Letter Box',
        image: "https://www.dropbox.com/s/g28303byzvomgd7/Daddy%20Letter%20box%20exterior.jpg?raw=1",
        steps: [1, 2, 4, 5],
        price: 95.99,
        desc: 'The hand-written letter is a fading art, so we brought is back and made it 100X\'s more meaningful. Perfect for delivering the hand-written letter and SF coasters, the Letter Box is sure to store trinkets and treasures on dressers for years to come.',
        length: 5.75,
        width: 5.5,
        height: 1.0,
    },
};

function reset(box) {
    // Copy the box so we never actually dirty the original.
    box = Object.assign({}, box);
    
    box.custom = {
        top_content: null, // either 'text' or 'image'
        top_font: null,
        top_text: null,
        top_image: null,

        front_content: null, // either 'text' or 'image'
        front_font: null,
        front_text: null,
        front_image: null,

        lid_content: null, // either 'text' or 'image'
        lid_font: null,
        lid_text: null,
        lid_image: null,
    };

    box.customize = (field, value) => {
        console.log(`updating custom property '${field}'; now set to '${value}'`);
        box.custom[field] = value;
    }

    return box;
}
/**
 * Returns the specified box, or 'ammo' if the specified box doesn't exist.
 */
module.exports = {
    find(name) {
        return (boxes.hasOwnProperty(name)) ? reset(boxes[name]) : reset(boxes.ammo);
    },
    all() {
        return boxes.map(reset);
    },
};