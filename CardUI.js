// import React, { useState } from 'react';
// import LoginPagePath from './LoginPagePath/src/pages/LoginPagePath.js';

// function CardUI()
// {
//     const [message,setMessage] = useState('');
//     const [searchResults,setResults] = useState('');
//     const [cardList,setCardList] = useState('');
//     let _ud = localStorage.getItem('user_data');
//     let ud = JSON.parse(_ud);
//     let userId = ud.id;
//     let firstName = ud.firstName;
//     let lastName = ud.lastName;
//     var card = '';
//     var search = '';

//     // PAM: I already made this from another file, so I'm just going to import it
//     // If you move this file someone else, it might change the import path, you'll have to change it
//     const app_name = 'thefridgelist'
//     function buildPath(route)
//     {
//         if (process.env.NODE_ENV === 'production') 
//         {
//             return 'https://' + app_name +  '.herokuapp.com/' + route;
//         }
//         else
//         {        
//             return 'http://localhost:5000/' + route;
//         }
//     }
	
//     const addCard = async event => 
//     {
// 	    event.preventDefault();

//         let obj = {userId:userId,card:card.value};
//         let js = JSON.stringify(obj);

//         try
//         {
//             const response = await fetch('api.?'),
//             {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

//             let txt = await response.text();
//             let res = JSON.parse(txt);

//             if (res.error.length > 0)
//             {
//                 setMessage( "API Error:" + res.error );
//             }
//             else
//             {
//                 setMessage('Card has been added');
//             }
//         }
//         catch(e)
//         {
//             setMessage(e.toString());
//         }

// 	};

//     const searchCard = async event => 
//     {
//         event.preventDefault();
        		
//         let obj = {userId:userId,search:search.value};
//         let js = JSON.stringify(obj);

//         try
//         {
//             response = await fetch('api.?'),
//             {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

//             let txt = await response.text();
//             let res = JSON.parse(txt);
//             let _results = res.results;
//             let resultText = '';
//             for (var i = 0; i < _results.length; i++ )
//             {
//                 resultText += _results[i];
//                 if (i < _results.length - 1)
//                 {
//                     resultText += ', ';
//                 }
//             }
//             setResults('Card(s) have been retrieved');
//             setCardList(resultText);
//         }
//         catch(e)
//         {
//             alert(e.toString());
//             setResults(e.toString());
//         }
//     };

//     return(
//         <div id = "cardUIDiv">
//         <br/>
//         <input type = "text" id = "searchText" placeholder = "SEARCH TASK" 
//             ref = {(c) => search = c}/> 
//         <button type = "button" id = "searchCardButton" class = "buttons" 
//             onClick = {searchCard}> Search Card</button><br/>
//         <span id = "cardSearchResult">{searchResults}</span>
//         <p id = "cardList">{cardList}</p><br/><br/>
//         <input type = "text" id = "cardText" placeholder = "ADD NEW TASK" 
//             ref = {(c) => card = c}/>
//         <button type = "button" id = "addCardButton" class = "buttons" 
//             onClick = {addCard}> Add Card </button><br/>
//         <span id = "cardAddResult">{message}</span>
//         </div>
//     );
// }

// export default CardUI;