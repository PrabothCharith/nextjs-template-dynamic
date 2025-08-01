import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const exampleData = [
    { name: 'Alice', email: 'alice@prisma.io' },
    { name: 'Bob', email: 'bob@prisma.io' },
];

export async function main() {
    for (const example of exampleData) {
        await prisma.example.create({ data: example });
    }
}

main();