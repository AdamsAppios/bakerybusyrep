import React from 'react';
import Customtext from './Helpers/Customtext';
import NumbersInput from './Helpers/NumbersInput';
import TextareaInput from './Helpers/TextareaInput';
function OtherInputs({state, handleKeyPress, hschange, handleOtherFocus}) {
  const pulloutsPlaceholder = "Mga Pullout ", 
  accountsPlaceholder = "Mga Accounts ", 
  workersPlaceholder = "Mga Workers (Including Absences)";
    return (
      <div>
        <table>
          <tbody>
              <h5>Fill up inig 6pm ug 6am</h5>
              <Customtext label="Total Sales (from 6am to 6pm / 6pm to 6am)" name="Total_Sales" value={state.Total_Sales} Placeholder="Total Sales Iadd sa imo duty" OnChange={hschange} handleFocus={handleOtherFocus} />
              <Customtext label="SB" name="SB" value={state.SB} Placeholder="SB Example : 100 in 45" OnChange={hschange} handleFocus={handleOtherFocus} />
              <Customtext label="Coins" name="Coins" Placeholder="Coins Putos" value={state.Coins} OnChange={hschange} handleFocus={handleOtherFocus}/>
              <Customtext label="Toasted" name="Toasted" Placeholder="Toasted" value={state.Toasted} OnChange={hschange} handleFocus={handleOtherFocus}/>
              <Customtext label="NSSale" name="NSSale" Placeholder="NS Sale" value={state.NSSale} OnChange={hschange} handleFocus={handleOtherFocus}/>
              <Customtext label="NSStocks" name="NSStocks" Placeholder="NS Stocks" value={state.NSStocks} OnChange={hschange} handleFocus={handleOtherFocus}/>
              <Customtext label="SD" name="SD" value={state.SD} Placeholder="SD" OnChange={hschange} handleFocus={handleOtherFocus}/>                
              <NumbersInput label="Mineral" name="Mineral" value={state.Mineral} Placeholder="Mineral Number only" onChange={hschange} handleFocus={handleOtherFocus} handleKeyPress={handleKeyPress}/>                                
              
              <p> Stocks Remaining:</p>
              <Customtext label="Mantika" name="Mantika" value={state.Mantika} Placeholder="stocks sa mantika" OnChange={hschange} handleFocus={handleOtherFocus}/>                
              <Customtext label="Loaf Plastic" name="plastic_Loaf" value={state.plastic_Loaf} Placeholder="stocks sa loaf plastic" OnChange={hschange} handleFocus={handleOtherFocus}/>                
              <Customtext label="Plastic #3" name="plastic_No3" value={state.plastic_No3} Placeholder="stocks plastic #3" OnChange={hschange} handleFocus={handleOtherFocus}/>                
              <Customtext label="Plastic #6" name="plastic_No6" value={state.plastic_No6} Placeholder="stocks plastic #6" OnChange={hschange} handleFocus={handleOtherFocus}/>                
              <Customtext label="Plastic tiny" name="plastic_Tiny" value={state.plastic_Tiny} Placeholder="stocks plastic tiny" OnChange={hschange} handleFocus={handleOtherFocus}/>                

              <TextareaInput label="Pullouts" name="Pullouts" Value={state.Pullouts} hschange={hschange} handleFocus={handleOtherFocus} Placeholder={pulloutsPlaceholder}  />
              <TextareaInput label="Accounts" name="Accounts"  Value={state.Accounts} hschange={hschange} handleFocus={handleOtherFocus} Placeholder={accountsPlaceholder} />
              <TextareaInput label="Workers" name="Workers"  Value={state.Workers} hschange={hschange} handleFocus={handleOtherFocus} Placeholder={workersPlaceholder} />
          </tbody>
        </table>
      </div>
    );
    
  }
  
  export default OtherInputs;