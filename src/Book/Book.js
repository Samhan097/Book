import React from "react";

// default export
// const Book = ({ img, title, author, children }) => {
const Book = (props) => {
  const { img, title, author } = props;
  // const { img, title, author } = props.book;
  // TO SET UP EVENT WE NEED attribute, eventHandler
  // onClick,onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h2
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h2>
      <h3>{author}</h3>
      <button onClick={clickHandler}>reference</button>
      <button
        onClick={() => {
          complexExample(author);
        }}
      >
        copmlex
      </button>
      {/* {children} */}
    </article>
  );
};

export default Book;

// import React from "react";

// const Book = () => {
//   return (
//     <article>
//       <Image></Image>
//       <Title></Title>
//       <Author></Author>
//     </article>
//   );
// };

// const Image = () => (
//   <img src="/images/613KCs7szvL._AC_UL604_SR604,400_.jpg" alt="" />
// );
// const Title = () => <h1>Ugly Love</h1>;
// const Author = () => <h3>Colleen hoover</h3>;
// export default Book;
