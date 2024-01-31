import React from 'react';
import { Linking, Text, TouchableOpacity } from 'react-native';

interface Props {
    url: string;
    children: React.ReactNode;
    title?: string
}

function UseTouchable({ url, children, title }: Props) {
    const handlePress = () => {
        Linking.openURL(url).catch((err) => console.error('Error opening external link: ', err));
    };

    return (
        <TouchableOpacity onPress={handlePress} style={{ margin: 12}}>
            {children}
            <Text style={{ fontSize: 15, textAlign: 'center', marginBottom: 5 }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default UseTouchable;