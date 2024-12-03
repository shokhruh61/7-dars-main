// import React, { useState } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [bookName, setBookName] = useState("");
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   function handleSearch(event) {
//     event.preventDefault();
//     if (bookName) {
//       setLoading(true);
//       axios
//         .get(
//           `https://www.googleapis.com/books/v1/volumes?q=${bookName}&startIndex=0&maxResults=10`
//         )
//         .then((response) => {
//           setBooks(response.data.items);
//           setStartIndex(10);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.log(error);
//           setLoading(false);
//         });
//     }
//     setBookName("");
//   }

//   return (
//     <div className="container">
//       <div className="App">
//         <h1>Google Books API bilan kitob qidirish</h1>
//         <form onSubmit={handleSearch}>
//           <input
//             className="bookname"
//             type="text"
//             placeholder="kitob nomi"
//             value={bookName}
//             onChange={(e) => setBookName(e.target.value)}
//           />
//           <button type="submit">Qidirish</button>
//         </form>

//         <div className="books">
//           {loading ? (
//             <p>...</p>
//           ) : (
//             books.map((book, index) => (
//               <div className="book" key={index}>
//                 <img
//                   src={book.volumeInfo.imageLinks?.thumbnail}
//                   alt={book.volumeInfo.title}
//                   width={100}
//                 />
//                 <h3>{book.volumeInfo.title}</h3>
//                 <p>
//                   {book.volumeInfo.authors
//                     ? book.volumeInfo.authors.join(", ")
//                     : ""}
//                 </p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const apiKey = "4ef708cb9a-addec23969-snuxtd";
  const [rate, setRate] = useState(null);
  const [sum, setSum] = useState("");
  const [res, setRes] = useState(0);
  function validate() {
    if (sum.length <= 0) {
      alert("summa kiriting");
      return false;
    }
    return true;
  }

  useEffect(() => {
    axios
      .get(
        `https://api.fastforex.io/fetch-one?from=USD&to=EUR&api_key=${apiKey}`
      )
      .then((response) => {
        if (response.status === 200) {
          setRate(response.data.result.EUR);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    const isvalid = validate();
    if (!isvalid) {
      return;
    }
    if (rate && sum) {
      setRes(sum * rate);
    }
    setSum("");
  }

  return (
    <div>
      <div className="container">
        <div className="cards">
          <h2>Valyutalar kursi</h2>
          <form>
            <input
              type="number"
              onChange={(e) => setSum(e.target.value)}
              value={sum}
              placeholder="Summa kiriting"
            />
            <button onClick={handleSearch}> Qidirish</button>
          </form>
          <h3>jami summa: {res ? res.toFixed(2) : ""}(EUR)</h3>
        </div>
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [user, setUser] = useState("");
//   const [info, setInfo] = useState([]);
//   const [topRepo, setTopRepo] = useState(null);

//   function handleSearch(event) {
//     event.preventDefault();
//     if (user) {
//       axios
//         .get(`https://api.github.com/users/${user}/repos`)
//         .then((response) => {
//           if (response.status === 200) {
//             const sortedRepos = response.data.sort(
//               (a, b) => b.stargazers_count - a.stargazers_count
//             );
//             setInfo(sortedRepos);
//             setTopRepo(sortedRepos[0]);
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//     setUser("");
//   }

//   return (
//     <div>
//       <div className="container">
//         <div className="cards">
//           <h2>Repzitorlar</h2>
//           <form>
//             <input
//               type="text"
//               onChange={(e) => setUser(e.target.value)}
//               value={user}
//               placeholder="username"
//             />
//             <button onClick={handleSearch}> Qidirish</button>
//           </form>
//           <div className="info">
//             {info.length > 0 && (
//               <>
//                 <h3>Eng ko'p yulduz olgan repozitoriya:</h3>
//                 <ul>
//                   <li>
//                     <strong>{topRepo.name}</strong>
//                     <p>{topRepo.stargazers_count} yulduz</p>
//                   </li>
//                 </ul>
//                 <h4>Qolgan repozitoriyalar:</h4>
//                 {info.map((value, index) => {
//                   return (
//                     <ul key={index}>
//                       <li>
//                         {value.name} - {value.stargazers_count} yulduz
//                       </li>
//                     </ul>
//                   );
//                 })}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
