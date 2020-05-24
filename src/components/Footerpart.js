import React from 'react';
import { Card } from 'react-bootstrap';

export default function Footerpart() {
    return (
        <div>
            <Card
                id="footer"
                className="text-center text-white"
                style={{ background: '#1E1E30' }}
            >
                <Card.Header className="h1">Stay Safe!</Card.Header>
                <Card.Body>
                    <Card.Title>Follow WHO Guidelines</Card.Title>
                    <Card.Text>
                        Use face masks, Follow Social Distancing, For more
                        details checkout{' '}
                        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">
                            WHO
                        </a>
                        <br />
                        API Provider :{' '}
                        <a id="link">https://corona.lmao.ninja/</a>
                    </Card.Text>
                    <a
                        className="btn btn-dark text-white"
                        href="https://www.instagram.com/kanishkar_bubeshkumar_07/"
                    >
                        Follow me on INSTAGRAM
                    </a>
                    <br />
                    <br />
                    <a
                        className="btn btn-dark text-white"
                        href="https://github.com/Kanish07"
                    >
                        My GITHUB Profile
                    </a>
                    <br />
                    <br />
                    <a href="#home" className="text-white">
                        Go back to top
                    </a>
                    <br />
                    <small>
                        <a href="https://www.instagram.com/kanishkar_bubeshkumar_07/">
                            COPYRIGHT © 2020 kanishkar Bubeshkumar
                        </a>
                    </small>
                </Card.Body>
            </Card>
        </div>
    );
}
