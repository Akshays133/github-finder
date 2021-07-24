import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/AlertContext';


const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [ text, setText ] = useState('');

    
    const onSubmit = e => {
        e.preventDefault();
        if(text === '') {
            alertContext.setAlert('Please enter something', 'light');
        } else {
        // GithubContext. 
        githubContext.searchUsers(text);
        setText('');
        }
    };

    const onChange = e => setText(e.target.value);

    
    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input
                    type='text' 
                    name='text' 
                    placeholder='Search Users....' 
                    onChange= {onChange} 
                    value={text} 
                />
                <input 
                    type='submit' 
                    value='Search' 
                    className='btn btn-dark btn-block'
                />
            </form>
            <div>
            {githubContext.users.length > 0 && (
                    <button 
                    className='btn btn-light btn-block' 
                    onClick={githubContext.clearUsers} 
                >
                    Clear
                </button>
            )}
            </div>
        </div>
    );
}




export default Search
