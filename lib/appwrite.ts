import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';

export const config = {
    platform: 'com.example.realestateapp',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

console.log("Appwrite Endpoint: ", config.endpoint)
console.log("Appwrite Project ID: ", config.projectId)

export const client = new Client();

client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!)

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
    try {
        const redirectUri = Linking.createURL('/')

        const response = await account.createOAuth2Token(
            OAuthProvider.Google,
            redirectUri
        );

        if (!response) throw new Error('Failed to create OAuth2 token 1');

        const browserResult = await openAuthSessionAsync(
            response.toString(),
            redirectUri
        )

        console.log(browserResult)

        if (browserResult.type !== "success") {
            throw new Error('Failed to create OAuth2 token 2');
        }
        console.log(browserResult.url)
        const url = new URL(browserResult.url)

        const secret = url.searchParams.get('secret')?.toString()
        const userId = url.searchParams.get('userId')?.toString()

        if (!secret || !userId) throw new Error('Failed to create OAuth2 token 3');

        const session = await account.createSession(userId, secret);

        if (!session) throw new Error('Failed to create a session');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function logout() {
    try {
        const result = await account.deleteSession('current');
        return result;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function getCurrentUser() {
    try {
        const response = await account.get();

        if (!response) throw new Error('Failed to get user');

        if (response.$id) {
            const userAvatar = avatar.getInitials(response.name)
            return {
                ...response,
                avatar: userAvatar.toString()
            }
        }
        return null;

    } catch (error) {
        console.error(error);
        return null;
    }
}