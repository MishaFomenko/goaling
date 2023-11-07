'use client'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LeaguesList from './leaguesList';
import TeamsList from './teamsList';

function HomeTabs() {

    return (
        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="teams" title="Teams">
                <TeamsList />
            </Tab>
            <Tab eventKey="leagues" title="Leagues">
                <LeaguesList />
            </Tab>
        </Tabs>
    );
}

export default HomeTabs;