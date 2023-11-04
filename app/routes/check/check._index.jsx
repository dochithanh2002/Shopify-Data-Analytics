import React from 'react';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';

function CheckIndex() {
    return (
        <AppProvider>
            <Page>
                <Card title="Welcome to my app">
                    <p>This is a blank page for now.</p>
                    <Button primary>Click me!</Button>
                </Card>
            </Page>
        </AppProvider>
    );
}

export default CheckIndex;
