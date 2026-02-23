
let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('total-count');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('reject-filter-btn');

const allCardSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filterd-section');



function calculateCount() {
    totalCount.innerText = allCardSection.children.length;
    interview.innerText.length = interviewList.length;
    rejected.innerText.length = rejectedList.length;
}
calculateCount();


const allCards = document.getElementById("all-cards");

const allJobs = document.getElementById('jobCount')
allJobs.innerText = allCards.children.length;


function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]')
    rejectFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]')

    allFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]')
    interviewFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]')
    rejectFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]')



    const selected = document.getElementById(id);


    selected.classList.remove('bg-[#FFFFFF]', 'text-[#FFFFFF]');
    selected.classList.add('bg-[#3B82F6]', 'text-[#FFFFFF]');

    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
    }else if(id== 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
         filterSection.classList.add('hidden')
    }

    
}

mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.parentNode.parentNode;
        const parentName = parenNode.querySelector('.plantName').innerText
        const latinName = parenNode.querySelector('.latinName').innerText
        const light = parenNode.querySelector('.light').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        const cardInfo = {
            parentName,
            latinName,
            light,
            status,
            notes


            
        };

        const plantExist = interviewList.find(item => item.parentName == cardInfo.parentName);


        parenNode.querySelector('.status').innerText = 'interview'

        if (!plantExist) {
            interviewList.push(cardInfo)
        }

        renderInterview()
    }

})


function renderInterview() {
    filterSection.innerHTML = ''

    for (let interview of interviewList) {
        let div = document.createElement('div');
        div.className = 'card flex justify-between p-8 shadow rounded mb-[18px]'
        div.innerHTML = `
        <div class="space-y-6">

                    <!-- part 1 -->
                    <div class="">
                        <h2 class="plantName font-semibold text-[#002C5C] text-[18px]">Mobile First Corp</h2>
                        <p class="latinName text-[#64748B]">React Native Developer</p>
                    </div>

                    <!-- part 2 -->
                    <p class="light text-[#64748B]">Remote
                        •
                        Full-time
                        •
                        $130,000 - $175,000</p>

                    <!-- part 3 -->
                    <div>
                        <button class="status text-[#002C5C] bg-[#EEF4FF] px-2 py-1">Not Applied</button>
                        <p class="notes text-[#323B49]">Build cross-platform mobile applications using React Native. Work on
                            products used by millions of users worldwide.</p>
                    </div>

                    <!-- part 4 -->
                    <div class="mb-10 flex gap-4">
                        <button
                            class="interview-btn text-[#10B981] border border-[#10B981] px-1 py-1 rounded">interview</button>
                        <button
                            class="rejected-btn text-[#EF4444] border border-[#EF4444] px-1 py-1 rounded">Rejected</button>
                    </div>
        
             `
            filterSection.appendChild('div');
    }


}
