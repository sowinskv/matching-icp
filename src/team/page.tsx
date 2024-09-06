import { useState } from "react";
import { Header } from "../header/Header";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient

const TeamPage = () => {

    interface Team {
        member1: string;
        member2: string;
        member3: string;
        member4: string;
        member5: string;
    }

    const [team, setTeam] = useState<Team>({member1: '', member2: '', member3: '', member4: '', member5: ''});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        setTeam(prevTeam => ({
            ...prevTeam,
            [name as keyof Team]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Check if any member is already in another team
        // const existingMembers = await prisma.member.findMany({
        //     where: {
        //         OR: [
        //             { name: team.member1 },
        //             { name: team.member2 },
        //             { name: team.member3 },
        //             { name: team.member4 },
        //             { name: team.member5 },
        //         ],
        //         // AND: {
        //         //     teamId: { not: currentTeamId } // Exclude current team if editing
        //         // }
        //     },
        //     include: {
        //         team: true // Include related team info
        //     }
        // });
    
        // if (existingMembers.length > 0) {
        //     // Handle error - members are already in teams
        //     console.error('Some members are already in a team:', existingMembers);
        //     return;
        // }
    
        // Proceed with saving the new team
        // ...
    };

    return (
        <>
            <Header />
            <div className="container mx-auto p-4 h-screen bg-gray-800 flex flex-col items-center justify-center text-white">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        {Object.keys(team).map((member, index) => (
                            <input
                                key={index}
                                type="text"
                                name={member}
                                value={team[member as keyof Team ]}
                                onChange={handleInputChange}
                                placeholder={`Mate ${index + 1} Telegram handle`}
                                className="p-2 border border-gray-300 rounded"
                            />
                        ))}
                    </div>
                    <button type="submit" className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700">
                        Save Team
                    </button>
                </form>
            </div>
        </>
    );
};

export default TeamPage;
