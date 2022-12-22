




let bascet=document.querySelector(".bascet")
function filterActors(value){






    let moviesByActor=movies.filter(movie=>{
        return movie.actors.includes(value)
    })

    bascet.innerHTML=""

    moviesByActor.map(item=>{

        let title=document.createElement("p")
        title.innerText=item.title

        let year=document.createElement("p")
        year.innerText=item.year

        let actor=document.createElement("p")
        actor.innerHTML=item.actors

        bascet.appendChild(title)
        bascet.appendChild(year)
        bascet.appendChild(actor)
       
    })
   
}









addOptions()
function addOptions(){

    
    movies.map(item=>{
        let forYears=document.querySelector(".forYears")
        let years=document.createElement("option")

        years.innerHTML=item.year
        forYears.appendChild(years) 
    })

   


}










