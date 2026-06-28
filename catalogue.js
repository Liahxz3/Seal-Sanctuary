let currentSeal = "harp";
let currentStage = "adult";

function showSeal(id){

    currentSeal = id;

    loadSeal();
}

function showStage(stage, btn){

    currentStage = stage;

    document
        .querySelectorAll(".stage-btn")
        .forEach(b =>
            b.classList.remove("active")
        );

    btn.classList.add("active");

    loadSeal();
}
const viewImg =
    document.getElementById("viewImg");

const name =
    document.getElementById("name");

const subtitle =
    document.getElementById("subtitle");

const desc =
    document.getElementById("desc");

const sci =
    document.getElementById("sci");

const hab =
    document.getElementById("hab");

const len =
    document.getElementById("len");

const weight =
    document.getElementById("weight");

const life =
    document.getElementById("life");

const diet =
    document.getElementById("diet");

const personality =
    document.getElementById("personality");

const notes =
    document.getElementById("notes");

const facts =
    document.getElementById("facts");


const seals = {

    harp: {

        adult: {

            name: "Harp Seal",

            subtitle:
                "The Arctic Floof",

            img:
                "seals/harps.jpg",

            desc:
                "Harp seals are among the world's most recognizable seals.",

            sci:
                "Pagophilus groenlandicus",

            hab:
                "Arctic Ocean",

            len:
                "1.7-2.0 meters",

            weight:
                "115-180 kg",

            life:
                "20-30 years",

            diet:
                "Fish, squid",

            facts: [
                "Can hold breath for 15 minutes.",
                "Migrate thousands of kilometers.",
                "Use vocal recognition.",
                "Highly social."
            ],

            personality:
                "Playful ★★★★★",

            notes:
                "Probably the cutest seal."
        },

        pup: {

            name:
                "Harp Seal Pup",

            subtitle:
                "The Legendary Floof",

            img:
                "seals/harpspup.jpg",

            desc:
                "Harp seal pups are famous for their fluffy white coats.",

            sci:
                "Pagophilus groenlandicus",

            hab:
                "Arctic pack ice",

            len:
                "80-90 cm",

            weight:
                "10-12 kg",

            life:
                "Dependent",

            diet:
                "Mother's milk",

            facts: [
                "Born with white fur.",
                "Cannot swim immediately.",
                "Grow rapidly.",
                "Depend on mothers."
            ],

            personality:
                "Maximum Floof ★★★★★",

            notes:
                "Peak seal cuteness."
        }
    },
leopard:{

adult:{

    name:"Leopard Seal",

    subtitle:
        "The Antarctic Apex",

    img:
        "seals/Leopard.jpg",

    desc:
        "Leopard seals are among Antarctica's most powerful predators. Despite their fearsome reputation, they are highly intelligent and fascinating marine mammals.",

    sci:
        "Hydrurga leptonyx",

    hab:
        "Antarctica",

    len:
        "2.5-3.5 meters",

    weight:
        "200-600 kg",

    life:
        "20-25 years",

    diet:
        "Penguins, fish, squid",

    facts:[
        "Can swim over 35 km/h.",
        "Have enormous jaws.",
        "Hunt penguins from below the ice.",
        "Are usually solitary."
    ],

    personality:
        "Terrifying ★★★★★",

    notes:
        "The coolest predator seal."
},

pup:{

    name:
        "Leopard Seal Pup",

    subtitle:
        "Tiny Future Predator",

    img:
        "seals/Leopardpup.jpg",

    desc:
        "Leopard seal pups may look adorable, but they eventually grow into Antarctica's apex seal predator.",

    sci:
        "Hydrurga leptonyx",

    hab:
        "Antarctic coast",

    len:
        "1.2 meters",

    weight:
        "30 kg",

    life:
        "Dependent",

    diet:
        "Mother's milk",

    facts:[
        "Born with soft fur.",
        "Learn swimming quickly.",
        "Grow extremely rapidly.",
        "Already have large heads."
    ],

    personality:
        "Cute Menace ★★★★★",

    notes:
        "Small now, terrifying later."
}

},

baikal:{

adult:{

    name:"Baikal Seal",

    subtitle:
        "The Freshwater Wonder",

    img:
        "seals/Baikal.jpg",

    desc:
        "The Baikal seal is the world's only freshwater seal species and lives exclusively in Lake Baikal in Siberia.",

    sci:
        "Pusa sibirica",

    hab:
        "Lake Baikal",

    len:
        "1.3-1.5 meters",

    weight:
        "50-130 kg",

    life:
        "50+ years",

    diet:
        "Fish",

    facts:[
        "The world's only freshwater seal.",
        "Can dive over 300 meters.",
        "Native only to Siberia.",
        "Extremely curious."
    ],

    personality:
        "Curious ★★★★★",

    notes:
        "Living in a lake makes them special."
},

pup:{

    name:
        "Baikal Seal Pup",

    subtitle:
        "The Lake Floof",

    img:
        "seals/baikalpup.jpg",

    desc:
        "Baikal seal pups are born inside snow dens built on frozen Lake Baikal.",

    sci:
        "Pusa sibirica",

    hab:
        "Lake Baikal snow dens",

    len:
        "70 cm",

    weight:
        "5 kg",

    life:
        "Dependent",

    diet:
        "Mother's milk",

    facts:[
        "Born in snow caves.",
        "Have white fur.",
        "Very playful.",
        "Protected by ice dens."
    ],

    personality:
        "Adorable ★★★★★",

    notes:
        "Tiny freshwater potato."
}

},

ringed:{

adult:{

    name:"Ringed Seal",

    subtitle:
        "The Arctic Survivor",

    img:
        "seals/ringed.jpg",

    desc:
        "Ringed seals are masters of Arctic survival and maintain breathing holes through thick sea ice.",

    sci:
        "Pusa hispida",

    hab:
        "Arctic Circle",

    len:
        "1.1-1.5 meters",

    weight:
        "50-100 kg",

    life:
        "25-30 years",

    diet:
        "Fish and crustaceans",

    facts:[
        "Maintain breathing holes.",
        "Primary prey of polar bears.",
        "Can survive extreme cold.",
        "Named after their ring markings."
    ],

    personality:
        "Resilient ★★★★★",

    notes:
        "The ultimate Arctic survivor."
},

pup:{

    name:
        "Ringed Seal Pup",

    subtitle:
        "The Snowball",

    img:
        "seals/ringedpup.jpg",

    desc:
        "Ringed seal pups spend their first weeks hidden in snow dens beneath the Arctic ice.",

    sci:
        "Pusa hispida",

    hab:
        "Arctic snow dens",

    len:
        "60 cm",

    weight:
        "4 kg",

    life:
        "Dependent",

    diet:
        "Mother's milk",

    facts:[
        "Born inside snow caves.",
        "Protected from predators.",
        "Have fluffy white coats.",
        "Very vocal."
    ],

    personality:
        "Tiny Survivor ★★★★★",

    notes:
        "Small but incredibly tough."
}

},

spotted:{

adult:{

    name:"Spotted Seal",

    subtitle:
        "The Pacific Explorer",

    img:
        "seals/spotted.jpg",

    desc:
        "Spotted seals inhabit northern Pacific waters and are known for their beautiful coat patterns.",

    sci:
        "Phoca largha",

    hab:
        "North Pacific",

    len:
        "1.5-1.8 meters",

    weight:
        "80-140 kg",

    life:
        "25-35 years",

    diet:
        "Fish and squid",

    facts:[
        "Excellent swimmers.",
        "Have beautiful spotted coats.",
        "Very social animals.",
        "Can migrate long distances."
    ],

    personality:
        "Friendly ★★★★★",

    notes:
        "One of the prettiest seals."
},

pup:{

    name:
        "Spotted Seal Pup",

    subtitle:
        "The Little Explorer",

    img:
        "seals/spottedpup.jpg",

    desc:
        "Spotted seal pups are energetic, fluffy, and quickly learn to swim.",

    sci:
        "Phoca largha",

    hab:
        "North Pacific",

    len:
        "75 cm",

    weight:
        "7 kg",

    life:
        "Dependent",

    diet:
        "Mother's milk",

    facts:[
        "Very playful.",
        "Born with soft coats.",
        "Learn swimming early.",
        "Highly social."
    ],

    personality:
        "Energetic ★★★★★",

    notes:
        "Tiny ocean explorer."
}

}
};


// =====================
// FUNCTIONS
// =====================

function showStage(stage, btn) {

    currentStage = stage;

    document
        .querySelectorAll(".stage-btn")
        .forEach(b =>
            b.classList.remove("active")
        );

    btn.classList.add("active");

    loadSeal();
}


function loadSeal() {

    const s =
        seals[currentSeal][currentStage];

    document.body.className =
        currentSeal;

    viewImg.src =
        s.img;

    name.textContent =
        s.name;

    subtitle.textContent =
        s.subtitle;

    desc.textContent =
        s.desc;

    sci.textContent =
        s.sci;

    hab.textContent =
        s.hab;

    len.textContent =
        s.len;

    weight.textContent =
        s.weight;

    life.textContent =
        s.life;

    diet.textContent =
        s.diet;

    personality.textContent =
        s.personality;

    notes.textContent =
        s.notes;

    facts.innerHTML = "";

    s.facts.forEach(f => {

        facts.innerHTML +=
            `<li>${f}</li>`;
    });
}


// =====================
// INITIALIZE
// =====================

loadSeal();