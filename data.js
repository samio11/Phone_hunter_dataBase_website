let loadMainData = async(search='iphone',ispass) =>{
    let mainUrl = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
    let gettingData = await mainUrl.json();
    let gettingValue1 = gettingData.data;
    gettingValue(gettingValue1,ispass)
}

let gettingValue = (data,ispass) =>{
    console.log(data);
    let container = document.getElementById('main_card_container');
    container.textContent = '';
    const s1 = document.getElementById('load')
    console.log(s1);
   
    if(data.length > 6 && !ispass){
        s1.classList.remove('hidden')
      }
      else{
        s1.classList.add('hidden')
      }

    if(!ispass){
        data = data.slice(0,6);
    }
   



    data.forEach(element => {
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
                <figure><img src="${element.image}" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-center font-bold">${element.phone_name}</h2>
                    <p>The Best Product!!</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
    toggle(false);
}

function search(ispass){
    toggle(true)
    let input_value = document.getElementById('input').value;
    loadMainData(input_value,ispass);
}

let toggle = (isload) =>{
    let click = document.getElementById('spin');
    if(isload){
        click.classList.remove('hidden')
    }
    else{
        click.classList.add('hidden')
    }

}

function showLoad(){
    search(true)
}