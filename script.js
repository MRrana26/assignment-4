let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allFilterBtn = document.getElementById('allFilterBtn');
const interviewFilterBtn = document.getElementById('interviewFilterBtn');
const rejectedFilterBtn = document.getElementById('rejectedFilterBtn');
const noJobContainer = document.getElementById('no-job-container');

const allCards = document.getElementById('all-cards');
const filteredSection = document.getElementById('filtered-section');
const availableJobCount = document.getElementById('availableJobCount');

const deleteBtn = document.getElementsByClassName('deleteBtn');
for (const deleteButton of deleteBtn) {
    deleteButton.addEventListener('click', function (event) {
        event.target.parentNode.parentNode.parentNode.remove();
        // console.log(event.target.parentNode.parentNode.parentNode);
        totalCount.innerText = allCards.children.length;
        availableJobCount.innerText = allCards.children.length + ' jobs';
        let count = allCards.children.length;
        if (count == 0) {
            noJobContainer.classList.remove('hidden');
        }
    })
}

if (totalCount.innerText = allCards.children.length !== 0) {
    noJobContainer.classList.add('hidden');
} else {
    noJobContainer.classList.remove('hidden');
}

function calculateCount() {
    totalCount.innerText = allCards.children.length;
    availableJobCount.innerText = allCards.children.length + ' jobs';
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id) {
    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    interviewFilterBtn.classList.add('bg-gray-300', 'text-black');
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-black');

    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

    const selected = document.getElementById(id);
    currentStatus = id;


    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-blue-500', 'text-white');

    if (id === 'interviewFilterBtn') {
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        noJobContainer.classList.add('hidden');
        renderInterview();
        if (interviewList.length == 0) {
            noJobContainer.classList.remove('hidden');
        }
        if (interviewList.length !== 0) {
            availableJobCount.innerText = interviewList.length + " of " + allCards.children.length + ' jobs';

        } else {
            availableJobCount.innerText = '0 jobs'
        }

    } else if (id === 'allFilterBtn') {
        allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');
        if (allCards.children.length !== 0) {
            noJobContainer.classList.add('hidden');
        }
        availableJobCount.innerText = allCards.children.length + ' jobs';

    } else if (id === 'rejectedFilterBtn') {
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        noJobContainer.classList.add('hidden');
        renderRejected();
        if (rejectedList.length == 0) {
            noJobContainer.classList.remove('hidden');
        }
        if (rejectedList.length !== 0) {
            availableJobCount.innerText = rejectedList.length + " of " + allCards.children.length + ' jobs';
        } else {
            availableJobCount.innerText = '0 jobs'
        }
    }

    
}

filteredSection.addEventListener('click', function (event) {

    if (event.target.classList.contains('btn-success')) {
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const salaryAndType = parentNode.querySelector('.salaryAndType').innerText;
        const badgeBtn = parentNode.querySelector('.badgeBtn').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.badgeBtn').innerText = 'Interview';
        parentNode.querySelector('.badgeBtn').className = 'btn btn-outline btn-success bg-[#EEF4FF] text-[16px] py-2 px-5 rounded-sm'

        const cardInfo = {
            companyName,
            position,
            salaryAndType,
            badgeBtn: 'Interview',
            description
        }

        const companyNameExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!companyNameExist) {
            interviewList.push(cardInfo);

        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);

        calculateCount();

        if (currentStatus == 'rejectedFilterBtn') {
            renderRejected();
        }


    } else if (event.target.classList.contains('btn-error')) {

        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const salaryAndType = parentNode.querySelector('.salaryAndType').innerText;
        const badgeBtn = parentNode.querySelector('.badgeBtn').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.badgeBtn').innerText = 'Rejected';
        parentNode.querySelector('.badgeBtn').className = 'btn btn-outline btn-error bg-[#EEF4FF] text-[16px] py-2 px-5 rounded-sm'

        const cardInfo = {
            companyName,
            position,
            salaryAndType,
            badgeBtn: 'Rejected',
            description
        }

        const companyNameExist = rejectedList.find(item => item.companyName == cardInfo.companyName);

        if (!companyNameExist) {
            rejectedList.push(cardInfo);

        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'interviewFilterBtn') {
            renderInterview();
        }
        calculateCount();
    }

    autoHideOrVisibleAndCount();

    
    for (const deleteButton of deleteBtn) {
        deleteButton.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.parentNode.remove();
            // console.log(event.target.parentNode.parentNode.parentNode);
        })
    }


});



