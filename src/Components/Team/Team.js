import React from 'react';
import './Team.css';
import CardItem from './TeamCardItems';

function Team(){
    return(
        <div className='cards'>
            <h1>TEAM  HOLOCAUST</h1>
            <div className='cardBox'>
                <div className='cardWrapper'>
                    <ul className='cardsItems1'>
                    <CardItem
                        src='images/member1.png'
                        text='Shazan Fazal'
                     />
                     <CardItem
                        src='images/member2.png'
                        text='Shenali Jayakody'
                     />
                     <CardItem
                        src='images/member3.png'
                        text='Thomy De Croos'
                     />
                     <CardItem
                        src='images/member4.png'
                        text='Isurangi Thilakshana'
                     />
                     </ul>
                     <ul className='cardsItems2'>
                     <CardItem
                        src='images/member5.png'
                        text='Sachini Sulakshana'
                     />
                     <CardItem
                        src='images/member6.png'
                        text='Yenuli Boyagoda'
                     />
                     </ul>                        
                </div>
            </div>
        </div>

    );
}

export default Team;
