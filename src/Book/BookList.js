import React from "react";
// default export
import Book from "./Book";
// named export
import { data } from "./books";

const newBooks = data.map((book) => {
  // return <Book key={book.id} book={book}></Book>;

  // spread operater {...book}
  return <Book key={book.id} {...book}></Book>;
  // const { img, title, author } = book;
  // return (
  //   <div>
  //     {/* <img>{img}</img> */}
  //     <h2>{title}</h2>
  //     <h3>{book.author}</h3>
  //   </div>
  // );
});

// const names = ["jhon", "peter", "alison"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

function BookList() {
  return (
    <section className="booklist">
      {/* {newNames} */}
      {newBooks}
      {/* {books.map((book)=>{
        return <Book book={book}></Book>
      })} */}
    </section>
  );
}

export default BookList;

// until 2:36:13 simple list
// import React from "react";
// import Book from "./Book";

// const firstBook = {
//   img: "/images/613KCs7szvL._AC_UL604_SR604,400_.jpg",
//   title: "Ugly Love",
//   author: "Colleen hoover",
// };
// const secondBook = {
//   img: "/images/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
//   title: "I Love you to the moon ",
//   author: "Amelia Hepworth",
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         <p>
//           Pariatur laborum irure dolore id ullamco in voluptate sint ipsum
//           consequat elit. Cupidatat dolor sit cillum aliqua commodo ut. Sunt
//           reprehenderit anim deserunt irure .
//         </p>
//       </Book>
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       />
//     </section>
//   );
// }

// export default BookList;
