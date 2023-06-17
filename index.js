const loadData=(searchText)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.data))
}
const displayData=(phones)=>{
    const mainContainer=document.getElementById('main-container')
    phones=phones.slice(0,5)
    phones.forEach(phone=>{
        const div=document.createElement('div')
        div.innerHTML=`
        
                <div class="col">
                      <div class="card">
                        <img src=${phone.image} class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${phone.phone_name}</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                      </div>
                    </div>
        
        
        `;
        mainContainer.appendChild(div);
        // toggleSpinner(false);
    
    });
   

    document.getElementById('button-field').addEventListener('click',function(){
        toggleSpinner(true);
      
        const searchField=document.getElementById('text-search');
        const searchText=searchField.value;
        loadData(searchText);
        searchField.value='';
    })
    const noPhone=document.getElementById('no-message')
if(phones.length==0){
    noPhone.classList.remove('d-none')
}else{
    noPhone.classList.add('d-none')
}
const toggleSpinner=(isLoadding)=>{
    const loaderSection=document.getElementById('loader')
    if(loader){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
}

}

 
loadData()