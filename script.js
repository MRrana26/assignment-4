let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allFilterBtn = document.getElementById('allFilterBtn');
const interviewFilterBtn = document.getElementById('interviewFilterBtn');
const rejectedFilterBtn = document.getElementById('rejectedFilterBtn');

const allCards = document.getElementById('all-cards');
const filteredSection = document.getElementById('filtered-section');

function calculateCount() {
    totalCount.innerText = allCards.children.length;
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

    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-blue-500', 'text-white');
}

allCards.addEventListener('click', function (event) {

    if (event.target.classList.contains('btn-success')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const salaryAndType = parentNode.querySelector('.salaryAndType').innerText;
        const badgeBtn = parentNode.querySelector('.badgeBtn').innerText;
        const description = parentNode.querySelector('.description').innerText;

        const cardInfo = {
            companyName,
            position,
            salaryAndType,
            badgeBtn,
            description
        }

        const companyNameExist = interviewList.find(item => item.companyName == cardInfo.companyName);
        parentNode.querySelector('.badgeBtn').innerText = 'Interview';
        if (!companyNameExist) {
            interviewList.push(cardInfo);

        }
        renderInterview();
    }
});

function renderInterview() {
    filteredSection.innerHTML = ''

    for (let interview of interviewList) {
        console.log(interview)
        let div = document.createElement('div');
        div.className = 'p-6 bg-white rounded-lg hover:shadow shadow-teal-400';
        
        div.innerHTML = `
            <div class="flex justify-between">
                    <div class="space-y-3">
                        <h3 class="companyName text-[18px] font-semibold text-[#002C5C]">Mobile First Corp</h3>
                        <p class="position text-[#64748B]">React Native Developer</p>
                        <p class="salaryAndType text=[#64748B] text-[14px]">Remote • Full-time • $130,000 - $175,000</p>
                        <button class="badgeBtn bg-[#EEF4FF] text-[14px] font-medium py-2 px-3 rounded-sm">NOT APPLIED</button>
                        <p class="description text-[#323B49] text-[14px]">Build cross-platform mobile applications using React
                            Native. Work on products used by millions of users worldwide.</p>
                        <div class="">
                            <button class="btn btn-outline btn-success">INTERVIEW</button>
                            <button class="btn btn-outline btn-error">REJECTED</button>
                        </div>
                    </div>
                    <div id="deleteBtn" class="btn rounded-full p-3"><i class="fa-solid fa-trash-can"></i></div>
                </div>
        `

        filteredSection.appendChild(div);
    }
}
