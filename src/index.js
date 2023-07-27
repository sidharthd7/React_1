import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
    {
        author: 'Kai Bard',
        title: 'American Prometheus: The Triumph and Tragedy of J. Robert OppenheimerAmerican Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer', 
        img: 'https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg',
        id: 1,
    },
    {
        author: 'James Clear',
        title: 'Atomic Habits', 
        img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
        id: 2,
    },
];

// const  names = ['john','peter','susan'];
// const newNames = names.map((name)=> {
//     return <h1>{name}</h1>;
// })                                           // iterating over the list

const BookList = () => {
    return <section className='booklist'>
       {books.map((book)=> {
        const {img, title, author, id} = book;
        return <Book img = {img} title = {title} author = {author} key = {id} />;
       })}
    </section>;
}

const title = 'American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer' //more efficient practice
const img = 'https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg'
const author = 'Kai Bard'

const Book = (props) => {
    const {img, title, author} = props;
    return (<article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>             
        <h4>{author}</h4>
    </article>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)