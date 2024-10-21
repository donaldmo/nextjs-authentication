import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                name: { label: "Name", type: "text" },
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log("Credentials: ", credentials)
                const user = { id: 42, name: "Donald Motswiri", email: "domotswiri@gmail.com", password: "donald120" }
                if (user && user.password === credentials.password) {
                    return user;
                } else {
                    return null;
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.sub;
                session.user.email = token.email;
                session.user.name = token.name;
            }
            return session;
        },
    },
}