allCards.addEventListener('click', function (event) {

    if (event.target.classList.contains('btn-success')) {
        const parentNode = event.target.parentNode.parentNode;


        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const salaryAndType = parentNode.querySelector('.salaryAndType').innerText;
        const badgeBtn = parentNode.querySelector('.badgeBtn').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.badgeBtn').innerText = 'Interview';
        parentNode.querySelector('.badgeBtn').className = 'btn btn-outline btn-success bg-[#EEF4FF] text-[16px] py-2 px-5 rounded-sm'

        const cardInfo = {
            companyName,
            position,
            salaryAndType,
            badgeBtn: 'Interview',
            description
        }

        const companyNameExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!companyNameExist) {
            interviewList.push(cardInfo);

        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);

        calculateCount();

        if (currentStatus == 'rejectedFilterBtn') {
            renderRejected();
        }



    } else if (event.target.classList.contains('btn-error')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const salaryAndType = parentNode.querySelector('.salaryAndType').innerText;
        const badgeBtn = parentNode.querySelector('.badgeBtn').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.badgeBtn').innerText = 'Rejected';
        parentNode.querySelector('.badgeBtn').className = 'btn btn-outline btn-error bg-[#EEF4FF] text-[16px] py-2 px-5 rounded-sm'

        const cardInfo = {
            companyName,
            position,
            salaryAndType,
            badgeBtn: 'Rejected',
            description
        }

        const companyNameExist = rejectedList.find(item => item.companyName == cardInfo.companyName);

        if (!companyNameExist) {
            rejectedList.push(cardInfo);

        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'interviewFilterBtn') {
            renderInterview();
        }
        calculateCount();


    }
});




function renderInterview() {
    filteredSection.innerHTML = "";

    for (let interview of interviewList) {
        let div = document.createElement('div');
        div.className = 'p-6 bg-white rounded-lg hover:shadow shadow-teal-400';
        div.innerHTML = `
            <div class="flex justify-between">
                    <div class="space-y-3">
                        <h3 class="companyName text-[18px] font-semibold text-[#002C5C]">${interview.companyName}</h3>
                        <p class="position text-[#64748B]">${interview.position}</p>
                        <p class="salaryAndType text=[#64748B] text-[14px]">${interview.salaryAndType}</p>
                        <button class="badgeBtn btn btn-outline btn-success bg-[#EEF4FF] text-[16px] font-medium py-2 px-5 rounded-sm">${interview.badgeBtn}</button>
                        <p class="description text-[#323B49] text-[14px]">${interview.description}</p>
                        <div class="">
                            <button class="btn btn-outline btn-success">INTERVIEW</button>
                            <button class="btn btn-outline btn-error">REJECTED</button>
                        </div>
                    </div>
                    <div class="btn rounded-full p-3 deleteBtn"><i class="fa-solid fa-trash-can"></i></div>
                </div>
        `
        filteredSection.appendChild(div);
    }
}

function renderRejected() {
    filteredSection.innerHTML = "";

    for (let rejected of rejectedList) {
        let div = document.createElement('div');
        div.className = 'p-6 bg-white rounded-lg hover:shadow shadow-teal-400';
        div.innerHTML = `
            <div class="flex justify-between">
                    <div class="space-y-3">
                        <h3 class="companyName text-[18px] font-semibold text-[#002C5C]">${rejected.companyName}</h3>
                        <p class="position text-[#64748B]">${rejected.position}</p>
                        <p class="salaryAndType text=[#64748B] text-[14px]">${rejected.salaryAndType}</p>
                        <button class="badgeBtn btn btn-outline btn-error bg-[#EEF4FF] text-[16px] font-medium py-2 px-5 rounded-sm">${rejected.badgeBtn}</button>
                        <p class="description text-[#323B49] text-[14px]">${rejected.description}</p>
                        <div class="">
                            <button class="btn btn-outline btn-success">INTERVIEW</button>
                            <button class="btn btn-outline btn-error">REJECTED</button>
                        </div>
                    </div>
                    <div class="btn rounded-full p-3 deleteBtn"><i class="fa-solid fa-trash-can"></i></div>
                </div>
        `
        filteredSection.appendChild(div);
    }
}



function autoHideOrVisibleAndCount() {

    if (interviewList.length == 0) {
        noJobContainer.classList.remove('hidden');
    } else if (rejectedList.length == 0) {
        noJobContainer.classList.remove('hidden');
    }

    if (currentStatus === 'rejectedFilterBtn') {
        availableJobCount.innerText = rejectedList.length + " of " + allCards.children.length + ' jobs';
    } else if (currentStatus === 'interviewFilterBtn') {
        availableJobCount.innerText = interviewList.length + " of " + allCards.children.length + ' jobs';
    }
}


