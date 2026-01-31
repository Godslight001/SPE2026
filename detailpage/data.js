// All speaker and committee member data
const peopleData = {
    // Leadership & Hosts
    'abiye': {
        name: 'Sir Abiye Pedro',
        role: 'SPES103 Section Chair',
        title: 'Symposium Host',
        focus: 'Leadership & Vision',
        image: '../assests/img/Abiye 1.jpeg.jpg',
        bio: 'Sir Abiye Pedro is the Section Chair of SPE Port Harcourt (Section 103), providing visionary leadership and guidance to the future of petroleum professionals in Nigeria. His extensive experience spans multiple decades in the energy sector.',
        section: 'Leadership',
        category: 'Leadership',
        contact: 'abiye@spe.org',
        linkedin: 'https://linkedin.com/in/abiye-pedro'
    },
    'olivier': {
        name: 'Mr Olivier Houze',
        role: 'SPE International President',
        title: 'Symposium Host',
        focus: 'Global Advocacy',
        image: '../assests/img/Olivier Houze.jpg',
        bio: 'Mr Olivier Houze serves as the International President of the Society of Petroleum Engineers, leading global advocacy for petroleum professionals worldwide. His strategic vision shapes the future direction of the organization.',
        section: 'Leadership',
        category: 'Leadership',
        contact: 'olivier@spe.org',
        linkedin: 'https://linkedin.com/in/olivier-houze'
    },
    'riverson': {
        name: 'Dr Riverson Oppong',
        role: 'SPE Africa Regional Director',
        title: 'Special Guest',
        focus: 'African Operations',
        image: '../assests/img/Riverson Oppong.jpg',
        bio: 'Dr Riverson Oppong brings decades of global experience in oil and gas operations as the SPE Africa Regional Director. His insights on African energy development are invaluable to the symposium.',
        section: 'Leadership',
        category: 'Leadership',
        contact: 'riverson@spe.org',
        linkedin: 'https://linkedin.com/in/riverson-oppong'
    },
    'amina': {
        name: 'Engr. Amina Danmadami, PhD',
        role: 'SPE Nigerian Council Chair',
        title: 'Special Guest',
        focus: 'Regulatory Leadership',
        image: '../assests/img/Amina Danmadami.jpg',
        bio: 'Engr. Amina Danmadami, PhD is a Chemical Engineer and the SPE Nigerian Council Chair. She leads regulatory authority initiatives and champions sustainable energy development in Nigeria.',
        section: 'Leadership',
        category: 'Leadership',
        contact: 'amina@spe.org',
        linkedin: 'https://linkedin.com/in/amina-danmadami'
    },

    // Panel Members
    'joseph-ajienka': {
        name: 'Prof. Joseph A. Ajienka',
        role: 'Professor of Petroleum Engineering',
        title: 'Panel Session Speaker',
        focus: 'Talent Development',
        image: '../assests/img/Joseph A. Ajienka.png',
        bio: 'Prof. Joseph A. Ajienka is a distinguished Professor of Petroleum Engineering with extensive experience in talent development within the energy sector. His expertise spans reservoir engineering, production optimization, and professional development programs for young engineers.',
        section: 'Panel',
        category: 'Expert',
        contact: 'ajienka@university.edu',
        linkedin: 'https://linkedin.com/in/josephajienka'
    },
    'maji': {
        name: 'Mojisola Iyamabo',
        role: 'Gas Consultant, Heirs Energies',
        title: 'Panel Session Speaker',
        focus: 'Feedstock Supply',
        image: '../assests/img/Mojisola Iyamabo.jpg',
        bio: 'Mojisola Iyamabo is an experienced Gas Consultant at Heirs Energies with deep expertise in feedstock supply chains. She brings valuable insights into the midstream value chain and sustainable gas solutions.',
        section: 'Panel',
        category: 'Expert',
        contact: 'maji@heirsenerges.com'
    },
    'austin': {
        name: 'Mr. Austin Ogbogbo',
        role: 'Asset Manager, NLNG',
        title: 'Panel Session Speaker',
        focus: 'Midstream Development',
        image: '../assests/img/austin.jpg',
        bio: 'Austin Ogbogbo is an Asset Manager at Nigeria Liquefied Natural Gas (NLNG) with extensive experience in midstream infrastructure development. He leads critical projects in energy optimization and operational excellence.',
        section: 'Panel',
        category: 'Expert',
        contact: 'austin@nlng.com'
    },
    'brown': {
        name: 'Sir. Bennett Brown',
        role: 'Assistant Director, NMDPRA',
        title: 'Panel Session Speaker',
        focus: 'Regulatory Framework',
        image: '../assests/img/Sir. Bennett Brown.jpg',
        bio: 'Sir Bennett Brown serves as Assistant Director at the Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA). He provides critical insights into regulatory frameworks shaping the energy sector.',
        section: 'Panel',
        category: 'Expert',
        contact: 'brown@nmdpra.gov.ng'
    },
    'toyin': {
        name: 'Dr. Toyin Odutola',
        role: 'Assistant Director, Emerald Energy',
        title: 'Panel Session Moderator',
        focus: 'Energy Solutions',
        image: '../assests/img/Dr Toyin Odutola.jpg',
        bio: 'Dr. Toyin Odutola is an Assistant Director at Emerald Energy with a passion for innovative energy solutions. He moderates discussions on the future of energy in Nigeria and West Africa.',
        section: 'Panel',
        category: 'Expert',
        contact: 'toyin@emeraldergy.com'
    },

    // Breakout Session Leaders
    'bob': {
        name: 'Mr. Sepribo N. Bobmanuel',
        role: 'Process Engineer, Dangote Refinery',
        title: 'Breakout Session Leader',
        focus: 'Refined Crude Oil Pricing',
        image: '../assests/img/Bobmanuel_Sepribo_Nelson.JPG',
        bio: 'Sepribo Bobmanuel is a Process Engineer at Dangote Refinery, Africa\'s largest refinery. He specializes in refinery processes and pricing strategies for refined products.',
        section: 'Breakout',
        category: 'Expert',
        contact: 'bob@dangote.com'
    },
    'chukwudi': {
        name: 'Mr. Vincent Chukwudi Ndu',
        role: 'CNG Operations Supervisor',
        title: 'Breakout Session Leader',
        focus: 'Sustainable CNG Ecosystem',
        image: '../assests/img/Picture1.jpg',
        bio: 'Vincent Chukwudi Ndu leads CNG operations with expertise in building sustainable alternative fuel ecosystems. His work focuses on scaling CNG adoption across Nigeria.',
        section: 'Breakout',
        category: 'Expert',
        contact: 'chukwudi@cngoperations.com'
    },
    'raymond': {
        name: 'Engr. Ezeoma Raymond',
        role: 'Metering Engineer, TotalEnergies',
        title: 'Breakout Session Leader',
        focus: 'Digital Transformation',
        image: '../assests/img/Ezeoma_Ray_.jpg',
        bio: 'Ezeoma Raymond is a Metering Engineer at TotalEnergies specializing in digital transformation of energy operations. He brings innovative solutions to modernize energy infrastructure.',
        section: 'Breakout',
        category: 'Expert',
        contact: 'raymond@totalenergies.com'
    },

    // Short Course Instructors
    'ola': {
        name: 'Dr. Olatunde Mosobalaje',
        role: 'Senior Lecturer, Covenant University',
        title: 'Short Course Instructor',
        focus: 'AI & Process Automation',
        image: '../assests/img/Picture2.jpg',
        bio: 'Dr. Olatunde Mosobalaje is a Senior Lecturer at Covenant University teaching artificial intelligence and process automation. He bridges the gap between academia and industry applications.',
        section: 'Short Courses',
        category: 'Educator',
        contact: 'ola@covenantuniversity.edu.ng'
    },
    'chisom': {
        name: 'Engr. Chisom Njoku',
        role: 'Managing Consultant, Somit Services',
        title: 'Short Course Instructor',
        focus: 'Product Development',
        image: '../assests/img/chisom.png',
        bio: 'Chisom Njoku is a Managing Consultant at Somit Services with expertise in product development and commercialization strategies for energy solutions.',
        section: 'Short Courses',
        category: 'Consultant',
        contact: 'chisom@somitservices.com'
    },
    'franklin': {
        name: 'Mr. Franklin Fidelis',
        role: 'Process Analyst, Aradel Holdings',
        title: 'Short Course Instructor',
        focus: 'Refinery Process Efficiency',
        image: '../assests/img/Franklin Passport.jpg',
        bio: 'Franklin Fidelis is a Process Analyst at Aradel Holdings specializing in refinery efficiency optimization and process improvement methodologies.',
        section: 'Short Courses',
        category: 'Analyst',
        contact: 'franklin@aradelholdings.com'
    },
    'gloria': {
        name: 'Gloria Ayodeji-Fapohunda',
        role: 'HSE Specialist, TotalEnergies',
        title: 'Short Course Instructor',
        focus: 'Safety & Environmental Management',
        image: '../assests/img/fine.jpg',
        bio: 'Gloria Ayodeji-Fapohunda is an HSE Specialist at TotalEnergies dedicated to creating safer, more sustainable energy operations through comprehensive safety and environmental programs.',
        section: 'Short Courses',
        category: 'Specialist',
        contact: 'gloria@totalenergies.com'
    },

    // Committee Members
    'joshua': {
        name: 'Joshua Atte',
        role: 'Symposium Chair',
        title: 'Leadership',
        focus: 'Sponsorship Lead',
        image: '../assests/img/1.jpg',
        bio: 'Joshua Atte chairs the 2026 SPE Symposium with a focus on strategic partnerships and sponsorship. He brings leadership experience in coordinating large-scale professional events.',
        section: 'Committee',
        category: 'Leadership',
        contact: 'joshua@spesymposium.org'
    },
    'deborah': {
        name: 'Deborah Yeezor',
        role: 'Symposium Co-chair',
        title: 'Leadership',
        focus: 'Programs Team Lead',
        image: '../assests/img/2.jpg',
        bio: 'Deborah Yeezor co-chairs the symposium overseeing programs and content. Her vision ensures diverse, engaging sessions for all attendees.',
        section: 'Committee',
        category: 'Leadership',
        contact: 'deborah@spesymposium.org'
    },
    'emmanuella': {
        name: 'Emmanuella Agbo',
        role: 'YP Chairperson',
        title: 'Leadership',
        focus: 'Young Professionals Engagement',
        image: '../assests/img/3.jpg',
        bio: 'Emmanuella Agbo leads the Young Professionals initiative, ensuring the symposium meets the needs and aspirations of emerging energy professionals.',
        section: 'Committee',
        category: 'Leadership',
        contact: 'emmanuella@spesymposium.org'
    }
};

