import React from 'react'

import "./ChestWorkout.css"

function ChestWorkout() {

  const [cardstyles, setCardStyles] = useState({
    card1: { order: 1, marginTop: '80px' },
    card2: { order: 2, marginTop: '80px' },
    card3: { order: 3, marginTop: '80px' },
    card11: { order: 1, marginTop: '80px' },
    card12: { order: 2, marginTop: '80px' },
    card13: { order: 3, marginTop: '80px' }
  })

  const handleCardClick = (cardId) => {
    switch (cardId) {
      case 'card1':
        setCardStyles({
          card1: { order: 2, marginTop: '200px' },
          card2: { order: 1, marginTop: '80px' },
          card3: { order: 3, marginTop: '80px' },
          card11: { order: 1, marginTop: '80px' },
          card12: { order: 2, marginTop: '80px' },
          card13: { order: 3, marginTop: '80px' }
        });
        break;
      case 'card2':
        setCardStyles({
          card1: { order: 1, marginTop: '80px' },
          card2: { order: 2, marginTop: '200px' },
          card3: { order: 3, marginTop: '80px' },
          card11: { order: 1, marginTop: '80px' },
          card12: { order: 2, marginTop: '80px' },
          card13: { order: 3, marginTop: '80px' }
        });
        break;
      case 'card3':
        setCardStyles({
          card1: { order: 1, marginTop: '80px' },
          card2: { order: 3, marginTop: '80px' },
          card3: { order: 2, marginTop: '200px' },
          card11: { order: 1, marginTop: '80px' },
          card12: { order: 2, marginTop: '80px' },
          card13: { order: 3, marginTop: '80px' }
        });
        break;
      case 'card11':
        setCardStyles({
          card1: { order: 1, marginTop: '80px' },
          card2: { order: 2, marginTop: '80px' },
          card3: { order: 3, marginTop: '80px' },
          card11: { order: 2, marginTop: '200px' },
          card12: { order: 1, marginTop: '80px' },
          card13: { order: 3, marginTop: '80px' }
        });
        break;
      case 'card12':
        setCardStyles({
          card1: { order: 1, marginTop: '80px' },
          card2: { order: 2, marginTop: '80px' },
          card3: { order: 3, marginTop: '80px' },
          card11: { order: 1, marginTop: '80px' },
          card12: { order: 2, marginTop: '200px' },
          card13: { order: 3, marginTop: '80px' }
        });
        break;
      case 'card13':
        setCardStyles({
          card1: { order: 1, marginTop: '80px' },
          card2: { order: 2, marginTop: '80px' },
          card3: { order: 3, marginTop: '80px' },
          card11: { order: 1, marginTop: '80px' },
          card12: { order: 3, marginTop: '80px' },
          card13: { order: 2, marginTop: '200px' }
        });
        break;
      default:
        break;
    }
  };

  return (

    <div className="container">

      <div className="container1">
        <div class="centerdiv">
          <h4>Exercise</h4>
          <br />
          <input type="text" id="exercise"></input>
        </div>

        <div class="card" id="card1">Yesterday's Workout:

          <div className="group-set1">
            <div class="Set1">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count1" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set1" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight1" />
            </div>

            <div class="Set2">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count1" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set1" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight1" />
            </div>

            <div class="Set3">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count1" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set1" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight1" />
            </div>

          </div>
        </div>

        <div class="card" id="card2">Today's Workout:

          <div class="group-set2">
            <div class="set1">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count2" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set2" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight2" />
            </div>

            <div class="set2">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count2" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set2" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight2" />
            </div>

            <div class="set3">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count2" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set2" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight2" />
            </div>
          </div>
        </div>

        <div class="card" id="card3">Tommorrow's  Workout:

          <div class="group-set3">
            <div class="set1">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count3" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set3" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight3" />
            </div>

            <div class="set2">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count3" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set3" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight3" />
            </div>

            <div class="set3">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count3" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set3" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight3" />
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
        <div class="card" id="card11">Yesterday

          <div class="group-set11">
            <div class="set1">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count11" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set11" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight11" />
            </div>

            <div class="set2">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count11" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set11" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight11" />
            </div>

            <div class="set3">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count11" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set11" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight11" />
            </div>
          </div>



        </div>
        <div class="card" id="card12">Today

          <div class="group-set12">

            <div class="set1">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count12" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set12" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight12" />
            </div>

            <div class="set2">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count12" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set12" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight12" />
            </div>

            <div class="set3">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count12" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set12" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight12" />
            </div>
          </div>


        </div>
        <div class="card" id="card13">Tommorrow

          <div class="group-set13">
            <div class="set1">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count13" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set13" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight13" />
            </div>

            <div class="set2">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count13" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set13" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight13" />
            </div>

            <div class="set3">
              <br />
              <br />
              <input type="text" placeholder="Count" id="count13" />
              <br />
              <br />
              <input type="text" placeholder="Set" id="set13" />
              <br />
              <br />
              <input type="text" placeholder="Weight" id="weight13" />
            </div>

          </div>


        </div>
      </div>


    </div>



  )
}

export default ChestWorkout