import React from 'react';
import CardComp from '../../../components/CardComp'
import './style.css'


const Featured = (props) => {
    const firstName = (props.name.split(' ').slice(0, -1).join(' '))

    let cardBackground;
    console.log(props.index % 2)

    function cardBackgroundRender() {
        if (props.index % 2 === 0) {
            return "grey-background"
        } return "green-background"
    }

    return (
        <div style={{padding:"10px 0", borderBottom: "1.5px solid #2E343C", borderRadius:"3px"}}>
            <CardComp name={props.name} firstName={firstName} className={cardBackgroundRender(props.index)} link="https://kelseysanderson.com" image={props.img_src} description={props.description} body={props.body} link={props.link} />
        </div>
    )

}

export default Featured