import React,{useState} from "react";
import "./req.css"


const Req = () => {

    const [nameInput,setNameInput ] = useState('')
    const [surNameInput,setSurNameInput ] = useState('')
    const [countryInput,setCountryInput ] = useState('')
    const [phoneInput,setPhoneInput ] = useState('')
    return (
        <div className='oneBlock'>
            <div className='text'>
                <span>Reqistration</span>
            </div>
            <form>
                <input onChange={({target})=>setNameInput(target.value)} placeholder='name' value={nameInput} type='text'/>
                <input onChange={({target}) =>setSurNameInput(target.value)} placeholder='lastName' value={surNameInput} type='text'/>
                <input onChange={({target})=>setCountryInput(target.value)} placeholder='country' value={countryInput} type='text'/>
                <input onChange={({target})=>setPhoneInput(target.value)} placeholder='phone' value= {phoneInput} type='number'/>
                <button type="submit" className ='button'></button>
            </form>
            <div className='realTime'>
                <span>USER NAME: {nameInput}</span>
                <span>SURNAME: {surNameInput}</span>
                <span>COUNTRY: {countryInput}</span>
                <span>PHONE NUMBER: {phoneInput}</span>
            </div>
        </div>
    );
};

export default Req;
