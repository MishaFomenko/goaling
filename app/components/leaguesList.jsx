'use client'
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


export default function LeaguesList() {

    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('leagues.json')
            .then(response => {
                const data = response.json();
                return data;
            })
            .then(data => {
                leagues.length === 0 && setLeagues(data.response)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [leagues])

    return (
        <>
            <ListGroup>
                {leagues.map((league, ind) =>
                    <ListGroup.Item key={ind}>{league.league.name}</ListGroup.Item>
                )}
            </ListGroup>
        </>
    )
}