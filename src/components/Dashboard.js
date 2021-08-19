import { Divider } from "@chakra-ui/layout";
import { useAtom } from "jotai";
import { userEmail } from "./store/atom"

export const Dashboard = () => {
    const [email] = useAtom(userEmail);
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Divider marginBottom="10px"/>
            <p>Welcome, <span className="email">{email}</span></p>
        </div>
    )
}