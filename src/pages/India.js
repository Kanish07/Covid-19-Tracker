import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Axios from 'axios';
import { CardBody, CardText, CardLink } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import Columns from 'react-columns';
import Spinner from 'react-bootstrap/Spinner';
import ReactGA from 'react-ga';

export default function India() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    const getdata = async () => {
        try {
            const data = await Axios.all([
                Axios.get('https://cryptic-ravine-96718.herokuapp.com/'),
            ]).then((res) => {
                setData(res[0].data.news);
            });
            setLoader(true);
        } catch (err) {
            console.log('We have a problem fetching the api', err);
        }
    };

    useEffect(() => {
        ReactGA.initialize('UA-167494753-1');
        ReactGA.pageview('/news');
        getdata();
    }, []);

    var queries = [
        {
            columns: 2,
            query: 'min-width: 500px',
        },
        {
            columns: 3,
            query: 'min-width: 1000px',
        },
    ];

    const info = data.map((item) => {
        return (
            <div className="container">
                {
                    <Card
                        text="white"
                        className="container"
                        border="secondary"
                        style={{ background: 'white' }}
                    >
                        <CardBody>
                            <Card.Img variant="top" src={item.img} />
                            <br />
                            <br />
                            <CardText>
                                <h1 className="h3 text-dark">{item.title}</h1>
                            </CardText>
                            <br />
                            <CardLink
                                className="btn btn-block btn-secondary"
                                href={item.link}
                            >
                                Read more
                            </CardLink>
                        </CardBody>
                    </Card>
                }
                <br />
            </div>
        );
    });

    return (
        <div
            className="text-dark text-center"
            style={{ background: '#89D0E5' }}
        >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>NEWS</h1>
            <br />
            {loader ? (
                <Columns queries={queries}>{info}</Columns>
            ) : (
                <Spinner
                    animation="grow"
                    style={{ textAlign: 'center' }}
                    className=""
                />
            )}
            <br />
            <br />
        </div>
    );
}
