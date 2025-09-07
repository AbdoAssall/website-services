import PropTypes from 'prop-types';
import {
    Html,
    Body,
    Head,
    Heading,
    Container,
    Text,
    Section,
    Hr,
    Preview,
} from '@react-email/components';

export default function ContactFormEmail({ name = '', email = '', address = '', message = '' }) {
    return (
        <Html>
            <Head />
            <Preview>New Message from ScopeHub Contact Form</Preview>
            <Body style={{ backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' }}>
                <Container style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #dfe3e8',
                    borderRadius: '8px',
                    margin: '40px auto',
                    padding: '20px',
                    maxWidth: '580px',
                }}>
                    <Heading style={{ color: '#333', fontSize: '24px', textAlign: 'center' }}>
                        New Message from ScopeHub
                    </Heading>
                    <Text style={{ color: '#555', fontSize: '16px' }}>
                        You have received a new message from your {"website's"} contact form.
                    </Text>
                    <Hr style={{ borderColor: '#dfe3e8', margin: '20px 0' }} />
                    <Section>
                        <Text style={{ color: '#333', fontSize: '16px', fontWeight: 'bold' }}>{"Sender's"} Name:</Text>
                        <Text style={{ color: '#555', fontSize: '16px', paddingLeft: '10px' }}>{name}</Text>

                        <Text style={{ color: '#333', fontSize: '16px', fontWeight: 'bold', marginTop: '16px' }}>Email Address:</Text>
                        <Text style={{ color: '#555', fontSize: '16px', paddingLeft: '10px' }}>{email}</Text>

                        <Text style={{ color: '#333', fontSize: '16px', fontWeight: 'bold', marginTop: '16px' }}>Subject:</Text>
                        <Text style={{ color: '#555', fontSize: '16px', paddingLeft: '10px' }}>{address}</Text>

                        <Text style={{ color: '#333', fontSize: '16px', fontWeight: 'bold', marginTop: '16px' }}>Message:</Text>
                        <Container style={{ border: '1px solid #eee', padding: '10px', borderRadius: '5px' }}>
                            <Text style={{ color: '#555', fontSize: '16px', margin: 0 }}>{message}</Text>
                        </Container>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

ContactFormEmail.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string,
    message: PropTypes.string.isRequired,
};