
let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('total-count');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('reject-filter-btn');

const allCardSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main')



function calculateCount(){
    totalCount.innerText = allCardSection.children.length;
    interview.innerText.length = interviewList.length;
    rejected.innerText.length = rejectedList.length;
}
calculateCount();


const allCards = document.getElementById("all-cards");

// console.log(allCards.children.length);
const allJobs = document.getElementById('jobCount')
allJobs.innerText = allCards.children.length;


function toggleStyle(id){
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]')
    rejectFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]')

    allFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]')
    interviewFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]')
    rejectFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]')
    
    // console.log(id);

    const selected = document.getElementById(id)
    // console.log(selected);
    
    selected.classList.remove('bg-[#FFFFFF]', 'text-[#FFFFFF]')
    selected.classList.add('bg-[#3B82F6]', 'text-[#FFFFFF]')
}



