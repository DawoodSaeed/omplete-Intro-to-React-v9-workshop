import {useState, useEffect} from "react";

export const usePizzaOfTheDay = function(){
    const [pizzaOfTheDay, setPizzaOfTheDay] = useState();

    useEffect(()=>{
        (async ()=>{
            const response = await fetch("/api/pizza-of-the-day");
            const data = await response.json();
            
            setPizzaOfTheDay(data);
        })();
    }, []);

    return pizzaOfTheDay
}