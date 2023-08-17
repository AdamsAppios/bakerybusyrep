import React, { useState, useEffect } from 'react';

const RefillingCCTVMain = () => {
    const [isBlue, setIsBlue] = useState(false);
    const [isRed, setIsRed] = useState(false);
    const [originalBackgroundColor, setOriginalBackgroundColor] = useState('');  
    const [pickupCount, setPickupCount] = useState(0);
    const [dealerCount, setDealerCount] = useState(0);
    const [smallCount, setSmallCount] = useState(0);
    const [squareCount, setSquareCount] = useState(0);
    const [smallSquareCount, setSmallSquareCount] = useState(0);
    const [selectedDropdownValue, setSelectedDropdownValue] = useState("");
    const [date, setDate] = useState(""); // Date input state
    const [time, setTime] = useState(""); // Time input state
    const [textAreaValue, setTextAreaValue] = useState("");
    const [multipleCount,setMultipleCount]= useState("1");

    const [selectedOption, setSelectedOption] = useState('pickup');

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter' && event.target.tagName !== 'INPUT') {
                handleAdd();  // Execute the function when Enter is pressed
                event.preventDefault(); // This stops the default action of the Enter key
            } else if (event.key === '-') {
                handleSub();  // Execute the function when - (dash) is pressed
                event.preventDefault(); // This stops the default action of the dash key, if required
            }
        };
        // Attaching the event listener
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup: removing the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [multipleCount,isBlue, isRed, pickupCount, dealerCount, smallCount, smallSquareCount, squareCount, selectedOption]); 

    const toggleBackgroundColor = (color) => {
        if (!originalBackgroundColor) {
        const body = document.body;
        setOriginalBackgroundColor(getComputedStyle(body).backgroundColor);
        }

        if (color === 'blue') {
        setIsBlue(!isBlue);
        setIsRed(false);
        speakMessage("Plus Dealer");
        } else if (color === 'red') {
        setIsRed(!isRed);
        setIsBlue(false);
        speakMessage("Minus Dealer");
        }
        
        setTimeout(() => {
            setIsBlue(false);
            setIsRed(false);
        }, 100); // Change back to the original color after 100 milliseconds
    };

    const bodyStyle = {
        backgroundColor: isBlue ? 'blue' : (isRed ? 'red' : originalBackgroundColor),
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    };

    const inputGroupStyle = {
        margin: '10px 0',  // this adds 10px margin to the top and bottom
    };

    const radioButtonContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
        margin: '10px 0',
    };

    const buttonGroupStyle = {
        display: 'flex',
        gap: '10px',
        margin: '10px 0',
    };


    const speakMessage = (message) => {
        if ('speechSynthesis' in window) {
            const synth = window.speechSynthesis;
    
            // Cancel any ongoing or pending speech
            synth.cancel();
    
            const utterance = new SpeechSynthesisUtterance(message);
            utterance.rate = 2.7; 
            synth.speak(utterance);
        }
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleAdd = () => {
    toggleBackgroundColor('blue')
    switch (selectedOption) {
        case 'pickup':
        setPickupCount(pickupCount + 1*multipleCount);
        speakMessage("Plus Pickup");
        break;
        case 'dealer':
        setDealerCount(dealerCount + 1*multipleCount);
        speakMessage("Plus Dealer");
        break;
        case 'small':
        setSmallCount(smallCount + 1*multipleCount);
        speakMessage("Plus Small");
        break;
        case 'square':
        setSquareCount(squareCount + 1*multipleCount);
        speakMessage("Plus Square");
        break;
        case 'smallSquare':
        setSmallSquareCount(smallSquareCount + 1*multipleCount);
        speakMessage("Plus Square Small");
        break;
        default:
        break;
    }
    setMultipleCount("1");
    };

  const handleSub = () => {
    toggleBackgroundColor('red')

    switch (selectedOption) {
      case 'pickup':
        setPickupCount(pickupCount - 1*multipleCount);
        speakMessage("Minus Pickup");
        break;
      case 'dealer':
        setDealerCount(dealerCount - 1*multipleCount);
        speakMessage("Minus Dealer");
        break;
      case 'small':
        setSmallCount(smallCount - 1*multipleCount);
        speakMessage("Minus Small");
        break;
      case 'square':
        setSquareCount(squareCount - 1*multipleCount);
        speakMessage("Minus Square");
        break;
      case 'smallSquare':
        setSmallSquareCount(smallSquareCount - 1*multipleCount);
        speakMessage("Minus SmallSquare");
        break;
      default:
        break;
    }
    setMultipleCount("1");
  };

    const handleSave = () => {
        const dataString = `
            Date=${date};
            Time=${time};
            Dropdown=${selectedDropdownValue};
            Dealer=${dealerCount};
            Pickup=${pickupCount};
            Small=${smallCount};
            Square=${squareCount};
            SmallSquare=${smallSquareCount};
        `;
        setTextAreaValue(dataString);
    };

    const handleLoad = () => {
        const values = textAreaValue.split(";").reduce((acc, item) => {
            const [key, value] = item.split("=").map(str => str.trim());
            if (key && value) acc[key] = value;
            return acc;
        }, {});

        if (values.Date) setDate(values.Date);
        if (values.Time) setTime(values.Time);
        if (values.Dropdown) setSelectedDropdownValue(values.Dropdown);
        if (values.Dealer) setDealerCount(Number(values.Dealer));
        if (values.Pickup) setPickupCount(Number(values.Pickup));
        if (values.Small) setSmallCount(Number(values.Small));
        if (values.Square) setSquareCount(Number(values.Square));
        if (values.SmallSquare) setSmallSquareCount(Number(values.SmallSquare));
    };

  return (
    <div style={bodyStyle}>
        <div style={inputGroupStyle}>
            <label>Date: </label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div style={inputGroupStyle}>
            <label>Time: </label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <div style={inputGroupStyle}>
            <label>Dropdown: </label>
            <select 
                value={selectedDropdownValue} 
                onChange={(e) => setSelectedDropdownValue(e.target.value)}
            >
                <option value="Bellaswan">Bellaswan</option>
                <option value="ARSO">ARSO</option>
                <option value="Kalimpio">Kalimpio</option>
                <option value="Goldswan">Goldswan</option>
            </select>
        </div>
        <div style={inputGroupStyle}>
            <label>Multiple: </label>
            <input 
                type="text" 
                value={multipleCount} 
                onChange={(e) => setMultipleCount(Number(e.target.value))} 
            />
        </div>
        <div style={inputGroupStyle}>
            <label>Dealer: </label>
            <input 
                type="text" 
                value={dealerCount} 
                onChange={(e) => setDealerCount(Number(e.target.value))} 
            />
        </div>
        <div style={inputGroupStyle}>
            <label>Pickup: </label>
            <input 
                type="text" 
                value={pickupCount} 
                onChange={(e) => setPickupCount(Number(e.target.value))} 
            />
        </div>
        <div style={inputGroupStyle}>
            <label>Small: </label>
            <input 
                type="text" 
                value={smallCount} 
                onChange={(e) => setSmallCount(Number(e.target.value))} 
            />
        </div>
        <div style={inputGroupStyle}>
            <label>Square: </label>
            <input 
                type="text" 
                value={squareCount} 
                onChange={(e) => setSquareCount(Number(e.target.value))} 
            />
        </div>
        <div style={inputGroupStyle}>
            <label>Small Square: </label>
            <input 
                type="text" 
                value={smallSquareCount} 
                onChange={(e) => setSmallSquareCount(Number(e.target.value))} 
            />
        </div>
        <div style={radioButtonContainerStyle}>
            <div>
                <input
                    type="radio"
                    value="dealer"
                    checked={selectedOption === 'dealer'}
                    onChange={handleChange}
                />
                <label>Dealer</label>
            </div>
            <div>
                <input
                    type="radio"
                    value="pickup"
                    checked={selectedOption === 'pickup'}
                    onChange={handleChange}
                />
                <label>Pickup</label>
            </div>
            <div>
                <input
                    type="radio"
                    value="small"
                    checked={selectedOption === 'small'}
                    onChange={handleChange}
                />
                <label>Small</label>
            </div>
            <div>
                <input
                    type="radio"
                    value="square"
                    checked={selectedOption === 'square'}
                    onChange={handleChange}
                />
                <label>Square</label>
            </div>
            <div>
                <input
                    type="radio"
                    value="smallSquare"
                    checked={selectedOption === 'smallSquare'}
                    onChange={handleChange}
                />
                <label>Small Square</label>
            </div>
        </div>
        <div style={buttonGroupStyle}>
            <button onClick={handleAdd}>Add Dealer</button>
            <button onClick={handleSub}>Sub Dealer</button>
        </div>
        <div style={inputGroupStyle}>
            <textarea 
                value={textAreaValue} 
                onChange={(e) => setTextAreaValue(e.target.value)}
                rows="8"
                cols="50"
            ></textarea>
        </div>
        <div style={buttonGroupStyle}>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleLoad}>Load</button>
        </div>
    </div>
    );
};

export default RefillingCCTVMain;