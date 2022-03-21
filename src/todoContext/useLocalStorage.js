import React, {useState, useEffect} from "react";

function useLocalStorage(itemName, initialValue){
    const [loading, setloading] = useState(true)
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue)
  useEffect(()=>{
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parseItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parseItem =initialValue
        }else{
          parseItem = JSON.parse(localStorageItem)
        } 
        setItem(parseItem)
        setloading(false)
      } catch (error) {
        setError(error)
      }
    }, 15000);
  }, )
  
    //guardamos los datos en el localstorage. para persistencia de datos
    const saveItem=(newItem)=>{
     try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
     } catch (error) {
       setError(error)
     }
      }
  return {
    item,
    saveItem,
    loading, 
    error
  }
    }

    export {useLocalStorage}