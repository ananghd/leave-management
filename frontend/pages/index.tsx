import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Button } from 'react-bootstrap';
import EmployeeList from '../components/EmployeeList';

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Employee Leave Management</title>
        <meta name="description" content="Manage employee leave data efficiently." />
      </Head>
      <Row className="mt-4">
        <Col>
          <h1>Welcome to Employee Leave Management</h1>
          <p>Manage employee leave data with ease.</p>
          <Button variant="primary" href="/admin/login">Admin Login</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Employee List</h2>
          <EmployeeList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;