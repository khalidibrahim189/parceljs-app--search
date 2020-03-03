const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', e =>{
    //Get  search term
    const searchTerm = searchInput.value;
    //Get Sort
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    //Get limit 
    const searchLimit = document.getElementById('limit').value;
    console.log(searchLimit);


    // Check Input 
    if (searchTerm === ''){
        //Show Message 
        ShowMessage('Please add a search term', 'alert danger');
    }

    e.preventDefault(); 
});


//Show Message 
function ShowMessage(message, className){

}