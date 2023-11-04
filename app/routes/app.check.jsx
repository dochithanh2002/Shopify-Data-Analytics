import React from 'react';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';
import {useNavigate} from '@remix-run/react';

function CheckIndex() {
    const navigate = useNavigate();
    const redirectYo = () => navigate('/lmao/full');
    return (
        <AppProvider>
            <Page>
                <Card title="Welcome to my app">
                    <p>This is a blank page for now.</p>
                    <Button onClick={redirectYo} target='_blank'>Click me!</Button>
                </Card>
            </Page>
        </AppProvider>
    );
}

export default CheckIndex;
