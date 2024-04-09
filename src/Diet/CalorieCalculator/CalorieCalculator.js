import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CalorieCalculator.css';

function CalorieCalculator() {
  const [selectedFood, setSelectedFood] = useState('');
  const [calories, setCalories] = useState(0);
  const [totalCalories, setTotalCalories] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fitness-60022916701.development.catalystserverless.in/server/ZCQL_DIET/diet");
        setFoodItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFoodChange = (event) => {
    const { value } = event.target;
    setSelectedFood(value);
  };

  const handleFoodItemClick = (food) => {
    setSelectedFood(food.Food);
    setCalories(food.Calorie_Value);
    setShowDropdown(false);
  };

  const handleAddItemClick = () => {
    if (selectedFood && calories > 0) {
      const newItem = { food: selectedFood, calories };
      setSelectedItems([...selectedItems, newItem]);
      setTotalCalories(Number(totalCalories) + Number(calories));
      setSelectedFood('');
      setCalories(0);
    }
  };

  const handleRemoveItemClick = (index) => {
    const updatedItems = [...selectedItems];
    const removedItem = updatedItems.splice(index, 1)[0];
    setSelectedItems(updatedItems);
    setTotalCalories(totalCalories - removedItem.calories);
  };

  const handleClearAllClick = () => {
    setSelectedItems([]);
    setTotalCalories(0);
  };

  const filteredFoodItems = foodItems.filter(item =>
    item.Food.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleCalorie =async ()=>{

    var calUrl="https://fitness-60022916701.development.catalystserverless.in/server/Data/caloriecalculator"

    var foodArray=[]

    selectedItems.map((item,index)=>{
        foodArray.push((index+1)+" "+item.food)
    })

   var  food=foodArray.join(', ')
    console.log(foodArray)
    console.log(totalCalories)
    var todayDate = new Date().toISOString().slice(0, 10);
    console.log(todayDate)

    
    var calorieData={

        "foods": food,
   "calories": totalCalories,
   "date": todayDate
    }


const post= await axios.post(calUrl,(calorieData))

console.log(post)


  }


  return (
    <div className="container">
      <div className="calorie-calculator">
        <h2>Calorie Calculator</h2>
        <div className="foodinput">
          <label htmlFor="food">Selected Food:</label>
          <div className="dropdown">
            <input
              type="text"
              className="food"
              value={selectedFood}
              onChange={handleFoodChange}
              placeholder="Search for food..."
              onFocus={() => setShowDropdown(true)}
            />
            {showDropdown && (
              <div className="dropdown-content">
                <div className="dp-search-bar">
                <input
                className='search'
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search food..."
                />
                </div>



                <ul>
                  {filteredFoodItems.map((food, index) => (
                    <li key={index} className="food-item" onClick={() => handleFoodItemClick(food)}>
                      {food.Food}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
         <label htmlFor="">Date</label>

        {/* to be done alex */}
          <input type="date" className='calories'  value="2024-01-01"/>

          {}
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            className="calories"
            value={calories}
            onChange={(e) => setCalories(parseInt(e.target.value))}
          />
          <button id='add' onClick={handleAddItemClick}>Add</button>
        </div>
        <div className='heading'>
          <h4>Selected Items</h4>
          <ul className="selected-items">
            {selectedItems.map((item, index) => (
              <li key={index} className="selected-item">
                <div>{item.food} - Calories: {item.calories}</div>
                <button id='remove' onClick={() => handleRemoveItemClick(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button id="clear-all" onClick={handleClearAllClick}>Clear All</button>
          <div className='total'>Total Calories: {totalCalories}   <button id='add'  onClick={handleCalorie} > Save Progress</button>   </div>
        </div>
      </div>
    </div>
  );
}

export default CalorieCalculator;
