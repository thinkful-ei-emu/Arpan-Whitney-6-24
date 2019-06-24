import React from 'react';
import Card from './Card';
import STORE from './store';

function List(props){

    // const cards = [

    //     {
    //     title,
    //     content,
    //     },

    // ];

    const cardList = STORE.lists.map(card => <Card key={card.id} title={card.title} content = {card.content} />) 

    return (
        <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div class="List-cards">
            {cardList}
        </div>
        </section>
    )
}


export default List;