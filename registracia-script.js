const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwVQSnH293jN9fDYJN54ZHFX35MB8T5RtMmot__Yx2FA0WHr4v0BADer8DMnWxBL38s7w/exec';
const WS1 = document.getElementById('workshop1');
const WS2 = document.getElementById('workshop2');
const form = document.getElementById('regForm');

// nastav form action podľa premenej
form.action = APPS_SCRIPT_URL;

async function updateWorkshopAvailability() {
    try {
    const resp = await fetch(APPS_SCRIPT_URL);
    const data = await resp.json(); // { counts1: {...}, counts2: {...}, limits: {...} }

    // pre workshop1
    Array.from(WS1.options).forEach(opt => {
        if (!opt.value) return;
        opt.disabled = data.counts1[opt.value] >= data.limits[opt.value];
    });

    // pre workshop2
    Array.from(WS2.options).forEach(opt => {
        if (!opt.value) return;
        opt.disabled = data.counts2[opt.value] >= data.limits[opt.value];
    });

    } catch (err) {
    console.error('Chyba pri načítaní kapacity workshopov', err);
    }
}

// spusti po načítaní stránky
updateWorkshopAvailability();
