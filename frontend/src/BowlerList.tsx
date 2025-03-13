import { useEffect, useState } from "react";
import type { bowlers } from "./types/bowlers";

function BowlerList() {
    const [bowlers1, setBowlers] = useState<bowlers[]>([]);

    useEffect(() => {
        const fetchBowlers = async () => {
            try {
                const response = await fetch('https://localhost:5050/api/Bowler');
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                // Filter bowlers to only include those from Marlins or Sharks teams
                const filteredBowlers = data.$values.filter(
                    (bowler: bowlers) => bowler.teamName === "Marlins" || bowler.teamName === "Sharks"
                );
                setBowlers(filteredBowlers);
            } catch (error) {
                console.error("Error fetching bowlers:", error);
            }
        };

        fetchBowlers();
    }, []); // Runs only once when the component mounts

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zipcode</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {bowlers1.map((b) => (
                        <tr key={b.bowlerID}>
                            <td>{b.teamName || "No Team"}</td>
                            <td>{b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}</td>
                            <td>{b.bowlerAddress}</td>
                            <td>{b.bowlerCity}</td>
                            <td>{b.bowlerState}</td>
                            <td>{b.bowlerZip}</td>
                            <td>{b.bowlerPhoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default BowlerList;