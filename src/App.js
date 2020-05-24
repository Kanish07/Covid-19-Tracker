import React, { useState, useEffect, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Form from 'react-bootstrap/Form';
import Columns from 'react-columns';
import Spinner from 'react-bootstrap/Spinner';
import ReactGA from 'react-ga';
import NumberFormat from 'react-number-format';

import Axios from 'axios';
import { CardBody, CardTitle, CardText, Button } from 'reactstrap';

function App() {
    const [details, setDetails] = useState([]);
    const [country, setCountry] = useState([]);
    const [search, setSeacch] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchapi = async () => {
        try {
            const data = await Axios.all([
                Axios.get('https://corona.lmao.ninja/v2/all'),
                Axios.get('https://corona.lmao.ninja/v2/countries'),
            ]).then((res) => {
                setDetails(res[0].data);
                setCountry(res[1].data);
            });
            setLoading(true);
        } catch (err) {
            console.log('We have a problem fetching the api', err);
        }
    };

    useEffect(() => {
        ReactGA.initialize('UA-167494753-1');
        ReactGA.pageview('/');

        fetchapi();
    }, []);

    const date = new Date(parseInt(details.updated));
    const d = date.toString();

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

    const handleChange = (e) => {
        e.preventDefault();
        const a = e.target.value;
        function capitalizeFirstLetter(a) {
            setSeacch(a.charAt(0).toUpperCase() + a.slice(1));
        }
        capitalizeFirstLetter(a);
    };

    const HandleSearch = () => {
        ReactGA.event({
            category: 'Search Bar',
            action: 'Clicked on search bar',
            label: 'HOME_PAGE',
        });
    };

    const filterCountry = country.filter((item) => {
        return search !== '' ? item.country.includes(search) : item;
    });
    const countries = filterCountry.map((data) => {
        return (
            <div className="container" key={uuidv4()}>
                <Card
                    bg="dark"
                    text="white"
                    className="text-center container"
                    border="secondary"
                >
                    <CardBody>
                        <Card.Img variant="top" src={data.countryInfo.flag} />
                        <CardTitle>
                            <h1 className="display-5">{data.country}</h1>
                        </CardTitle>
                        <CardText className="h4">
                            Total Cases :{' '}
                            <NumberFormat
                                value={data.cases}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </CardText>
                        <CardText className="h4">
                            Total Recovered :{' '}
                            <NumberFormat
                                value={data.recovered}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </CardText>
                        <CardText className="h4">
                            Total Deceased :{' '}
                            <NumberFormat
                                value={data.deaths}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </CardText>
                        <CardText className="h4">
                            Active Cases :{' '}
                            <NumberFormat
                                value={data.active}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </CardText>
                        <CardText className="h4">
                            Today's Cases :{' '}
                            <NumberFormat
                                value={data.todayCases}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </CardText>
                        <CardText className="h4">
                            Today's Death :{' '}
                            <NumberFormat
                                value={data.todayDeaths}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </CardText>
                        <CardText className="h4">
                            Critical :{' '}
                            <NumberFormat
                                value={data.critical}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </CardText>
                    </CardBody>
                </Card>
                <br></br>
            </div>
        );
    });
    return (
        <div>
            <div className="container text-white">
                <h1 className="text-center">Total Case Details</h1>
                <br />
                <CardDeck>
                    <Card
                        bg="danger"
                        className="text-white text-center"
                        style={{ margin: '10px' }}
                    >
                        <Card.Body>
                            <Card.Title>
                                <h2>Total Confirmed</h2>
                            </Card.Title>
                            <Card.Text className="h3">
                                {loading ? (
                                    <Fragment>
                                        <NumberFormat
                                            value={details.cases}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        />
                                        <br />
                                        [+
                                        <NumberFormat
                                            value={details.todayCases}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        />
                                        ]
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <Spinner
                                            animation="grow"
                                            style={{ textAlign: 'center' }}
                                            className="text-white"
                                        />
                                    </Fragment>
                                )}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            Last updated :{' '}
                            {loading ? (
                                <Fragment>{d}</Fragment>
                            ) : (
                                <Spinner
                                    animation="grow"
                                    style={{ textAlign: 'center' }}
                                    className="spinner-grow-sm text-white"
                                />
                            )}
                        </Card.Footer>
                    </Card>
                    <Card
                        bg="success"
                        className="text-white text-center"
                        style={{ margin: '10px' }}
                    >
                        <Card.Body>
                            <Card.Title>
                                <h2>Total Recovered</h2>
                            </Card.Title>
                            <Card.Text className="h3">
                                {loading ? (
                                    <Fragment>
                                        <NumberFormat
                                            value={details.recovered}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        />
                                    </Fragment>
                                ) : (
                                    <Spinner
                                        animation="grow"
                                        style={{ textAlign: 'center' }}
                                        className="text-white"
                                    />
                                )}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="h7">
                            Last updated :{' '}
                            {loading ? (
                                <Fragment>{d}</Fragment>
                            ) : (
                                <Spinner
                                    animation="grow"
                                    style={{ textAlign: 'center' }}
                                    className="spinner-grow-sm text-white"
                                />
                            )}
                        </Card.Footer>
                    </Card>
                    <Card
                        bg="secondary"
                        className="text-white text-center"
                        style={{ margin: '10px' }}
                    >
                        <Card.Body>
                            <Card.Title>
                                <h2>Total Deceased</h2>
                            </Card.Title>
                            <Card.Text className="h3">
                                {loading ? (
                                    <Fragment>
                                        <NumberFormat
                                            value={details.deaths}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        />
                                        <br />
                                        [+
                                        <NumberFormat
                                            value={details.todayDeaths}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        />
                                        ]
                                    </Fragment>
                                ) : (
                                    <Spinner
                                        animation="grow"
                                        style={{ textAlign: 'center' }}
                                        className="text-white"
                                    />
                                )}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            Last updated :{' '}
                            {loading ? (
                                <Fragment>{d}</Fragment>
                            ) : (
                                <Spinner
                                    animation="grow"
                                    style={{ textAlign: 'center' }}
                                    className="spinner-grow-sm text-white"
                                />
                            )}
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <br />
                <p className="container h2">
                    Country Wise Case Details : <br />
                </p>
                <Form
                    className="container"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Form.Group>
                        <Form.Control
                            className="bg-light text-dark"
                            type="text"
                            placeholder="Search for a country..."
                            onChange={handleChange}
                            onClick={HandleSearch}
                        />
                    </Form.Group>
                    <span style={{ fontSize: '18px', color: '#535C68' }}>
                        *(Use USA, UAE, UK, DRC and Korea instead of full name
                        of these countries)
                    </span>
                </Form>
            </div>
            <br />
            <div className="text-center">
                {loading ? (
                    <Columns queries={queries}>{countries}</Columns>
                ) : (
                    <Spinner
                        animation="grow"
                        style={{ textAlign: 'center' }}
                        className="text-white"
                    />
                )}
            </div>
            <br />
        </div>
    );
}

export default App;
