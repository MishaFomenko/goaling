'use client'
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function TeamsList() {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('teams.json')
            .then(response => {
                const data = response.json();
                return data;
            })
            .then(data => {
                teams.length === 0 && setTeams(data.response);
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [teams])

    return (
        <>
            <ListGroup>
                {teams.map((team, ind) =>
                    <ListGroup.Item key={ind}>{team.team.name}</ListGroup.Item>
                )}
            </ListGroup>
        </>
    )
}