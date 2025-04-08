function save_localStorage (){

    let tasks = 
      {
        "id": 1,
        "title": "Comprar comida",
        "description": "Ir al supermercado y comprar frutas y verduras",
      }
      
    localStorage.setItem("task", JSON.stringify(tasks)); 
}


save_localStorage();
