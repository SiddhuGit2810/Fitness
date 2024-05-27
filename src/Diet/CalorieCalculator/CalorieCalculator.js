import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './CalorieCalculator.css';
import { EmailContext } from '../../Usecontext/UseContext';

function CalorieCalculator() {

  const contextEmail = useContext(EmailContext) || {} // Consuming context correctly

  console.log("Email from context:", contextEmail);

  const [selectedFood, setSelectedFood] = useState('');
  const [calories, setCalories] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [foodItems, setFoodItems] = useState([]);
  const [protein, setProtein] = useState('');
  const [totalProtein, setTotalProtein] = useState(0);

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
    setSearchTerm(value);
  };

  const handleFoodItemClick = (food) => {
    setSelectedFood(food.Food);
    setCalories(food.Calorie_Value);
    setProtein(food.Protien_Value);
    setShowDropdown(false);
  };

  const handleAddItemClick = () => {
    if (selectedFood && calories > 0 && quantity > 0 && protein !== '') {
      const newItem = { food: selectedFood, calories, quantity, protein };
      setSelectedItems([...selectedItems, newItem]);
      setTotalCalories(totalCalories + (calories * quantity));
      setTotalProtein(totalProtein + (protein * quantity));
      setSelectedFood('');
      setCalories(0);
      setQuantity(1);
      setProtein('');
    }
  };

  const handleRemoveItemClick = (index) => {
    const updatedItems = [...selectedItems];
    const removedItem = updatedItems.splice(index, 1)[0];
    setSelectedItems(updatedItems);
    setTotalCalories(totalCalories - (removedItem.calories * removedItem.quantity));
    setTotalProtein(totalProtein - (removedItem.protein * removedItem.quantity));
  };

  const handlecleardata = () =>{
    setSelectedItems([])
    setTotalCalories(0)
    setTotalProtein(0)

  }

  const handleClearAllClick = () => {
    setSelectedItems([]);
    setTotalCalories(0);
    setTotalProtein(0);
  };

  const filteredFoodItems = foodItems.filter(item =>
    item.Food.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCalorie = async () => {

    const calUrl = "https://fitness-60022916701.development.catalystserverless.in/server/Data/caloriecalculator";

    const foodArray = selectedItems.map((item, index) => `${index + 1} ${item.food}`);

    const food = foodArray.join(', ');
    const todayDate = new Date().toISOString().slice(0, 10);

    const calorieData = {
      foods: food,
      calories: totalCalories,
      protein: totalProtein.toString(),
      date: todayDate,
      email: contextEmail.contextemail,
    };

    console.log(calorieData);

    try {
      const post = await axios.post(calUrl, calorieData);
      console.log(post);
      handlecleardata();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className="c-container">
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
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            className="calories"
            value={calories}
            onChange={(e) => setCalories(parseInt(e.target.value))}
          />
          <label htmlFor="protein">Protein value:</label>
          <input
            type="number"
            id="protein"
            placeholder="Protein Value"
            value={protein}
          />
          <label htmlFor="Quantity">Quantity:</label>
          <input
            type="number"
            placeholder="Quantity"
            className="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button id="add" onClick={handleAddItemClick}>Add</button>
        </div>
        <div className="heading">
          <h4>Selected Items</h4>
          <ul className="selected-items">
            {selectedItems.map((item, index) => (
              <li key={index} className="selected-item">
                <div>{item.food} - {item.quantity} Nos - Calories: {item.calories * item.quantity} Protein: {item.protein * item.quantity}</div>
                <button id="remove" onClick={() => handleRemoveItemClick(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button id="clear-all" onClick={handleClearAllClick}>Clear All</button>
          <div className="total">Total Calories: {totalCalories}</div>
          <div className="total">Total Protein: {totalProtein}</div>
          <button id="saveProgress" onClick={handleCalorie}>Save Progress</button>
        </div>
      </div>
    </div>
  );
}

export default CalorieCalculator;
