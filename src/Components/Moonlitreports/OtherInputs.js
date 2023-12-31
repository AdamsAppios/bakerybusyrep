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
              <Customtext label="SB" name="SB" value={state.SB} Placeholder="SB Example : 100 in 45" OnChange={hschange} handleFocus={handleOtherFocus} />
              <Customtext label="Coins" name="Coins" Placeholder="Coins Putos" value={state.Coins} OnChange={hschange} handleFocus={handleOtherFocus}/>
              <Customtext label="Toasted" name="Toasted" Placeholder="Toasted" value={state.Toasted} OnChange={hschange} handleFocus={handleOtherFocus}/>
              <Customtext label="NSSale" name="NSSale" Placeholder="NS Sale" value={state.NSSale} OnChange={hschange} handleFocus={handleOtherFocus}/>
              <Customtext label="NSStocks" name="NSStocks" Placeholder="NS Stocks" value={state.NSStocks} OnChange={hschange} handleFocus={handleOtherFocus}/>
              <Customtext label="WilkinsSale" name="WilkinsSale" Placeholder="Wilkins Sale" value={state.WilkinsSale} OnChange={hschange} handleFocus={handleOtherFocus}/>            
              <Customtext label="WilkinsStocks" name="WilkinsStocks" Placeholder="Wilkins Stocks" value={state.WilkinsStocks} OnChange={hschange} handleFocus={handleOtherFocus}/>            
              <Customtext label="SD" name="SD" value={state.SD} Placeholder="SD" OnChange={hschange} handleFocus={handleOtherFocus}/>                
              <NumbersInput label="Mineral" name="Mineral" value={state.Mineral} Placeholder="Mineral Number only" onChange={hschange} handleFocus={handleOtherFocus} handleKeyPress={handleKeyPress}/>                
              <TextareaInput label="Pullouts" name="Pullouts" Value={state.Pullouts} hschange={hschange} handleFocus={handleOtherFocus} Placeholder={pulloutsPlaceholder}  />
              <TextareaInput label="Accounts" name="Accounts"  Value={state.Accounts} hschange={hschange} handleFocus={handleOtherFocus} Placeholder={accountsPlaceholder} />
              <TextareaInput label="Workers" name="Workers"  Value={state.Workers} hschange={hschange} handleFocus={handleOtherFocus} Placeholder={workersPlaceholder} />
          </tbody>
        </table>
      </div>
    );
    
  }
  
  export default OtherInputs;