// Get person ID from URL
function getPersonFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Load and display person data
function loadPersonData() {
    const personId = getPersonFromURL();
    console.log('Looking for person ID:', personId);
    console.log('Available IDs:', Object.keys(peopleData));
    const person = peopleData[personId];

    if (!person) {
        console.error('Person not found for ID:', personId);
        document.body.innerHTML = '<section class="py-24 px-4 text-center"><h1 class="text-4xl font-bold text-red-500">Person not found</h1><p class="text-slate-700 mt-4"><a href="/" class="text-primary hover:underline">Return to home</a></p></section>';
        return;
    }

    console.log('Found person:', person.name);

    // Populate page with person data
    document.title = `${person.name} - SPE Symposium`;
    document.getElementById('personName').textContent = person.name;
    document.getElementById('personRole').textContent = person.role;
    document.getElementById('personTitle').textContent = person.title;
    document.getElementById('personImage').src = person.image;
    document.getElementById('personImage').alt = person.name;
    document.getElementById('personBio').textContent = person.bio;
    document.getElementById('personFocus').textContent = `${person.focus}`;
    document.getElementById('personSection').textContent = person.section;

    // Populate sidebar info
    if (document.getElementById('personFocusInfo')) {
        document.getElementById('personFocusInfo').textContent = person.focus;
    }
    if (document.getElementById('personSectionInfo')) {
        document.getElementById('personSectionInfo').textContent = person.section;
    }

    // Set LinkedIn URLs
    const linkedinUrl = person.linkedin || 'https://linkedin.com/company/spe';
    const linkedinBtn = document.getElementById('linkedinBtn');
    const linkedinSidebar = document.getElementById('linkedinSidebar');
    if (linkedinBtn) linkedinBtn.href = linkedinUrl;
    if (linkedinSidebar) linkedinSidebar.href = linkedinUrl;

    // Load related speakers
    loadRelatedSpeakers();
}

