"use server"

interface CompanionData {
    name: string;
    subject: string;
    topic: string;
    voice: string;
    style: string;
    duration: number;
}

export async function createCompanion(data: CompanionData) {
    try {
        // TODO: Implement your companion creation logic here
        // For now, returning a mock companion object
        const companion = {
            id: Math.random().toString(36).substr(2, 9),
            ...data,
            createdAt: new Date(),
        };

        return companion;
    } catch (error) {
        console.error("Error creating companion:", error);
        return null;
    }
}
