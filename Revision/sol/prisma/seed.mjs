import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();


async function seed() {

    await prisma.vehicle.deleteMany();

    //const num = Math.floor(Math.random()*21); // 0 -> 20
    const num = faker.number.int({ min: 5, max: 20 });

    const vehicles = [];
    for (let i = 0; i < num; i++) {
        vehicles.push({
            plateNumber: i + 100,
            ownerName: faker.person.firstName()
        })
    }

    await prisma.vehicle.createMany({
        data: vehicles
    })


}


try {
    await seed();
    console.log("Seeded successfully")
} catch (e) {
    console.error(e);
    process.exit(1);
} finally {
    await prisma.$disconnect();
}


// model Vehicle {
//     id String @id @default(cuid(2))
//     plateNumber Int
//     ownerName String
//     violations Violation[]
//   }