function loadRelatedSpeakers() {
    const personId = getPersonFromURL();
    const person = peopleData[personId];

    if (!person) return;

    // Find all people in the same section
    const relatedPeople = Object.entries(peopleData)
        .filter(([id, p]) => p.section === person.section && id !== personId)
        .slice(0, 3); // Limit to 3 related speakers

    const container = document.getElementById('relatedSpeakersContainer');
    if (!container) return;

    container.innerHTML = ''; // Clear existing content

    if (relatedPeople.length === 0) {
        container.innerHTML = '<p class="col-span-full text-slate-600">No other speakers in this section.</p>';
        return;
    }

    relatedPeople.forEach(([id, relPerson], index) => {
        const card = document.createElement('a');
        card.href = `./detail.html?id=${id}`;
        card.className = 'related-card flex items-center gap-4 p-3';
        card.setAttribute('data-aos', 'fade-up');
        if (index > 0) {
            card.setAttribute('data-aos-delay', (index * 100).toString());
        }

        card.innerHTML = `
            <img src="${relPerson.image}" alt="${relPerson.name}" class="w-14 h-14 rounded-full object-cover">
            <div>
                <p class="font-semibold">${relPerson.name}</p>
                <p class="text-sm muted">${relPerson.role}</p>
            </div>
        `;

        container.appendChild(card);
    });

    // Reinitialize AOS for the new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', loadPersonData);