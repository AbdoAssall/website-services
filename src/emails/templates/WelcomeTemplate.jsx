import PropTypes from 'prop-types';
import { Html, Body, Heading, Text, Container } from '@react-email/components';

export default function WelcomeEmail({ userEmail = "" }) {
    return (
        <Html>
            <Body style={{ backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' }}>
                <Container style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #dfe3e8',
                    borderRadius: '8px',
                    margin: '40px auto',
                    padding: '20px',
                    maxWidth: '580px',
                }}>
                    <Heading>Welcome to ScopeHub! 🎉</Heading>
                    <Text>Hi {userEmail},</Text>
                    <Text>We are so excited to have you on board. Get ready to explore amazing features!</Text>
                </Container>
            </Body>
        </Html>
    );
}

WelcomeEmail.propTypes = {
    userEmail: PropTypes.string,
};